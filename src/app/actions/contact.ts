
"use server";

import { config } from 'dotenv';
config();

import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export async function handleContactForm(
  prevState: { message: string; success: boolean },
  formData: FormData
) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation Error: " + Object.values(validatedFields.error.flatten().fieldErrors).flat().join(", "),
      success: false,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("Email credentials (EMAIL_USER, EMAIL_PASS) are not set as environment variables in .env file.");
    return {
      message: "Server configuration error: Email credentials missing. Please contact support.",
      success: false,
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: "anuragrudra91@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully to anuragrudra91@gmail.com");

    return {
      message: "Thank you for your message! I'll get back to you soon.",
      success: true,
    };
  } catch (error: any) {
    console.error("Error processing contact form. Full error object:", error);
    let clientMessage = "An unexpected error occurred while sending the email. Please try again later.";

    if (error.code === 'EAUTH' || (error.responseCode && (error.responseCode === 535 || error.responseCode === 534))) {
      clientMessage = "Email authentication failed. Please check server configuration and ensure email credentials in the .env file are correct.";
      console.error("Nodemailer authentication error. This usually means EMAIL_USER or EMAIL_PASS in your .env file are incorrect, or the Gmail account settings (like App Passwords or 2-Step Verification) are not properly configured for the sending account.");
    } else if (error.code === 'ECONNECTION') {
      clientMessage = "Could not connect to the email server. Please check your network connection or server configuration.";
      console.error("Nodemailer connection error. Could not connect to Gmail.");
    }
    
    return {
      message: clientMessage,
      success: false,
    };
  }
}
