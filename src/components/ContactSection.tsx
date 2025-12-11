import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const whatsappNumber = "967772762090";
  const whatsappMessage = encodeURIComponent("مرحباً، أرغب في الاستفسار عن خدماتكم");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const email = "moieen900@gmail.com";

  return (
    <section id="contact" className="py-24 hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            حان وقت اتخاذ القرار
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            الناجحون لا ينتظرون. لا تؤجل سيطرتك على السوق. 
            <br />
            <span className="text-primary font-semibold">اختر الجودة، اختر السرعة، اختر الناصر تِك.</span>
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Location Card */}
            <div className="p-8 rounded-2xl bg-card/10 backdrop-blur-sm border border-border/20">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-2">موقعنا</h3>
              <p className="text-muted-foreground">صنعاء، اليمن</p>
            </div>

            {/* Phone Card */}
            <div className="p-8 rounded-2xl bg-card/10 backdrop-blur-sm border border-border/20">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-2">اتصل بنا</h3>
              <p className="text-muted-foreground" dir="ltr">+967 772 762 090</p>
            </div>

            {/* Email Card */}
            <div className="p-8 rounded-2xl bg-card/10 backdrop-blur-sm border border-border/20">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-2">البريد الإلكتروني</h3>
              <a href={`mailto:${email}`} className="text-muted-foreground hover:text-primary transition-colors">
                {email}
              </a>
            </div>
          </div>

          {/* Main CTA */}
          <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 backdrop-blur-sm">
            <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              ابدأ محادثتك الفورية مع فريق الخبراء
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              انقر الآن للتواصل عبر واتساب والحصول على استشارة مجانية لمشروعك
            </p>
            <Button
              variant="whatsapp"
              size="lg"
              className="text-lg"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              <MessageCircle className="w-6 h-6" />
              تواصل عبر واتساب
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
