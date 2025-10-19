import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Mic, Image as ImageIcon, Video } from "lucide-react";

export const HighlightsSection = () => {
  return (
    <section id="highlights" className="py-12 px-6 bg-gradient-to-br from-[hsl(var(--primary)/0.05)] to-[hsl(var(--accent)/0.05)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="h-8 w-8 text-[hsl(var(--primary))]" />
            <h2 className="text-3xl font-bold text-[hsl(var(--heading-primary))]">
              My GCSP Journey Highlights
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key experiences and leadership roles that shaped my Grand Challenges Scholars journey
          </p>
        </div>

        <div className="space-y-8">
          {/* Student Leader Card */}
          <Card className="border-2 border-[hsl(var(--primary)/0.2)] hover:border-[hsl(var(--primary)/0.4)] transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[hsl(var(--primary)/0.1)]">
                  <Award className="h-6 w-6 text-[hsl(var(--primary))]" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">
                    Student Leader – Grand Challenges Scholars Program
                  </CardTitle>
                  <CardDescription className="text-base">
                    Spring 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground leading-relaxed">
                As a Student Leader for ASU's GCSP chapter, I mentored over 100 multidisciplinary scholars 
                while coordinating events, newsletters, and social media to foster community engagement. 
                Key contributions included:
              </p>
              
              <ul className="space-y-2 ml-4">
                <li className="text-foreground leading-relaxed flex gap-2">
                  <span className="text-[hsl(var(--primary))] mt-1">•</span>
                  <span>Mentoring and supporting scholars in their academic and research pursuits.</span>
                </li>
                <li className="text-foreground leading-relaxed flex gap-2">
                  <span className="text-[hsl(var(--primary))] mt-1">•</span>
                  <span>Organizing signature events such as "Design and Pitch a Research Poster" and "Spill the Story!" 
                  to build skills in research communication and storytelling.</span>
                </li>
                <li className="text-foreground leading-relaxed flex gap-2">
                  <span className="text-[hsl(var(--primary))] mt-1">•</span>
                  <span>Cultivating an inclusive and connected GCSP community through consistent engagement, 
                  outreach, and event leadership.</span>
                </li>
              </ul>

              <p className="text-foreground leading-relaxed">
                This role strengthened my leadership, creativity, and communication skills while allowing me to 
                contribute meaningfully to a community dedicated to addressing global challenges. Most rewarding 
                was the mutual inspiration—guiding others while learning from their passion and ingenuity.
              </p>

              <div className="mt-6 p-6 bg-muted rounded-lg border-2 border-dashed border-muted-foreground/20">
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <ImageIcon className="h-8 w-8" />
                  <p className="font-medium">Insert photos here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* StorySlam Card */}
          <Card className="border-2 border-[hsl(var(--accent)/0.2)] hover:border-[hsl(var(--accent)/0.4)] transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[hsl(var(--accent)/0.1)]">
                  <Mic className="h-6 w-6 text-[hsl(var(--accent))]" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">
                    StorySlam Participant – GCSP
                  </CardTitle>
                  <CardDescription className="text-base">
                    February 1, 2025
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground leading-relaxed">
                I had the privilege of participating in the GCSP StorySlam, a platform for students to share 
                personal stories, experiences, and insights. This event celebrated diverse voices, emphasizing 
                empathy, authenticity, and the power of narrative.
              </p>
              
              <ul className="space-y-2 ml-4">
                <li className="text-foreground leading-relaxed flex gap-2">
                  <span className="text-[hsl(var(--accent))] mt-1">•</span>
                  <span>Shared my own story, connecting personal experiences with broader GCSP themes.</span>
                </li>
                <li className="text-foreground leading-relaxed flex gap-2">
                  <span className="text-[hsl(var(--accent))] mt-1">•</span>
                  <span>Engaged with fellow storytellers to foster understanding and inspire dialogue within 
                  the GCSP community.</span>
                </li>
                <li className="text-foreground leading-relaxed flex gap-2">
                  <span className="text-[hsl(var(--accent))] mt-1">•</span>
                  <span>Highlighted the role of storytelling as a tool for learning, reflection, and 
                  community building.</span>
                </li>
              </ul>

              <p className="text-foreground leading-relaxed">
                This experience reinforced my belief in the joy of learning through sharing and reflection, 
                demonstrating how storytelling can inspire curiosity, empathy, and growth in both the storyteller 
                and the audience.
              </p>

              <div className="mt-6 p-6 bg-muted rounded-lg border-2 border-dashed border-muted-foreground/20">
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <Video className="h-8 w-8" />
                  <p className="font-medium">Insert video link and photos here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
