import { FileSearch, DollarSign, Building2, Stethoscope, Baby, Home } from 'lucide-react';

const services = [
  {
    icon: FileSearch,
    title: 'Bill Review & Audit',
    description: 'Complete line-by-line audit of your hospital invoice to identify errors, overcharges, and questionable items.',
    price: 'KES 3,000',
    cta: 'Upload bill',
    ctaId: 'get-started',
  },
  {
    icon: DollarSign,
    title: 'Comparative Quotes',
    description: 'Get verified quotes from multiple trusted providers to compare pricing and find the best value for your care.',
    price: 'KES 3,000',
    cta: 'Get quotes',
    ctaId: 'get-started',
  },
  {
    icon: Building2,
    title: 'Admission Support & Coordination',
    description: 'Navigate hospital admissions with expert guidance, pre-authorization support, and cost estimates before you commit.',
    price: 'Recommended',
    cta: 'Learn more',
    ctaId: 'pricing',
  },
  {
    icon: Stethoscope,
    title: 'Expert Second Opinions',
    description: 'Connect with qualified medical professionals for independent assessment of diagnosis and treatment recommendations.',
    price: 'Recommended',
    cta: 'Find expert',
    ctaId: 'pricing',
  },
  {
    icon: Baby,
    title: 'Maternity Planner',
    description: 'Comprehensive pregnancy and delivery cost planning with hospital comparisons, package options, and budget tracking.',
    price: 'Free tool',
    cta: 'Use planner',
    ctaId: 'maternity-planner',
  },
  {
    icon: Home,
    title: 'Home-Based Care',
    description: 'Coordinate post-hospital care at home including nursing, physiotherapy, and medical equipment at transparent rates.',
    price: 'Recommended',
    cta: 'Arrange care',
    ctaId: 'pricing',
  },
];

export default function Services() {
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
    <section id="services" className="bg-[#f6f8fa] py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[#0b1430] mb-4">Our services</h2>
          <p className="text-lg text-[#0b1430]/70 max-w-2xl mx-auto">
            Comprehensive support for every stage of your healthcare journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-320 hover:-translate-y-2 border border-transparent hover:border-[#0198a7]"
            >
              <div className="w-14 h-14 bg-[#0198a7] bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0198a7] group-hover:scale-110 transition-all duration-220">
                <service.icon className="w-7 h-7 text-[#0198a7] group-hover:text-white transition-colors duration-220" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-[#0b1430] mb-3">{service.title}</h3>
              <p className="text-[#0b1430]/70 leading-relaxed mb-6">{service.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-[#0198a7] border-opacity-10">
                <span className="text-sm font-medium text-[#0198a7]">{service.price}</span>
                <button
                  onClick={() => scrollToSection(service.ctaId)}
                  className="text-sm font-medium text-[#253f94] hover:text-[#0198a7] transition-colors duration-150"
                  aria-label={`${service.cta} for ${service.title}`}
                >
                  {service.cta} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
