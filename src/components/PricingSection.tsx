import { Check, Stethoscope, Building2, Home, Plane, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

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
    detailedDescription: 'Our Expert Second Opinion service connects you with board-certified medical specialists who provide independent assessments of your diagnosis and treatment plans. Get the clarity and confidence you need to make informed healthcare decisions.',
    process: [
      'Submit your medical records and current diagnosis',
      'Our team matches you with a relevant specialist',
      'Specialist reviews your case thoroughly',
      'Receive detailed medical report with recommendations',
      'Virtual consultation to discuss findings',
    ],
    pricing: {
      general: { label: 'General Conditions', amount: 'KES 2,500' },
      specialized: { label: 'Specialized Conditions', amount: 'KES 5,000' },
    },
  },
  {
    name: 'Admission Support Package',
    icon: Building2,
    description: 'Navigate hospital admissions with expert guidance. We handle pre-authorization, coordinate with insurance, and provide cost estimates before admission.',
    benefits: ['Pre-authorization assistance', 'Insurance coordination', 'Cost estimate & breakdown', 'Hospital selection guidance'],
    detailedDescription: 'Comprehensive support from admission through discharge. Our team handles all coordination with the hospital and insurance providers, ensuring a smooth admission process and monitoring your case throughout your stay.',
    process: [
      'Pre-admission consultation and cost estimation',
      'Insurance pre-authorization processing',
      'Hospital admission coordination',
      'Daily monitoring during course of admission (up to 15 days)',
      'Discharge processing and final bill review',
    ],
    pricing: {
      package: { label: 'Package Cost', amount: 'KES 20,000' },
      includes: 'Includes admission processing, follow-up for up to 15 days, and discharge processing',
      additional: { label: 'Additional Days', amount: 'KES 1,000 per day after 15 days' },
      bonus: 'Final bill review offered complimentarily at no extra charge',
    },
  },
  {
    name: 'Home Care Coordination',
    icon: Home,
    description: 'Arrange professional post-hospital care at home including nursing, physiotherapy, and medical equipment rental at transparent, competitive rates.',
    benefits: ['Vetted care providers', 'Equipment rental coordination', 'Care plan management', 'Quality monitoring'],
    detailedDescription: 'Post-discharge care coordination designed to support your recovery at home. We arrange professional nursing, physiotherapy, medical equipment, and ongoing care management tailored to your specific needs.',
    process: [
      'Assessment of post-discharge care needs',
      'Matching with qualified care providers',
      'Medical equipment arrangement and rental',
      'Care plan development and coordination',
      'Ongoing quality monitoring and adjustments',
    ],
    pricing: {
      custom: true,
      description: 'Pricing is customized based on individual care needs, duration, and services required. Contact us for a personalized quote.',
    },
  },
  {
    name: 'International Medical Travel',
    icon: Plane,
    description: 'Access affordable, high-quality medical care abroad. We coordinate everything from hospital selection to travel logistics and post-treatment follow-up.',
    benefits: ['Hospital accreditation verification', 'Travel & accommodation support', 'Medical records coordination', 'Cost comparison across facilities'],
    detailedDescription: 'Access world-class medical care abroad at competitive prices. We handle everything from selecting accredited international hospitals to coordinating travel, accommodation, and ensuring seamless medical records transfer. Includes comprehensive support for international treatment and claims assistance.',
    process: [
      'Medical needs assessment and hospital selection',
      'Verification of hospital accreditation and specialists',
      'Cost comparison across multiple facilities',
      'Travel and accommodation coordination',
      'Medical records transfer and translation',
      'On-ground support during treatment',
      'Post-treatment follow-up and claims assistance',
    ],
    pricing: {
      custom: true,
      description: 'Pricing is tailored based on destination, treatment type, duration, and specific client requirements. We provide detailed quotes comparing multiple international facilities.',
    },
  },
];

