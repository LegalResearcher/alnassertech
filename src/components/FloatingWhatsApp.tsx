import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappNumber = "967772762090";
  const whatsappMessage = encodeURIComponent("مرحباً، أرغب في الاستفسار عن خدماتكم");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="تواصل عبر واتساب"
    >
      {/* Pulse Ring */}
      <div className="absolute inset-0 rounded-full bg-[hsl(142_70%_45%)] animate-ping opacity-25" />
      
      {/* Button */}
      <div className="relative w-16 h-16 rounded-full bg-[hsl(142_70%_45%)] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group-hover:bg-[hsl(142_70%_40%)]">
        <MessageCircle className="w-8 h-8 text-primary-foreground" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        تحدث معنا الآن
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-foreground" />
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
