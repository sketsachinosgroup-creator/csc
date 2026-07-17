import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  imageSrc: string;
}

export default function BeforeAfterSlider({ imageSrc }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage (0 - 100)
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    isDragging.current = true;
    
    if ('touches' in e) {
      document.addEventListener('touchmove', handleTouchMove, { passive: true });
      document.addEventListener('touchend', handleTouchEnd);
    } else {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div 
        id="before-after-container"
        ref={containerRef}
        className="relative w-full max-w-2xl aspect-[16/9] rounded-sm overflow-hidden border border-cozy-sand cursor-ew-resize no-select select-none"
        onMouseDown={startDragging}
        onTouchStart={startDragging}
      >
        {/* AFTER STATE (Right side / Full background) */}
        <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
          <img 
            id="after-image"
            src={imageSrc} 
            alt="After Deep Clean" 
            className="w-full h-full object-cover select-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 right-4 bg-cozy-caramel text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-sm">
            AFTER (DEEP CLEAN)
          </div>
        </div>

        {/* BEFORE STATE (Left side / Clipped) */}
        <div 
          id="before-image-clip"
          className="absolute inset-0 h-full overflow-hidden select-none pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          {/* We must specify absolute width matching container to keep the image stable */}
          <div className="absolute inset-0 w-[672px] h-full max-w-[90vw] md:w-[672px]">
            <img 
              id="before-image"
              src={imageSrc} 
              alt="Before Cleaning" 
              className="w-full h-full object-cover filter brightness-[0.7] sepia-[0.3] contrast-[1.1] grayscale-[0.2]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute bottom-4 left-4 bg-cozy-charcoal text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-sm">
            BEFORE
          </div>
        </div>

        {/* SLIDER HANDLE */}
        <div 
          id="slider-divider"
          className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-9 h-9 rounded-sm bg-cozy-charcoal text-white flex items-center justify-center shadow-md border border-white transform -translate-x-[4.5px] scale-90 md:scale-100 pointer-events-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-left-right text-white"><path d="m5 17-5-5 5-5"/><path d="m19 17 5-5-5-5"/></svg>
          </div>
        </div>
      </div>
      <p className="mt-4 text-[10px] text-cozy-muted font-bold uppercase tracking-wider flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-horizontal"><path d="m18 8 4 4-4 4"/><path d="m6 8-4 4 4 4"/><path d="M2 12h20"/></svg>
        Drag slider left & right to compare
      </p>
    </div>
  );
}
