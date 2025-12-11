import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "كم تستغرق مدة تصميم الموقع؟",
    answer: "تعتمد المدة على حجم وتعقيد المشروع. المواقع البسيطة تستغرق من 3-5 أيام، بينما المشاريع الأكبر كالمتاجر الإلكترونية قد تستغرق من أسبوع إلى أسبوعين."
  },
  {
    question: "ما هي الأسعار وطرق الدفع المتاحة؟",
    answer: "أسعارنا تبدأ من 50$ للصفحات البسيطة و150$ للمواقع الكاملة. نقبل الدفع عبر التحويل البنكي، الحوالات المحلية، وخدمات الدفع الإلكتروني المتاحة في اليمن."
  },
  {
    question: "هل تقدمون خدمة الدعم الفني بعد التسليم؟",
    answer: "نعم، نقدم دعماً فنياً مجانياً لمدة شهر بعد التسليم، يشمل إصلاح الأخطاء والتعديلات البسيطة. كما نوفر باقات صيانة شهرية اختيارية."
  },
  {
    question: "هل يمكنني التحكم في محتوى الموقع بنفسي؟",
    answer: "بالتأكيد! نصمم المواقع بحيث تتمكن من تحديث المحتوى بسهولة. كما نقدم تدريباً مجانياً على إدارة موقعك."
  },
  {
    question: "ما التقنيات التي تستخدمونها في التطوير؟",
    answer: "نستخدم أحدث تقنيات سيليكون فالي: React للواجهات التفاعلية، TypeScript للكود الموثوق، وTailwind CSS للتصميم المتجاوب. هذا يضمن سرعة فائقة وأداء استثنائي."
  },
  {
    question: "هل المواقع متوافقة مع الجوال؟",
    answer: "نعم، جميع مواقعنا مصممة بتقنية Responsive Design لتعمل بشكل مثالي على جميع الأجهزة: الهواتف، الأجهزة اللوحية، وأجهزة الكمبيوتر."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            الأسئلة الشائعة
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            كل ما تحتاج معرفته
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا وآلية العمل
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-right hover:no-underline py-5 text-foreground font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            لم تجد إجابة سؤالك؟
          </p>
          <a
            href="https://wa.me/967772762090?text=مرحباً، لدي استفسار..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            تواصل معنا مباشرة
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
