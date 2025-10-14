import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-320 ${
        isScrolled
          ? 'bg-white shadow-md py-4'
          : 'bg-white/95 backdrop-blur-sm py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-semibold text-[#0b1430] hover:text-[#0198a7] transition-colors duration-220"
          >
            Subtle Care
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#0b1430]/70 hover:text-[#0198a7] font-medium transition-colors duration-220"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-[#0b1430]/70 hover:text-[#0198a7] font-medium transition-colors duration-220"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('get-started')}
              className="text-[#0b1430]/70 hover:text-[#0198a7] font-medium transition-colors duration-220"
            >
              Get Started
            </button>
            <button
              onClick={() => scrollToSection('get-started')}
              className="px-6 py-3 bg-[#0198a7] text-white rounded-lg font-medium transition-all duration-220 hover:scale-105 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0198a7]"
              aria-label="Start your bill review"
            >
              Start your bill review
            </button>
          </div>

          <button
            className="md:hidden p-2 text-[#0b1430]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-slideUp">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 text-[#0b1430]/70 hover:text-[#0198a7] hover:bg-[#f6f8fa] rounded-lg font-medium transition-colors duration-220"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-4 py-2 text-[#0b1430]/70 hover:text-[#0198a7] hover:bg-[#f6f8fa] rounded-lg font-medium transition-colors duration-220"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('get-started')}
              className="block w-full text-left px-4 py-2 text-[#0b1430]/70 hover:text-[#0198a7] hover:bg-[#f6f8fa] rounded-lg font-medium transition-colors duration-220"
            >
              Get Started
            </button>
            <button
              onClick={() => scrollToSection('get-started')}
              className="block w-full px-6 py-3 bg-[#0198a7] text-white rounded-lg font-medium transition-all duration-220 hover:shadow-lg"
              aria-label="Start your bill review"
            >
              Start your bill review
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
