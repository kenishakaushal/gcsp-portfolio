import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-12 px-6 scroll-mt-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-lg bg-accent">
            <User className="h-6 w-6 text-accent-foreground" />
          </div>
          <h2 className="text-3xl font-bold text-[hsl(var(--heading-primary))]">About Me</h2>
        </div>
        
        <Card className="p-8 mb-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-lg bg-muted flex items-center justify-center">
                <User className="h-24 w-24 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-2">Add your photo here</p>
            </div>
            
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[hsl(var(--heading-primary))]">Introduction</h3>
                <div className="space-y-2 text-foreground">
                  <p><strong>Name:</strong> [Your Name]</p>
                  <p><strong>University:</strong> [Your University]</p>
                  <p><strong>Major:</strong> [Your Major]</p>
                  <p><strong>Grand Challenge Theme:</strong> [Your Theme]</p>
                  <p><strong>Submission Date:</strong> [Semester/Year]</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[hsl(var(--heading-primary))]">About This Portfolio</h3>
                <p className="text-foreground leading-relaxed">
                  [Write a brief introduction to your portfolio and what it contains. Describe the NAE Grand Challenges 
                  Scholars Program and the theme you pursued. Explain how this portfolio demonstrates your journey 
                  through the five competency areas.]
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--heading-primary))]">
            Becoming a Grand Challenges Scholar
          </h3>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              [Provide an overview and reflection on your overall GCSP experience. Discuss how your coursework and 
              experiences helped you achieve GCSP goals in each of the five competency areas.]
            </p>
            <p>
              [Describe the connectivity across your experiences in the five competencies addressing your chosen 
              Grand Challenges theme. Include specific examples and evidence from your portfolio.]
            </p>
            <p>
              [Explain how the experience helped you as an engineer and prepared you for your future career plans. 
              Share your overall opinion of your GCSP experience.]
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
