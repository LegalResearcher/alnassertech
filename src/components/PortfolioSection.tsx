import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

import educationalImg from "@/assets/portfolio/alnaseer-platform.jpg";
import hakimImg from "@/assets/portfolio/hakim-alsharabi.jpg";
import hasadImg from "@/assets/portfolio/hasad-alyoum.jpg";
import daftarImg from "@/assets/portfolio/daftar-alhisabat.jpg";
import tamwinatImg from "@/assets/portfolio/tamwinat-alhay.jpg";
import enasImg from "@/assets/portfolio/enas-clinic.jpg";
import perfumesImg from "@/assets/portfolio/perfumes-incense.jpg";

const projects = [
  {
    title: "الشرعبي للخدمات القانونية",
    category: "مواقع مؤسسية",
    description: "منصة احترافية لمكتب محاماة واستشارات قانونية مع تصميم مؤسسي فاخر يعكس الثقة والمصداقية",
    tech: ["تصميم مؤسسي", "أداء عالي", "متجاوب بالكامل"],
    image: hakimImg,
    borderColor: "border-amber-500/30",
    link: "https://hakim-alsharabi.vercel.app/",
  },
  {
    title: "حصاد اليوم الإخباري",
    category: "بوابات إخبارية",
    description: "بوابة إخبارية عربية شاملة تقدم آخر الأخبار والتقارير بتصميم عصري وتجربة قراءة سلسة",
    tech: ["نشر تلقائي", "أداء عالي", "متجاوب بالكامل"],
    image: hasadImg,
    borderColor: "border-blue-500/30",
    link: "https://www.hasad-alyoum.com/",
  },
  {
    title: "منصة الناصر القانونية",
    category: "تعليم قانوني",
    description: "منصة الباحث القانوني — مكتبة قانونية موثّقة تضم أكثر من 27,300 سؤال، وتجاوزت 60,000 زيارة موثقة منذ الإطلاق",
    tech: ["مكتبة بيانات", "بحث تفاعلي", "أمان بيانات"],
    image: educationalImg,
    borderColor: "border-amber-500/30",
    link: "https://alnaseer.org/",
  },
  {
    title: "تموينات الحي الراقي",
    category: "متاجر إلكترونية",
    description: "نظام إدارة حسابات زبائن ومتجر تموينات مع إمكانية الطلب كزائر دون تسجيل",
    tech: ["إدارة حسابات", "طلب كزائر", "متجاوب بالكامل"],
    image: tamwinatImg,
    borderColor: "border-orange-500/30",
  },
  {
    title: "دفتر الحسابات المطوّر",
    category: "تطبيقات ويب",
    description: "تطبيق ويب لإدارة حسابات المحلات التجارية بسهولة، مع مزامنة فورية بين الأجهزة",
    tech: ["مزامنة فورية", "قاعدة بيانات", "متعدد المستخدمين"],
    image: daftarImg,
    borderColor: "border-blue-500/30",
  },
  {
    title: "ENAS Clinic",
    category: "مواقع طبية",
    description: "موقع حجز مواعيد لعيادة أسنان، بتصميم فاخر يعكس هوية العيادة ويسهّل حجز الكشف",
    tech: ["حجز مواعيد", "تصميم فاخر", "متجاوب بالكامل"],
    image: enasImg,
    borderColor: "border-amber-500/30",
  },
  {
    title: "متجر عطور وبخور",
    category: "متاجر إلكترونية",
    description: "متجر إلكتروني لبيع العطور والبخور اليمنية الأصيلة، مع توصيل لجميع المحافظات",
    tech: ["سلة مشتريات", "توصيل", "متجاوب بالكامل"],
    image: perfumesImg,
    borderColor: "border-rose-500/30",
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
          <h2 className="font-plex text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
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
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        عرض المشروع
                      </Button>
                    </a>
                  ) : (
                    <Button
                      variant="secondary"
                      size="sm"
                      className="gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      عرض المشروع
                    </Button>
                  )}
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
