import { Button } from "@/components/ui/button";
import { CodeXml, Palette, LayoutPanelLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const skills = [
  { name: "Web Development", icon: <CodeXml className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />, description: "Building responsive and dynamic websites." },
  { name: "UI/UX Design", icon: <Palette className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />, description: "Creating intuitive and visually appealing user interfaces." },
  { name: "CMS & Platforms", icon: <LayoutPanelLeft className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />, description: "Expertise in WordPress, Shopify, and more." },
];

export default function LandingSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background -z-10"></div>
      <div className="container mx-auto px-4 md:px-6 text-center py-20 md:py-32">
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary mb-6 opacity-0 animate-fade-in-down" style={{animationDelay: '0.2s'}}>
          Anurag Rudra
        </h1>
        <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          Crafting Digital Experiences that Inspire and Engage. I'm a passionate Web Developer & Designer dedicated to building innovative and user-centric solutions.
        </p>
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          {skills.map((skill, index) => (
            <div key={index} className="group flex flex-col items-center p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
              <div className="mb-4 p-3 bg-primary/10 rounded-full">{skill.icon}</div>
              <h3 className="text-xl font-headline font-semibold text-primary mb-2">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
        <div className="opacity-0 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors group">
            <Link href="#portfolio">
              View My Work <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
       {/* Subtle background elements */}
       <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full filter blur-2xl animate-pulse-slow -z-10"></div>
       <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/5 rounded-full filter blur-2xl animate-pulse-slower -z-10"></div>
    </section>
  );
}
