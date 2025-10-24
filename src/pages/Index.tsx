import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { PortfolioSidebar } from "@/components/PortfolioSidebar";
import { AboutSection } from "@/components/AboutSection";
import { CompetencySection } from "@/components/CompetencySection";
import { ClickableImage } from "@/components/ClickableImage";
import { Microscope, BookOpen, Lightbulb, Globe, Heart, FileText } from "lucide-react";
import posterSession1 from "@/assets/Poster_Session_FSE150.jpeg";
import posterSession2 from "@/assets/2_Poster_Session_FSE150.jpeg";
import posterSession3 from "@/assets/3_Poster_Session_FSE150.jpeg";
import fultonAmbassador1 from "@/assets/FULTONAMBASSADOR1.jpeg";
import fultonAmbassador2 from "@/assets/FULTONAMBASSADOR2.jpeg";
import fultonAmbassador3 from "@/assets/FULTONAMBASSADOR3.jpeg";
import kavvyPhoto from "@/assets/Kavvy.jpeg";
import kavvySlide1 from "@/assets/Kavvy_slide1.png";
import kavvySlide2 from "@/assets/Kavvy_slide2.png";
import kavvySlide3 from "@/assets/Kavvy_slide3.png";

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
            id="multidisciplinary"
            title="Multidisciplinary Competency"
            icon={BookOpen}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--heading-primary))]">
                  FSE 150 Course Experience
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-[hsl(var(--heading-primary))]">Course Focus</h4>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        In FSE 150, I explored the National Academy of Engineering's Grand Challenges and their connection to real-world issues in sustainability, security, health, and the Joy of Living. The course covered topics ranging from life cycle analysis and sustainability frameworks to cybersecurity and transhumanism, guided by guest lectures from Mr. Bob Beard, Dr. Bruce Rittmann, Dr. Rizal Hariadi, and Dr. Tatiana Walsh.
                      </p>
                      <p>
                        Conversations with Dr. Bradley Greger on neural engineering highlighted the human side of innovation, complemented by studying Dr. Gail-Joon Ahn and Dr. Adam Doupe's work on cybersecurity and ethical AI. I applied these insights through reflective essays, class discussions, and my final oral presentation on "Security and Privacy Concerns in Cloud Computing Networks," connecting theoretical concepts to real-world systems.
                      </p>
                      <div className="mt-4">
                        <a 
                          href="https://youtu.be/jagYDxAxxDQ"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                        >
                          Watch FSE 150 Presentation Video
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-[hsl(var(--heading-primary))]">Hands-On Project Experience</h4>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        As part of a team project, "Demolishing AI Biases," we developed specifications for a software tool designed to filter biased data before training AI models. Under the mentorship of Dr. Haolin Zhu, our team produced five key deliverables, including quality metrics for each milestone, combining technical rigor with ethical awareness.
                      </p>
                      <div className="mt-4 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <ClickableImage 
                            src={posterSession1} 
                            alt="Kenisha presenting FSE150 poster session" 
                            className="w-full rounded-lg shadow-lg object-cover"
                          />
                          <ClickableImage 
                            src={posterSession3} 
                            alt="Demolishing Bias in AI poster" 
                            className="w-full rounded-lg shadow-lg object-cover"
                          />
                        </div>
                        <ClickableImage 
                          src={posterSession2} 
                          alt="FSE150 team at poster session" 
                          className="w-full rounded-lg shadow-lg object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-3 text-[hsl(var(--heading-primary))]">Impact & Reflection</h4>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        FSE 150 shaped my approach to engineering as human-centered innovation rather than purely technical problem-solving. The course emphasized collaboration and interdisciplinary thinking—skills I carried into projects like EPICS and Venture Devils, where teamwork and social impact were central.
                      </p>
                      <p>
                        The poster session taught me how to communicate technical ideas visually and professionally—a skill I later applied to conference research posters. Beyond academics, the course offered meaningful networking opportunities with peers and faculty, building my confidence in sharing ideas and leading discussions.
                      </p>
                      <p>
                        Overall, FSE 150 helped me see engineering as both intellectually rigorous and deeply human—a perspective that continues to guide my work across all GCSP competencies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--heading-primary))]">
                  STS 330: Information Technology and Artificial Intelligence
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-[hsl(var(--heading-primary))]">Course Description</h4>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        In STS 330, I explored how advances in information technology and artificial intelligence intersect with society, reshaping work, communication, and ethical frameworks. The course examined contemporary AI technologies, including Large Language Models (LLMs), and their impact on human systems, social values, and the global labor economy.
                      </p>
                      <p>
                        I engaged with the material through reflective essays, peer-reviewed syntheses, discussion board participation, and comprehension checks that challenged me to think critically about AI's societal influence. Topics ranged from algorithmic manipulation and Big Data ethics to AI's potential for social empowerment. By analyzing research by Sheila Jasanoff, Ramesh Srinivasan, and Annika Richterich, I gained insight into how technology both enables and constrains human creativity, choice, and learning.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-[hsl(var(--heading-primary))]">Connection to Theme</h4>
                    <p className="text-foreground leading-relaxed">
                      This course aligns directly with my GCSP theme, Joy of Learning, by highlighting the human experience within complex technological systems. Understanding AI's influence on society requires curiosity, critical thinking, and adaptability—skills that mirror the process of learning itself. By exploring how information technologies shape opportunities for knowledge, collaboration, and empowerment, I learned to identify ways that technology can enhance—not hinder—the human pursuit of understanding and growth.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-[hsl(var(--heading-primary))]">Value & Reflection</h4>
                    <p className="text-foreground leading-relaxed">
                      STS 330 deepened my awareness of the ethical, social, and practical dimensions of AI, emphasizing that learning extends beyond absorbing content—it involves evaluating systems, questioning assumptions, and applying insights responsibly. The course strengthened my ability to analyze complex sociotechnical issues, synthesize multiple perspectives, and communicate ideas effectively. It reinforced my commitment to approaching technology and innovation in ways that maximize curiosity, accessibility, and the joy of discovery—principles I carry into both academic research and professional projects.
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
                <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--heading-primary))]">
                  ASU Venture Devils
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-[hsl(var(--heading-primary))]">Entrepreneurial Work</h4>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        As Founder and Chief Operating Officer of Kavvy, I launched a seed-stage startup that connects authors with publishers through an AI-powered platform. Co-founded with fellow GCSP scholar Shashwat Raj, Kavvy helps authors refine manuscripts, explore publisher trends, and receive personalized, data-driven recommendations to improve submission success.
                      </p>
                      <p>
                        I led the development of a database of 626 publishing houses and 15,000+ published authors, integrating technology with human-centered design to make publishing more accessible.
                      </p>
                      <p>
                        Through ASU Venture Devils, I gained mentorship, community support, funding opportunities, and workshops that shaped my entrepreneurial skills. Competing in the Ignite-Innovation Venture Challenge and the Open Pitch Series honed my ability to communicate ideas clearly and concisely. Kavvy was recognized as the Crowd-Favorite at the Open Pitch Series, earning a cash prize and valuable feedback.
                      </p>
                      <p>
                        I also launched a podcast, <a 
                          href="https://www.youtube.com/@Kavvy.literary" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          Write It Out
                        </a>, exploring the creative and professional journey of writers, further strengthening my skills in storytelling, communication, and audience engagement.
                      </p>
                      <div className="mt-4 space-y-4">
                        <ClickableImage 
                          src={kavvyPhoto} 
                          alt="Kavvy team at ASU Venture Devils Igniting Innovation Venture Challenge" 
                          className="w-full rounded-lg shadow-lg object-cover"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <ClickableImage 
                            src={kavvySlide1} 
                            alt="Kavvy presentation slide - Recognizing literary talent" 
                            className="w-full rounded-lg shadow-lg object-cover"
                          />
                          <ClickableImage 
                            src={kavvySlide2} 
                            alt="Kavvy presentation slide - Keni's Story about publishing challenges" 
                            className="w-full rounded-lg shadow-lg object-cover"
                          />
                          <ClickableImage 
                            src={kavvySlide3} 
                            alt="Kavvy presentation slide - Solution bridging authors and publishers" 
                            className="w-full rounded-lg shadow-lg object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--heading-primary))]">
                  Connection to Grand Challenge Theme
                </h3>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    Writing a strong manuscript is only part of an author's journey—understanding which publishers align with their style, trends, and submission requirements is equally critical. Many authors lack this knowledge, and literary agents, often freelancers with limited networks, can only bridge the gap so much. This creates challenges in drafting proposals, submitting effectively, and negotiating edits.
                  </p>
                  <p>
                    Kavvy addresses these barriers by transforming the publishing process into a guided, learning-centered experience. Authors refine their manuscripts, explore publisher preferences, and receive actionable, data-backed recommendations. By making knowledge accessible, Kavvy empowers authors to learn about the publishing ecosystem while actively applying it to their own work.
                  </p>
                  <p>
                    This aligns directly with my GCSP theme, Joy of Learning, demonstrating how discovery, skill-building, and creativity become joyful when paired with tools that clarify complex processes. Kavvy turns the traditionally opaque publishing journey into an opportunity for experimentation, growth, and meaningful learning.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--heading-primary))]">
                  Value & Reflection
                </h3>
                <p className="text-foreground leading-relaxed">
                  Entrepreneurship through Kavvy and Venture Devils reinforced that learning is most impactful when applied in real-world contexts. I strengthened problem-solving, leadership, and collaboration skills while deepening my understanding of AI and human-centered innovation. Most importantly, this experience showed me that learning can be iterative, creative, and joyful—a principle that now guides both my academic work and professional pursuits.
                </p>
              </div>
            </div>
          </CompetencySection>

          <CompetencySection
            id="service"
            title="Service-Learning (Social Consciousness)"
            icon={Heart}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--heading-primary))]">
                  EPICS: Study Abroad Database
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-[hsl(var(--heading-primary))]">Service-Learning Work</h4>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        In Fall 2024, I participated in the EPICS (Engineering Projects in Community Service) program, a national award-winning social entrepreneurship initiative. I led a 3-person team to design and develop an online database and web application to streamline study abroad programs at ASU. Our platform enabled project teams to collect, store, and visualize data, improving accessibility and quality for over 20 students and users.
                      </p>
                      <p><strong>Key Responsibilities:</strong></p>
                      <ul className="list-disc ml-6 space-y-2">
                        <li>Built database architecture and developed front-end and back-end components for a scalable, user-focused solution.</li>
                        <li>Coordinated with community partners, mentors, and stakeholders to ensure the system met all functional requirements.</li>
                        <li>Conducted user testing and prototyping to refine usability and ensure accurate data visualization.</li>
                        <li>Managed team workflows, delegated tasks, and facilitated collaboration for effective project delivery.</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-[hsl(var(--heading-primary))]">Connection to Theme & Engineering</h4>
                    <p className="text-foreground leading-relaxed">
                      This project reflects my GCSP theme, Joy of Learning, by creating a platform that enables students and faculty to learn from data more effectively. By translating complex information into an accessible and actionable interface, the system empowers users to explore, analyze, and understand project outcomes collaboratively. The experience reinforced engineering problem-solving, full-stack development skills, and the ethical responsibility of designing systems that serve communities and enhance educational opportunities.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-[hsl(var(--heading-primary))]">Value & Reflection</h4>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        Leading this EPICS project strengthened my technical, leadership, and collaboration skills while highlighting the real-world impact of engineering. It demonstrated how technology can facilitate meaningful learning experiences, improving accessibility and decision-making for student teams. This experience reinforced my belief that engineering can be a joyful and socially conscious pursuit, bridging technical innovation with human-centered design—a perspective I carry into my research, entrepreneurial ventures, and mentorship roles.
                      </p>
                      <div className="mt-4">
                        <a 
                          href="https://github.com/kenishakaushal/OnlineDatabase_EPICS"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                        >
                          View EPICS Project on GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--heading-primary))]">
                  Fulton Ambassadors
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-[hsl(var(--heading-primary))]">Service-Learning Work</h4>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        In Spring 2024, I joined the Fulton Ambassadors, a student community representing the Ira A. Fulton Schools of Engineering at ASU. In this role, I engaged with prospective students, families, and guests by:
                      </p>
                      <ul className="list-disc ml-6 space-y-2">
                        <li>Leading campus tours and showcasing the ASU engineering experience.</li>
                        <li>Tabling at university events to provide information and answer questions about engineering programs.</li>
                        <li>Visiting high schools to introduce students to STEM opportunities and inspire future Sun Devils.</li>
                        <li>Volunteering at engineering-focused events and collaborating with student organizations to support outreach initiatives.</li>
                        <li>Serving as a panelist for multiple events, sharing insights on academic programs, research, and student life.</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-[hsl(var(--heading-primary))]">Connection to Theme & Engineering</h4>
                    <p className="text-foreground leading-relaxed">
                      This work connects directly to my GCSP theme, Joy of Learning, by helping others explore and discover their educational paths. Through mentoring, outreach, and panel discussions, I facilitated curiosity, engagement, and confidence in STEM fields. The role also intersected with engineering and technology by communicating technical concepts, highlighting research and innovation, and fostering awareness of STEM opportunities within the Fulton Schools community.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-[hsl(var(--heading-primary))]">Value & Reflection</h4>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        Being a Fulton Ambassador strengthened my leadership, communication, and mentoring skills while reinforcing the importance of service in education. It highlighted how guiding others through discovery can be both meaningful and joyful, reflecting principles that inform my research, entrepreneurial ventures, and collaborative projects. This experience continues to inspire me to create inclusive, engaging learning environments that empower others to explore, grow, and thrive.
                      </p>
                      <div className="mt-4 space-y-4">
                        <ClickableImage 
                          src={fultonAmbassador1} 
                          alt="Fulton Ambassador profile card for Kenisha Kaushal" 
                          className="w-full rounded-lg shadow-lg object-cover"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <ClickableImage 
                            src={fultonAmbassador2} 
                            alt="Fulton Ambassadors tabling at campus event" 
                            className="w-full rounded-lg shadow-lg object-cover"
                          />
                          <ClickableImage 
                            src={fultonAmbassador3} 
                            alt="Fulton Ambassadors wellness commitment cards" 
                            className="w-full rounded-lg shadow-lg object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CompetencySection>

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
