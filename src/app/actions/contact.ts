
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
    console.error("Email credentials (EMAIL_USER, EMAIL_PASS) are not set as environment variables.");
    return {
      message: "Server configuration error. Please contact support.",
      success: false,
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address (sender) from .env
        pass: process.env.EMAIL_PASS, // Your Gmail App Password from .env
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Sender's address will be your EMAIL_USER
      to: "anuragrudra91@gmail.com", // Recipient email address (your desired inbox)
      replyTo: email, // Set the reply-to to the form submitter's email
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully to anuragrudra91@gmail.com");

    return {
      message: "Thank you for your message! I'll get back to you soon.",
      success: true,
    };
  } catch (error) {
    console.error("Error processing contact form:", error);
    return {
      message: "An unexpected error occurred. Please try again later.",
      success: false,
    };
  }
}
