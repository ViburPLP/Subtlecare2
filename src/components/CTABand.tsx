import { ArrowRight } from 'lucide-react';

export default function CTABand() {
  return (
    <section className="bg-[#0198a7] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white mb-4">Ready to get started?</h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Upload your bill and let our team start working for you today
        </p>
        <a
          href="#portal"
          className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-[#0198a7] bg-white rounded-lg transition-all duration-220 hover:scale-105 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Start your bill review now"
        >
          Start your bill review
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
