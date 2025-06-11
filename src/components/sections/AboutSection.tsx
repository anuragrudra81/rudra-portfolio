
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Download, GraduationCap, Award } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { Button } from "@/components/ui/button";

const skillsData = {
  languages: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "PHP", "Python"],
  frameworks: ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap"],
  cmsPlatforms: ["WordPress", "Shopify", "WooCommerce"],
  tools: ["Git", "Figma", "Adobe XD", "VS Code", "Docker"],
  databases: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  design: ["UI/UX Principles", "Responsive Design", "Prototyping", "Wireframing"],
};

const experienceData = [
  {
    title: "Senior Web Developer",
    company: "Tech Solutions Inc.",
    period: "2021 - Present",
    description: "Led development of complex web applications, mentored junior developers, and spearheaded UI/UX improvements resulting in a 20% increase in user engagement."
  },
  {
    title: "Frontend Developer",
    company: "Creative Agency LLC",
    period: "2019 - 2021",
    description: "Developed responsive websites and e-commerce solutions for diverse clients, focusing on performance optimization and cross-browser compatibility."
  }
];

const educationData = [
  {
    degree: "Intermediate",
    institution: "Your College Name",
    period: "20XX - 20YY",
    details: "Science Stream"
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Your School/College Name",
    period: "Completed 20XX",
    details: "Focus on Computer Applications"
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "Your School Name",
    period: "Completed 20XX",
    details: ""
  }
];

const achievementsData = [
  {
    name: "Foundations: Data, Data, Everywhere",
    issuer: "Coursera / Google",
    date: "Issued 20XX",
    credentialLink: "#"
  },
  {
    name: "Crash Course on Python",
    issuer: "Coursera / Google",
    date: "Issued 20XX",
    credentialLink: "#"
  },
  {
    name: "Graphic Design Certification",
    issuer: "Your Certifying Body",
    date: "Issued 20XX",
    credentialLink: "#"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary text-center mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 flex flex-col items-center text-center md:text-left md:items-start">
            <Image
              src="/profile.jpg"
              alt="Anurag Rudra"
              width={200}
              height={200}
              className="rounded-full shadow-lg mb-6 object-cover"
            />
            <h3 className="text-2xl font-headline font-semibold text-primary mb-2">Anurag Rudra</h3>
            <p className="text-muted-foreground mb-4">Web Developer & UI/UX Designer</p>
            <div className="flex items-center text-muted-foreground mb-4">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              <span>Kolkata, India (Remote Worldwide)</span>
            </div>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors group">
              <Link href="/Anurag_Rudra_CV.pdf" download="Anurag_Rudra_CV.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Link>
            </Button>
          </div>

          <div className="md:col-span-2 space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary font-headline">Professional Bio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground">
                <p>
                  Hello! I'm Anurag Rudra, a dedicated and results-oriented web developer and UI/UX designer with a passion for creating elegant, efficient, and user-friendly digital experiences. With several years of experience in the industry, I specialize in translating complex ideas into beautiful and functional web solutions.
                </p>
                <p>
                  My expertise spans across the full development lifecycle, from initial concept and design mockups to robust backend implementation and deployment. I thrive on challenges and am constantly learning new technologies to stay at the forefront of web development. I believe in a collaborative approach, working closely with clients to understand their vision and deliver products that exceed expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary font-headline">Experience Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experienceData.map((exp, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-foreground">{exp.title} <span className="text-base font-normal text-muted-foreground">- {exp.company}</span></h4>
                    <p className="text-sm text-accent font-medium">{exp.period}</p>
                    <p className="text-muted-foreground mt-1">{exp.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-7 w-7 text-primary" />
                  <CardTitle className="text-2xl text-primary font-headline">Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {educationData.map((edu, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-base text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-accent font-medium">{edu.period}</p>
                    {edu.details && <p className="text-muted-foreground mt-1">{edu.details}</p>}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Award className="h-7 w-7 text-primary" />
                  <CardTitle className="text-2xl text-primary font-headline">Achievements & Certifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {achievementsData.map((ach, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-foreground">{ach.name}</h4>
                    <p className="text-base text-muted-foreground">{ach.issuer}</p>
                    <p className="text-sm text-accent font-medium">{ach.date}</p>
                    {ach.credentialLink && ach.credentialLink !== "#" && (
                       <Link href={ach.credentialLink} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
                        View Credential
                       </Link>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary font-headline">Comprehensive Skill Set</CardTitle>
              </CardHeader>
              <CardContent>
                {Object.entries(skillsData).map(([category, skills]) => (
                  <div key={category} className="mb-4">
                    <h4 className="text-lg font-semibold text-foreground capitalize mb-2">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
