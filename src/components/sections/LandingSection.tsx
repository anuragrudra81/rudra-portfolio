import { Button } from "@/components/ui/button";
import { CodeXml, Palette, LayoutPanelLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const skills = [
  { name: "Web Development", icon: <CodeXml className="h-8 w-8 text-primary" />, description: "Building responsive and dynamic websites." },
  { name: "UI/UX Design", icon: <Palette className="h-8 w-8 text-primary" />, description: "Creating intuitive and visually appealing user interfaces." },
  { name: "CMS & Platforms", icon: <LayoutPanelLeft className="h-8 w-8 text-primary" />, description: "Expertise in WordPress, Shopify, and more." },
];

export default function LandingSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background -z-10"></div>
      <div className="container mx-auto px-4 md:px-6 text-center py-20 md:py-32">
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary mb-6 animate-fade-in-down">
          Anurag Rudra
        </h1>
        <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
          Crafting Digital Experiences that Inspire and Engage. I'm a passionate Web Developer & Designer dedicated to building innovative and user-centric solutions.
        </p>
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-400">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="mb-4 p-3 bg-primary/10 rounded-full">{skill.icon}</div>
              <h3 className="text-xl font-headline font-semibold text-primary mb-2">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
        <div className="animate-fade-in-up delay-600">
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

// Add keyframes for animations in globals.css or tailwind.config.js if not already present
// For example:
// @layer utilities {
//   @keyframes fade-in-down { 0% { opacity: 0; transform: translateY(-20px); } 100% { opacity: 1; transform: translateY(0); } }
//   .animate-fade-in-down { animation: fade-in-down 0.5s ease-out forwards; }
//   @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
//   .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
//   @keyframes pulse-slow { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.05); } }
//   .animate-pulse-slow { animation: pulse-slow 8s infinite ease-in-out; }
//   @keyframes pulse-slower { 0%, 100% { opacity: 0.8; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.1); } }
//   .animate-pulse-slower { animation: pulse-slower 10s infinite ease-in-out; }
// }
// For simplicity, these utility classes are assumed to be available or can be added to globals.css.
// If using Tailwind JIT, these would be:
// animation: { 'fade-in-down': 'fade-in-down 0.5s ease-out forwards', ... }
// keyframes: { 'fade-in-down': { '0%': { opacity: '0', transform: 'translateY(-20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } }, ... }

