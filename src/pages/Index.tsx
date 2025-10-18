import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { PortfolioSidebar } from "@/components/PortfolioSidebar";
import { AboutSection } from "@/components/AboutSection";
import { CompetencySection } from "@/components/CompetencySection";
import { Microscope, BookOpen, Lightbulb, Globe, Heart, FileText } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex">
        <PortfolioSidebar />
        
        <main className="flex-1 bg-[hsl(var(--section-bg))]">
          <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="flex items-center gap-4 p-4">
              <SidebarTrigger />
              <h1 className="text-xl font-bold text-[hsl(var(--heading-primary))]">
                Grand Challenges Scholars Program Portfolio
              </h1>
            </div>
          </header>

          <AboutSection />

          <CompetencySection
            id="research"
            title="Research or Creative Project Experience"
            icon={Microscope}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--heading-primary))]">
                  Project Summary
                </h3>
                <p className="text-foreground leading-relaxed">
                  [Summarize your research or creative project. Include: number of semesters, who you worked with, 
                  what you did (overview), and what you learned.]
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--heading-primary))]">
                  Research Report/Poster
                </h3>
                <div className="bg-muted p-6 rounded-lg text-center">
                  <FileText className="h-12 w-12 mx-auto mb-3 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    [Upload your research poster or report here. Include: Introduction and Background, Methodology, 
                    Results, Discussion, Conclusions, Future Recommendations, and References.]
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--heading-primary))]">
                  Connection to Grand Challenge Theme
                </h3>
                <p className="text-foreground leading-relaxed">
                  [Explain how your research or creative project relates to your Grand Challenge Theme.]
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--heading-primary))]">
                  Value & Reflection
                </h3>
                <p className="text-foreground leading-relaxed">
                  [Describe the value of this experience in terms of your other GCSP work, academic and/or 
                  professional career goals.]
                </p>
              </div>
            </div>
          </CompetencySection>

          <CompetencySection
            id="multidisciplinary"
            title="Multidisciplinary Competency"
            icon={BookOpen}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--heading-primary))]">
                  FSE150 Course Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-foreground">Course Description</h4>
                    <p className="text-foreground leading-relaxed">
                      [Describe what you did and learned in FSE150.]
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-foreground">Value & Reflection</h4>
                    <p className="text-foreground leading-relaxed">
                      [Describe the value of this course in terms of your other GCSP work and career.]
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--heading-primary))]">
                  Second Interdisciplinary Course/Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-foreground">Description</h4>
                    <p className="text-foreground leading-relaxed">
                      [Describe what you did and learned in your second interdisciplinary course or experience.]
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-foreground">Connection to Theme</h4>
                    <p className="text-foreground leading-relaxed">
                      [Explain how this relates to your GCSP theme.]
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-foreground">Value & Reflection</h4>
                    <p className="text-foreground leading-relaxed">
                      [Describe the value of this experience.]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CompetencySection>

          <CompetencySection
            id="entrepreneurship"
            title="Entrepreneurship Competency"
            icon={Lightbulb}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--heading-primary))]">
                  FSE301 Course / Entrepreneurship Experience
                </h3>
                <p className="text-foreground leading-relaxed">
                  [Describe your FSE301 course experience OR your entrepreneurship experience. What did you do and 
                  what did you learn?]
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--heading-primary))]">
                  Connection to Grand Challenge Theme
                </h3>
                <p className="text-foreground leading-relaxed">
                  [Explain how this experience relates to your GCSP theme.]
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--heading-primary))]">
                  Value & Reflection
                </h3>
                <p className="text-foreground leading-relaxed">
                  [Describe the value of this experience relative to your GCSP theme and academic/professional career.]
                </p>
              </div>
            </div>
          </CompetencySection>

          <CompetencySection
            id="multicultural"
            title="Multicultural Competency"
            icon={Globe}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--heading-primary))]">
                  First Multicultural Course/Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-foreground">Description</h4>
                    <p className="text-foreground leading-relaxed">
                      [Describe what you did and learned in your first multicultural course or experience.]
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-foreground">Connection to Theme</h4>
                    <p className="text-foreground leading-relaxed">
                      [Explain how this relates to your GCSP theme.]
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-foreground">Value & Reflection</h4>
                    <p className="text-foreground leading-relaxed">
                      [Describe the value of this experience.]
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--heading-primary))]">
                  Second Multicultural Course/Experience
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-foreground">Description</h4>
                    <p className="text-foreground leading-relaxed">
                      [Describe what you did and learned in your second multicultural course or experience.]
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-foreground">Connection to Theme</h4>
                    <p className="text-foreground leading-relaxed">
                      [Explain how this relates to your GCSP theme.]
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-foreground">Value & Reflection</h4>
                    <p className="text-foreground leading-relaxed">
                      [Describe the value of this experience.]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CompetencySection>

          <CompetencySection
            id="service"
            title="Service-Learning (Social Consciousness)"
            icon={Heart}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--heading-primary))]">
                  Service-Learning Work
                </h3>
                <p className="text-foreground leading-relaxed">
                  [Clearly describe the service-learning work you completed. Include details about what you did, 
                  where, and with whom.]
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--heading-primary))]">
                  Connection to Theme & Engineering
                </h3>
                <p className="text-foreground leading-relaxed">
                  [Describe how your service-learning experience relates to your GCSP theme and/or engineering/technology.]
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--heading-primary))]">
                  Value & Reflection
                </h3>
                <p className="text-foreground leading-relaxed">
                  [Describe the value of this work in terms of your other GCSP work, academic and/or professional career.]
                </p>
              </div>
            </div>
          </CompetencySection>

          <CompetencySection
            id="conclusion"
            title="Concluding Remarks"
            icon={FileText}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--heading-primary))]">
                  Overall GCSP Reflection
                </h3>
                <p className="text-foreground leading-relaxed">
                  [Provide a comprehensive reflection on your GCSP journey. Discuss how your coursework and experiences 
                  helped you achieve GCSP goals in each of the five competency areas, citing specific examples and 
                  evidence from your portfolio.]
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--heading-primary))]">
                  Connectivity Across Competencies
                </h3>
                <p className="text-foreground leading-relaxed">
                  [Clearly demonstrate how your experiences connect to each other and to your Grand Challenge theme. 
                  Show the relationships between the five components.]
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--heading-primary))]">
                  Career Impact & Future Plans
                </h3>
                <p className="text-foreground leading-relaxed">
                  [Describe how the GCSP experience helped prepare you as an engineer and for your future career plans. 
                  Provide specific examples.]
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--heading-primary))]">
                  Final Thoughts
                </h3>
                <p className="text-foreground leading-relaxed">
                  [Share your overall opinion of your GCSP experience and any feedback for program improvement.]
                </p>
              </div>
            </div>
          </CompetencySection>

          <footer className="py-8 px-6 text-center text-muted-foreground border-t">
            <p>Grand Challenges Scholars Program Portfolio • {new Date().getFullYear()}</p>
          </footer>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
