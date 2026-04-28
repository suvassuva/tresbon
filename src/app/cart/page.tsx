'use client';

import { useCartStore } from '@/store/useCartStore';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
    
    // Optional: Clear cart after successful handoff
    // clearCart();
  };

  return (
    <main className="min-h-screen bg-surface pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl text-navy mb-12 text-center md:text-left">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
            <h2 className="font-serif text-2xl text-navy mb-4">Your cart is empty</h2>
            <p className="font-sans text-slate-500 mb-8 max-w-md mx-auto">
              Looks like you haven't added any products to your cart yet. Discover our premium collection.
            </p>
            <Link 
              href="/shop" 
              className="inline-flex items-center space-x-2 bg-navy text-white px-8 py-4 font-sans uppercase tracking-widest text-sm hover:bg-navy/90 transition-colors"
            >
              <span>Continue Shopping</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Cart Items List */}
            <div className="lg:col-span-8 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row bg-white p-6 rounded-2xl shadow-sm items-center sm:items-start gap-6">
                  <div className="w-32 h-32 relative rounded-xl overflow-hidden shrink-0 bg-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-center sm:justify-start text-center sm:text-left w-full">
                    <h3 className="font-serif text-xl text-navy mb-2">{item.name}</h3>
                    <p className="font-sans text-gold font-semibold mb-4">${item.price.toFixed(2)}</p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-4 border border-slate-200 rounded-full px-4 py-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-slate-400 hover:text-navy transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-sans font-medium w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-slate-400 hover:text-navy transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors p-2"
                        aria-label="Remove item"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-4">
              <div className="bg-white p-8 rounded-2xl shadow-sm sticky top-32">
                <h2 className="font-serif text-2xl text-navy mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-8 font-sans text-slate-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${totalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t border-slate-100 pt-4 mt-4 flex justify-between font-serif text-xl text-navy">
                    <span>Total</span>
                    <span>${totalPrice().toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-[#25D366] text-white py-4 font-sans font-semibold uppercase tracking-widest text-sm rounded-full hover:bg-[#1ebd5b] transition-colors flex justify-center items-center space-x-2"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.441-1.273.606-1.446c.163-.173.346-.217.461-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.564-10.563 5.832 0 10.564 4.742 10.564 10.564 0 5.827-4.739 10.564-10.564 10.564z" />
                  </svg>
                  <span>Checkout via WhatsApp</span>
                </button>
                <p className="text-xs text-slate-400 text-center mt-4 font-sans">
                  You will be redirected to WhatsApp to complete your order.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