export default function PricingSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

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

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
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
            {addOns.map((addon, index) => {
              const isExpanded = expandedCard === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 border border-[#0198a7] border-opacity-20 hover:border-[#0198a7] hover:shadow-xl transition-all duration-320 ${
                    isExpanded ? 'lg:col-span-2 shadow-xl border-[#0198a7]' : ''
                  }`}
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

                  {!isExpanded && (
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
                  )}

                  {isExpanded && (
                    <div className="space-y-6 mb-6">
                      <div>
                        <h5 className="text-sm font-semibold text-[#0b1430] mb-3">Overview</h5>
                        <p className="text-sm text-[#0b1430]/70 leading-relaxed">
                          {addon.detailedDescription}
                        </p>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-[#0b1430] mb-3">How it works</h5>
                        <ol className="space-y-2">
                          {addon.process.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 bg-[#0198a7] bg-opacity-10 rounded-full flex items-center justify-center text-xs font-semibold text-[#0198a7]">
                                {idx + 1}
                              </span>
                              <span className="text-sm text-[#0b1430]/80 pt-0.5">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="bg-[#f6f8fa] rounded-lg p-4">
                        <h5 className="text-sm font-semibold text-[#0b1430] mb-3">Pricing</h5>
                        {addon.pricing.custom ? (
                          <p className="text-sm text-[#0b1430]/70">{addon.pricing.description}</p>
                        ) : (
                          <div className="space-y-3">
                            {addon.pricing.general && (
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-[#0b1430]/80">{addon.pricing.general.label}</span>
                                <span className="text-sm font-semibold text-[#0198a7]">{addon.pricing.general.amount}</span>
                              </div>
                            )}
                            {addon.pricing.specialized && (
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-[#0b1430]/80">{addon.pricing.specialized.label}</span>
                                <span className="text-sm font-semibold text-[#0198a7]">{addon.pricing.specialized.amount}</span>
                              </div>
                            )}
                            {addon.pricing.package && (
                              <div>
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-sm text-[#0b1430]/80">{addon.pricing.package.label}</span>
                                  <span className="text-sm font-semibold text-[#0198a7]">{addon.pricing.package.amount}</span>
                                </div>
                                {addon.pricing.includes && (
                                  <p className="text-xs text-[#0b1430]/60 mb-2">{addon.pricing.includes}</p>
                                )}
                                {addon.pricing.additional && (
                                  <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs text-[#0b1430]/70">{addon.pricing.additional.label}</span>
                                    <span className="text-xs font-medium text-[#0198a7]">{addon.pricing.additional.amount}</span>
                                  </div>
                                )}
                                {addon.pricing.bonus && (
                                  <div className="mt-3 pt-3 border-t border-[#0198a7] border-opacity-10">
                                    <div className="flex items-start gap-2">
                                      <Check className="w-4 h-4 text-[#0198a7] flex-shrink-0 mt-0.5" aria-hidden="true" />
                                      <p className="text-xs font-medium text-[#0198a7]">{addon.pricing.bonus}</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3 pt-4 border-t border-[#0198a7] border-opacity-10">
                    <button
                      onClick={() => scrollToSection('get-started')}
                      className="flex-1 px-4 py-2.5 bg-[#0198a7] text-white rounded-lg text-sm font-medium transition-all duration-220 hover:scale-105 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0198a7]"
                      aria-label={`Get started with ${addon.name}`}
                    >
                      Get Started
                    </button>
                    <button
                      onClick={() => toggleCard(index)}
                      className="flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-[#0198a7] text-[#0198a7] rounded-lg text-sm font-medium transition-all duration-220 hover:bg-[#0198a7] hover:bg-opacity-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0198a7]"
                      aria-label={`${isExpanded ? 'Collapse' : 'Learn more about'} ${addon.name}`}
                    >
                      {isExpanded ? (
                        <>
                          <span>Show less</span>
                          <ChevronUp className="w-4 h-4" aria-hidden="true" />
                        </>
                      ) : (
                        <>
                          <span>Learn more</span>
                          <ChevronDown className="w-4 h-4" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
