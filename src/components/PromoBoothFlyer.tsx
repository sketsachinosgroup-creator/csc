import React from 'react';

interface PromoBoothFlyerProps {
  onClose?: () => void;
}

export default function PromoBoothFlyer({ onClose }: PromoBoothFlyerProps) {
  const handleDownloadHTML = () => {
    const origin = window.location.origin;
    const imgUrl = `${origin}/src/assets/images/cozy_store_booth_1784255148304.jpg`;
    
    const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cozy Shoes Care Pekalongan - Brosur Outlet & Promo</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'cozy-charcoal': '#1c1c1c',
            'cozy-caramel': '#f05a24',
            'cozy-sand': '#e5ddd3',
            'cozy-cream': '#fbf9f6',
            'cozy-muted': '#6b5e53'
          }
        }
      }
    }
  </script>
  <style>
    body {
      font-family: 'Inter', sans-serif;
    }
    .font-serif {
      font-family: 'Playfair Display', serif;
    }
  </style>
</head>
<body class="bg-[#f7f4f0] min-h-screen flex items-center justify-center p-4 sm:p-8">
  <div class="bg-white rounded-md border border-cozy-sand overflow-hidden max-w-xl w-full mx-auto shadow-2xl relative">
    <div class="bg-[#111e25] text-white p-6 sm:p-8 relative">
      <!-- Top Header Sign -->
      <div class="border-4 border-white/90 rounded-sm bg-[#111e25] p-4 text-center space-y-2 mb-6 shadow-md max-w-md mx-auto">
        <div class="flex items-center justify-center gap-3">
          <div class="relative w-10 h-10 border-4 border-[#f05a24] rounded-full flex items-center justify-center bg-white/5">
            <div class="w-4 h-4 bg-[#f05a24] rounded-full flex items-center justify-center">
              <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>
          <div class="text-left leading-tight">
            <h1 class="text-xl font-black tracking-widest text-white uppercase m-0 leading-none">COZY</h1>
            <h2 class="text-xs font-black tracking-widest text-[#f05a24] uppercase m-0 leading-none">SHOES CARE ®</h2>
          </div>
        </div>
      </div>

      <!-- Main Header Text -->
      <div class="text-center space-y-1 mb-6">
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase leading-none">
          JASA CUCI SEPATU
        </h2>
        <div class="h-1 w-24 bg-[#f05a24] mx-auto mt-2.5"></div>
      </div>

      <!-- Sneaker Cleaning Graphic Illustration -->
      <div class="relative aspect-video rounded-sm overflow-hidden border border-white/10 mb-6 bg-black/40">
        <img 
          src="${imgUrl}" 
          alt="Physical Cozy Shoes Care Booth" 
          class="w-full h-full object-cover opacity-85"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4">
          <span class="text-[10px] font-bold text-cozy-caramel uppercase tracking-widest block">OUTLET UTAMA PEKALONGAN</span>
          <p class="text-sm font-serif font-semibold text-white">Main Service Booth - Perum Binagriya</p>
        </div>
      </div>

      <!-- Core Offers Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div class="bg-[#f05a24] p-4 rounded-sm flex flex-col justify-between text-white shadow-md">
          <div>
            <span class="text-[9px] font-black uppercase tracking-widest text-white/80">PROMO UTAMA</span>
            <h4 class="text-lg font-black uppercase tracking-tight mt-0.5 leading-tight">
              BELI PRODUK <br />GRATIS CUCI!
            </h4>
          </div>
          <p class="text-[11px] font-medium leading-relaxed text-white/90 mt-2">
            Beli Cozy Foam Cleaner atau perlengkapan perawatan lainnya, dapatkan kupon cuci sepatu gratis langsung!
          </p>
        </div>

        <div class="bg-white/5 border border-white/10 p-4 rounded-sm flex flex-col justify-between">
          <div class="space-y-2">
            <div>
              <span class="text-[8px] font-black uppercase tracking-widest text-[#f05a24]">JAM OPERASIONAL</span>
              <p class="text-sm font-bold mt-0.5">Buka Setiap Hari</p>
              <p class="text-xs font-mono text-white/70">07.00 s/d 21.00 WIB</p>
            </div>
            <div class="h-px bg-white/10"></div>
            <div>
              <span class="text-[8px] font-black uppercase tracking-widest text-[#f05a24]">ANTAR JEMPUT</span>
              <p class="text-xs font-bold mt-0.5">Free Pickup & Delivery</p>
              <p class="text-[10px] text-white/70">Untuk wilayah Pekalongan Barat</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Booking & CTA Section -->
      <div class="bg-white text-cozy-charcoal p-4 rounded-sm grid grid-cols-1 sm:grid-cols-12 gap-4 items-center shadow-md">
        <div class="sm:col-span-4 flex flex-col items-center justify-center p-2 bg-white rounded-sm border border-cozy-sand">
          <div class="w-24 h-24 bg-cozy-cream rounded-sm p-1.5 relative flex items-center justify-center">
            <svg viewBox="0 0 100 100" class="w-full h-full text-cozy-charcoal">
              <rect x="0" y="0" width="30" height="30" fill="currentColor" />
              <rect x="5" y="5" width="20" height="20" fill="white" />
              <rect x="10" y="10" width="10" height="10" fill="currentColor" />
              <rect x="70" y="0" width="30" height="30" fill="currentColor" />
              <rect x="75" y="5" width="20" height="20" fill="white" />
              <rect x="80" y="10" width="10" height="10" fill="currentColor" />
              <rect x="0" y="70" width="30" height="30" fill="currentColor" />
              <rect x="5" y="75" width="20" height="20" fill="white" />
              <rect x="10" y="80" width="10" height="10" fill="currentColor" />
              <rect x="40" y="10" width="10" height="10" fill="currentColor" />
              <rect x="50" y="20" width="15" height="5" fill="currentColor" />
              <rect x="40" y="40" width="20" height="20" fill="currentColor" />
              <rect x="45" y="45" width="10" height="10" fill="white" />
              <rect x="70" y="40" width="10" height="10" fill="currentColor" />
              <rect x="70" y="55" width="20" height="10" fill="currentColor" />
              <rect x="10" y="45" width="10" height="15" fill="currentColor" />
              <rect x="25" y="45" width="10" height="10" fill="currentColor" />
              <rect x="40" y="75" width="15" height="15" fill="currentColor" />
              <rect x="75" y="75" width="15" height="10" fill="currentColor" />
              <rect x="65" y="85" width="10" height="10" fill="currentColor" />
            </svg>
            <div class="absolute inset-0 m-auto w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md">
              <div class="w-3.5 h-3.5 bg-[#f05a24] rounded-full flex items-center justify-center">
                <div class="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <span class="text-[8px] font-bold uppercase tracking-wider text-cozy-muted mt-1.5 block">PINDAI UNTUK BOOKING</span>
        </div>

        <div class="sm:col-span-8 space-y-3 text-center sm:text-left">
          <div>
            <span class="text-[9px] font-black uppercase tracking-wider text-[#f05a24] bg-[#f05a24]/10 px-2 py-0.5 rounded-sm">HUBUNGI LAYANAN</span>
            <h5 class="text-base font-bold text-cozy-charcoal mt-1 uppercase">COZY SHOES CARE</h5>
            <p class="text-xs text-cozy-muted leading-relaxed font-semibold">
              Buka link WhatsApp di bawah atau scan QR di samping untuk pickup instan!
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-2 font-mono text-xs">
            <a href="https://wa.me/62816246868" target="_blank" class="inline-flex items-center justify-center gap-1.5 bg-[#111e25] text-white hover:bg-cozy-caramel px-4 py-2 rounded-sm font-bold transition-all">
              0816-24-6868
            </a>
            <a href="https://share.google/heiO3qCLW9DMfmsd8" target="_blank" class="inline-flex items-center justify-center gap-1.5 border border-cozy-sand text-cozy-muted hover:text-[#f05a24] px-4 py-2 rounded-sm font-bold transition-all">
              🗺️ Google Maps
            </a>
          </div>
        </div>
      </div>

      <!-- Footer info -->
      <div class="text-center text-[10px] text-white/50 border-t border-white/5 pt-4 mt-6">
        📍 Jl. Podosugih Barat, Pekalongan Barat, Kota Pekalongan, Jawa Tengah 51119 (Perum Binagriya)
      </div>
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cozy_outlet_promo_flyer.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-sm border border-cozy-sand overflow-hidden max-w-xl w-full mx-auto shadow-xl relative animate-fade-in">
      {/* Top Header Controls if embedded in modal */}
      {onClose && (
        <div className="absolute top-3 right-3 z-10">
          <button 
            onClick={onClose}
            className="bg-white/90 hover:bg-cozy-cream text-cozy-charcoal w-7 h-7 rounded-sm flex items-center justify-center border border-cozy-sand transition-colors cursor-pointer shadow-sm"
            title="Tutup Poster"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
      )}

      {/* Main Poster Body */}
      <div className="bg-[#111e25] text-white p-6 sm:p-8 relative select-none">
        {/* Top Header Sign (matches the exact dark signboard on top of the physical booth) */}
        <div className="border-4 border-white/90 rounded-sm bg-[#111e25] p-4 text-center space-y-2 mb-6 shadow-md max-w-md mx-auto">
          <div className="flex items-center justify-center gap-3">
            {/* Logo circular icon representing the Cozy target branding */}
            <div className="relative w-10 h-10 border-4 border-[#f05a24] rounded-full flex items-center justify-center bg-white/5">
              <div className="w-4 h-4 bg-[#f05a24] rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="text-left leading-tight">
              <h1 className="text-xl font-sans font-black tracking-widest text-white uppercase m-0 leading-none">
                COZY
              </h1>
              <h2 className="text-xs font-sans font-black tracking-widest text-[#f05a24] uppercase m-0 leading-none">
                SHOES CARE ®
              </h2>
            </div>
          </div>
        </div>

        {/* Main Header Text */}
        <div className="text-center space-y-1 mb-6">
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white uppercase leading-none">
            JASA CUCI SEPATU
          </h2>
          <div className="h-1 w-24 bg-[#f05a24] mx-auto mt-2.5"></div>
        </div>

        {/* Sneaker Cleaning Graphic Illustration / Image Frame */}
        <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 mb-6 bg-black/40">
          <img 
            src="/src/assets/images/cozy_store_booth_1784255148304.jpg" 
            alt="Physical Cozy Shoes Care Booth" 
            className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4">
            <span className="text-[10px] font-bold text-cozy-caramel uppercase tracking-widest block">OUTLET UTAMA PEKALONGAN</span>
            <p className="text-sm font-serif font-semibold text-white">Main Service Booth - Perum Binagriya</p>
          </div>
        </div>

        {/* Core Offers Grid from poster text */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Offer 1: Free wash promo */}
          <div className="bg-[#f05a24] p-4 rounded-sm flex flex-col justify-between text-white shadow-md">
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-white/80">PROMO UTAMA</span>
              <h4 className="text-lg font-sans font-black uppercase tracking-tight mt-0.5 leading-tight">
                BELI PRODUK <br />GRATIS CUCI!
              </h4>
            </div>
            <p className="text-[11px] font-medium leading-relaxed text-white/90 mt-2">
              Beli Cozy Foam Cleaner atau perlengkapan perawatan lainnya, dapatkan kupon cuci sepatu gratis langsung!
            </p>
          </div>

          {/* Offer 2: Operational and delivery details */}
          <div className="bg-white/5 border border-white/10 p-4 rounded-sm flex flex-col justify-between">
            <div className="space-y-2">
              <div>
                <span className="text-[8px] font-black uppercase tracking-widest text-[#f05a24]">JAM OPERASIONAL</span>
                <p className="text-sm font-bold mt-0.5">Buka Setiap Hari</p>
                <p className="text-xs font-mono text-white/70">07.00 s/d 21.00 WIB</p>
              </div>
              <div className="h-px bg-white/10"></div>
              <div>
                <span className="text-[8px] font-black uppercase tracking-widest text-[#f05a24]">ANTAR JEMPUT</span>
                <p className="text-xs font-bold mt-0.5">Free Pickup & Delivery</p>
                <p className="text-[10px] text-white/70">Untuk wilayah Pekalongan Barat</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Booking QR & CTA Section */}
        <div className="bg-white text-cozy-charcoal p-4 rounded-sm grid grid-cols-1 sm:grid-cols-12 gap-4 items-center shadow-md">
          {/* Fake styled QR Code */}
          <div className="sm:col-span-4 flex flex-col items-center justify-center p-2 bg-white rounded-sm border border-cozy-sand">
            <div className="w-24 h-24 bg-cozy-cream rounded-sm p-1.5 relative flex items-center justify-center">
              {/* Complex SVG Grid simulating a real QR code */}
              <svg viewBox="0 0 100 100" className="w-full h-full text-cozy-charcoal">
                {/* 3 corner finder patterns */}
                <rect x="0" y="0" width="30" height="30" fill="currentColor" />
                <rect x="5" y="5" width="20" height="20" fill="white" />
                <rect x="10" y="10" width="10" height="10" fill="currentColor" />

                <rect x="70" y="0" width="30" height="30" fill="currentColor" />
                <rect x="75" y="5" width="20" height="20" fill="white" />
                <rect x="80" y="10" width="10" height="10" fill="currentColor" />

                <rect x="0" y="70" width="30" height="30" fill="currentColor" />
                <rect x="5" y="75" width="20" height="20" fill="white" />
                <rect x="10" y="80" width="10" height="10" fill="currentColor" />

                {/* Random digital static blocks */}
                <rect x="40" y="10" width="10" height="10" fill="currentColor" />
                <rect x="50" y="20" width="15" height="5" fill="currentColor" />
                <rect x="40" y="40" width="20" height="20" fill="currentColor" />
                <rect x="45" y="45" width="10" height="10" fill="white" />
                <rect x="70" y="40" width="10" height="10" fill="currentColor" />
                <rect x="70" y="55" width="20" height="10" fill="currentColor" />
                <rect x="10" y="45" width="10" height="15" fill="currentColor" />
                <rect x="25" y="45" width="10" height="10" fill="currentColor" />
                <rect x="40" y="75" width="15" height="15" fill="currentColor" />
                <rect x="75" y="75" width="15" height="10" fill="currentColor" />
                <rect x="65" y="85" width="10" height="10" fill="currentColor" />
              </svg>
              {/* Cozy branding overlay in the center of QR code */}
              <div className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md">
                <div className="w-3.5 h-3.5 bg-[#f05a24] rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <span className="text-[8px] font-bold uppercase tracking-wider text-cozy-muted mt-1.5 block">PINDAI UNTUK BOOKING</span>
          </div>

          {/* Call to action info */}
          <div className="sm:col-span-8 space-y-3 text-center sm:text-left">
            <div>
              <span className="text-[9px] font-black uppercase tracking-wider text-[#f05a24] bg-[#f05a24]/10 px-2 py-0.5 rounded-sm">HUBUNGI LAYANAN</span>
              <h5 className="text-base font-bold text-cozy-charcoal mt-1 uppercase">COZY SHOES CARE</h5>
              <p className="text-xs text-cozy-muted leading-relaxed font-semibold">
                Buka link WhatsApp di bawah atau scan QR di samping untuk pickup instan!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 font-mono text-xs">
              <a 
                href="https://wa.me/62816246868" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-[#111e25] text-white hover:bg-cozy-caramel px-4 py-2 rounded-sm font-bold transition-all shadow-xs cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                0816-24-6868
              </a>
              <a 
                href="https://share.google/heiO3qCLW9DMfmsd8" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 border border-cozy-sand text-cozy-muted hover:text-[#f05a24] hover:border-[#f05a24] px-4 py-2 rounded-sm font-bold transition-all bg-white cursor-pointer"
              >
                🗺️ Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Footer info from physical booth card */}
        <div className="text-center text-[10px] text-white/50 border-t border-white/5 pt-4 mt-6">
          📍 Jl. Podosugih Barat, Pekalongan Barat, Kota Pekalongan, Jawa Tengah 51119 (Perum Binagriya)
        </div>

        {/* Standalone HTML Downloader Button */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <button
            onClick={handleDownloadHTML}
            className="w-full sm:w-auto bg-[#f05a24] hover:bg-white hover:text-cozy-charcoal text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-sm transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 mx-auto shadow-sm"
            title="Unduh File HTML Brosur yang Mandiri dan Siap Di-upload ke Hosting Anda"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download-cloud"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/></svg>
            Unduh Brosur HTML (Siap Upload)
          </button>
          <p className="text-[10px] text-white/60 font-medium mt-2 max-w-sm mx-auto">
            Mendownload file <code>.html</code> mandiri lengkap dengan gambar booth dan desain responsif, siap Anda upload langsung ke server web atau bagikan ke konsumen.
          </p>
        </div>
      </div>
    </div>
  );
}
