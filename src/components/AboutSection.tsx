import { Quote, Target, Rocket } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            من نحن
          </span>
          <h2 className="font-plex text-4xl md:text-5xl font-bold text-foreground mb-4">
            خلفية المؤسس
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            طريق غير تقليدي إلى تطوير الويب
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
                <h3 className="font-plex text-3xl font-bold text-foreground mb-2">
                  أ. معين الناصر
                </h3>
                <p className="text-primary font-semibold text-lg mb-1">
                  الرئيس التنفيذي والمؤسس
                </p>
                <p className="text-muted-foreground text-sm">
                  CEO & Founder
                </p>
              </div>
              
              {/* Badge */}
              <div className="md:mr-auto flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Rocket className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium text-sm">الناصر تِك للحلول الرقمية</span>
              </div>
            </div>

            {/* Bio */}
            <div className="relative">
              <Quote className="w-12 h-12 text-primary/20 absolute -top-2 -right-2" />
              
              <div className="bg-muted/50 rounded-2xl p-6 md:p-8 border border-border/50">
                <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-primary rounded-full" />
                  خلفية عملية، لا شهادة تسويقية
                </h4>
                
                <div className="space-y-4 text-foreground/90 leading-relaxed text-lg">
                  <p>
                    أجمع بين خلفية في الدراسات القانونية والفقه الإسلامي، ومهارة تقنية اكتسبتها بالكامل عمليًا —
                    ببناء منصات حقيقية وحل مشاكلها الفعلية، لا بشهادات أو دورات نظرية فقط.
                  </p>
                  
                  <p>
                    الناصر تِك بدأت من حاجة فعلية: إدارة وتطوير منصات إخبارية عربية ومنصة تعليم قانوني بالكامل بنفسي.
                    من هذا التكرار اليومي تشكّل أسلوب عملي: تعديلات دقيقة ومحدودة، وتحقّق من صحة كل تغيير قبل اعتماده.
                  </p>
                  
                  <p>
                    نبني بأدوات هندسية حديثة وموثوقة — واجهات سريعة، وقاعدة بيانات آمنة ومنظّمة، ونشر مستمر.
                    وبعد التسليم نبقى مسؤولين عن المشروع، لا نكتفي بتسليم الملفات والانصراف.
                  </p>
                </div>
                
                {/* Signature */}
                <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-foreground font-semibold text-sm">معين الناصر</p>
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
