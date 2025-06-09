import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  imageUrl: string;
  dataAiHint: string;
  problem: string;
  solution: string;
  techStack: string[];
  liveLink: string;
  githubLink?: string;
}

const portfolioItems: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "online store",
    problem: "Client needed a scalable online store to sell their products nationally.",
    solution: "Developed a full-featured e-commerce platform with secure payments, inventory management, and user accounts.",
    techStack: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB", "Node.js"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: "2",
    title: "Booking System",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "reservation app",
    problem: "A local business required an efficient way for customers to book appointments online.",
    solution: "Created a custom booking system with real-time availability, automated reminders, and an admin dashboard.",
    techStack: ["React", "Firebase", "Material UI", "Node.js"],
    liveLink: "#",
  },
  {
    id: "3",
    title: "Portfolio Website",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "personal website",
    problem: "A photographer needed a visually stunning portfolio to showcase their work.",
    solution: "Designed and built a modern, responsive portfolio website with a focus on high-quality imagery and smooth animations.",
    techStack: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    liveLink: "#",
    githubLink: "#",
  },
   {
    id: "4",
    title: "SaaS Dashboard",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "admin panel",
    problem: "A startup required an intuitive dashboard for users to manage their subscriptions and analyze data.",
    solution: "Developed a clean and data-rich SaaS dashboard with role-based access control and interactive charts.",
    techStack: ["Vue.js", "Chart.js", "Express.js", "PostgreSQL"],
    liveLink: "#",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {portfolioItems.map((project) => (
            <Card key={project.id} className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 flex flex-col overflow-hidden rounded-xl">
              <div className="relative w-full h-64">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={project.dataAiHint}
                />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-primary font-headline">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">Problem:</h4>
                  <CardDescription>{project.problem}</CardDescription>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Solution:</h4>
                  <CardDescription>{project.solution}</CardDescription>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-4 border-t">
                <div className="flex space-x-3">
                  <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                  {project.githubLink && (
                    <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground transition-colors">
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> View Code
                      </Link>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
