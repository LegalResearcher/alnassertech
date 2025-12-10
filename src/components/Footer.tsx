import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-black text-sm">ن</span>
            </div>
            <span className="text-muted-foreground text-sm">
              © {currentYear} الناصر تِك للحلول الرقمية. جميع الحقوق محفوظة.
            </span>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>صُنع بكل</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>في صنعاء</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
