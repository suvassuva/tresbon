'use client';

import { useCartStore } from '@/store/useCartStore';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import TactileCard from '@/components/ui/TactileCard';
import TactileButton from '@/components/ui/TactileButton';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCartStore();

  const handleWhatsAppCheckout = () => {
    const phoneNumber = '917483502470';
    
    let message = 'Hello TrèsBon, I would like to place an order:\n\n';
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - ${item.quantity}x @ $${item.price.toFixed(2)}\n`;
    });
    
    message += `\n*Total: $${totalPrice().toFixed(2)}*\n\n`;
    message += 'Please let me know how I can proceed with the payment. Thank you!';
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-background pt-40 pb-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="w-16 h-1 bg-accent-blue rounded-full mb-10"></div>
        <h1 className="font-display text-4xl md:text-6xl font-black text-text-main mb-16 uppercase tracking-tighter">Your Cart</h1>

        {items.length === 0 ? (
          <TactileCard elevation="low" className="text-center py-24 border border-white/5">
            <h2 className="font-display text-3xl font-black text-text-main mb-6 uppercase tracking-tight">Your cart is empty</h2>
            <p className="font-sans text-text-sub mb-10 max-w-md mx-auto text-lg leading-relaxed">
              Looks like you haven't added any products to your cart yet. Discover our premium collection.
            </p>
            <Link href="/shop">
              <TactileButton variant="default" className="px-12 py-5">
                <span>Continue Shopping</span>
                <ArrowRight size={18} className="ml-2" />
              </TactileButton>
            </Link>
          </TactileCard>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Cart Items List */}
            <div className="lg:col-span-8 space-y-8">
              {items.map((item) => (
                <TactileCard key={item.id} elevation="low" padding="none" className="flex flex-col sm:flex-row overflow-hidden border border-white/5">
                  <div className="w-full sm:w-48 h-48 relative shrink-0 bg-white/5">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover grayscale opacity-80"
                    />
                  </div>
                  
                  <div className="flex-1 p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-display text-2xl font-black text-text-main mb-2 uppercase tracking-tight">{item.name}</h3>
                        <p className="font-sans text-accent-blue font-bold text-xl">${item.price.toFixed(2)}</p>
                      </div>
                      
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="w-10 h-10 rounded-xl bg-white/5 text-text-sub hover:text-red-500 transition-all flex items-center justify-center tactile-out border border-white/5"
                        aria-label="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-6 mt-6">
                      <div className="flex items-center bg-background border border-white/5 rounded-2xl p-1 shadow-sm tactile-in">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-text-sub hover:text-text-main hover:bg-white/5 transition-all disabled:opacity-30"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-display font-black w-10 text-center text-text-main text-lg">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-text-sub hover:text-text-main hover:bg-white/5 transition-all"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </TactileCard>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4">
              <TactileCard elevation="high" className="p-10 border border-white/10 sticky top-32">
                <h2 className="font-display text-2xl font-black text-text-main mb-8 uppercase tracking-tight">Order Summary</h2>
                
                <div className="space-y-6 mb-10 font-sans">
                  <div className="flex justify-between text-text-sub">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-bold text-text-main">${totalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-text-sub">
                    <span className="font-medium">Shipping</span>
                    <span className="text-xs font-black uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5">Calculated at checkout</span>
                  </div>
                  <div className="border-t border-white/5 pt-6 mt-6 flex justify-between">
                    <span className="font-display font-black text-text-main uppercase tracking-tight">Total</span>
                    <span className="font-display font-black text-2xl text-accent-blue">${totalPrice().toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-[#25D366] text-white py-5 font-display font-black uppercase tracking-widest text-sm rounded-2xl hover:scale-105 active:scale-95 transition-all flex justify-center items-center space-x-3 shadow-[0_10px_30px_-10px_rgba(37,211,102,0.5)] border border-[#25D366]/20 group"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current group-hover:rotate-12 transition-transform">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.441-1.273.606-1.446c.163-.173.346-.217.461-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.564-10.563 5.832 0 10.564 4.742 10.564 10.564 0 5.827-4.739 10.564-10.564 10.564z" />
                  </svg>
                  <span>Checkout via WhatsApp</span>
                </button>
                <p className="text-xs text-text-sub text-center mt-6 font-sans font-medium uppercase tracking-widest opacity-60">
                  Redirecting to WhatsApp for payment.
                </p>
              </TactileCard>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

