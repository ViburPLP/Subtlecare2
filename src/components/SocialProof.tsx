import { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Subtle Care saved us over $12,000 on a surgical procedure. The team was thorough, responsive, and genuinely cared about our situation.",
    author: "Sarah M.",
    role: "Parent, Nairobi",
  },
  {
    quote: "As an employer, offering Subtle Care to our team has been transformative. Our employees feel supported, and we've reduced healthcare costs significantly.",
    author: "James K.",
    role: "HR Director",
  },
  {
    quote: "I was overwhelmed by medical bills after an emergency. Subtle Care explained everything, found better options, and helped me afford the care I needed.",
    author: "Patricia N.",
    role: "Patient Advocate",
  },
];

function Counter({ end, label }: { end: number; label: string }) {
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
      <div className="text-4xl sm:text-5xl font-bold text-[#0198a7] mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="text-sm sm:text-base text-[#0b1430]/70">{label}</div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Counter end={5000} label="Bills Reviewed" />
          <Counter end={2500} label="Families Helped" />
          <Counter end={8} label="Million Saved (KES)" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#f6f8fa] p-8 rounded-xl relative"
            >
              <Quote className="w-10 h-10 text-[#0198a7] opacity-20 mb-4" aria-hidden="true" />
              <p className="text-[#0b1430]/80 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="font-medium text-[#0b1430]">{testimonial.author}</div>
                <div className="text-sm text-[#0b1430]/60">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
