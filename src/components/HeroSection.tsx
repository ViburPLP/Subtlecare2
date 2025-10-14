import { useState, useEffect, useRef } from 'react';

function Counter({ end, label, prefix = '' }: { end: number; label: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 800;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
        {prefix}{count.toLocaleString()}+
      </div>
      <div className="text-sm text-white/80">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0198a7]" />
        <div className="absolute inset-0 bg-[#0b1430] opacity-40" />

        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="absolute top-20 right-20 w-64 h-64 bg-[#253f94] rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`space-y-8 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`}>
            <h1 className="text-white">
              Fair, clear hospital bills — guided every step.
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Upload your hospital invoice. We audit, compare quotes and arrange independent second opinions so families don't pay more than they should.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('get-started')}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#0198a7] bg-white rounded-lg transition-all duration-220 hover:scale-105 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Start your bill review"
              >
                Start your bill review
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-transparent border-2 border-white rounded-lg transition-all duration-220 hover:scale-105 hover:bg-white hover:text-[#0198a7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Learn how it works"
              >
                How it works
              </button>
            </div>
            <p className="text-sm text-white/70">
              Trusted by families, employers and healthcare advocates.
            </p>
          </div>

          <div className={`grid grid-cols-3 gap-8 mt-16 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
            <Counter end={5000} label="Bills Reviewed" />
            <Counter end={2500} label="Families Helped" />
            <Counter end={8} label="Million Saved" prefix="KES " />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
