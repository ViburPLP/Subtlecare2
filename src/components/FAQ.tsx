import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does the bill review process work?',
    answer:
      'Upload your hospital invoice through our secure portal. Our team audits every line item, compares prices with verified providers, and delivers a comprehensive savings report within 48 hours.',
  },
  {
    question: 'Is my information secure?',
    answer:
      'Yes. We use bank-level encryption for all uploads and storage. Your medical information is protected under strict privacy policies compliant with Kenyan data protection laws and GDPR standards.',
  },
  {
    question: 'What if I don\'t find savings?',
    answer:
      'If we don\'t identify potential savings or billing errors, we\'ll refund 100% of your payment. Our goal is to ensure you only pay for value delivered.',
  },
  {
    question: 'Can you help with insurance claims?',
    answer:
      'While we focus on bill transparency and price comparison, we can connect you with trusted partners who specialize in insurance claim advocacy.',
  },
  {
    question: 'How long does the review take?',
    answer:
      'Standard reviews are completed within 48 hours. Employer plan members receive priority processing with 24-hour turnaround times.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#0b1430] mb-4">Frequently asked questions</h2>
          <p className="text-lg text-[#0b1430]/70">
            Everything you need to know about our service
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#0198a7] border-opacity-20 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-[#f6f8fa] transition-colors duration-150"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-[#0b1430] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#0198a7] flex-shrink-0 transition-transform duration-220 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-320 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-[#0b1430]/70 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
