@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=IBM+Plex+Sans+Arabic:wght@500;600;700&display=swap');

@layer base {
  :root {
    --background: 210 24% 98%;
    --foreground: 222 45% 13%;

    --card: 0 0% 100%;
    --card-foreground: 222 45% 13%;

    --popover: 0 0% 100%;
    --popover-foreground: 222 45% 13%;

    --primary: 32 46% 47%;
    --primary-foreground: 0 0% 100%;

    --secondary: 210 20% 95%;
    --secondary-foreground: 222 45% 13%;

    --muted: 210 16% 93%;
    --muted-foreground: 216 12% 42%;

    --accent: 32 46% 47%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 72% 48%;
    --destructive-foreground: 0 0% 100%;

    --border: 214 18% 88%;
    --input: 214 18% 88%;
    --ring: 32 46% 47%;

    --radius: 0.5rem;

    /* Custom Design Tokens — navy hero bookends the light content, brass is the single accent */
    --hero-gradient: linear-gradient(160deg, hsl(222 46% 10%) 0%, hsl(222 42% 15%) 55%, hsl(222 40% 12%) 100%);
    --accent-glow: 0 0 40px hsl(32 46% 47% / 0.18);
    --card-shadow: 0 1px 2px hsl(222 45% 13% / 0.04), 0 6px 20px hsl(222 45% 13% / 0.06);
    --card-hover-shadow: 0 10px 30px hsl(222 45% 13% / 0.1);
    --text-gradient: linear-gradient(135deg, hsl(32 50% 55%) 0%, hsl(32 60% 68%) 100%);
  }

  .dark {
    --background: 222 46% 8%;
    --foreground: 210 20% 95%;

    --card: 222 40% 12%;
    --card-foreground: 210 20% 95%;

    --popover: 222 40% 12%;
    --popover-foreground: 210 20% 95%;

    --primary: 32 55% 58%;
    --primary-foreground: 222 46% 10%;

    --secondary: 222 30% 18%;
    --secondary-foreground: 210 20% 95%;

    --muted: 222 25% 20%;
    --muted-foreground: 216 12% 62%;

    --accent: 32 55% 58%;
    --accent-foreground: 222 46% 10%;

    --destructive: 0 62% 50%;
    --destructive-foreground: 0 0% 100%;

    --border: 222 25% 22%;
    --input: 222 25% 22%;
    --ring: 32 55% 58%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-background text-foreground font-cairo antialiased;
    direction: rtl;
  }
}

@layer components {
  .text-gradient {
    @apply bg-clip-text text-transparent;
    background-image: var(--text-gradient);
  }

  .hero-gradient {
    background: var(--hero-gradient);
  }

  .accent-glow {
    box-shadow: var(--accent-glow);
  }

  .card-elevated {
    box-shadow: var(--card-shadow);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .card-elevated:hover {
    box-shadow: var(--card-hover-shadow);
    transform: translateY(-4px);
  }

  .floating-animation {
    animation: float 6s ease-in-out infinite;
  }

  .pulse-glow {
    animation: pulseGlow 2s ease-in-out infinite;
  }

  .blueprint-grid {
    background-image: linear-gradient(hsl(32 46% 60% / 0.08) 1px, transparent 1px),
      linear-gradient(90deg, hsl(32 46% 60% / 0.08) 1px, transparent 1px);
    background-size: 64px 64px;
  }

  .seal {
    position: relative;
  }

  .seal::before {
    content: "";
    position: absolute;
    inset: -6px;
    border: 1px solid hsl(32 46% 58% / 0.4);
    border-radius: 9999px;
  }
}

@layer utilities {
  .animate-fade-up {
    animation: fadeUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .animate-fade-up-delay-1 {
    animation: fadeUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s forwards;
    opacity: 0;
  }

  .animate-fade-up-delay-2 {
    animation: fadeUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
    opacity: 0;
  }

  .animate-fade-up-delay-3 {
    animation: fadeUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
    opacity: 0;
  }

  .animate-scale-in {
    animation: scaleIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulseGlow {
  0%, 100% {
    box-shadow: 0 0 20px hsl(160 84% 39% / 0.4);
  }
  50% {
    box-shadow: 0 0 40px hsl(160 84% 39% / 0.6);
  }
}
