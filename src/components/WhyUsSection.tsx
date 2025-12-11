import { Zap, Palette, Shield, DollarSign, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "هندسة الأداء النظيف",
    description: "لا انتظار، لا تشتيت. موقعك يعمل بأداء صاروخي بفضل React وVite، مما يضمن تصنيفاً أعلى في Google ومعدل تحويل قياسي.",
  },
  {
    icon: Palette,
    title: "التصميم من أجل الغد",
    description: "تصميمات عصرية وكلاسيكية خالدة. كل بكسل مصمم خصيصاً لهويتك، بأناقة تليق بأكبر العلامات التجارية العالمية.",
  },
  {
    icon: Shield,
    title: "التزام TypeScript",
    description: "الموثوقية هي أساس نجاحنا. كود نظيف، خالٍ من الثغرات، ومُصمم للتوسع اللامحدود. استثمر اليوم في موقع يدوم وينمو.",
  },
  {
    icon: DollarSign,
    title: "الاستثمار الذكي",
    description: "الجودة العالمية تبدأ من 150$. أسعارنا التنافسية تكسر حاجز البداية، لتمنحك فرصة امتلاك موقع احترافي دون تضحية بالميزانية.",
  },
  {
    icon: Headphones,
    title: "شريكك 24/7",
    description: "دعم متواصل يعني راحة بال دائمة. خدمة عملاء على مدار الساعة، جاهزة للإجابة وحل أي تحدٍ فوراً.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            لماذا الناصر تِك؟
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            نتخطى التصميم التقليدي
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ندخل عالم "هندسة التجربة الرقمية". عملنا يرتكز على معادلة بسيطة: 
            <span className="text-primary font-semibold"> أداء عالمي بتكلفة محلية</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 card-elevated hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
