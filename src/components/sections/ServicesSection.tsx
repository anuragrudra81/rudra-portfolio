import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, AppWindow, DraftingCompass, Database, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const servicesData: Service[] = [
  {
    icon: Smartphone,
    title: "Frontend Development",
    description: "Crafting responsive, high-performance, and engaging user interfaces with modern technologies.",
    features: ["React & Next.js expertise", "Pixel-perfect HTML/CSS", "State management (Redux, Zustand)", "API integration"]
  },
  {
    icon: AppWindow,
    title: "WordPress & Shopify",
    description: "Custom theme and plugin development, e-commerce solutions, and performance optimization for CMS platforms.",
    features: ["Custom theme development", "Plugin customization", "Shopify store setup", "WooCommerce integration"]
  },
  {
    icon: DraftingCompass,
    title: "UI/UX Design",
    description: "Designing intuitive, aesthetically pleasing, and user-centric interfaces that enhance user experience.",
    features: ["User research & personas", "Wireframing & prototyping", "Visual design systems", "Usability testing"]
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Efficient database design, implementation, and optimization for scalable and reliable applications.",
    features: ["SQL & NoSQL databases", "Data modeling", "Query optimization", "Backup & recovery strategies"]
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary text-center mb-12">
          Services I Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-foreground">
                      <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
