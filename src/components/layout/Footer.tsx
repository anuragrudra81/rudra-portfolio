import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted py-8 text-center text-muted-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://www.facebook.com/anurag.rudra.568253" target="_blank" rel="noopener noreferrer" aria-label="Facebook profile of Anurag Rudra" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="https://github.com/anuragrudra81" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile of Anurag Rudra" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/anurag-rudra-293544242/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile of Anurag Rudra" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} Anurag Rudra Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
