
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { prioritizePortfolio } from "@/ai/flows/prioritize-portfolio";
import { Loader2, Wand2, ListOrdered } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AiPrioritizerSection() {
  const [projectDescriptions, setProjectDescriptions] = useState("");
  const [prioritizedProjects, setPrioritizedProjects] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!projectDescriptions.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter project descriptions.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setPrioritizedProjects([]);

    try {
      const descriptionsArray = projectDescriptions
        .split('\n')
        .map(desc => desc.trim())
        .filter(desc => desc.length > 0);

      if (descriptionsArray.length === 0) {
        toast({
          title: "No Valid Descriptions",
          description: "Please enter at least one valid project description.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }
      
      const result = await prioritizePortfolio({ projectDescriptions: descriptionsArray });
      setPrioritizedProjects(result.prioritizedProjects);
      toast({
        title: "Success!",
        description: "Projects prioritized successfully.",
      });
    } catch (error) {
      console.error("Error prioritizing portfolio:", error);
      toast({
        title: "Error",
        description: "Failed to prioritize projects. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-tool" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-2xl mx-auto shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
          <CardHeader className="text-center">
            <div className="inline-flex justify-center items-center mb-4">
              <Wand2 className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-3xl md:text-4xl font-headline text-primary">
              AI Portfolio Prioritizer
            </CardTitle>
            <CardDescription className="text-muted-foreground text-lg">
              Let AI help you highlight your most impactful projects. Enter one project description per line.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Textarea
              placeholder="Example Project 1: Developed a full-stack e-commerce platform using React, Node.js, and MongoDB, resulting in a 30% increase in sales for the client.
Example Project 2: Designed and implemented a responsive UI for a healthcare application, improving user satisfaction scores by 25%.
Example Project 3: ..."
              value={projectDescriptions}
              onChange={(e) => setProjectDescriptions(e.target.value)}
              rows={8}
              className="text-sm"
              aria-label="Project Descriptions Input"
            />
            <Button onClick={handleSubmit} disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <ListOrdered className="mr-2 h-4 w-4" />
              )}
              Prioritize Projects
            </Button>
          </CardContent>
          {prioritizedProjects.length > 0 && (
            <CardFooter className="flex-col items-start space-y-4 pt-6 border-t">
              <h3 className="text-xl font-headline font-semibold text-primary">
                Prioritized Suggestions:
              </h3>
              <ul className="list-decimal list-inside space-y-2 text-foreground pl-2">
                {prioritizedProjects.map((project, index) => (
                  <li key={index} className="pb-1 border-b border-dashed border-border last:border-none">
                    {project}
                  </li>
                ))}
              </ul>
            </CardFooter>
          )}
        </Card>
      </div>
    </section>
  );
}
