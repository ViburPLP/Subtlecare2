import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const phoneNumber = '+254700000000';
  const message = encodeURIComponent('Hello Subtle Care! I have a question about your services.');

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {isExpanded && (
            <div className="absolute bottom-20 right-0 w-72 bg-white rounded-xl shadow-2xl p-6 mb-2 animate-slideUp border border-[#25D366]">
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 text-[#0b1430]/60 hover:text-[#0b1430] transition-colors duration-150"
                aria-label="Close chat tooltip"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b1430] mb-1">Chat with us</h4>
                  <p className="text-sm text-[#0b1430]/70">
                    We typically reply within minutes
                  </p>
                </div>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="w-full px-4 py-3 bg-[#25D366] text-white rounded-lg font-medium transition-all duration-220 hover:scale-105 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
              >
                Start WhatsApp Chat
              </button>
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            onMouseEnter={() => !isExpanded && setIsExpanded(true)}
            className="w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center transition-all duration-220 hover:scale-110 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] group animate-fadeIn"
            aria-label="Open WhatsApp chat"
          >
            <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-220" aria-hidden="true" />
          </button>

          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" aria-hidden="true" />
        </div>
      )}
    </>
  );
}
