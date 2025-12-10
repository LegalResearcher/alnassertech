import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "أحمد الصالحي",
    role: "صاحب متجر إلكتروني",
    content: "والله ما توقعت الفرق يكون بهالشكل! المتجر صار سريع وشكله احترافي.. العملاء بدأوا يثقون أكثر والمبيعات زادت بشكل ملحوظ 🔥",
    rating: 5,
  },
  {
    name: "سارة محمد",
    role: "مديرة تسويق",
    content: "تعاملت مع كثير مصممين قبل كذا، بس فريق الناصر تِك فاهمين شغلهم صح. التصميم طلع أحلى من اللي تخيلته، والتعامل معهم سلس جداً ❤️",
    rating: 5,
  },
  {
    name: "محمد العامري",
    role: "رائد أعمال",
    content: "أفضل استثمار عملته لمشروعي الناشئ! الموقع سريع، التصميم عصري، والدعم الفني ما يتأخرون عليك أبداً. شكراً من القلب 👏",
    rating: 5,
  },
  {
    name: "فاطمة الحسني",
    role: "مؤسسة علامة تجارية",
    content: "كنت خايفة من الموضوع بصراحة، بس الفريق طمّنوني من أول محادثة. النتيجة فاقت توقعاتي والحمدلله موقعي صار يجيب عملاء جدد كل يوم ✨",
    rating: 5,
  },
  {
    name: "عبدالله القحطاني",
    role: "صاحب وكالة عقارية",
    content: "الصفحة التسويقية اللي سووها لي غيّرت اللعبة تماماً! معدل التحويل تضاعف والاستفسارات زادت بشكل جنوني. ما راح أتعامل مع غيرهم 💯",
    rating: 5,
  },
  {
    name: "نورة السعيد",
    role: "مصممة أزياء",
    content: "حبيت كيف فهموا رؤيتي وحولوها لواقع! الموقع يعكس هويتي بالضبط والتفاصيل الصغيرة واضحة. شغل متقن فعلاً 🌟",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "center",
      direction: "rtl",
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="py-20 md:py-28 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            آراء عملائنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            ماذا يقول عملاؤنا عنّا؟
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نفخر بثقة عملائنا ونسعى دائماً لتجاوز توقعاتهم
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-3"
                >
                  <div
                    className={`
                      bg-card rounded-2xl p-6 md:p-8 h-full border border-border/50
                      transition-all duration-500 transform
                      ${selectedIndex === index 
                        ? 'scale-100 opacity-100 shadow-xl shadow-primary/10' 
                        : 'scale-95 opacity-70'
                      }
                      hover:scale-100 hover:opacity-100 hover:shadow-xl hover:shadow-primary/10
                    `}
                  >
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="w-10 h-10 text-primary/30" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`
                  w-2.5 h-2.5 rounded-full transition-all duration-300
                  ${selectedIndex === index 
                    ? 'bg-primary w-8' 
                    : 'bg-primary/30 hover:bg-primary/50'
                  }
                `}
                aria-label={`انتقل للشهادة ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
