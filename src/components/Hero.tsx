import { useState, useEffect } from 'react';
import { FileText, UserCheck, Shield } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`space-y-8 ${isVisible ? 'animate-slideUp' : 'opacity-0'}`}>
            <h1 className="text-[#0b1430]">
              Fair, clear hospital bills — guided every step.
            </h1>
            <p className="text-lg sm:text-xl text-[#0b1430]/70 leading-relaxed">
              Upload your hospital invoice. We audit, compare quotes and arrange independent second opinions so families don't pay more than they should.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#portal"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#0198a7] rounded-lg transition-all duration-220 hover:scale-105 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0198a7]"
                aria-label="Start your bill review"
              >
                Start your bill review
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-[#253f94] bg-white border-2 border-[#253f94] rounded-lg transition-all duration-220 hover:scale-105 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#253f94]"
                aria-label="Learn how it works"
              >
                How it works
              </a>
            </div>
            <p className="text-sm text-[#0b1430]/60">
              Trusted by families, employers and healthcare advocates.
            </p>
          </div>

          <div className={`relative ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
                <circle cx="200" cy="200" r="180" fill="#f6f8fa" className="animate-pulse" style={{ animationDuration: '3s' }} />

                <g className="animate-slideUp" style={{ animationDelay: '400ms' }}>
                  <rect x="80" y="120" width="240" height="160" rx="8" fill="white" stroke="#0198a7" strokeWidth="2" />
                  <rect x="100" y="140" width="80" height="8" rx="4" fill="#0198a7" opacity="0.3" />
                  <rect x="100" y="160" width="120" height="8" rx="4" fill="#0198a7" opacity="0.2" />
                  <rect x="100" y="180" width="100" height="8" rx="4" fill="#0198a7" opacity="0.2" />
                  <circle cx="270" cy="160" r="24" fill="#253f94" />
                  <path d="M 265 160 L 268 163 L 275 156" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </g>

                <g className="animate-fadeIn" style={{ animationDelay: '800ms' }}>
                  <circle cx="100" cy="320" r="20" fill="#0198a7" opacity="0.8" />
                  <circle cx="150" cy="310" r="16" fill="#253f94" opacity="0.6" />
                  <circle cx="300" cy="330" r="18" fill="#0198a7" opacity="0.7" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
