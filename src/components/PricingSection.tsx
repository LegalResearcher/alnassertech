import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "أساسية",
    price: "100$",
    period: "",
    description: "لأصحاب الأعمال الصغيرة والمشاريع الشخصية",
    features: [
      "تصميم مخصص حسب هويتك",
      "حتى 4 صفحات",
      "نموذج تواصل",
      "ربط واتساب",
      "متجاوب مع جميع الأجهزة",
      "شهادة SSL",
      "دعم فني لمدة 3 أشهر",
    ],
    highlighted: false,
  },
  {
    name: "احترافية",
    price: "350$",
    period: "",
    description: "للشركات التي تريد حضورًا رقميًا متكاملاً",
    features: [
      "تصميم مخصص حسب هويتك",
      "حتى 10 صفحات",
      "لوحة تحكم للإدارة",
      "نموذج تواصل وربط واتساب",
      "تحسين أساسي لمحركات البحث",
      "ربط وسائل التواصل الاجتماعي",
      "شهادة SSL",
      "دعم فني لمدة 6 أشهر",
    ],
    highlighted: true,
  },
  {
    name: "مخصصة",
    price: "حسب المشروع",
    period: "",
    description: "لأنظمة وقواعد بيانات ومنصات متكاملة",
    features: [
      "عدد صفحات غير محدود",
      "قاعدة بيانات وأنظمة إدارة محتوى",
      "خصائص مطوّرة حسب حاجتك",
      "ربط أنظمة وواجهات خارجية",
      "استشارة ودراسة فنية للمشروع",
      "دعم فني مستمر بعد الإطلاق",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            الأسعار
          </span>
          <h2 className="font-plex text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            باقة تناسب مشروعك
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            أسعار واضحة بلا مفاجآت — اختر ما يناسب حجم مشروعك الآن، ويمكن التوسع لاحقًا
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border ${
                plan.highlighted
                  ? "bg-card border-primary shadow-xl md:-translate-y-4"
                  : "bg-card border-border/50 card-elevated"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-4 right-1/2 translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold whitespace-nowrap">
                  الأكثر طلبًا
                </span>
              )}

              <h3 className="font-plex text-xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground/90">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "default" : "outline"}
                className="w-full"
                onClick={scrollToContact}
              >
                اختر هذه الباقة
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
