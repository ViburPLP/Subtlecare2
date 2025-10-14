import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Per Case',
    price: '3,000',
    billing: 'per bill reviewed',
    description: 'Complete audit and quote comparison',
    features: [
      'Full bill audit & line-item review',
      'Up to 3 provider quotes',
      'Detailed savings report',
      'Email support',
      '48-hour turnaround',
      'Error identification',
    ],
    cta: 'Start a case',
    ctaId: 'get-started',
  },
  {
    name: 'Bills Above KES 100K',
    price: '3,000 + 20%',
    billing: 'of savings identified',
    description: 'Maximum value for high-cost cases',
    features: [
      'Everything in Per Case',
      'Priority processing (24h)',
      'Dedicated case manager',
      'Negotiation support',
      'Payment plan coordination',
      'Success-based additional fee',
    ],
    highlight: true,
    cta: 'Start a case',
    ctaId: 'get-started',
  },
  {
    name: 'Employer Basic',
    price: '50,000',
    billing: 'per month',
    description: 'For small teams (up to 20 employees)',
    features: [
      'Unlimited bill reviews',
      'Employee self-service portal',
      'Monthly utilization reports',
      'Email support',
      'Standard processing times',
    ],
    cta: 'Talk to sales',
    ctaId: 'get-started',
  },
  {
    name: 'Employer Standard',
    price: '120,000',
    billing: 'per month',
    description: 'For growing organizations (up to 100 employees)',
    features: [
      'Everything in Basic',
      'Priority processing',
      'Dedicated account manager',
      'Quarterly savings analytics',
      'Custom integrations',
      'Phone support',
    ],
    cta: 'Talk to sales',
    ctaId: 'get-started',
  },
  {
    name: 'Employer Enterprise',
    price: 'Custom',
    billing: 'tailored pricing',
    description: 'For large organizations (100+ employees)',
    features: [
      'Everything in Standard',
      'White-label option',
      'API access',
      'Advanced reporting & analytics',
      'Onsite training',
      '24/7 priority support',
      'Custom workflows',
    ],
    cta: 'Talk to sales',
    ctaId: 'get-started',
  },
];

const addOns = [
  { name: 'Expert Second Opinion', price: 'Recommended - Contact for quote' },
  { name: 'Admission Support Package', price: 'Recommended - Contact for quote' },
  { name: 'Home Care Coordination', price: 'Recommended - Contact for quote' },
  { name: 'International Medical Travel', price: 'Recommended - Contact for quote' },
];

export default function PricingSection() {
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
  };

  return (
    <section id="pricing" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#0b1430] mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-[#0b1430]/70 max-w-2xl mx-auto">
            Choose the plan that works best for you. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 ${
                plan.highlight
                  ? 'border-2 border-[#0198a7] shadow-xl scale-105 lg:col-span-1'
                  : 'border border-[#0198a7] border-opacity-20 shadow-sm'
              } transition-all duration-320 hover:shadow-xl hover:-translate-y-1 ${
                index >= 2 ? 'md:col-span-1' : ''
              }`}
            >
              {plan.highlight && (
                <div className="inline-block px-3 py-1 bg-[#0198a7] text-white text-xs font-medium rounded-full mb-4">
                  Best Value
                </div>
              )}

              <h3 className="text-lg font-semibold text-[#0b1430] mb-2">
                {plan.name}
              </h3>
              <p className="text-xs text-[#0b1430]/60 mb-4">{plan.description}</p>

              <div className="mb-4">
                <span className="text-2xl font-bold text-[#0b1430]">
                  {plan.price === 'Custom' ? plan.price : `KES ${plan.price}`}
                </span>
                <div className="text-xs text-[#0b1430]/60 mt-1">{plan.billing}</div>
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check
                      className="w-4 h-4 text-[#0198a7] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-xs text-[#0b1430]/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollToSection(plan.ctaId)}
                className={`block w-full text-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-220 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.highlight
                    ? 'bg-[#0198a7] text-white hover:shadow-lg focus-visible:outline-[#0198a7]'
                    : 'bg-white border-2 border-[#0198a7] text-[#0198a7] hover:bg-[#0198a7] hover:bg-opacity-5 focus-visible:outline-[#0198a7]'
                }`}
                aria-label={`${plan.cta} for ${plan.name}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-[#f6f8fa] rounded-xl p-8">
          <h3 className="text-xl font-semibold text-[#0b1430] mb-6 text-center">
            Add-on Services
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#0198a7] border-opacity-20"
              >
                <span className="font-medium text-[#0b1430]">{addon.name}</span>
                <span className="text-sm text-[#0198a7]">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
