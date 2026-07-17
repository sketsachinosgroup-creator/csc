import React, { useState, useEffect } from 'react';
import { SERVICES, PRODUCTS, formatRupiah } from './data';
import { Product, CartItem } from './types';

// Importing sub-components
import Navbar from './components/Navbar';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import ServiceEstimator from './components/ServiceEstimator';
import ProductCatalog from './components/ProductCatalog';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactFooter from './components/ContactFooter';
import PromoBoothFlyer from './components/PromoBoothFlyer';

// Generated Asset Paths
const LOGO_IMG = '/src/assets/images/cozy_shoes_care_logo_1784252885402.jpg';
const HERO_IMG = '/src/assets/images/clean_sneaker_aesthetic_1784252900858.jpg';
const KIT_IMG = '/src/assets/images/shoe_care_kit_1784252915871.jpg';
const BOOTH_IMG = '/src/assets/images/cozy_store_booth_1784255148304.jpg';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'services' | 'products'>('services');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [showPromoBoothFlyer, setShowPromoBoothFlyer] = useState<boolean>(false);

  // Parse path or hash for routing on mount
  useEffect(() => {
    const handleRouting = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path.includes('produk-shoes-care') || path.includes('produk') || hash === '#produk') {
        setCurrentPage('products');
      } else {
        setCurrentPage('services');
      }
    };

    handleRouting();
    window.addEventListener('popstate', handleRouting);
    window.addEventListener('hashchange', handleRouting);
    
    return () => {
      window.removeEventListener('popstate', handleRouting);
      window.removeEventListener('hashchange', handleRouting);
    };
  }, []);

  // Update address bar silently based on current page
  useEffect(() => {
    const targetPath = currentPage === 'products' ? '/produk-shoes-care' : '/cozyshoescare';
    window.history.replaceState(null, '', targetPath);
  }, [currentPage]);

  // Cart Handlers
  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    // Optional: Open cart drawer automatically on item add for premium response
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleUpdateCartQty = (productId: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems(prev => prev.map(item => 
      item.product.id === productId ? { ...item, quantity: qty } : item
    ));
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartCost = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  // Send Product Order via WhatsApp
  const sendProductOrderWhatsApp = () => {
    const phoneNumber = '62816246868'; // Business phone number
    
    let text = `Halo Cozy Shoes Care! 📦🛍️\n\nSaya ingin memesan produk perawatan sepatu berikut dari katalog website:\n\n`;
    
    cartItems.forEach((item, idx) => {
      text += `${idx + 1}. *${item.product.name}*\n`;
      text += `   Jumlah: ${item.quantity} Pcs\n`;
      text += `   Harga: ${formatRupiah(item.product.price)} /pcs\n`;
      text += `   Subtotal: ${formatRupiah(item.product.price * item.quantity)}\n\n`;
    });

    text += `------------------------------------\n`;
    text += `*Total Item Belanja:* ${totalCartCount} Produk\n`;
    text += `*Total Belanja:* ${formatRupiah(totalCartCost)}\n\n`;
    text += `*Alamat Pengiriman & Nama:* \n[Tuliskan nama Anda & alamat pengiriman lengkap disini]\n\n`;
    text += `Mohon konfirmasi ketersediaan stok & nomor rekening untuk pembayaran. Terima kasih!`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-cozy-cream flex flex-col justify-between selection:bg-cozy-caramel/20 selection:text-cozy-caramel">
      
      {/* Navigation Header */}
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartCount={totalCartCount}
        onCartToggle={() => setIsCartOpen(!isCartOpen)}
        logoSrc={LOGO_IMG}
      />

      {/* Main Container Views */}
      <main className="flex-1 pb-20">

        {/* VIEW 1: SERVICES (cozyshoescare) */}
        {currentPage === 'services' && (
          <div className="space-y-16 animate-fade-in">
            
            {/* Elegant Hero Banner Section */}
            <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-cozy-sand/60 to-cozy-cream">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Intro Hero Info */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-cozy-caramel/10 border border-cozy-caramel/20 px-3 py-1.5 rounded-sm">
                    <span className="w-1.5 h-1.5 bg-cozy-caramel rounded-sm animate-ping"></span>
                    <span className="text-[11px] font-bold text-cozy-caramel uppercase tracking-widest">
                      Layanan Laundry Sepatu No. 1 di Pekalongan
                    </span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-cozy-charcoal leading-[1.1] uppercase">
                    Kembalikan Kesegaran <span className="text-cozy-caramel italic font-black font-serif">Sepatu Favorit</span> Anda
                  </h1>

                  <p className="text-sm sm:text-base text-cozy-muted leading-relaxed max-w-lg font-medium">
                    Jangan biarkan sepatu kotor merusak rasa percaya diri Anda. Cozy Shoes Care mengembalikan kebersihan maksimal sepatu kesayangan dengan teknik cuci manual standar tinggi, sabun organik aman, serta perawatan menyeluruh anti-rusak.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      onClick={() => {
                        const el = document.getElementById('calculator-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-cozy-caramel hover:bg-cozy-charcoal text-white font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-sm transition-all duration-300 cursor-pointer flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calculator"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 22V12h6v10"/><path d="M8 7h8"/><path d="M12 11h.01"/><path d="M9 15h.01"/><path d="M15 15h.01"/></svg>
                      Hitung Estimasi Biaya
                    </button>
                    <button
                      onClick={() => setCurrentPage('products')}
                      className="bg-white border border-cozy-sand hover:border-cozy-caramel text-cozy-charcoal hover:text-cozy-caramel font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-sm transition-all duration-300 cursor-pointer"
                    >
                      Lihat Produk Care
                    </button>
                  </div>

                  {/* Trust factors highlights */}
                  <div className="pt-6 border-t border-cozy-sand grid grid-cols-3 gap-4">
                    <div>
                      <span className="block text-xl md:text-2xl font-serif font-black text-cozy-caramel">10k+</span>
                      <span className="text-[10px] uppercase font-bold text-cozy-muted tracking-wide">Sepatu Bersih</span>
                    </div>
                    <div>
                      <span className="block text-xl md:text-2xl font-serif font-black text-cozy-caramel">99.8%</span>
                      <span className="text-[10px] uppercase font-bold text-cozy-muted tracking-wide">Puas Garansi</span>
                    </div>
                    <div>
                      <span className="block text-xl md:text-2xl font-serif font-black text-cozy-caramel">100%</span>
                      <span className="text-[10px] uppercase font-bold text-cozy-muted tracking-wide">Bahan Organik</span>
                    </div>
                  </div>
                </div>

                {/* Right: Beautiful interactive image and slider */}
                <div className="space-y-4">
                  <div className="relative rounded-sm overflow-hidden border border-cozy-sand">
                    <img 
                      src={HERO_IMG} 
                      alt="Prisinte Clean Sneaker" 
                      className="w-full aspect-[16/10] object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute bottom-5 left-5 right-5 text-white flex justify-between items-end">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-cozy-caramel">Pekerjaan Kami</p>
                        <h3 className="text-lg font-serif font-black uppercase tracking-tight">Standard Cuci Premium</h3>
                      </div>
                      <span className="bg-cozy-caramel text-white text-[9px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider">
                        Organik & Hand-washed
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Before / After Interactive Slider Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-cozy-caramel bg-cozy-sand px-3 py-1 rounded-sm">
                  Bukti Nyata Kualitas
                </span>
                <h2 className="text-3xl font-serif font-black text-cozy-charcoal uppercase tracking-tight">
                  Lihat Sendiri Perbandingannya
                </h2>
                <p className="text-xs sm:text-sm text-cozy-muted font-medium">
                  Kami menangani noda membandel, sol menguning, hingga cat pudar dengan ketelitian penuh. Geser slider ke kiri-kanan untuk melihat keajaibannya!
                </p>
              </div>

              <BeforeAfterSlider imageSrc={HERO_IMG} />
            </section>

            {/* Services Offering list Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-cozy-caramel bg-cozy-sand px-3 py-1 rounded-sm">
                  Layanan Kami
                </span>
                <h2 className="text-3xl font-serif font-black text-cozy-charcoal uppercase tracking-tight">
                  Pilihan Treatment Profesional
                </h2>
                <p className="text-xs sm:text-sm text-cozy-muted font-medium">
                  Setiap pasang sepatu memiliki jenis bahan dan masalah yang berbeda. Kami menyediakan menu perawatan khusus untuk hasil maksimal.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.map(srv => (
                  <div 
                    key={srv.id}
                    id={`service-card-${srv.id}`}
                    className="bg-white rounded-sm p-6 border border-cozy-sand flex flex-col justify-between group hover:border-cozy-caramel/40 transition-all duration-300 animate-none"
                  >
                    <div className="space-y-4">
                      {/* Icon & Popular badge */}
                      <div className="flex justify-between items-center">
                        <div className="h-10 w-10 rounded-sm bg-cozy-cream flex items-center justify-center text-cozy-caramel border border-cozy-sand group-hover:bg-cozy-caramel group-hover:text-white transition-all duration-300">
                          {srv.icon === 'Sparkles' && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>}
                          {srv.icon === 'Zap' && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>}
                          {srv.icon === 'Sun' && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>}
                          {srv.icon === 'Paintbrush' && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 22 1-1c1.4-1.4 2.4-3.2 3-5.2l.5-1.8c.1-.5-.1-1-.5-1.4l-3-3c-.4-.4-1-.5-1.4-.5l-1.8.5c-2 1-3.8 2-5.2 3l-1 1"/><path d="m19 8-4-4"/><path d="m14 12-2-2"/><path d="m21.2 15.2-1.4-1.4"/><path d="m18 18-1.6-1.6"/><path d="M21.2 11.2a2 2 0 0 0-2.8 0L14 15.6l2.8 2.8 4.4-4.4a2 2 0 0 0 0-2.8Z"/></svg>}
                          {srv.icon === 'Layers' && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-10 9 10 9 10-9-10-9Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>}
                          {srv.icon === 'Shield' && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6v7Z"/></svg>}
                          {srv.icon === 'Hammer' && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 5 4 4"/><path d="M21.5 12H16c-.5 0-1-.5-1-1V5.5c0-.5-.5-1-1-1H9c-.5 0-1 .5-1 1V12H2.5c-.5 0-1 .5-1 1v2c0 .5.5 1 1 1H12v2c0 .5.5 1 1 1h2c.5 0 1-.5 1-1v-2h5.5c.5 0 1-.5 1-1v-2c0-.5-.5-1-1-1Z"/></svg>}
                        </div>
                        {srv.popular && (
                          <span className="text-[8px] font-black uppercase bg-cozy-caramel/10 text-cozy-caramel border border-cozy-caramel/25 px-2 py-0.5 rounded-sm tracking-wider">
                            Paling Laris
                          </span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-serif font-black text-base md:text-lg text-cozy-charcoal group-hover:text-cozy-caramel transition-colors uppercase tracking-tight">
                          {srv.name}
                        </h3>
                        <p className="text-xs text-cozy-muted leading-relaxed font-medium">
                          {srv.description}
                        </p>
                      </div>

                      {/* Benefits tick items */}
                      <ul className="space-y-1.5 pt-2">
                        {srv.benefits.map((b, bIdx) => (
                          <li key={bIdx} className="text-xs text-cozy-muted flex items-center gap-1.5 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--color-cozy-caramel)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check shrink-0"><path d="M20 6 9 17l-5-5"/></svg>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer price and book button */}
                    <div className="mt-6 pt-4 border-t border-cozy-sand flex items-center justify-between">
                      <div>
                        <span className="block text-[8px] uppercase font-bold text-cozy-muted tracking-widest">Mulai Dari</span>
                        <span className="text-base font-bold font-mono text-cozy-caramel">{formatRupiah(srv.price)}</span>
                      </div>
                      <span className="text-[10px] font-bold text-cozy-muted uppercase font-mono bg-cozy-cream border border-cozy-sand px-2 py-0.5 rounded-sm">
                        🕒 {srv.duration}
                      </span>
                    </div>

                  </div>
                ))}
              </div>
            </section>

            {/* Interactive Calculator Estimator Component */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ServiceEstimator />
            </section>

          </div>
        )}

        {/* VIEW 2: PRODUCTS (produk-shoes-care) */}
        {currentPage === 'products' && (
          <div className="space-y-12 animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
            
            {/* Elegant Shop Banner */}
            <section className="bg-gradient-to-br from-cozy-charcoal to-[#2e2621] text-white rounded-sm p-6 md:p-12 relative overflow-hidden">
              {/* Artistic Background Shape */}
              <div className="absolute right-0 bottom-0 top-0 w-1/2 bg-cozy-caramel/5 rounded-l-full blur-3xl pointer-events-none"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="space-y-4">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-cozy-caramel bg-white/10 border border-white/15 px-3 py-1 rounded-sm">
                    Koleksi Cozy Premium Care
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black uppercase tracking-tight leading-tight">
                    Pertahankan Kilau Sepatu Anda Sendiri
                  </h2>
                  <p className="text-xs sm:text-sm text-cozy-cream/70 leading-relaxed max-w-md font-medium">
                    Cairan pembersih kami diracik dengan formula biodegradable berbahan kelapa murni yang ampuh membersihkan kotoran tanpa merusak serat kain halus, aman digunakan di rumah setiap hari.
                  </p>
                  
                  {/* Promo Banner Offer */}
                  <div className="inline-block bg-white/5 border border-white/10 rounded-sm p-4 text-xs font-medium">
                    <p className="font-bold text-cozy-caramel uppercase tracking-wider text-[10px]">🎁 Promo Bundling Spesial:</p>
                    <p className="text-cozy-cream/80 mt-0.5">Dapatkan <b>Cozy Starter Kit</b> super lengkap hanya dengan <b>Rp 89.000</b> (Hemat 25%!).</p>
                  </div>
                </div>

                {/* Right Mockup Showcase */}
                <div className="flex justify-center">
                  <div className="relative max-w-sm rounded-sm overflow-hidden border border-white/10">
                    <img 
                      src={KIT_IMG} 
                      alt="Premium Shoe Care Kit" 
                      className="w-full h-auto object-cover aspect-[4/3]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/80 backdrop-blur-sm p-3.5 text-[9px] font-bold text-center border-t border-white/10 uppercase tracking-wider">
                      🎁 <b>Cozy Starter Kit</b>: Cleaner, Sikat, Lap & Pouch Eksklusif
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Product Catalog Grid Controller */}
            <ProductCatalog 
              onAddToCart={handleAddToCart}
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
              onUpdateCartQty={handleUpdateCartQty}
            />

          </div>
        )}

        {/* SHARED VALUE SECTION: WHY COZY */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-16 border-t border-cozy-sand">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-cozy-caramel bg-cozy-sand px-3 py-1 rounded-sm">
              Kualitas Kami
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-black text-cozy-charcoal uppercase tracking-tight">
              Kenapa Memilih Cozy Shoes Care?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-sm border border-cozy-sand text-center space-y-3">
              <div className="h-12 w-12 rounded-sm bg-cozy-caramel/10 flex items-center justify-center text-cozy-caramel mx-auto border border-cozy-caramel/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4 className="font-serif font-black text-base text-cozy-charcoal uppercase tracking-tight">100% Aman & Alami</h4>
              <p className="text-xs text-cozy-muted leading-relaxed font-medium">
                Kami meracik pembersih khusus dari ekstrak minyak kelapa alami dan minyak jojoba. Tanpa pewarna buatan, zat korosif, ataupun pemutih keras yang berisiko merusak struktur serat bahan sepatu Anda.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-cozy-sand text-center space-y-3">
              <div className="h-12 w-12 rounded-sm bg-cozy-caramel/10 flex items-center justify-center text-cozy-caramel mx-auto border border-cozy-caramel/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h21a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v11"/></svg>
              </div>
              <h4 className="font-serif font-black text-base text-cozy-charcoal uppercase tracking-tight">Layanan Antar-Jemput</h4>
              <p className="text-xs text-cozy-muted leading-relaxed font-medium">
                Kesibukan bukan lagi alasan sepatu dibiarkan kotor. Nikmati kemudahan antar-jemput gratis dalam radius 5km. Sepatu akan kami ambil, bersihkan di workshop, dan antarkan kembali dalam keadaan wangi & rapi.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-cozy-sand text-center space-y-3">
              <div className="h-12 w-12 rounded-sm bg-cozy-caramel/10 flex items-center justify-center text-cozy-caramel mx-auto border border-cozy-caramel/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h4 className="font-serif font-black text-base text-cozy-charcoal uppercase tracking-tight">Garansi Kepuasan</h4>
              <p className="text-xs text-cozy-muted leading-relaxed font-medium">
                Kepercayaan Anda adalah segalanya. Kami memberikan jaminan pengerjaan cuci ulang gratis jika Anda merasa sepatu kurang bersih setelah treatment, serta garansi pengeleman sol (reglue) selama 30 hari penuh.
              </p>
            </div>
          </div>
        </section>

        {/* WORKSHOP OUTLET & PROMO BANNER SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-16 border-t border-cozy-sand space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-cozy-caramel bg-cozy-sand px-3 py-1 rounded-sm">
              Workshop Offline & Promo
            </span>
            <h2 className="text-3xl font-serif font-black text-cozy-charcoal uppercase tracking-tight">
              Kunjungi Outlet Pekalongan Kami
            </h2>
            <p className="text-xs sm:text-sm text-cozy-muted font-medium">
              Temui tim profesional kami langsung di Perum Binagriya atau nikmati kemudahan pickup gratis. Rasakan kebersihan bintang lima untuk sepatu kesayangan Anda!
            </p>
          </div>

          <div className="bg-white rounded-sm border border-cozy-sand overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-sm">
            {/* Left Column: Outlet Booth Photo */}
            <div className="lg:col-span-6 relative aspect-video lg:aspect-auto min-h-[320px] bg-cozy-cream overflow-hidden">
              <img 
                src={BOOTH_IMG} 
                alt="Cozy Shoes Care Pekalongan Booth" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-cozy-caramel text-white text-[9px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm">
                Main Workshop
              </div>
            </div>

            {/* Right Column: Outlet Info & Promo (from input_file_1.png) */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-8 bg-gradient-to-br from-white to-[#fdfbf9]">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-black text-cozy-charcoal uppercase tracking-tight">
                    COZY SHOES CARE PEKALONGAN
                  </h3>
                  <p className="text-xs text-cozy-muted mt-1 font-semibold flex items-center gap-1.5 text-cozy-caramel">
                    📍 Podosugih, Pekalongan Barat (Perum Binagriya)
                  </p>
                </div>

                {/* Promo highlighting "Beli Produk Gratis Cuci" */}
                <div className="bg-[#fcf8f5] border-l-4 border-cozy-caramel p-4 rounded-r-sm space-y-1">
                  <span className="text-[9px] font-black uppercase text-cozy-caramel tracking-widest">PROMO SPESIAL OUTLET</span>
                  <h4 className="text-sm font-bold text-cozy-charcoal uppercase tracking-tight">🔥 BELI PRODUK GRATIS CUCI SEPATU</h4>
                  <p className="text-xs text-cozy-muted leading-relaxed font-medium">
                    Setiap pembelian produk perawatan (cleaner, spray, atau kit) langsung di workshop utama kami, Anda berhak mendapatkan layanan <b>Cuci Sepatu GRATIS</b> langsung di tempat!
                  </p>
                </div>

                {/* Operational Details from image */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="border border-cozy-sand p-3.5 rounded-sm bg-white">
                    <span className="text-[9px] font-bold text-cozy-muted uppercase tracking-wider block">Jam Operasional</span>
                    <span className="text-xs font-bold text-cozy-charcoal block mt-1">🕒 07.00 s/d 21.00 WIB</span>
                    <span className="text-[10px] text-cozy-muted font-medium block">Buka Setiap Hari (Senin - Minggu)</span>
                  </div>

                  <div className="border border-cozy-sand p-3.5 rounded-sm bg-white">
                    <span className="text-[9px] font-bold text-cozy-muted uppercase tracking-wider block">Antar Jemput Gratis</span>
                    <span className="text-xs font-bold text-cozy-charcoal block mt-1">🚚 Free Pickup & Delivery</span>
                    <span className="text-[10px] text-cozy-muted font-medium block">Radius 5km dari Perum Binagriya</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-cozy-sand">
                <button 
                  onClick={() => setShowPromoBoothFlyer(true)}
                  className="bg-cozy-caramel hover:bg-cozy-charcoal text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-sm transition-all duration-300 cursor-pointer flex items-center gap-2 shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="9" x2="15" y1="9" y2="9"/><line x1="9" x2="15" y1="13" y2="13"/><line x1="9" x2="13" y1="17" y2="17"/></svg>
                  Lihat Brosur Promo (Teks Jelas)
                </button>
                <a 
                  href="https://share.google/heiO3qCLW9DMfmsd8" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-cozy-charcoal hover:bg-cozy-caramel text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-sm transition-all duration-300 cursor-pointer flex items-center gap-2 shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>
                  Petunjuk Google Maps
                </a>
                <a 
                  href="https://wa.me/62816246868?text=Halo%20Cozy%20Shoes%20Care%21%20Saya%20ingin%20tanya%20mengenai%20promo%20Beli%20Produk%20Gratis%20Cuci%20dan%20layanan%20antar%20jemput%20Pekalongan." 
                  target="_blank" 
                  rel="noreferrer"
                  className="border border-cozy-sand hover:border-cozy-caramel bg-white text-cozy-muted hover:text-cozy-caramel font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-sm transition-all duration-300 cursor-pointer flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                  Hubungi CS Outlet
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SHARED TESTIMONIALS SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-16 border-t border-cozy-sand space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-cozy-caramel bg-cozy-sand px-3 py-1 rounded-sm">
              Ulasan Pelanggan
            </span>
            <h2 className="text-3xl font-serif font-black text-cozy-charcoal uppercase tracking-tight">
              Apa Kata Sneakerhead?
            </h2>
            <p className="text-xs sm:text-sm text-cozy-muted font-medium">
              Ribuan pasang sepatu telah kami rawat dengan penuh ketelitian. Berikut adalah ulasan jujur dari pelanggan setia kami.
            </p>
          </div>

          <Testimonials />
        </section>

        {/* SHARED FAQ SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-16 border-t border-cozy-sand space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-cozy-caramel bg-cozy-sand px-3 py-1 rounded-sm">
              Tanya Jawab (FAQ)
            </span>
            <h2 className="text-3xl font-serif font-black text-cozy-charcoal uppercase tracking-tight">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <FAQ />
        </section>

      </main>

      {/* FOOTER AND LOCATION */}
      <ContactFooter />

      {/* SLIDING SHOPPING CART DRAWER (RIGHT-SIDE PANEL) */}
      <div className={`fixed inset-0 z-50 transition-all duration-300 ${isCartOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        
        {/* Backdrop trigger */}
        <div 
          onClick={() => setIsCartOpen(false)}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        ></div>

        {/* Right sliding Drawer panel */}
        <div className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-white border-l border-cozy-sand flex flex-col justify-between transform transition-transform duration-300 h-full ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {/* Header Row */}
          <div className="p-5 border-b border-cozy-sand flex justify-between items-center">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-cozy-caramel)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              <h3 className="font-serif font-black text-sm text-cozy-charcoal uppercase tracking-wider">Keranjang Belanja</h3>
              <span className="bg-cozy-caramel/10 text-cozy-caramel text-[9px] font-bold h-5 px-2 rounded-sm flex items-center justify-center uppercase font-mono">
                {totalCartCount} Item
              </span>
            </div>
            
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-sm hover:bg-cozy-cream text-cozy-muted hover:text-cozy-charcoal border border-cozy-sand transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <span className="text-4xl filter drop-shadow-sm select-none">🛍️</span>
                <div>
                  <h4 className="font-serif font-black text-xs text-cozy-charcoal uppercase tracking-wider">Keranjang Anda Kosong</h4>
                  <p className="text-xs text-cozy-muted mt-1 max-w-xs mx-auto font-medium">
                    Katalog kami dipenuhi cairan pembersih standar premium, sikat bulu kuda, dan kit hidrofobik berkualitas tinggi.
                  </p>
                </div>
                <button 
                  onClick={() => {
                    setIsCartOpen(false);
                    setCurrentPage('products');
                  }}
                  className="bg-cozy-caramel hover:bg-cozy-charcoal text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-sm transition-all duration-300 cursor-pointer"
                >
                  Mulai Belanja Produk
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div 
                    key={item.product.id}
                    className="flex gap-4 p-3 rounded-sm border border-cozy-sand bg-cozy-cream/30 hover:bg-cozy-cream/50 transition-colors"
                  >
                    {/* Category icon avatar placeholder */}
                    <div className="h-14 w-14 shrink-0 rounded-sm bg-cozy-cream border border-cozy-sand flex items-center justify-center text-2xl select-none">
                      {item.product.category === 'cleaner' ? '🧪' : item.product.category === 'brush' ? '🪥' : item.product.category === 'spray' ? '💨' : '🎁'}
                    </div>

                    {/* Quantity selectors & details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                      <div>
                        <div className="flex justify-between items-start gap-1">
                          <h4 className="font-serif font-black text-xs text-cozy-charcoal uppercase tracking-tight truncate">
                            {item.product.name}
                          </h4>
                          <button 
                            onClick={() => handleRemoveFromCart(item.product.id)}
                            className="text-cozy-muted hover:text-red-500 shrink-0 transition-colors cursor-pointer"
                            title="Hapus Item"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                          </button>
                        </div>
                        <p className="text-[10px] text-cozy-caramel font-bold font-mono mt-0.5">
                          {formatRupiah(item.product.price)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Selector */}
                        <div className="flex items-center bg-white border border-cozy-sand rounded-sm overflow-hidden h-7">
                          <button 
                            onClick={() => handleUpdateCartQty(item.product.id, item.quantity - 1)}
                            className="px-2 h-full flex items-center justify-center text-cozy-muted hover:text-cozy-charcoal hover:bg-cozy-cream transition-colors cursor-pointer text-[10px] font-black"
                          >
                            -
                          </button>
                          <span className="px-2 text-[10px] font-bold text-cozy-charcoal min-w-[18px] text-center font-mono">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => handleUpdateCartQty(item.product.id, item.quantity + 1)}
                            className="px-2 h-full flex items-center justify-center text-cozy-muted hover:text-cozy-charcoal hover:bg-cozy-cream transition-colors cursor-pointer text-[10px] font-black"
                          >
                            +
                          </button>
                        </div>

                        <span className="text-xs font-bold text-cozy-charcoal font-mono">
                          {formatRupiah(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Checkout Footer block */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-cozy-sand bg-cozy-cream/40 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-cozy-muted font-medium">
                  <span>Subtotal Belanja</span>
                  <span className="font-bold font-mono text-cozy-charcoal">{formatRupiah(totalCartCost)}</span>
                </div>
                <div className="flex justify-between text-xs text-cozy-muted font-medium">
                  <span>Ongkos Kirim Paket</span>
                  <span className="font-bold text-cozy-sage text-[9px] bg-cozy-sage/10 border border-cozy-sage/20 px-2 py-0.5 rounded-sm uppercase font-mono">
                    Dihitung Nanti
                  </span>
                </div>
                <div className="border-t border-dashed border-cozy-sand pt-2.5 flex justify-between items-baseline">
                  <span className="text-xs font-black text-cozy-charcoal uppercase tracking-wider">Total Belanja</span>
                  <span className="text-lg font-bold font-mono text-cozy-caramel">
                    {formatRupiah(totalCartCost)}
                  </span>
                </div>
              </div>

              <button
                onClick={sendProductOrderWhatsApp}
                className="w-full bg-cozy-caramel text-white hover:bg-cozy-charcoal py-3.5 rounded-sm font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                Pesan via WhatsApp (Kirim)
              </button>
              <p className="text-[9px] text-cozy-muted text-center italic leading-relaxed">
                *Pesanan Anda akan dirangkum rapi. CS kami akan menginfokan ongkir ekspedisi & rincian pembayaran sesaat setelah WhatsApp terkirim.
              </p>
            </div>
          )}

        </div>
      </div>

      {showPromoBoothFlyer && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <PromoBoothFlyer onClose={() => setShowPromoBoothFlyer(false)} />
        </div>
      )}

    </div>
  );
}
