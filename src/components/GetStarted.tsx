import { Shield, Lock, CreditCard, Mail, MessageCircle } from 'lucide-react';

export default function GetStarted() {
  const phoneNumber = '+254700000000';
  const email = 'hello@subtlecare.co.ke';
  const whatsappMessage = encodeURIComponent('Hello Subtle Care! I would like to share my medical bills for review.');

  return (
    <section id="get-started" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#0b1430] mb-4">Contact us to get started</h2>
          <p className="text-lg text-[#0b1430]/70 max-w-2xl mx-auto">
            Share your medical bills with us and let our team start working for you
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-[#f6f8fa] rounded-xl p-8 sm:p-12">
            <h3 className="text-xl font-semibold text-[#0b1430] mb-6 text-center">
              Share your documents via
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href={`mailto:${email}?subject=Medical Bill Review Request&body=Hello Subtle Care Team,%0D%0A%0D%0AI would like to submit my medical bills for review. Please find them attached.%0D%0A%0D%0AThank you.`}
                className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border-2 border-[#0198a7] hover:border-[#0198a7] hover:shadow-xl transition-all duration-220 hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 bg-[#0198a7] bg-opacity-10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0198a7] group-hover:scale-110 transition-all duration-220">
                  <Mail className="w-8 h-8 text-[#0198a7] group-hover:text-white transition-colors duration-220" aria-hidden="true" />
                </div>
                <h4 className="text-lg font-semibold text-[#0b1430] mb-2">Email</h4>
                <p className="text-sm text-[#0b1430]/70 text-center mb-4">
                  Send your bills securely via email
                </p>
                <span className="text-sm font-medium text-[#0198a7] group-hover:underline">
                  Send Email →
                </span>
              </a>

              <a
                href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border-2 border-[#25D366] hover:border-[#25D366] hover:shadow-xl transition-all duration-220 hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 bg-[#25D366] bg-opacity-10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#25D366] group-hover:scale-110 transition-all duration-220">
                  <MessageCircle className="w-8 h-8 text-[#25D366] group-hover:text-white transition-colors duration-220" aria-hidden="true" />
                </div>
                <h4 className="text-lg font-semibold text-[#0b1430] mb-2">WhatsApp</h4>
                <p className="text-sm text-[#0b1430]/70 text-center mb-4">
                  Share your bills via WhatsApp
                </p>
                <span className="text-sm font-medium text-[#25D366] group-hover:underline">
                  Open WhatsApp →
                </span>
              </a>
            </div>
            <p className="text-sm text-[#0b1430]/60 text-center mt-6">
              Our team will review your documents and respond within 48 hours
            </p>

            <div className="mt-8 pt-8 border-t border-[#0198a7] border-opacity-20">
              <p className="text-xs font-medium text-[#0b1430]/70 text-center mb-4">
                Accredited & Recognized by
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                <div className="flex flex-col items-center gap-2 px-4 py-3 bg-white rounded-lg border border-[#0198a7] border-opacity-10">
                  <div className="w-12 h-12 bg-[#0198a7] bg-opacity-10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#0198a7]" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold text-[#0b1430] text-center">ODPC Kenya</span>
                </div>

                <div className="flex flex-col items-center gap-2 px-4 py-3 bg-white rounded-lg border border-[#253f94] border-opacity-10">
                  <div className="w-12 h-12 bg-[#253f94] bg-opacity-10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#253f94]" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold text-[#0b1430] text-center">KMPDC</span>
                </div>

                <div className="flex flex-col items-center gap-2 px-4 py-3 bg-white rounded-lg border border-[#0198a7] border-opacity-10">
                  <div className="w-12 h-12 bg-[#0198a7] bg-opacity-10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#0198a7]" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold text-[#0b1430] text-center">MOH Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="flex items-start gap-3 p-4 bg-[#f6f8fa] rounded-lg">
            <div className="w-8 h-8 bg-[#0198a7] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4 text-[#0198a7]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#0b1430] mb-1">GDPR Compliant</p>
              <p className="text-xs text-[#0b1430]/60">
                Your data is protected under strict privacy standards
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-[#f6f8fa] rounded-lg">
            <div className="w-8 h-8 bg-[#253f94] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Lock className="w-4 h-4 text-[#253f94]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#0b1430] mb-1">Encrypted Storage</p>
              <p className="text-xs text-[#0b1430]/60">
                Bank-level security for all documents
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-[#f6f8fa] rounded-lg">
            <div className="w-8 h-8 bg-[#0198a7] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-4 h-4 text-[#0198a7]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#0b1430] mb-1">Secure Payment</p>
              <p className="text-xs text-[#0b1430]/60">
                PCI-DSS certified payment processing
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#f6f8fa] rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-[#0b1430] mb-4">
            Need help? We're here for you
          </h3>
          <p className="text-[#0b1430]/70 mb-6">
            Chat with our team or send us a message and we'll respond within hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@subtlecare.co.ke"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0198a7] text-white rounded-lg font-medium transition-all duration-220 hover:scale-105 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0198a7]"
            >
              Email us
            </a>
            <a
              href="tel:+254700000000"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-[#253f94] text-[#253f94] rounded-lg font-medium transition-all duration-220 hover:scale-105 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#253f94]"
            >
              Call us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
