import React from 'react';
import { CartItem } from '../types';

interface NavbarProps {
  currentPage: 'services' | 'products';
  setCurrentPage: (page: 'services' | 'products') => void;
  cartCount: number;
  onCartToggle: () => void;
  logoSrc: string;
}

export default function Navbar({ 
  currentPage, 
  setCurrentPage, 
  cartCount, 
  onCartToggle,
  logoSrc
}: NavbarProps) {
  
  // Custom scroll helper
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePageSelect = (page: 'services' | 'products') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 bg-white border-b border-cozy-sand z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo & Brand Label matching Geometric Balance */}
          <div 
            onClick={() => handlePageSelect('services')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 bg-cozy-charcoal rounded-full flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-xs italic">CSC</span>
            </div>
            <div>
              <span className="font-serif font-black text-lg md:text-xl tracking-tighter text-cozy-charcoal block uppercase">
                Cozy Shoes Care
              </span>
              <span className="text-[9px] uppercase font-bold tracking-widest text-cozy-muted block -mt-1">
                Premium Shoe Laundry
              </span>
            </div>
          </div>

          {/* Center Links Router - Minimalist style matching Geometric Balance */}
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest">
            <button
              onClick={() => handlePageSelect('services')}
              className={`transition-all duration-300 cursor-pointer ${
                currentPage === 'services'
                  ? 'text-cozy-caramel border-b-2 border-cozy-caramel pb-1 -mb-[2px]'
                  : 'text-cozy-charcoal hover:text-cozy-caramel pb-1 -mb-[2px]'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handlePageSelect('products')}
              className={`transition-all duration-300 cursor-pointer ${
                currentPage === 'products'
                  ? 'text-cozy-caramel border-b-2 border-cozy-caramel pb-1 -mb-[2px]'
                  : 'text-cozy-charcoal hover:text-cozy-caramel pb-1 -mb-[2px]'
              }`}
            >
              Products
            </button>
          </div>

          {/* Right Action Widgets */}
          <div className="flex items-center gap-3">
            {/* Cart Button with sharp geometric look */}
            <button
              onClick={onCartToggle}
              className="relative p-2.5 rounded-sm border border-cozy-sand bg-white text-cozy-charcoal hover:border-cozy-caramel hover:text-cozy-caramel transition-all duration-200 cursor-pointer"
              title="Keranjang Belanja"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-cozy-caramel text-white text-[8px] font-black h-4.5 w-4.5 rounded-full flex items-center justify-center border border-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Book/Estimasi Button matching Geometric Balance styling exactly */}
            <button
              onClick={() => {
                if (currentPage !== 'services') {
                  handlePageSelect('services');
                  setTimeout(() => scrollToId('calculator-section'), 100);
                } else {
                  scrollToId('calculator-section');
                }
              }}
              className="hidden sm:flex px-4 py-2.5 bg-cozy-charcoal hover:bg-cozy-caramel text-white text-[10px] font-bold uppercase tracking-widest rounded-sm cursor-pointer transition-colors duration-300"
            >
              Book Treatment
            </button>
          </div>
        </div>

        {/* Mobile Navigation Row (Quick tab bar below brand name) */}
        <div className="flex md:hidden border-t border-cozy-sand/50 py-2.5 justify-around text-[10px] uppercase tracking-wider font-bold">
          <button
            onClick={() => handlePageSelect('services')}
            className={`px-2 py-1 transition-all ${
              currentPage === 'services' ? 'text-cozy-caramel border-b border-cozy-caramel' : 'text-cozy-muted'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => handlePageSelect('products')}
            className={`px-2 py-1 transition-all ${
              currentPage === 'products' ? 'text-cozy-caramel border-b border-cozy-caramel' : 'text-cozy-muted'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => {
              if (currentPage !== 'services') {
                handlePageSelect('services');
                setTimeout(() => scrollToId('calculator-section'), 100);
              } else {
                scrollToId('calculator-section');
              }
            }}
            className="px-2 py-1 text-cozy-muted hover:text-cozy-charcoal"
          >
            Book
          </button>
        </div>
      </div>
    </nav>
  );
}
