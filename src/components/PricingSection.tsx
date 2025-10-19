import { Check, Stethoscope, Building2, Home, Plane } from 'lucide-react';

const plans = [
  {
    name: 'Per Case',
    price: '3,000',
    billing: 'per bill reviewed',
    description: 'Ideal for individual cases and one-time bill reviews',
    features: [
      'Full bill audit & line-item review',
      'Up to 3 provider quotes',
      'Detailed savings report',
      'Email support',
      '48-hour turnaround',
      'Error identification',
      'Transparent breakdown of charges',
    ],
    cta: 'Start a case',
    ctaId: 'get-started',
  },
  {
    name: 'Bills Above KES 100K',
    price: '3,000 + 20%',
    billing: 'of savings identified',
    description: 'Best value for high-cost medical cases',
    features: [
      'Everything in Per Case',
      'Priority processing (24h)',
      'Dedicated case manager',
      'Negotiation support with providers',
      'Payment plan coordination',
      'Success-based fee only on savings',
      'Hospital liaison services',
      'Cost reduction strategies',
    ],
    highlight: true,
    cta: 'Start a case',
    ctaId: 'get-started',
  },
  {
    name: 'Employer Enterprise',
    price: 'Custom',
    billing: 'tailored pricing',
    description: 'Comprehensive solution for organizations managing multiple cases',
    features: [
      'Unlimited bill reviews for employees',
      'Dedicated account manager',
      'Employee self-service portal',
      'White-label option available',
      'API access & custom integrations',
      'Advanced reporting & analytics',
      'Onsite training & support',
      '24/7 priority support',
      'Quarterly business reviews',
      'Custom workflows & processes',
    ],
    cta: 'Contact sales',
    ctaId: 'get-started',
  },
];

const addOns = [
  {
    name: 'Expert Second Opinion',
    icon: Stethoscope,
    description: 'Connect with qualified medical specialists for independent assessment of diagnosis and treatment plans. Get clarity and confidence in your healthcare decisions.',
    benefits: ['Board-certified specialists', 'Detailed medical report', 'Treatment alternatives review', 'Virtual consultation included'],
    price: 'Contact for quote',
  },
  {
    name: 'Admission Support Package',
    icon: Building2,
    description: 'Navigate hospital admissions with expert guidance. We handle pre-authorization, coordinate with insurance, and provide cost estimates before admission.',
    benefits: ['Pre-authorization assistance', 'Insurance coordination', 'Cost estimate & breakdown', 'Hospital selection guidance'],
    price: 'Contact for quote',
  },
  {
    name: 'Home Care Coordination',
    icon: Home,
    description: 'Arrange professional post-hospital care at home including nursing, physiotherapy, and medical equipment rental at transparent, competitive rates.',
    benefits: ['Vetted care providers', 'Equipment rental coordination', 'Care plan management', 'Quality monitoring'],
    price: 'Contact for quote',
  },
  {
    name: 'International Medical Travel',
    icon: Plane,
    description: 'Access affordable, high-quality medical care abroad. We coordinate everything from hospital selection to travel logistics and post-treatment follow-up.',
    benefits: ['Hospital accreditation verification', 'Travel & accommodation support', 'Medical records coordination', 'Cost comparison across facilities'],
    price: 'Contact for quote',
  },
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

        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 ${
                plan.highlight
                  ? 'border-2 border-[#0198a7] shadow-2xl scale-105'
                  : 'border border-[#0198a7] border-opacity-20 shadow-sm'
              } transition-all duration-320 hover:shadow-xl hover:-translate-y-1`}
            >
              {plan.highlight && (
                <div className="inline-block px-3 py-1 bg-[#0198a7] text-white text-xs font-medium rounded-full mb-4">
                  Best Value
                </div>
              )}

              <h3 className="text-xl font-semibold text-[#0b1430] mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-[#0b1430]/60 mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-[#0b1430]">
                  {plan.price === 'Custom' ? plan.price : `KES ${plan.price}`}
                </span>
                <div className="text-sm text-[#0b1430]/60 mt-1">{plan.billing}</div>
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

              <button
                onClick={() => scrollToSection(plan.ctaId)}
                className={`block w-full text-center px-6 py-3 rounded-lg text-sm font-medium transition-all duration-220 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 ${
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

        <div className="bg-[#f6f8fa] rounded-xl p-8 sm:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-[#0b1430] mb-4">
              Enhance your care with add-on services
            </h3>
            <p className="text-[#0b1430]/70 max-w-2xl mx-auto">
              Complementary services designed to support your healthcare journey beyond bill review
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-[#0198a7] border-opacity-20 hover:border-[#0198a7] hover:shadow-xl transition-all duration-320 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#0198a7] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <addon.icon className="w-6 h-6 text-[#0198a7]" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-[#0b1430] mb-2">
                      {addon.name}
                    </h4>
                    <p className="text-sm text-[#0b1430]/70 leading-relaxed">
                      {addon.description}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-medium text-[#0b1430]/70 mb-2">What's included:</p>
                  <ul className="grid gap-2">
                    {addon.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#0198a7] flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-sm text-[#0b1430]/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#0198a7] border-opacity-10">
                  <span className="text-sm font-medium text-[#0198a7]">{addon.price}</span>
                  <button
                    onClick={() => scrollToSection('get-started')}
                    className="text-sm font-medium text-[#253f94] hover:text-[#0198a7] transition-colors duration-150"
                    aria-label={`Learn more about ${addon.name}`}
                  >
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
