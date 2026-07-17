import React, { useState } from 'react';
import { SERVICES, formatRupiah } from '../data';
import { Service } from '../types';

interface ShoeOrder {
  id: string;
  name: string;
  material: string;
  selectedServices: string[]; // service IDs
}

const MATERIALS = [
  { value: 'canvas-mesh', label: 'Canvas / Mesh / Knit' },
  { value: 'suede-nubuck', label: 'Suede / Nubuck' },
  { value: 'leather', label: 'Kulit Asli / Sintetis (Leather)' },
  { value: 'heavy-boots', label: 'Heavy Boots / Outdoor' }
];

export default function ServiceEstimator() {
  const [shoes, setShoes] = useState<ShoeOrder[]>([
    { id: '1', name: 'Sepatu 1', material: 'canvas-mesh', selectedServices: ['deep-clean'] }
  ]);

  const addShoe = () => {
    const newId = (shoes.length + 1).toString();
    setShoes([
      ...shoes,
      { id: newId, name: `Sepatu ${newId}`, material: 'canvas-mesh', selectedServices: ['deep-clean'] }
    ]);
  };

  const removeShoe = (id: string) => {
    if (shoes.length === 1) return; // Must have at least one shoe
    setShoes(shoes.filter(s => s.id !== id));
  };

  const updateShoe = (id: string, field: keyof ShoeOrder, value: any) => {
    setShoes(shoes.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const toggleService = (shoeId: string, serviceId: string) => {
    const targetShoe = shoes.find(s => s.id === shoeId);
    if (!targetShoe) return;

    let updatedServices = [...targetShoe.selectedServices];
    if (updatedServices.includes(serviceId)) {
      // Don't let them have 0 services selected
      if (updatedServices.length > 1) {
        updatedServices = updatedServices.filter(id => id !== serviceId);
      }
    } else {
      updatedServices.push(serviceId);
    }
    updateShoe(shoeId, 'selectedServices', updatedServices);
  };

  // Calculations
  const calculateShoePrice = (shoe: ShoeOrder) => {
    return shoe.selectedServices.reduce((sum, serviceId) => {
      const svc = SERVICES.find(s => s.id === serviceId);
      return sum + (svc ? svc.price : 0);
    }, 0);
  };

  const grandTotal = shoes.reduce((sum, s) => sum + calculateShoePrice(s), 0);
  const totalShoesCount = shoes.length;
  
  // Free delivery for 2+ shoes or > Rp 100k
  const isFreeDelivery = totalShoesCount >= 2 || grandTotal >= 100000;

  // Build WhatsApp Message
  const sendBookingWhatsApp = () => {
    const phoneNumber = '62816246868'; // Replace with a generic business contact phone number (represented in IDN format)
    
    let text = `Halo Cozy Shoes Care! 👟✨\n\nSaya ingin memesan layanan cuci sepatu dengan estimasi dari website:\n\n`;
    
    shoes.forEach((shoe, idx) => {
      const matLabel = MATERIALS.find(m => m.value === shoe.material)?.label || shoe.material;
      text += `*${idx + 1}. ${shoe.name}* (${matLabel})\n`;
      
      shoe.selectedServices.forEach(srvId => {
        const srv = SERVICES.find(s => s.id === srvId);
        if (srv) {
          text += `   • ${srv.name}: ${formatRupiah(srv.price)}\n`;
        }
      });
      text += `   _Subtotal: ${formatRupiah(calculateShoePrice(shoe))}_\n\n`;
    });

    text += `------------------------------------\n`;
    text += `*Total Sepatu:* ${totalShoesCount} Pasang\n`;
    text += `*Total Estimasi Biaya:* ${formatRupiah(grandTotal)}\n`;
    text += `*Layanan Antar-Jemput:* ${isFreeDelivery ? 'GRATIS (Radius <5km)' : 'Reguler (Berbayar)'}\n\n`;
    text += `Mohon konfirmasi jadwal pengambilan & detail pengerjaan. Terima kasih!`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="calculator-section" className="w-full bg-white rounded-sm p-6 md:p-8 border border-cozy-sand">
      <div className="mb-8">
        <span className="text-[10px] font-bold uppercase tracking-widest text-cozy-caramel bg-cozy-sand px-3 py-1 rounded-sm">
          Kalkulator Estimasi
        </span>
        <h3 className="text-2xl font-serif font-black text-cozy-charcoal mt-3 uppercase tracking-tight">
          Hitung Estimasi Cuci Sepatu Anda
        </h3>
        <p className="text-xs text-cozy-muted mt-1.5 font-medium">
          Tambahkan sepatu Anda, pilih bahan, dan centang treatment yang diinginkan untuk menghitung total biaya secara instan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Shoes list */}
        <div className="lg:col-span-2 space-y-6">
          {shoes.map((shoe, idx) => (
            <div 
              key={shoe.id} 
              id={`shoe-card-${shoe.id}`}
              className="relative p-5 rounded-sm bg-white border border-cozy-sand shadow-sm"
            >
              {/* Delete Button */}
              {shoes.length > 1 && (
                <button 
                  onClick={() => removeShoe(shoe.id)}
                  className="absolute top-4 right-4 text-cozy-muted hover:text-red-600 transition-colors cursor-pointer"
                  title="Hapus Sepatu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                </button>
              )}

              <h4 className="text-xs font-black text-cozy-caramel uppercase tracking-wider mb-4 flex items-center gap-1.5 italic">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-footprints"><path d="M4 16v-2.38C4 11.5 5.88 9.85 6 7.07l.08-1.72C6.15 4.14 7.06 3 8.3 3c.96 0 1.76.7 1.94 1.66L10.58 6.5C11 8.85 12 11.02 12 13v3c0 2.2-1.8 4-4 4s-4-1.8-4-4Z"/><path d="M12 16v-2.38c0-2.12 1.88-3.77 2-6.55l.08-1.72C14.15 4.14 15.06 3 16.3 3c.96 0 1.76.7 1.94 1.66l.34 1.84c.42 2.35 1.42 4.52 1.42 6.5V16c0 2.2-1.8 4-4 4s-4-1.8-4-4Z"/></svg>
                Sepatu #{idx + 1}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Shoe Name Label */}
                <div>
                  <label className="block text-[10px] font-bold text-cozy-muted mb-1.5 uppercase tracking-widest">
                    Nama / Merk Sepatu
                  </label>
                  <input 
                    type="text" 
                    value={shoe.name}
                    onChange={(e) => updateShoe(shoe.id, 'name', e.target.value)}
                    placeholder="Contoh: Nike Air Force 1"
                    className="w-full bg-white border border-cozy-sand rounded-sm px-4 py-2.5 text-xs text-cozy-charcoal focus:outline-none focus:border-cozy-caramel transition-colors"
                  />
                </div>

                {/* Material Selection */}
                <div>
                  <label className="block text-[10px] font-bold text-cozy-muted mb-1.5 uppercase tracking-widest">
                    Bahan Utama Sepatu
                  </label>
                  <select 
                    value={shoe.material}
                    onChange={(e) => updateShoe(shoe.id, 'material', e.target.value)}
                    className="w-full bg-white border border-cozy-sand rounded-sm px-4 py-2.5 text-xs text-cozy-charcoal focus:outline-none focus:border-cozy-caramel transition-colors cursor-pointer"
                  >
                    {MATERIALS.map(m => (
                      <option key={m.value} value={m.value}>{m.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Treatment Selection (Grid of checkmarks) */}
              <div>
                <label className="block text-[10px] font-bold text-cozy-muted mb-2 uppercase tracking-widest">
                  Pilih Treatment / Perawatan
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES.map(srv => {
                    const isSelected = shoe.selectedServices.includes(srv.id);
                    return (
                      <div 
                        key={srv.id}
                        onClick={() => toggleService(shoe.id, srv.id)}
                        className={`flex items-start gap-3 p-3 rounded-sm border cursor-pointer select-none transition-all duration-200 ${
                          isSelected 
                            ? 'bg-[#fcf8f5] border-cozy-caramel' 
                            : 'bg-transparent border-cozy-sand hover:border-cozy-muted/40 hover:bg-cozy-cream'
                        }`}
                      >
                        <div className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border transition-colors ${
                          isSelected ? 'border-cozy-caramel bg-cozy-caramel text-white' : 'border-cozy-sand bg-white'
                        }`}>
                          {isSelected && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-bold text-cozy-charcoal uppercase tracking-tight">{srv.name}</p>
                          <p className="text-[10px] text-cozy-muted mt-0.5 uppercase tracking-wide">🕒 {srv.duration}</p>
                        </div>
                        <span className="text-xs font-bold text-cozy-caramel font-mono">
                          {formatRupiah(srv.price)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Subtotal of the shoe */}
              <div className="mt-4 pt-3 border-t border-dashed border-cozy-sand flex justify-between items-center text-[10px] uppercase tracking-wider text-cozy-muted font-bold">
                <span>Subtotal Sepatu #{idx + 1}</span>
                <span className="text-sm font-bold text-cozy-charcoal font-mono">
                  {formatRupiah(calculateShoePrice(shoe))}
                </span>
              </div>
            </div>
          ))}

          {/* Add more shoes button */}
          <button 
            onClick={addShoe}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-sm border border-dashed border-cozy-caramel text-cozy-caramel hover:text-white hover:bg-cozy-caramel hover:border-cozy-caramel transition-all duration-300 font-bold text-xs uppercase tracking-widest cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            Tambah Sepatu
          </button>
        </div>

        {/* Right: Bill Summary Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-sm p-5 border border-cozy-sand shadow-sm">
            <h4 className="text-[10px] font-bold text-cozy-muted uppercase tracking-widest mb-4 border-b border-cozy-sand pb-2">
              Rincian Estimasi Biaya
            </h4>

            {/* Selected shoes outline */}
            <div className="space-y-3 max-h-60 overflow-y-auto mb-4 pr-1 scrollbar-thin">
              {shoes.map((shoe, idx) => (
                <div key={shoe.id} className="text-xs flex justify-between items-start">
                  <div>
                    <p className="font-bold text-cozy-charcoal uppercase tracking-tight">{shoe.name}</p>
                    <p className="text-[10px] text-cozy-muted uppercase tracking-wider">
                      {shoe.selectedServices.length} Treatment
                    </p>
                  </div>
                  <span className="font-bold text-cozy-muted font-mono">
                    {formatRupiah(calculateShoePrice(shoe))}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-dashed border-cozy-sand pt-4 space-y-3">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-cozy-muted">
                <span>Total Sepatu</span>
                <span className="font-bold text-cozy-charcoal">{totalShoesCount} Pasang</span>
              </div>

              <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-cozy-muted items-center">
                <span className="flex items-center gap-1">
                  Antar - Jemput
                  <span className="relative group cursor-help text-cozy-caramel">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover:block bg-cozy-charcoal text-white text-[10px] p-2 rounded-sm shadow-md w-40 z-10 text-center font-normal uppercase tracking-normal">
                      Gratis antar-jemput untuk cuci minimal 2 pasang sepatu atau total biaya &gt;= Rp 100k
                    </span>
                  </span>
                </span>
                {isFreeDelivery ? (
                  <span className="text-cozy-sage font-bold flex items-center gap-1 text-[9px] bg-cozy-sage/10 px-2 py-0.5 rounded-sm">
                    GRATIS
                  </span>
                ) : (
                  <span className="text-cozy-muted uppercase text-[9px]">Berbayar</span>
                )}
              </div>

              {/* Promo Banner if not free delivery yet */}
              {!isFreeDelivery && (
                <div className="bg-orange-50 border border-orange-200/50 rounded-sm p-3 text-[10px] text-orange-900 uppercase tracking-wide flex items-start gap-1.5 font-medium leading-relaxed">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap text-orange-600 shrink-0 mt-0.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  <span>Tambah 1 sepatu / belanja Rp {formatRupiah(100000 - grandTotal)} lagi untuk Gratis Antar-Jemput!</span>
                </div>
              )}

              <div className="border-t border-cozy-sand pt-4 flex justify-between items-baseline">
                <span className="text-[10px] font-bold text-cozy-charcoal uppercase tracking-widest">Total Estimasi</span>
                <span className="text-xl font-serif font-black text-cozy-caramel font-mono">
                  {formatRupiah(grandTotal)}
                </span>
              </div>
            </div>

            <button 
              onClick={sendBookingWhatsApp}
              className="w-full mt-5 bg-cozy-caramel text-white hover:bg-cozy-charcoal py-3 rounded-sm font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
              Pesan via WhatsApp
            </button>
            <p className="text-[9px] text-cozy-muted text-center mt-3 uppercase tracking-wider font-semibold">
              Rincian dikirim melalui chat WhatsApp Anda
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
