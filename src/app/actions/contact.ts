
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
      message: "Server configuration error: Critical email credentials (EMAIL_USER, EMAIL_PASS) are missing in the .env file. Please contact support or the site administrator.",
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
      secure: true, // Explicitly use SSL - Gmail uses port 465 for SSL
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender address will be your EMAIL_USER
      to: "anuragrudra91@gmail.com", // Recipient address
      replyTo: email, // Reply-To address will be the form submitter's email
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
    let clientMessage = "An unexpected error occurred while sending the email. Please try again later or contact support.";

    // Check for specific Nodemailer/Gmail authentication errors
    if (error.code === 'EAUTH' || (error.responseCode && (error.responseCode === 535 || error.responseCode === 534))) {
      clientMessage = "Email authentication failed. Please double-check that the EMAIL_USER and EMAIL_PASS in your .env file are correct and that the sending Gmail account is properly configured with 2-Step Verification and an App Password. Contact support if the issue persists.";
      console.error("Nodemailer authentication error (EAUTH/535/534). This almost certainly means EMAIL_USER or EMAIL_PASS in your .env file are incorrect, or the Gmail account settings (like 2-Step Verification & App Passwords) are not properly configured for the sending account (" + process.env.EMAIL_USER + ").");
    } else if (error.code === 'ECONNECTION') {
      clientMessage = "Could not connect to the email server. Please check your network connection or server configuration.";
      console.error("Nodemailer connection error (ECONNECTION). Could not connect to Gmail.");
    } else if (error.message && error.message.includes("Missing credentials")) {
        clientMessage = "Server configuration error: Email credentials seem to be missing or incomplete. Please contact support.";
        console.error("Nodemailer reported missing credentials. Ensure EMAIL_USER and EMAIL_PASS are correctly set in .env.");
    }
    
    return {
      message: clientMessage,
      success: false,
    };
  }
}
