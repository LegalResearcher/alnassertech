import { Globe, ShoppingCart, Target, Server, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "المواقع الإلكترونية",
    description: "واجهات UI/UX تروي قصتك ببراعة وتفوز بثقة عملائك. تصميمات فريدة تعكس هوية علامتك التجارية.",
    features: ["تصميم متجاوب", "سرعة فائقة", "SEO محسّن"],
  },
  {
    icon: ShoppingCart,
    title: "المتاجر الإلكترونية",
    description: "منصات تجارة مُحسّنة للبيع السريع وتكامل سلس للدفع. ابدأ بيع منتجاتك بكفاءة عالية.",
    features: ["بوابات دفع آمنة", "إدارة المخزون", "تقارير المبيعات"],
  },
  {
    icon: Target,
    title: "الصفحات التسويقية",
    description: "صفحات هبوط (Landing Pages) مصممة بتقنيات الإقناع لرفع معدلات التحويل لديك إلى السماء.",
    features: ["تحسين التحويل", "A/B Testing", "تحليلات متقدمة"],
  },
  {
    icon: Server,
    title: "البنية التحتية",
    description: "نضمن لك الانطلاق السلس بحجز النطاق (Domain) وحلول الاستضافة الآمنة والسريعة.",
    features: ["حجز النطاقات", "استضافة سريعة", "شهادات SSL"],
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            محفظة خدماتنا - الطريق إلى التميز
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            امتلاك موقع يعني امتلاك منصة. نحن نوفر لك كل ما تحتاجه لتكون 
            <span className="text-primary font-semibold"> سيد المساحة الرقمية</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 card-elevated hover:border-primary/30"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-primary/5 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="default" size="lg" onClick={scrollToContact}>
            احصل على استشارة مجانية
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
