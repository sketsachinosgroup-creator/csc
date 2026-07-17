import React, { useState } from 'react';
import { PRODUCTS, formatRupiah } from '../data';
import { Product, CartItem } from '../types';
import CozyFoamFlyer from './CozyFoamFlyer';

interface ProductCatalogProps {
  onAddToCart: (product: Product) => void;
  cartItems: CartItem[];
  onRemoveFromCart: (productId: string) => void;
  onUpdateCartQty: (productId: string, qty: number) => void;
}

export default function ProductCatalog({ 
  onAddToCart, 
  cartItems, 
  onRemoveFromCart, 
  onUpdateCartQty 
}: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [viewPosterMode, setViewPosterMode] = useState<boolean>(false);

  const categories = [
    { value: 'all', label: 'Semua Produk' },
    { value: 'cleaner', label: 'Pembersih' },
    { value: 'brush', label: 'Sikat' },
    { value: 'spray', label: 'Spray Pelindung' },
    { value: 'bundle', label: 'Paket Hemat' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  // Helper to map generic image ID to placeholder design / emoji or styles
  const getProductEmoji = (category: string) => {
    switch (category) {
      case 'cleaner': return '🧪';
      case 'brush': return '🪥';
      case 'spray': return '💨';
      case 'bundle': return '🎁';
      default: return '📦';
    }
  };

  return (
    <div className="space-y-8">
      {/* Search/Category filter row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-cozy-sand pb-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-cozy-caramel bg-cozy-sand px-3 py-1 rounded-sm">
            Katalog Retail
          </span>
          <h3 className="text-2xl font-serif font-black text-cozy-charcoal mt-3 uppercase tracking-tight">
            Produk Perawatan Mandiri
          </h3>
          <p className="text-xs text-cozy-muted mt-1.5 font-medium">
            Rawat sendiri sepatu berharga Anda di rumah dengan cairan organik & perlengkapan standar profesional kami.
          </p>
        </div>

        {/* Categories toggles with Geometric Balance layout */}
        <div className="flex flex-wrap gap-1 p-1 bg-white border border-cozy-sand rounded-sm">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-cozy-caramel text-white'
                  : 'text-cozy-muted hover:text-cozy-charcoal hover:bg-cozy-cream'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product list grid with geometric cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => {
          const cartItem = cartItems.find(item => item.product.id === product.id);
          const quantityInCart = cartItem ? cartItem.quantity : 0;

          return (
            <div 
              key={product.id}
              id={`product-${product.id}`}
              className="group bg-white rounded-sm border border-cozy-sand overflow-hidden transition-all duration-300 flex flex-col h-full hover:border-cozy-caramel/40 animate-none"
            >
              {/* Product Visual Container */}
              <div className="relative aspect-[4/3] bg-cozy-cream/40 flex items-center justify-center overflow-hidden border-b border-cozy-sand">
                <span className="absolute top-3 left-3 bg-white px-2.5 py-1 rounded-sm text-[9px] font-bold tracking-widest text-cozy-muted border border-cozy-sand uppercase">
                  {product.category}
                </span>
                
                {/* Product Image or Fallback Emoji display */}
                {product.image && (product.image.startsWith('/') || product.image.startsWith('http')) ? (
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  /* 3D-like minimalist display box */
                  <div className="transform group-hover:scale-105 transition-transform duration-500 flex flex-col items-center">
                    <div className="text-5xl mb-2 filter drop-shadow-md">{getProductEmoji(product.category)}</div>
                    <div className="h-1.5 w-10 bg-black/5 rounded-full blur-[2px]"></div>
                  </div>
                )}

                {/* Rating Badge */}
                <div className="absolute bottom-3 right-3 bg-white px-2.5 py-1 rounded-sm text-[10px] font-bold text-cozy-charcoal border border-cozy-sand flex items-center gap-1 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="var(--color-cozy-gold)" stroke="var(--color-cozy-gold)" strokeWidth="2" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <span>{product.rating}</span>
                </div>
              </div>

              {/* Product Details info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h4 className="font-serif font-black text-base text-cozy-charcoal group-hover:text-cozy-caramel transition-colors line-clamp-1 uppercase tracking-tight">
                    {product.name}
                  </h4>
                  <p className="text-xs text-cozy-muted line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div>
                  {/* Price and Stock info */}
                  <div className="mt-4 pt-3 border-t border-cozy-sand flex items-baseline justify-between">
                    <span className="text-sm font-bold font-mono text-cozy-caramel">
                      {formatRupiah(product.price)}
                    </span>
                    <span className="text-[8px] text-cozy-sage font-black uppercase tracking-widest bg-cozy-sage/10 px-2 py-0.5 rounded-sm">
                      Ready
                    </span>
                  </div>

                  {/* Cart Control Buttons */}
                  <div className="mt-4 grid grid-cols-5 gap-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="col-span-1.5 border border-cozy-sand hover:bg-cozy-cream text-cozy-muted hover:text-cozy-charcoal rounded-sm text-[10px] font-bold uppercase tracking-wider flex items-center justify-center transition-colors cursor-pointer text-center"
                      title="Lihat Detail Produk"
                    >
                      Detail
                    </button>
                    
                    {quantityInCart > 0 ? (
                      <div className="col-span-3.5 flex items-center bg-white rounded-sm overflow-hidden border border-cozy-sand">
                        <button 
                          onClick={() => onUpdateCartQty(product.id, quantityInCart - 1)}
                          className="flex-1 h-full flex items-center justify-center text-cozy-muted hover:text-cozy-charcoal hover:bg-cozy-cream transition-colors cursor-pointer text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-cozy-charcoal min-w-[24px] text-center font-mono">
                          {quantityInCart}
                        </span>
                        <button 
                          onClick={() => onUpdateCartQty(product.id, quantityInCart + 1)}
                          className="flex-1 h-full flex items-center justify-center text-cozy-muted hover:text-cozy-charcoal hover:bg-cozy-cream transition-colors cursor-pointer text-xs font-bold"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => onAddToCart(product)}
                        className="col-span-3.5 bg-cozy-charcoal text-white hover:bg-cozy-caramel py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer text-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                        Beli
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Product Detail Modal Backdrop */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div 
            id="detail-modal"
            className="bg-white rounded-sm max-w-lg w-full max-h-[90vh] overflow-y-auto border border-cozy-sand relative animate-none shadow-2xl"
          >
            {/* Close trigger */}
            <button 
              onClick={() => {
                setSelectedProduct(null);
                setViewPosterMode(false);
              }}
              className="absolute top-4 right-4 bg-white hover:bg-cozy-cream text-cozy-muted hover:text-cozy-charcoal w-8 h-8 rounded-sm flex items-center justify-center border border-cozy-sand transition-colors z-10 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

            {/* If the product has a flyer (Cozy Foam Cleaner), show tabs */}
            {selectedProduct.id === 'cozy-foam-cleaner-100' && (
              <div className="flex border-b border-cozy-sand bg-[#fdfbf9] sticky top-0 z-10">
                <button
                  onClick={() => setViewPosterMode(false)}
                  className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
                    !viewPosterMode 
                      ? 'border-cozy-caramel text-cozy-caramel bg-white' 
                      : 'border-transparent text-cozy-muted hover:text-cozy-charcoal'
                  }`}
                >
                  📦 Detail Produk
                </button>
                <button
                  onClick={() => setViewPosterMode(true)}
                  className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center justify-center gap-1.5 ${
                    viewPosterMode 
                      ? 'border-cozy-caramel text-cozy-caramel bg-white' 
                      : 'border-transparent text-cozy-muted hover:text-cozy-charcoal'
                  }`}
                >
                  ✨ Brosur Poster Resmi (Bisa Dibaca)
                </button>
              </div>
            )}

            {viewPosterMode && selectedProduct.id === 'cozy-foam-cleaner-100' ? (
              <div className="p-1">
                <CozyFoamFlyer />
              </div>
            ) : (
              <>
                {/* Modal Cover Image */}
                <div className="bg-cozy-cream/30 flex items-center justify-center border-b border-cozy-sand overflow-hidden relative aspect-[4/3] select-none">
                  {selectedProduct.image && (selectedProduct.image.startsWith('/') || selectedProduct.image.startsWith('http')) ? (
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="text-7xl filter drop-shadow-lg">{getProductEmoji(selectedProduct.category)}</div>
                  )}
                </div>

                <div className="p-6 space-y-5">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-cozy-caramel bg-cozy-sand px-2.5 py-1 rounded-sm">
                      {selectedProduct.category}
                    </span>
                    <h4 className="text-xl font-serif font-black text-cozy-charcoal mt-3 uppercase tracking-tight">
                      {selectedProduct.name}
                    </h4>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-sm font-bold text-cozy-caramel font-mono">
                        {formatRupiah(selectedProduct.price)}
                      </span>
                      <div className="h-3 w-px bg-cozy-sand"></div>
                      <div className="flex items-center gap-1 text-[11px] text-cozy-muted font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="var(--color-cozy-gold)" stroke="var(--color-cozy-gold)" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        <span className="font-bold text-cozy-charcoal">{selectedProduct.rating}</span>
                        <span>({selectedProduct.reviewsCount} Reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick link to poster directly if they are on detail tab */}
                  {selectedProduct.id === 'cozy-foam-cleaner-100' && (
                    <button
                      onClick={() => setViewPosterMode(true)}
                      className="w-full flex items-center justify-center gap-2 bg-[#fcf8f5] hover:bg-cozy-sand border border-cozy-caramel/20 text-cozy-caramel font-bold py-2 rounded-sm text-xs uppercase tracking-wider transition-colors"
                    >
                      ✨ Lihat Flyer Brosur Resmi (Teks Lengkap)
                    </button>
                  )}

                  {/* Description */}
                  <div className="space-y-1.5">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-cozy-muted">Deskripsi</h5>
                    <p className="text-xs text-cozy-muted leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Features key bullets */}
                  <div className="space-y-1.5">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-cozy-muted">Keunggulan & Fitur</h5>
                    <ul className="text-xs text-cozy-muted space-y-1 pl-4 list-disc font-medium">
                      {selectedProduct.features.map((feat, fIdx) => (
                        <li key={fIdx}>{feat}</li>
                      ))}
                    </ul>
                  </div>

                  {/* How to use guidelines */}
                  <div className="bg-[#fcf8f5] border border-cozy-sand p-4 rounded-sm space-y-1.5">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-cozy-caramel flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open-text"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/><path d="M6 8h2"/><path d="M6 12h2"/><path d="M16 8h2"/><path d="M16 12h2"/></svg>
                      Cara Penggunaan
                    </h5>
                    <p className="text-xs text-cozy-muted leading-relaxed italic font-medium">
                      {selectedProduct.howToUse}
                    </p>
                  </div>

                  {/* Add to cart from modal */}
                  <button
                    onClick={() => {
                      onAddToCart(selectedProduct);
                      setSelectedProduct(null);
                      setViewPosterMode(false);
                    }}
                    className="w-full bg-cozy-charcoal hover:bg-cozy-caramel text-white font-bold py-3.5 rounded-sm text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    Tambah Ke Keranjang
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
