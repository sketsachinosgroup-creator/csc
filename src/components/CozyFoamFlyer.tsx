import React from 'react';

interface CozyFoamFlyerProps {
  onClose?: () => void;
}

export default function CozyFoamFlyer({ onClose }: CozyFoamFlyerProps) {
  const handleDownloadHTML = () => {
    const origin = window.location.origin;
    const imgUrl = `${origin}/src/assets/images/cozy_foam_cleaner_1784255131684.jpg`;
    
    const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cozy Foam Shoe Cleaner - Brosur Resmi</title>
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
    <div class="p-6 sm:p-8 bg-[#fdfbf9] relative">
      <!-- Top Branding Bar -->
      <div class="flex justify-between items-start mb-6">
        <div class="flex items-center gap-2">
          <div class="bg-[#f05a24] text-white p-2 rounded-sm shadow-sm flex items-center justify-center w-10 h-10">
            <div class="relative w-6 h-6 border-4 border-white rounded-full flex items-center justify-center">
              <div class="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          <div class="leading-tight">
            <span class="block text-xs font-black tracking-wider text-cozy-charcoal uppercase">COZY</span>
            <span class="block text-[10px] font-bold tracking-widest text-[#f05a24] uppercase">SHOES CARE</span>
          </div>
        </div>
        <span class="text-[9px] font-bold uppercase tracking-widest text-cozy-caramel bg-cozy-sand px-2.5 py-1 rounded-sm">
          Katalog Produk Resmi
        </span>
      </div>

      <!-- Poster Titles -->
      <div class="text-center space-y-1 mb-8">
        <h2 class="text-3xl sm:text-4xl font-black tracking-tighter text-cozy-charcoal uppercase leading-none">
          COZY FOAM
        </h2>
        <h3 class="text-2xl sm:text-3xl font-black tracking-tight text-[#f05a24] uppercase leading-none">
          SHOE CLEANER
        </h3>
        <div class="h-0.5 w-16 bg-cozy-caramel mx-auto mt-2"></div>
      </div>

      <!-- Content -->
      <div class="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        <div class="sm:col-span-5 flex flex-col items-center text-center space-y-4">
          <div class="relative bg-white p-2 rounded-sm border border-cozy-sand shadow-md max-w-[160px]">
            <img 
              src="${imgUrl}" 
              alt="Cozy Foam Cleaner Bottle" 
              class="w-full h-auto object-cover rounded-sm"
            />
            <span class="absolute -bottom-2 -right-2 bg-cozy-charcoal text-white text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide shadow-sm">
              100 ML
            </span>
          </div>
          <div class="space-y-0.5">
            <span class="text-[10px] font-bold uppercase text-cozy-muted tracking-widest">VOLUME</span>
            <p class="text-sm font-serif font-black text-cozy-charcoal tracking-wide">100 ML (3.4 FL OZ)</p>
          </div>
        </div>

        <div class="hidden sm:block sm:col-span-1 text-cozy-caramel/40">
          <svg viewBox="0 0 100 100" class="w-full h-auto rotate-12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-dasharray="4 4">
            <path d="M10 50 Q50 20 90 50" />
            <polygon points="90,50 82,44 86,52" fill="currentColor" stroke="none" />
          </svg>
        </div>

        <div class="sm:col-span-6 space-y-2.5">
          <span class="text-[9px] font-black uppercase text-cozy-caramel tracking-widest block mb-1">
            FORMULA KEUNGGULAN
          </span>
          <div class="flex items-center gap-2.5 bg-white border border-cozy-sand p-2 rounded-sm shadow-xs">
            <div class="bg-cozy-caramel/15 text-cozy-caramel w-5 h-5 rounded-full flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <span class="text-xs font-bold text-cozy-charcoal tracking-tight">Formula Natural Oil</span>
          </div>
          <div class="flex items-center gap-2.5 bg-white border border-cozy-sand p-2 rounded-sm shadow-xs">
            <div class="bg-cozy-caramel/15 text-cozy-caramel w-5 h-5 rounded-full flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <span class="text-xs font-bold text-cozy-charcoal tracking-tight">Antibacterial Aktif</span>
          </div>
          <div class="flex items-center gap-2.5 bg-white border border-cozy-sand p-2 rounded-sm shadow-xs">
            <div class="bg-cozy-caramel/15 text-cozy-caramel w-5 h-5 rounded-full flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <span class="text-xs font-bold text-cozy-charcoal tracking-tight">Efektif Membersihkan</span>
          </div>
          <div class="flex items-center gap-2.5 bg-white border border-cozy-sand p-2 rounded-sm shadow-xs">
            <div class="bg-cozy-caramel/15 text-cozy-caramel w-5 h-5 rounded-full flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <span class="text-xs font-bold text-cozy-charcoal tracking-tight">Aman untuk semua bahan sepatu</span>
          </div>
          <div class="flex items-center gap-2.5 bg-white border border-cozy-sand p-2 rounded-sm shadow-xs">
            <div class="bg-cozy-caramel/15 text-cozy-caramel w-5 h-5 rounded-full flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <span class="text-xs font-bold text-cozy-charcoal tracking-tight">Praktis digunakan tanpa air</span>
          </div>
          <div class="flex items-center gap-2.5 bg-white border border-cozy-sand p-2 rounded-sm shadow-xs">
            <div class="bg-cozy-caramel/15 text-cozy-caramel w-5 h-5 rounded-full flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <span class="text-xs font-bold text-cozy-charcoal tracking-tight">Cocok untuk traveller</span>
          </div>
        </div>
      </div>

      <!-- Divider line -->
      <div class="border-t border-dashed border-cozy-sand my-6"></div>

      <!-- Slogan -->
      <div class="text-center space-y-1 mb-6">
        <p class="text-lg sm:text-xl font-serif italic font-black text-cozy-charcoal">
          "Langkah Bersih, Tanpa Ribet"
        </p>
        <span class="text-[10px] font-bold uppercase tracking-widest text-[#f05a24]">
          Cozy Shoes Care Pekalongan
        </span>
      </div>

      <!-- Bottom Social -->
      <div class="flex flex-wrap justify-center gap-4 text-xs font-bold font-mono text-cozy-charcoal">
        <a href="https://instagram.com/csc.pekalongan" target="_blank" class="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white border border-cozy-sand text-cozy-muted hover:text-cozy-caramel transition-colors">
          @csc.pekalongan
        </a>
        <a href="https://wa.me/62816246868" target="_blank" class="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white border border-cozy-sand text-cozy-muted hover:text-cozy-caramel transition-colors">
          0816-24-6868
        </a>
      </div>
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cozy_foam_cleaner_flyer.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-sm border border-cozy-sand overflow-hidden max-w-xl w-full mx-auto shadow-xl relative">
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
      <div className="p-6 sm:p-8 bg-[#fdfbf9] relative select-none">
        {/* Top Branding Bar */}
        <div className="flex justify-between items-start mb-6">
          {/* Brand Logo Box (from the top-left of the image) */}
          <div className="flex items-center gap-2">
            <div className="bg-[#f05a24] text-white p-2 rounded-sm shadow-sm flex items-center justify-center w-10 h-10">
              {/* Custom 'C' with double circles representing Cozy Shoes Care logo */}
              <div className="relative w-6 h-6 border-4 border-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="leading-tight">
              <span className="block text-xs font-black tracking-wider text-cozy-charcoal uppercase font-sans">COZY</span>
              <span className="block text-[10px] font-bold tracking-widest text-[#f05a24] uppercase font-sans">SHOES CARE</span>
            </div>
          </div>

          <span className="text-[9px] font-bold uppercase tracking-widest text-cozy-caramel bg-cozy-sand/50 px-2.5 py-1 rounded-sm">
            Katalog Produk Resmi
          </span>
        </div>

        {/* Poster Titles */}
        <div className="text-center space-y-1 mb-8">
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tighter text-cozy-charcoal uppercase leading-none">
            COZY FOAM
          </h2>
          <h3 className="text-2xl sm:text-3xl font-sans font-black tracking-tight text-[#f05a24] uppercase leading-none">
            SHOE CLEANER
          </h3>
          <div className="h-0.5 w-16 bg-cozy-caramel mx-auto mt-2"></div>
        </div>

        {/* Content Section: Product Bottle & Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
          {/* Left Column: Product Photo & Size */}
          <div className="sm:col-span-5 flex flex-col items-center text-center space-y-4">
            <div className="relative bg-white p-2 rounded-sm border border-cozy-sand shadow-md max-w-[160px] group transition-all duration-300 hover:shadow-lg">
              <img 
                src="/src/assets/images/cozy_foam_cleaner_1784255131684.jpg" 
                alt="Cozy Foam Cleaner Bottle" 
                className="w-full h-auto object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -bottom-2 -right-2 bg-cozy-charcoal text-white text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide shadow-sm">
                100 ML
              </span>
            </div>

            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase text-cozy-muted font-mono tracking-widest">VOLUME</span>
              <p className="text-sm font-serif font-black text-cozy-charcoal tracking-wide">100 ML (3.4 FL OZ)</p>
            </div>
          </div>

          {/* Dotted Arrow SVG Connector (Only visible on sm and larger) */}
          <div className="hidden sm:block sm:col-span-1 text-cozy-caramel/40">
            <svg viewBox="0 0 100 100" className="w-full h-auto rotate-12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4">
              <path d="M10 50 Q50 20 90 50" />
              <polygon points="90,50 82,44 86,52" fill="currentColor" stroke="none" />
            </svg>
          </div>

          {/* Right Column: Key Feature Checklist Badges */}
          <div className="sm:col-span-6 space-y-2.5">
            <span className="text-[9px] font-black uppercase text-cozy-caramel tracking-widest block mb-1">
              FORMULA KEUNGGULAN
            </span>

            {[
              'Formula Natural Oil',
              'Antibacterial Aktif',
              'Efektif Membersihkan',
              'Aman untuk semua bahan sepatu',
              'Praktis digunakan tanpa air',
              'Cocok untuk traveller'
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 bg-white border border-cozy-sand p-2 rounded-sm shadow-xs transition-all hover:border-cozy-caramel/30"
              >
                {/* Orange-filled checkmark badge */}
                <div className="bg-cozy-caramel/15 text-cozy-caramel/80 w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <span className="text-xs font-bold text-cozy-charcoal tracking-tight">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-dashed border-cozy-sand my-6"></div>

        {/* Slogan (from the bottom of image) */}
        <div className="text-center space-y-1 mb-6">
          <p className="text-lg sm:text-xl font-serif italic font-black text-cozy-charcoal">
            "Langkah Bersih, Tanpa Ribet"
          </p>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#f05a24]">
            Cozy Shoes Care Pekalongan
          </span>
        </div>

        {/* Bottom Social & WhatsApp Badges */}
        <div className="flex flex-wrap justify-center gap-4 text-xs font-bold font-mono">
          <a 
            href="https://instagram.com/csc.pekalongan" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white border border-cozy-sand text-cozy-muted hover:text-cozy-caramel hover:border-cozy-caramel transition-colors shadow-xs"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            @csc.pekalongan
          </a>

          <a 
            href="https://wa.me/62816246868" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white border border-cozy-sand text-cozy-muted hover:text-cozy-caramel hover:border-cozy-caramel transition-colors shadow-xs"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            0816-24-6868
          </a>
        </div>

        {/* Standalone HTML Downloader Button */}
        <div className="mt-8 pt-6 border-t border-cozy-sand/60 text-center">
          <button
            onClick={handleDownloadHTML}
            className="w-full sm:w-auto bg-[#f05a24] hover:bg-cozy-charcoal text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-sm transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 mx-auto shadow-sm"
            title="Unduh File HTML Brosur yang Mandiri dan Siap Di-upload ke Hosting Anda"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download-cloud"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/></svg>
            Unduh Brosur HTML (Siap Upload)
          </button>
          <p className="text-[10px] text-cozy-muted font-semibold mt-2 max-w-sm mx-auto">
            Mendownload file <code>.html</code> mandiri lengkap dengan gambar dan desain responsif, siap Anda upload langsung ke server web atau bagikan ke konsumen.
          </p>
        </div>
      </div>
    </div>
  );
}
