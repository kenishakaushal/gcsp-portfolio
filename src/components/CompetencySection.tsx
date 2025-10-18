import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CompetencySectionProps {
  id: string;
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export function CompetencySection({ id, title, icon: Icon, children }: CompetencySectionProps) {
  return (
    <section id={id} className="min-h-screen py-12 px-6 scroll-mt-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-lg bg-accent">
            <Icon className="h-6 w-6 text-accent-foreground" />
          </div>
          <h2 className="text-3xl font-bold text-[hsl(var(--heading-primary))]">{title}</h2>
        </div>
        <Card className="p-8">
          {children}
        </Card>
      </div>
    </section>
  );
}
