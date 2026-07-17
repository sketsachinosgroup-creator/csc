import React from 'react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {TESTIMONIALS.map((t, idx) => (
        <div 
          key={t.id}
          id={`testimonial-${t.id}`}
          className="bg-white p-6 rounded-sm border border-cozy-sand flex flex-col justify-between relative group hover:border-cozy-caramel/30 transition-all duration-300"
        >
          {/* Decorative quotes icon */}
          <span className="absolute top-4 right-6 font-serif text-5xl text-cozy-caramel/10 select-none group-hover:text-cozy-caramel/20 transition-colors">
            “
          </span>

          <div className="space-y-3">
            {/* Rating stars */}
            <div className="flex items-center gap-0.5">
              {[...Array(t.rating)].map((_, sIdx) => (
                <svg 
                  key={sIdx} 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="12" height="12" 
                  viewBox="0 0 24 24" 
                  fill="var(--color-cozy-gold)" 
                  stroke="var(--color-cozy-gold)"
                  className="lucide lucide-star"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>

            {/* Testimonial Message */}
            <p className="text-xs md:text-sm text-cozy-muted leading-relaxed italic font-medium">
              "{t.text}"
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-cozy-sand flex justify-between items-end">
            <div>
              <h5 className="font-serif font-black text-sm text-cozy-charcoal uppercase tracking-tight">
                {t.name}
              </h5>
              <p className="text-[10px] text-cozy-muted mt-0.5 uppercase tracking-wide">
                {t.role}
              </p>
            </div>
            
            <div className="text-right">
              <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-cozy-caramel bg-cozy-cream px-2.5 py-1 rounded-sm border border-cozy-sand">
                👟 {t.shoeType}
              </span>
              <p className="text-[10px] text-cozy-muted/80 mt-1 uppercase font-semibold font-mono">
                {t.date}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
