'use client';

import { useCartStore, CartItem } from '@/store/useCartStore';
import TactileCard from './TactileCard';
import TactileButton from './TactileButton';

interface ProductCardProps {
  product: Omit<CartItem, 'quantity'> & { category?: string };
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ ...product, quantity: 1 });
  };

  return (
    <div className="group flex flex-col">
      <TactileCard padding="none" elevation="low" className="aspect-[3/4] relative mb-6 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <TactileButton 
            variant="glass" 
            size="sm" 
            className="w-full backdrop-blur-md"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </TactileButton>
        </div>
      </TactileCard>
      <div className="px-2">
        <h4 className="font-display text-sm font-bold tracking-tight text-text-main mb-1">
          {product.name}
        </h4>
        <p className="font-sans text-text-sub text-xs uppercase tracking-widest mb-2">{product.category ?? 'Premium Care'}</p>
        <p className="font-display font-bold text-accent-blue">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

