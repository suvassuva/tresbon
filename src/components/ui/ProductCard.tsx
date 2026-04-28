'use client';

import Image from 'next/image';
import { useCartStore, CartItem } from '@/store/useCartStore';

interface ProductCardProps {
  product: Omit<CartItem, 'quantity'>;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ ...product, quantity: 1 });
  };

  return (
    <div className="group flex flex-col">
      <div className="aspect-[3/4] bg-surface relative mb-6 overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button 
          onClick={handleAddToCart}
          className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur text-navy py-3 font-sans text-sm font-semibold tracking-widest translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 uppercase"
        >
          Add to Cart
        </button>
      </div>
      <h4 className="font-sans text-sm font-semibold uppercase tracking-widest text-navy mb-1">
        {product.name}
      </h4>
      <p className="font-sans text-slate-500 mb-2 text-sm">{/* Category or description placeholder */}Premium Care</p>
      <p className="font-serif text-lg text-navy">${product.price.toFixed(2)}</p>
    </div>
  );
}
