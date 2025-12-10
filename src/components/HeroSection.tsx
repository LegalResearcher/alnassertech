import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, Code2, Rocket } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">نبني المستقبل الرقمي</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-center text-primary-foreground mb-6 animate-fade-up-delay-1 leading-tight">
          توقف عن التواجد..
          <br />
          <span className="text-gradient">وابدأ بالسيطرة!</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl text-center text-muted-foreground max-w-4xl mx-auto mb-8 animate-fade-up-delay-2 leading-relaxed">
          موقعك هو تحفتك الرقمية القادمة، ونصنعه لك بأعلى معايير 
          <span className="text-primary font-semibold"> سيليكون فالي</span>
        </p>

        <p className="text-base md:text-lg text-center text-muted-foreground/80 max-w-3xl mx-auto mb-12 animate-fade-up-delay-3">
          <span className="text-primary font-bold">الناصر تِك</span>: حيث تلتقي السرعة الخارقة (Vite/React) بالجودة غير القابلة للتفاوض (TypeScript). 
          نحن لا نبني مواقع، بل نُنشئ أصولاً رقمية فائقة الأداء مُصممة للنمو.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
          <Button variant="hero" size="lg" onClick={scrollToContact}>
            ابدأ مشروعك الآن
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button variant="heroOutline" size="lg" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
            استكشف خدماتنا
          </Button>
        </div>

        {/* Tech Stack */}
        <div className="mt-20 animate-fade-up-delay-3">
          <p className="text-center text-muted-foreground/60 text-sm mb-6">مدعوم بأحدث التقنيات</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {[
              { icon: Code2, name: "React" },
              { icon: Zap, name: "Vite" },
              { icon: Rocket, name: "TypeScript" },
            ].map((tech, index) => (
              <div 
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/5 backdrop-blur-sm border border-border/10 hover:border-primary/30 transition-all duration-300"
              >
                <tech.icon className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
