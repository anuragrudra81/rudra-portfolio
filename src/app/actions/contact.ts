"use server";

import { z } from "zod";

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
      message: "Validation Error: " + validatedFields.error.flatten().fieldErrors_1.map(err => err.message).join(", "),
      success: false,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    // In a real application, you would send an email or save to a database here.
    // For example, using Nodemailer or an email API like SendGrid/Resend.
    console.log("Contact Form Submission Received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Simulate a delay for processing
    await new Promise(resolve => setTimeout(resolve, 1000));

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
