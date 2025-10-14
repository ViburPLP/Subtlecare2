import { Eye, DollarSign, Stethoscope } from 'lucide-react';

const values = [
  {
    icon: Eye,
    title: 'Transparent Bills',
    description: 'Every line item reviewed and explained in plain language you can understand.',
  },
  {
    icon: DollarSign,
    title: 'Multiple Quotes',
    description: 'Compare verified quotes from trusted providers to ensure fair pricing.',
  },
  {
    icon: Stethoscope,
    title: 'Independent Second Opinions',
    description: 'Connect with qualified medical professionals for unbiased care recommendations.',
  },
];

export default function ValueStrip() {
  return (
    <section className="bg-[#f6f8fa] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-320 hover:-translate-y-1"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="w-14 h-14 bg-[#0198a7] bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all duration-220">
                <value.icon className="w-7 h-7 text-[#0198a7]" aria-hidden="true" />
              </div>
              <h3 className="text-[#0b1430] mb-3">{value.title}</h3>
              <p className="text-[#0b1430]/70 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
