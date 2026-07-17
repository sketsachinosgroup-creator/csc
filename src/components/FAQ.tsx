import React, { useState } from 'react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx}
            id={`faq-item-${idx}`}
            className="bg-white rounded-sm border border-cozy-sand overflow-hidden hover:border-cozy-caramel/40 transition-colors duration-200"
          >
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-serif font-black text-sm md:text-base text-cozy-charcoal pr-4 uppercase tracking-tight">
                {faq.question}
              </span>
              <span className={`h-6 w-6 rounded-sm bg-cozy-cream flex items-center justify-center border border-cozy-sand text-cozy-caramel shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </span>
            </button>

            {/* Collapsible Answer */}
            <div 
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[300px] border-t border-cozy-sand opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
              <p className="p-5 text-xs md:text-sm text-cozy-muted leading-relaxed font-medium">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
