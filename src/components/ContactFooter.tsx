import React, { useState } from 'react';

export default function ContactFooter() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setIsSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <footer className="bg-cozy-charcoal text-cozy-cream/90 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-16">
          
          {/* Brand section */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif font-black text-xl tracking-tight text-white">
              COZY SHOES CARE
            </h4>
            <p className="text-xs text-cozy-cream/70 leading-relaxed max-w-sm">
              Layanan laundry, restorasi, unyellowing, dan perawatan sepatu premium dengan menggunakan formula organik ramah lingkungan. Menjaga sepatu Anda tetap bersih, segar, dan tahan lama.
            </p>
            
            {/* Opening hours list */}
            <div className="pt-2 space-y-2">
              <h5 className="text-[11px] font-bold text-cozy-caramel uppercase tracking-widest">
                Jam Operasional Workshop
              </h5>
              <div className="text-xs text-cozy-cream/80 space-y-1">
                <p className="flex justify-between max-w-[240px]">
                  <span>Senin - Jumat:</span>
                  <span className="font-bold text-white">09:00 - 20:00 WIB</span>
                </p>
                <p className="flex justify-between max-w-[240px]">
                  <span>Sabtu - Minggu:</span>
                  <span className="font-bold text-white">10:00 - 18:00 WIB</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact details & Map */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-cozy-caramel uppercase tracking-widest">
              Hubungi & Temui Kami
            </h4>
            
            <div className="space-y-4 text-xs text-cozy-cream/80">
              <div className="flex gap-2.5 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-cozy-caramel)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin shrink-0 mt-0.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.74a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <p className="leading-relaxed">
                  <b>Workshop Utama:</b> Podosugih, Kec. Pekalongan Barat, Kota Pekalongan, Jawa Tengah 51119 (Perum Binagriya)
                </p>
              </div>

              <div className="flex gap-2.5 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-cozy-caramel)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <p>+62 816-24-6868 (CS & Antar Jemput)</p>
              </div>

              <div className="flex gap-2.5 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-cozy-caramel)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <p>cozy.shoescare@gmail.com</p>
              </div>

              {/* Simulated map link */}
              <a 
                href="https://share.google/heiO3qCLW9DMfmsd8" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm bg-white/5 border border-white/10 text-xs font-bold text-white hover:bg-cozy-caramel hover:border-cozy-caramel transition-all duration-300 shadow-sm uppercase tracking-wider"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-navigation"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                Petunjuk Arah
              </a>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-cozy-caramel uppercase tracking-widest">
              Kirim Pesan Cepat
            </h4>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nama Lengkap" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-2.5 text-xs text-white placeholder-cozy-cream/40 focus:outline-none focus:border-cozy-caramel transition-colors"
                />
              </div>

              <div>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email Anda" 
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-2.5 text-xs text-white placeholder-cozy-cream/40 focus:outline-none focus:border-cozy-caramel transition-colors"
                />
              </div>

              <div>
                <textarea 
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Isi pesan / pertanyaan Anda..." 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-2.5 text-xs text-white placeholder-cozy-cream/40 focus:outline-none focus:border-cozy-caramel transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-cozy-caramel hover:bg-white hover:text-cozy-charcoal text-white font-bold py-2.5 rounded-sm text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
              >
                Kirim Pesan
              </button>

              {isSent && (
                <div className="text-cozy-sage text-[11px] font-bold text-center mt-1 bg-cozy-sage/10 py-1.5 rounded-sm border border-cozy-sage/25 animate-fade-in">
                  ✓ Pesan berhasil dikirim! Tim kami akan merespons via email.
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Footer Bottom copyright branding */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-cozy-cream/50 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Cozy Shoes Care. Recreated with Premium Design Standards.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <span>•</span>
            <a href="#sketsagroup" className="hover:text-white font-bold transition-colors">Sketsa Group</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
