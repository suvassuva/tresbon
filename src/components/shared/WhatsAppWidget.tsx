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
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {/* Popup Message */}
      <div 
        className={`mb-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 w-64 transform transition-all duration-500 origin-bottom-right ${
          showPopup ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wider">Concierge</span>
          </div>
          <button onClick={() => setShowPopup(false)} className="text-slate-400 hover:text-slate-600">
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="font-sans text-sm text-navy mb-3">
          Bonjour! How can we assist you with your booking or product inquiry today?
        </p>
        <button 
          onClick={handleWhatsAppClick}
          className="w-full bg-navy text-white font-sans text-xs font-semibold py-2 rounded-lg hover:bg-navy/90 transition-colors"
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
        className="bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
        </span>
      </button>
    </div>
  );
}
