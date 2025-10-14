import { useState, useEffect, useRef } from 'react';
import { Upload, Search, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Bill',
    description: 'Securely submit your hospital invoice and medical documents through our encrypted platform.',
  },
  {
    icon: Search,
    title: 'Expert Review',
    description: 'Our team audits every charge, sources alternative quotes, and identifies potential savings.',
  },
  {
    icon: CheckCircle,
    title: 'Get Results',
    description: 'Receive a clear breakdown, savings report, and options for second opinions within 48 hours.',
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[#0b1430] mb-4">How it works</h2>
          <p className="text-lg text-[#0b1430]/70 max-w-2xl mx-auto">
            Three simple steps to transparent healthcare billing
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-[#0198a7] bg-opacity-20" aria-hidden="true">
            <div
              className="h-full bg-[#0198a7] transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${isVisible ? 'animate-slideUp' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 80}ms` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-320 ${
                      activeStep === index
                        ? 'bg-[#0198a7] scale-110 shadow-lg'
                        : 'bg-[#0198a7] bg-opacity-10'
                    }`}
                  >
                    <step.icon
                      className={`w-9 h-9 transition-colors duration-220 ${
                        activeStep === index ? 'text-white' : 'text-[#0198a7]'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-[#0b1430]">{step.title}</h3>
                    <p className="text-[#0b1430]/70 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
