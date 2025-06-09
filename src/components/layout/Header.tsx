"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Briefcase, User, Settings, Mail, Brain } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home", icon: <Briefcase className="h-5 w-5" /> },
  { href: "#about", label: "About", icon: <User className="h-5 w-5" /> },
  { href: "#services", label: "Services", icon: <Settings className="h-5 w-5" /> },
  { href: "#portfolio", label: "Portfolio", icon: <Briefcase className="h-5 w-5" /> },
  { href: "#ai-tool", label: "AI Tool", icon: <Brain className="h-5 w-5" /> },
  { href: "#contact", label: "Contact", icon: <Mail className="h-5 w-5" /> },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="text-2xl font-headline font-bold text-primary hover:opacity-80 transition-opacity">
          A. Rudra
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild className="font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-card p-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    asChild
                    className="flex items-center space-x-3 justify-start text-lg font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
