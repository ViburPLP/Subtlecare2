import { useState } from 'react';
import { Shield, Lock, CreditCard } from 'lucide-react';
import FileUpload from '../components/FileUpload';
import DashboardPreview from '../components/DashboardPreview';
import Pricing from '../components/PricingSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Portal() {
  const [hasUploaded, setHasUploaded] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-[#0198a7] border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-xl font-semibold text-[#0b1430]">
              Subtle Care
            </a>
            <a
              href="/"
              className="text-sm text-[#0b1430]/70 hover:text-[#0b1430] transition-colors duration-150"
            >
              Back to home
            </a>
          </div>
        </div>
      </nav>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-[#0b1430] mb-4">Get started with your bill review</h1>
            <p className="text-lg text-[#0b1430]/70 max-w-2xl mx-auto">
              Upload your medical bills securely and let our team start working for you
            </p>
          </div>

          <div className="mb-12">
            <FileUpload />
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

          {hasUploaded && (
            <div className="mb-12 animate-slideUp">
              <DashboardPreview />
            </div>
          )}
        </div>
      </section>

      <Pricing />
      <FAQ />

      <section className="bg-[#f6f8fa] py-12 border-t border-[#0198a7] border-opacity-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#0198a7] border-opacity-20">
            <h3 className="text-xl font-semibold text-[#0b1430] mb-4">
              Need help? We're here for you
            </h3>
            <p className="text-[#0b1430]/70 mb-6">
              Chat with our team or send us a message and we'll respond within hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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

      <Footer />
    </div>
  );
}
