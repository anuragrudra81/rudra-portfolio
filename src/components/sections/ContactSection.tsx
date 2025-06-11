
"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle, Send, Loader2 } from "lucide-react";
import { handleContactForm } from "@/app/actions/contact";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Send Message
    </Button>
  );
}

export default function ContactSection() {
  const [state, formAction] = useActionState(handleContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        const form = document.getElementById("contact-form") as HTMLFormElement;
        if (form) form.reset();

      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary text-center mb-12">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="text-2xl text-primary font-headline">Send me a message</CardTitle>
              <CardDescription>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</CardDescription>
            </CardHeader>
            <CardContent>
              <form id="contact-form" action={formAction} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Full Name</Label>
                  <Input type="text" id="name" name="name" required className="mt-1 bg-background" placeholder="Your Name" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground">Email Address</Label>
                  <Input type="email" id="email" name="email" required className="mt-1 bg-background" placeholder="your.email@example.com" />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input type="text" id="subject" name="subject" required className="mt-1 bg-background" placeholder="Regarding..." />
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea id="message" name="message" rows={5} required className="mt-1 bg-background" placeholder="Your message here..." />
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <CardHeader>
                <CardTitle className="text-2xl text-primary font-headline">Direct Contact</CardTitle>
                <CardDescription>Feel free to reach out directly through these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <a href="mailto:arudra.dev@example.com" className="group flex items-center p-4 bg-card rounded-lg hover:bg-accent/10 transition-colors">
                  <Mail className="h-8 w-8 text-accent mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">Email</h4>
                    <p className="text-muted-foreground">arudra.dev@example.com</p>
                  </div>
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 bg-card rounded-lg hover:bg-accent/10 transition-colors">
                  <MessageCircle className="h-8 w-8 text-accent mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold text-lg text-foreground group-hover:text-accent transition-colors">WhatsApp</h4>
                    <p className="text-muted-foreground">+1 (234) 567-890 (Example)</p>
                  </div>
                </a>
              </CardContent>
            </Card>
             <div className="text-center text-muted-foreground">
                <p>I aim to respond to all inquiries within 24-48 hours.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
