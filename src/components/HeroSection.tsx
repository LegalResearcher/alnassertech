import { Button } from "@/components/ui/button";
import { ArrowLeft, Code2, Database, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Restrained blueprint backdrop — one texture, not a stack of glows */}
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 pt-36 pb-24">
        {/* Seal — the one signature element, tied to Alnaseer's documentation/authentication identity */}
        <div className="flex justify-center mb-10 animate-fade-up">
          <div className="seal inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/25">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary-foreground/90 font-medium">توثيق ونشر — لا تجربة أولية</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-plex text-3xl md:text-5xl lg:text-6xl font-bold text-center text-primary-foreground mb-6 animate-fade-up-delay-1 leading-tight max-w-4xl mx-auto">
          مواقع وتطبيقات ويب مبنية بدقّة،
          <br />
          <span className="text-gradient">لا بقالب جاهز</span>
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-lg lg:text-xl text-center text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up-delay-2 leading-relaxed">
          الناصر تِك تصمم وتبني وتنشر منصتك — من الواجهة إلى قاعدة البيانات — باستخدام
          <span className="text-primary-foreground font-semibold"> React وTypeScript وSupabase</span>،
          مع متابعة بعد الإطلاق وليس فقط تسليم ملفات.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
          <Button variant="hero" size="lg" onClick={scrollToContact}>
            ابدأ مشروعك
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button variant="heroOutline" size="lg" onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}>
            اطّلع على أعمالنا
          </Button>
        </div>

        {/* Tech Stack — stated plainly, not as a badge wall */}
        <div className="mt-20 pt-8 border-t border-primary-foreground/10 animate-fade-up-delay-3">
          <div className="flex items-center justify-center gap-10 flex-wrap text-muted-foreground/70">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span className="text-sm">React · TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              <span className="text-sm">Supabase</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm">نشر ومتابعة عبر Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
