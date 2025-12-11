import { ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "متجر إلكتروني متكامل",
    category: "متاجر إلكترونية",
    description: "متجر إلكتروني احترافي مع نظام دفع متكامل وإدارة مخزون ذكية",
    tech: ["React", "TypeScript", "Tailwind"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
  },
  {
    title: "موقع شركة استشارات",
    category: "مواقع الشركات",
    description: "موقع عصري لشركة استشارات مالية مع تصميم راقي وأداء فائق",
    tech: ["React", "Vite", "Framer Motion"],
    gradient: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    title: "صفحة هبوط تسويقية",
    category: "صفحات الهبوط",
    description: "صفحة هبوط عالية التحويل لحملة تسويقية ناجحة",
    tech: ["React", "TypeScript", "SEO"],
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    title: "منصة تعليمية",
    category: "تطبيقات ويب",
    description: "منصة تعليمية تفاعلية مع نظام إدارة محتوى متقدم",
    tech: ["React", "Node.js", "MongoDB"],
    gradient: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
  },
  {
    title: "بوابة أخبار",
    category: "مواقع المحتوى",
    description: "بوابة إخبارية سريعة مع تصنيفات متعددة وتجربة قراءة مميزة",
    tech: ["React", "CMS", "SEO"],
    gradient: "from-rose-500/20 to-red-500/20",
    borderColor: "border-rose-500/30",
  },
  {
    title: "نظام حجوزات",
    category: "تطبيقات ويب",
    description: "نظام حجوزات متكامل لعيادة طبية مع إشعارات وتقويم ذكي",
    tech: ["React", "TypeScript", "API"],
    gradient: "from-cyan-500/20 to-sky-500/20",
    borderColor: "border-cyan-500/30",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            معرض الأعمال
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            مشاريع تتحدث عن نفسها
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نماذج من أعمالنا التي نفتخر بها، كل مشروع قصة نجاح فريدة
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl bg-card border ${project.borderColor} overflow-hidden card-elevated`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-foreground/20" />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    عرض المشروع
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            هل لديك مشروع في ذهنك؟ دعنا نحوله إلى واقع
          </p>
          <Button
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8"
          >
            ابدأ مشروعك الآن
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
