'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const isCartOpen = useCartStore((state) => state.isOpen);
  
  const phoneNumber = "917483502470";

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=Hello! I'm interested in TrèsBon services.`, '_blank');
  };

  if (isCartOpen) return null;

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end">
      {/* Popup Message */}
      <div 
        className={`mb-6 glass border border-white/20 p-6 w-72 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform transition-all duration-700 origin-bottom-right ${
          showPopup ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse" />
            <span className="font-display text-[10px] font-black text-text-sub uppercase tracking-[0.2em]">Concierge</span>
          </div>
          <button onClick={() => setShowPopup(false)} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-text-sub hover:text-text-main transition-all tactile-out border border-white/5">
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="font-sans text-sm text-text-main mb-6 leading-relaxed">
          Bonjour! How can we assist you with your booking or product inquiry today?
        </p>
        <button 
          onClick={handleWhatsAppClick}
          className="w-full bg-[#25D366] text-white font-display text-[10px] font-black py-3.5 rounded-2xl shadow-[0_8px_20px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all uppercase tracking-[0.2em] border border-[#25D366]/20"
        >
          Chat with us
        </button>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => {
          if (!showPopup) setShowPopup(true);
          else handleWhatsAppClick();
        }}
        className="bg-white/5 backdrop-blur-2xl text-[#25D366] w-20 h-20 rounded-[2.5rem] flex items-center justify-center shadow-2xl border border-white/10 tactile-out hover:scale-110 active:scale-90 transition-all duration-500 relative group"
      >
        <div className="w-16 h-16 rounded-[2rem] bg-[#25D366] flex items-center justify-center text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] group-hover:rotate-12 transition-transform">
          <MessageCircle size={32} />
        </div>
        <span className="absolute top-2 right-2 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-accent-blue shadow-lg border-2 border-[#E0E5EC]"></span>
        </span>
      </button>
    </div>

  );
}
