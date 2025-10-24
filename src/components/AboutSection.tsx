import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Award, Mic, Video } from "lucide-react";
import { ClickableImage } from "./ClickableImage";
import myPicture from "@/assets/my_picture.jpg";
import studentLeader from "@/assets/studentleader.jpeg";
import storySlam1 from "@/assets/GCSP_StorySlam.jpeg";
import storySlam2 from "@/assets/GCSP_StorySlam2.jpeg";

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
              <ClickableImage 
                src={myPicture} 
                alt="Kenisha Kaushal - Fulton Ambassador" 
                className="w-48 h-48 rounded-lg object-cover shadow-lg"
              />
            </div>
            
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[hsl(var(--heading-primary))]">Introduction</h3>
                <div className="space-y-2 text-foreground">
                  <p><strong>Name:</strong> Kenisha Kaushal</p>
                  <p><strong>University:</strong> Arizona State University</p>
                  <p><strong>Major:</strong> Computer Science (Software Engineering)</p>
                  <p><strong>Grand Challenge Theme:</strong> Joy of Living</p>
                  <p><strong>Submission Date:</strong> Spring 2027</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[hsl(var(--heading-primary))]">About This Portfolio</h3>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    When I first joined Arizona State University as a Computer Science major, I knew I wanted to do more than just learn how to code — I wanted to understand how technology could make people's lives more meaningful. The Grand Challenges Scholars Program (GCSP) became the space where that question evolved into a lifelong pursuit. The National Academy of Engineering's Grand Challenges call on students to use innovation, collaboration, and empathy to solve the world's most pressing problems. Within that vision, I chose to explore the theme "Joy of Living" — a challenge that asks us to use technology not just for efficiency or power, but for human flourishing.
                  </p>
                  <p>
                    This portfolio captures my four-year journey through the GCSP framework — a process of learning to see engineering as both a technical and human-centered discipline. Across each of the five competencies — Multidisciplinary, Entrepreneurship, Multicultural Awareness, Service Learning, and Talent — I've engaged in experiences that taught me how to design for joy, connection, and ethical impact. Guided by the theme "Joy of Living," my GCSP journey reflects how I've used technology to create meaningful human experiences through innovation and empathy.
                  </p>
                  <p><strong>Competency Highlights:</strong></p>
                  <ul className="space-y-2 ml-4">
                    <li className="text-foreground leading-relaxed flex gap-2">
                      <span className="text-[hsl(var(--primary))] mt-1">•</span>
                      <span><strong>Talent Competency:</strong> Completed Honors Research (HON 492 & 493) under Dr. Mina Johnson, exploring how extended reality (XR) and artificial intelligence (AI) can foster more human-centered design.</span>
                    </li>
                    <li className="text-foreground leading-relaxed flex gap-2">
                      <span className="text-[hsl(var(--primary))] mt-1">•</span>
                      <span><strong>Multidisciplinary Competency:</strong> Fulfilled through FSE 150: Grand Challenges for Engineering and STS 330: Information Technology and Artificial Intelligence, connecting technical problem-solving with ethical and societal impact.</span>
                    </li>
                    <li className="text-foreground leading-relaxed flex gap-2">
                      <span className="text-[hsl(var(--primary))] mt-1">•</span>
                      <span><strong>Entrepreneurship Competency:</strong> Achieved through Venture Devils, where I developed Kavvy, a startup connecting writers with publishers and transforming creative ideas into viable ventures.</span>
                    </li>
                    <li className="text-foreground leading-relaxed flex gap-2">
                      <span className="text-[hsl(var(--primary))] mt-1">•</span>
                      <span><strong>Service Learning Competency:</strong> Contributed through Engineering Projects in Community Service (EPICS) and over 40 hours as a Fulton Ambassador, mentoring first-year students and supporting engineering outreach.</span>
                    </li>
                    <li className="text-foreground leading-relaxed flex gap-2">
                      <span className="text-[hsl(var(--primary))] mt-1">•</span>
                      <span><strong>Multicultural Competency:</strong> To be completed through the DAAD Research Internship and EPICS Abroad experience.</span>
                    </li>
                  </ul>
                  <p>
                    Ultimately, this portfolio is more than a collection of experiences — it is the story of how I learned to use code, creativity, and compassion to bring the Joy of Living to life, one thoughtful design at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="bg-gradient-to-br from-[hsl(var(--primary)/0.05)] to-[hsl(var(--accent)/0.05)] rounded-lg p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-6 w-6 text-[hsl(var(--primary))]" />
            <h3 className="text-2xl font-bold text-[hsl(var(--heading-primary))]">
              My GCSP Journey Highlights
            </h3>
          </div>
          
          <div className="space-y-6">
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

                <div className="mt-6">
                  <ClickableImage 
                    src={studentLeader} 
                    alt="GCSP Student Leader Journey Infographic" 
                    className="w-full rounded-lg shadow-lg"
                  />
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
                      GCSP StorySlam
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

                <div className="mt-6 space-y-4">
                  <a 
                    href="https://youtu.be/GQPQLSi8gs0?si=4RJ2FHHgLPsOOalb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Video className="h-5 w-5" />
                    <span>Watch StorySlam Performance</span>
                  </a>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ClickableImage 
                      src={storySlam1} 
                      alt="GCSP StorySlam participants group photo" 
                      className="w-full rounded-lg shadow-lg object-cover"
                    />
                    <ClickableImage 
                      src={storySlam2} 
                      alt="GCSP StorySlam event presentation" 
                      className="w-full rounded-lg shadow-lg object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="p-8 mb-6">
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
