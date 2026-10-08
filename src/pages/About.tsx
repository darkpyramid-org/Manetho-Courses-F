import { BookOpen, Compass, Landmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/shared/PageHeader";
import { aboutPage } from "@/data/site/about";

const sectionIcons = [BookOpen, Compass, Landmark];

export function AboutPage() {
  return (
    <div className="container space-y-12 py-12">
      <PageHeader eyebrow="About" title={aboutPage.title} description={aboutPage.introduction} />
      <div className="grid gap-6 md:grid-cols-3">
        {aboutPage.sections.map((section, index) => {
          const Icon = sectionIcons[index];
          return (
            <Card key={section.title} className="h-full">
              <CardContent className="p-6">
                <Icon className="mb-4 h-6 w-6 text-gold-600" aria-hidden="true" />
                <h2 className="display mb-3 text-xl font-semibold">{section.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{section.body}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
