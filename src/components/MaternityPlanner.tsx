import { useState } from 'react';
import { Baby, Calculator, Building2, TrendingUp } from 'lucide-react';

export default function MaternityPlanner() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="maternity-planner" className="bg-[#f6f8fa] py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#0198a7] to-[#253f94] p-8 sm:p-12 text-white text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Baby className="w-8 h-8 text-white" aria-hidden="true" />
            </div>
            <h2 className="text-white mb-4">Maternity Cost Planner</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Plan your pregnancy and delivery costs with our comprehensive comparison tool. Compare hospitals, packages, and budget for your growing family.
            </p>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-8 py-4 bg-white text-[#0198a7] rounded-lg font-medium transition-all duration-220 hover:scale-105 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={isExpanded ? 'Hide maternity planner preview' : 'Use maternity planner'}
            >
              {isExpanded ? 'Hide Preview' : 'Use the maternity planner'}
            </button>
          </div>

          {isExpanded && (
            <div className="p-8 sm:p-12 animate-slideUp">
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-[#f6f8fa] rounded-lg">
                  <div className="w-12 h-12 bg-[#0198a7] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-6 h-6 text-[#0198a7]" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold text-[#0b1430] mb-2">Hospital Comparison</h4>
                  <p className="text-sm text-[#0b1430]/70">
                    Compare delivery packages from verified hospitals
                  </p>
                </div>

                <div className="text-center p-6 bg-[#f6f8fa] rounded-lg">
                  <div className="w-12 h-12 bg-[#253f94] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-6 h-6 text-[#253f94]" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold text-[#0b1430] mb-2">Cost Calculator</h4>
                  <p className="text-sm text-[#0b1430]/70">
                    Estimate total costs including pre and postnatal care
                  </p>
                </div>

                <div className="text-center p-6 bg-[#f6f8fa] rounded-lg">
                  <div className="w-12 h-12 bg-[#0198a7] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-[#0198a7]" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold text-[#0b1430] mb-2">Budget Tracker</h4>
                  <p className="text-sm text-[#0b1430]/70">
                    Track expenses and savings throughout pregnancy
                  </p>
                </div>
              </div>

              <div className="bg-[#0198a7] bg-opacity-5 rounded-lg p-6 border-2 border-[#0198a7] border-opacity-20">
                <h4 className="font-semibold text-[#0b1430] mb-4">What's included:</h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Antenatal visit cost estimates',
                    'Delivery package comparisons',
                    'Caesarean vs natural delivery costs',
                    'Postnatal care budgeting',
                    'Baby supplies checklist',
                    'Insurance coverage calculator',
                    'Payment plan options',
                    'Hidden cost alerts',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-[#0b1430]/80">
                      <span className="text-[#0198a7] mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-[#0b1430]/60 mb-4">
                  Free tool for all expecting families
                </p>
                <button
                  onClick={() => {
                    const element = document.getElementById('get-started');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="px-8 py-3 bg-[#0198a7] text-white rounded-lg font-medium transition-all duration-220 hover:scale-105 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0198a7]"
                  aria-label="Get started with maternity planner"
                >
                  Get started now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
