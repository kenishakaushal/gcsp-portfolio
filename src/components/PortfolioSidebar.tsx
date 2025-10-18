import { GraduationCap, User, Microscope, BookOpen, Lightbulb, Globe, Heart, FileText } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const sections = [
  { id: "about", title: "About Me", icon: User },
  { id: "research", title: "Research/Talent", icon: Microscope },
  { id: "multidisciplinary", title: "Multidisciplinary", icon: BookOpen },
  { id: "entrepreneurship", title: "Entrepreneurship", icon: Lightbulb },
  { id: "multicultural", title: "Multicultural", icon: Globe },
  { id: "service", title: "Service-Learning", icon: Heart },
  { id: "conclusion", title: "Concluding Remarks", icon: FileText },
];

export function PortfolioSidebar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 text-lg font-bold">
            <GraduationCap className="h-5 w-5" />
            GCSP Portfolio
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sections.map((section) => (
                <SidebarMenuItem key={section.id}>
                  <SidebarMenuButton onClick={() => scrollToSection(section.id)}>
                    <section.icon className="h-4 w-4" />
                    <span>{section.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
