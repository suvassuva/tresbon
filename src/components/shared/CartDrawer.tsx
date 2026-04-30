'use client';

import { useCartStore } from '@/store/useCartStore';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import TactileButton from '../ui/TactileButton';
import TactileCard from '../ui/TactileCard';

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
      <div 
        className="fixed inset-0 bg-text-main/20 backdrop-blur-md z-[60] transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-background z-[70] shadow-2xl flex flex-col transform transition-transform duration-500 ease-out translate-x-0">
        <div className="glass flex items-center justify-between p-8 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="tactile-out p-3 rounded-xl bg-white">
              <ShoppingBag className="text-accent-blue" size={20} />
            </div>
            <h2 className="font-display text-2xl font-black text-text-main tracking-tighter">Your Bag</h2>
          </div>
          <button 
            onClick={closeCart}
            className="tactile-out p-2 rounded-xl bg-white hover:text-accent-blue transition-all active:scale-90"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-24 h-24 tactile-in rounded-full flex items-center justify-center mb-4 bg-gray-50/50">
                <ShoppingBag className="text-gray-300" size={40} />
              </div>
              <div>
                <p className="font-display font-bold text-text-main text-xl mb-2">Empty Bag</p>
                <p className="font-sans text-text-sub text-sm max-w-[200px]">Looks like you haven't added anything yet.</p>
              </div>
              <TactileButton variant="glass" onClick={closeCart}>
                START SHOPPING
              </TactileButton>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <TactileCard key={item.id} padding="none" elevation="low" className="flex gap-4 p-4 group">
                  <div className="relative w-24 h-28 rounded-xl overflow-hidden shrink-0 tactile-in bg-white p-1">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display font-black text-text-main text-xs uppercase tracking-tight">{item.name}</h3>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-gray-300 hover:text-accent-orange transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="font-display font-bold text-accent-blue text-sm">${item.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center tactile-in rounded-xl bg-white p-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-text-sub hover:text-text-main transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-display font-black text-xs w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-text-sub hover:text-text-main transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </TactileCard>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 glass border-t border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <span className="font-display text-text-sub uppercase tracking-[0.2em] text-[10px] font-bold">Subtotal</span>
              <span className="font-display text-3xl font-black text-text-main tracking-tighter">${totalPrice().toFixed(2)}</span>
            </div>
            
            <TactileButton 
              colorScheme="blue" 
              size="lg" 
              className="w-full h-16"
              onClick={handleCheckout}
            >
              CHECKOUT VIA WHATSAPP
            </TactileButton>
          </div>
        )}
      </div>
    </>
  );
}

