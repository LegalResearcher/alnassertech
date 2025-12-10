interface LogoProps {
  isScrolled?: boolean;
  className?: string;
}

const Logo = ({ isScrolled = false, className = "" }: LogoProps) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-10 h-10 transition-all duration-300 ${className}`}
    >
      {/* Background hexagon shape */}
      <path
        d="M24 2L44 14V34L24 46L4 34V14L24 2Z"
        className={`transition-all duration-300 ${
          isScrolled ? "fill-primary" : "fill-primary-foreground"
        }`}
      />
      
      {/* Inner hexagon border */}
      <path
        d="M24 6L40 16V32L24 42L8 32V16L24 6Z"
        className={`transition-all duration-300 ${
          isScrolled ? "fill-background" : "fill-primary"
        }`}
      />
      
      {/* Code brackets < > */}
      <path
        d="M14 20L10 24L14 28"
        className={`transition-all duration-300 stroke-2 ${
          isScrolled ? "stroke-primary" : "stroke-primary-foreground"
        }`}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 20L38 24L34 28"
        className={`transition-all duration-300 stroke-2 ${
          isScrolled ? "stroke-primary" : "stroke-primary-foreground"
        }`}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Letter N - stylized */}
      <text
        x="24"
        y="28"
        textAnchor="middle"
        className={`text-[18px] font-black transition-all duration-300 ${
          isScrolled ? "fill-primary" : "fill-primary-foreground"
        }`}
        style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.5px' }}
      >
        N
      </text>
    </svg>
  );
};

export default Logo;
