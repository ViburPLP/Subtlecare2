import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b1430] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Subtle Care</h3>
            <p className="text-white/70 leading-relaxed">
              Transparent healthcare billing and patient advocacy for families and organizations.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors duration-150">
                  How it works
                </a>
              </li>
              <li>
                <a href="#portal" className="text-white/70 hover:text-white transition-colors duration-150">
                  Client Portal
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/70 hover:text-white transition-colors duration-150">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-[#0198a7] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a href="mailto:hello@subtlecare.co.ke" className="text-white/70 hover:text-white transition-colors duration-150">
                  hello@subtlecare.co.ke
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-[#0198a7] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a href="tel:+254700000000" className="text-white/70 hover:text-white transition-colors duration-150">
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#0198a7] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-white/70">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-center text-sm text-white/60 mb-6">
            <p className="mb-4">
              © {new Date().getFullYear()} Subtle Care. All rights reserved. | Privacy Policy | Terms of Service
            </p>
            <div className="max-w-2xl mx-auto text-xs text-white/50 bg-white/5 rounded-lg p-4">
              <p className="font-medium mb-2">Sources & Notes</p>
              <p>
                Content and pricing model based on the Subtle Care service framework.
                Pricing includes KES 3,000 per-case bill review and 20% of savings for bills above KES 100,000.
                Employer subscription tiers and add-on service pricing are recommended and customizable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
