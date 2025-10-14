import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Per Case',
    price: '15,000',
    description: 'One-time review for individuals',
    features: [
      'Complete bill audit',
      'Up to 3 provider quotes',
      'Savings report',
      'Email support',
      '48-hour turnaround',
    ],
  },
  {
    name: 'Employer Plan',
    price: '75,000',
    description: 'Monthly subscription for organizations',
    features: [
      'Unlimited employee reviews',
      'Priority processing',
      'Dedicated account manager',
      'Quarterly savings reports',
      'Custom integrations',
      'Phone & email support',
    ],
    highlight: true,
  },
  {
    name: 'Diaspora Package',
    price: '25,000',
    description: 'For families coordinating care remotely',
    features: [
      'Extended review period',
      'International coordination',
      'Currency conversion support',
      'Family account access',
      'WhatsApp support',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#f6f8fa] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#0b1430] mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-[#0b1430]/70 max-w-2xl mx-auto">
            Choose the plan that works best for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 ${
                plan.highlight
                  ? 'border-2 border-[#0198a7] shadow-lg scale-105'
                  : 'border border-[#0198a7] border-opacity-20 shadow-sm'
              } transition-all duration-320 hover:shadow-xl hover:-translate-y-1`}
            >
              {plan.highlight && (
                <div className="inline-block px-3 py-1 bg-[#0198a7] text-white text-xs font-medium rounded-full mb-4">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-semibold text-[#0b1430] mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-[#0b1430]/60 mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-[#0b1430]">KES {plan.price}</span>
                <span className="text-[#0b1430]/60">
                  {plan.name === 'Employer Plan' ? '/month' : ''}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 text-[#0198a7] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-[#0b1430]/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#portal"
                className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-all duration-220 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.highlight
                    ? 'bg-[#0198a7] text-white hover:shadow-lg focus-visible:outline-[#0198a7]'
                    : 'bg-white border-2 border-[#0198a7] text-[#0198a7] hover:bg-[#0198a7] hover:bg-opacity-5 focus-visible:outline-[#0198a7]'
                }`}
                aria-label={`Get started with ${plan.name}`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
