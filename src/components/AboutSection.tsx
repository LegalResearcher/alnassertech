import { Quote, Target, Rocket } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            من نحن
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            الرؤية والقيادة
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نعيد تعريف التفوق الرقمي بتقنيات المستقبل
          </p>
        </div>

        {/* CEO Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-br-full" />
            
            {/* CEO Info Header */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-10 relative">
              {/* Avatar placeholder with initials */}
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-4xl font-bold text-primary-foreground">م.ن</span>
              </div>
              
              <div className="text-center md:text-right">
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  أ. معين الناصر
                </h3>
                <p className="text-primary font-semibold text-lg mb-1">
                  الرئيس التنفيذي والمؤسس
                </p>
                <p className="text-muted-foreground text-sm">
                  CEO & Founder
                </p>
              </div>
              
              {/* Decorative badge */}
              <div className="md:mr-auto flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Rocket className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium text-sm">الناصر تِك للحلول الرقمية</span>
              </div>
            </div>

            {/* Vision Statement */}
            <div className="relative">
              <Quote className="w-12 h-12 text-primary/20 absolute -top-2 -right-2" />
              
              <div className="bg-muted/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-primary rounded-full" />
                  إعادة تعريف التفوق الرقمي
                </h4>
                
                <div className="space-y-4 text-foreground/90 leading-relaxed text-lg">
                  <p>
                    مهمتنا في الناصر تِك ليست مجرد تصميم موقع، بل هي بناء الجيل القادم من الأصول الرقمية. لقد ولّى زمن المواقع الثقيلة والقوالب المكررة.
                  </p>
                  
                  <p>
                    أنا أرى مستقبلاً حيث كل علامة تجارية، بغض النظر عن حجمها، تستحق أن تمتلك واجهة رقمية تعمل بكفاءة صاروخية وتتحدث لغة التصميم العالمي.
                  </p>
                  
                  <p>
                    لهذا السبب، اتخذنا قراراً جريئاً: البناء من الصفر بالاعتماد كلياً على أحدث التقنيات مثل{" "}
                    <span className="text-primary font-semibold">React</span>,{" "}
                    <span className="text-primary font-semibold">TypeScript</span>, و
                    <span className="text-primary font-semibold">Vite</span>. هذه التقنيات هي أساس القوة، السرعة، والموثوقية التي نقدمها لك بأسعار تبدأ من{" "}
                    <span className="text-primary font-bold">150 دولارًا</span> فقط.
                  </p>
                  
                  <p>
                    نحن نؤمن بأن الجودة العالمية يجب أن تكون في متناول الجميع. رؤيتنا هي أن نكون الشريك التقني الذي ينقل مشاريع عملائنا من المحلية إلى العالمية، بأداء لا يمكن إيقافه وجمالية لا يمكن نسيانها.
                  </p>
                  
                  <p className="text-foreground font-medium">
                    انضم إلينا، ودعنا نحول رؤيتك إلى حقيقة تقنية فائقة.
                  </p>
                </div>
                
                {/* Signature */}
                <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                  <p className="text-primary font-bold text-xl italic">
                    "هذا وعدي لك."
                  </p>
                  <div className="text-left">
                    <p className="text-muted-foreground text-sm">معين الناصر</p>
                    <p className="text-xs text-muted-foreground/70">المؤسس</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
