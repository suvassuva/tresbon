'use client';

import { useCartStore } from '@/store/useCartStore';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, totalPrice } = useCartStore();

  if (!isOpen) return null;

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    let message = "Hello TrèsBon Salon! I would like to order the following products:\n\n";
    items.forEach((item) => {
      message += `- ${item.quantity}x ${item.name} ($${(item.price * item.quantity).toFixed(2)})\n`;
    });
    message += `\nTotal: $${totalPrice().toFixed(2)}\n\n`;
    message += "Please let me know the payment and delivery details. Thank you!";

    const whatsappUrl = `https://wa.me/917483502470?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    closeCart();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy/50 backdrop-blur-sm z-[60] transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[70] shadow-2xl flex flex-col transform transition-transform duration-300 translate-x-0">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-navy" size={24} />
            <h2 className="font-serif text-2xl text-navy">Your Cart</h2>
          </div>
          <button 
            onClick={closeCart}
            className="text-slate-400 hover:text-navy transition-colors p-2 rounded-full hover:bg-slate-50"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="text-slate-300" size={32} />
              </div>
              <p className="font-sans text-slate-500 text-lg">Your cart is currently empty.</p>
              <button 
                onClick={closeCart}
                className="text-gold font-bold uppercase tracking-widest text-sm hover:text-navy transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-slate-50 p-4 rounded-xl">
                  <div className="relative w-20 h-24 rounded-lg overflow-hidden shrink-0 bg-white">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-sans font-bold text-navy text-sm uppercase tracking-wider pr-4">{item.name}</h3>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-slate-400 hover:text-red-500 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="font-serif text-navy">${item.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-slate-200 rounded-lg bg-white">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-slate-500 hover:text-navy transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-sans font-medium text-sm w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-slate-500 hover:text-navy transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-slate-100 bg-white">
            <div className="flex justify-between items-center mb-6">
              <span className="font-sans text-slate-500 uppercase tracking-widest text-sm font-bold">Total</span>
              <span className="font-serif text-2xl text-navy">${totalPrice().toFixed(2)}</span>
            </div>
            
            <button 
              onClick={handleCheckout}
              className="w-full bg-navy text-white font-bold font-sans uppercase tracking-widest py-4 rounded-xl hover:bg-navy/90 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              Checkout via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}
