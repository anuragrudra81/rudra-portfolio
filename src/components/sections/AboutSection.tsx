
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Download, GraduationCap, Award, ExternalLink } from "lucide-react";
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
    title: "Freelance Web & Software Developer",
    company: "Fiverr, Upwork & IT Consultancies",
    period: "2022 – Present",
    description: "Led the complete development of various digital solutions—including websites, mobile apps, and software—for international clients. Managed clear communication throughout each project, from gathering initial requirements to regular updates, ensuring goals were met across all platforms."
  },
  {
    title: "Project Collaborator & Technical Trainer",
    company: "Worldwide Soft Technology",
    period: "2022 – 2023",
    description: "Actively contributed to international client projects while also leading local development efforts. Improved team skills by creating and conducting effective training sessions for new developers, promoting best practices and a collaborative learning culture."
  }
];

const educationData = [
  {
    degree: "Bachelor of Software Engineering (Artificial Intelligence)",
    institution: "Torrens University, Flinders Street Campus, Melbourne, Australia",
    period: "2025-running",
    details: "Focus on Computer Applications"
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Government City College, Chattogram",
    period: "2022-2024",
    details: "Science"
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "Chittagong Collegiate School",
    period: "2019-2021",
    details: "Science"
  },
  {
    degree: "JSC (Secondary School Certificate)",
    institution: "St. Placid's School & College ",
    period: "2018",
    details: ""
  }

];

const achievementsData = [
    {
    name: "Foundations: Data, Data, Everywhere",
    issuer: "Coursera / Google",
    date: "Issued 2022",
    credentialLink: "https://www.coursera.org/account/accomplishments/verify/KNEERTZ4PX65",
    imageUrl: "/images/Foundations.jpg",
    dataAiHint: "certificate data analytics",
  },
  {
    name: "Crash Course on Python",
    issuer: "Coursera / Google",
    date: "Issued 2022",
    credentialLink: "https://www.coursera.org/account/accomplishments/verify/W8NF4S7NZJZT",
    imageUrl: "/images/Python.jpg",
    dataAiHint: "certificate python programming",
  },
  {
    name: "COVID-19 Training for Healthcare Workers",
    issuer: "Coursera / Stanford",
    date: "Issued 2022",
    credentialLink: "https://www.coursera.org/account/accomplishments/verify/ZDE8F8TDHQGN",
    imageUrl: "/images/Stanford.jpg",
    dataAiHint: "certificate healthcare training",
  },
  {
    name: "Graphic Design",
    issuer: "LinkedIn",
    date: "Issued 2022",
    credentialLink: "https://www.linkedin.com/",
    imageUrl: "/images/Graphic.jpg",
    dataAiHint: "certificate graphic design",
  },
  {
    name: "Advance Office Management",
    issuer: "Worldwide Soft Technology",
    date: "Issued 2022",
    credentialLink: "https://wwsoftt.com/",
    imageUrl: "/images/Office.jpg",
    dataAiHint: "certificate office management",
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
              src="/images/profile.png" 
              alt="Anurag Rudra"
              width={200}
              height={200}
              className="rounded-full shadow-lg mb-6 object-cover"
            />
            <h3 className="text-2xl font-headline font-semibold text-primary mb-2">Anurag Rudra</h3>
            <p className="text-muted-foreground mb-4">Developer & Designer</p>
            <div className="flex items-center text-muted-foreground mb-4">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              <span>Chattogram/Chittagong, Bangladesh (Remote Worldwide)</span>
            </div>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 group hover:scale-105">
              <Link href="/images/Anurag's CV.pdf" download="Anurag_Rudra_CV.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Link>
            </Button>
          </div>

          <div className="md:col-span-2 space-y-8">
            <Card className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
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

            <Card className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
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

            <Card className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
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

            <Card className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Award className="h-7 w-7 text-primary" />
                  <CardTitle className="text-2xl text-primary font-headline">Achievements & Certifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
                  {achievementsData.map((ach, index) => (
                    <Link key={index} href={ach.credentialLink} target="_blank" rel="noopener noreferrer" className="block group transition-all duration-300 hover:scale-[1.02]">
                      <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
                        <div className="aspect-[4/3] relative border-b border-muted group-hover:border-primary overflow-hidden bg-background">
                          <Image
                            src={ach.imageUrl}
                            alt={`Certificate for ${ach.name}`}
                            layout="fill"
                            objectFit="contain"
                            className="p-2 transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={ach.dataAiHint}
                          />
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ExternalLink className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <CardContent className="p-4 flex-grow flex flex-col justify-between">
                          <div>
                            <h4 className="text-md font-semibold text-foreground mb-1 group-hover:text-accent">{ach.name}</h4>
                            <p className="text-xs text-muted-foreground">{ach.issuer}</p>
                            <p className="text-xs text-accent/80 font-medium mb-2">{ach.date}</p>
                          </div>
                          <p className="text-center text-xs text-accent mt-2 group-hover:underline">
                            View Certificate
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
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
