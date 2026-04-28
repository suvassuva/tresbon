'use client';

import ProductCard from '@/components/ui/ProductCard';
import { useState } from 'react';

const products = [
  // ── Shampoo ──
  {
    id: '1',
    name: 'Aveda Invati Advanced Shampoo',
    price: 36.00,
    category: 'Shampoo',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Aveda Rosemary Mint Shampoo',
    price: 20.00,
    category: 'Shampoo',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    name: 'Aveda Shampure Nurturing Shampoo',
    price: 21.00,
    category: 'Shampoo',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80',
  },
  {
    id: '4',
    name: 'Aveda Cherry Almond Shampoo',
    price: 21.00,
    category: 'Shampoo',
    image: 'https://images.unsplash.com/photo-1590156546946-ce55a12a6a5d?auto=format&fit=crop&q=80',
  },
  // ── Conditioner ──
  {
    id: '5',
    name: 'Aveda Botanical Repair Conditioner',
    price: 39.00,
    category: 'Conditioner',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80',
  },
  {
    id: '6',
    name: 'Aveda Nutriplenish Leave-in Conditioner',
    price: 41.00,
    category: 'Conditioner',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80',
  },
  {
    id: '7',
    name: 'Aveda Smooth Infusion Conditioner',
    price: 32.00,
    category: 'Conditioner',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80',
  },
  {
    id: '8',
    name: 'Wella Fusion Intense Repair Conditioner',
    price: 28.00,
    category: 'Conditioner',
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&q=80',
  },
  // ── Treatment ──
  {
    id: '9',
    name: 'Aveda Botanical Repair Strengthening Mask',
    price: 48.00,
    category: 'Treatment',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80',
  },
  {
    id: '10',
    name: 'Wella Oil Reflections Luminous Smoothing Oil',
    price: 30.00,
    category: 'Treatment',
    image: 'https://images.unsplash.com/photo-1600428877878-1a0fd85beda8?auto=format&fit=crop&q=80',
  },
  {
    id: '11',
    name: '3TENX Keratin Intensive Hair Repair Serum',
    price: 55.00,
    category: 'Treatment',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4a38691?auto=format&fit=crop&q=80',
  },
  {
    id: '12',
    name: 'Aveda Damage Remedy Restructuring Treatment',
    price: 38.00,
    category: 'Treatment',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80',
  },
  // ── Styling ──
  {
    id: '13',
    name: 'Aveda Control Paste Finishing Paste',
    price: 27.00,
    category: 'Styling',
    image: 'https://images.unsplash.com/photo-1597354984706-fac992d9306f?auto=format&fit=crop&q=80',
  },
  {
    id: '14',
    name: 'Aveda Phomollient Styling Foam',
    price: 24.00,
    category: 'Styling',
    image: 'https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&q=80',
  },
  {
    id: '15',
    name: 'Wella EIMI Perfect Setting Blow Dry Lotion',
    price: 18.00,
    category: 'Styling',
    image: 'https://images.unsplash.com/photo-1585747860019-8237312097ad?auto=format&fit=crop&q=80',
  },
  {
    id: '16',
    name: 'Aveda Brilliant Anti-Humectant Pomade',
    price: 26.00,
    category: 'Styling',
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80',
  },
  // ── Skincare ──
  {
    id: '17',
    name: 'Aveda Tulasāra Radiant Facial Dry Brush',
    price: 32.00,
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80',
  },
  {
    id: '18',
    name: 'Aveda Botanical Kinetics Purifying Gel Cleanser',
    price: 28.00,
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4a38691?auto=format&fit=crop&q=80',
  },
  {
    id: '19',
    name: 'Aveda Tulasāra Firming Sleep Masque',
    price: 65.00,
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80',
  },
  {
    id: '20',
    name: 'Aveda Botanical Kinetics Hydrating Lotion',
    price: 33.00,
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80',
  },
  // ── Tools & Accessories ──
  {
    id: '21',
    name: 'Aveda Wooden Paddle Brush',
    price: 28.00,
    category: 'Tools',
    image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&q=80',
  },
  {
    id: '22',
    name: 'Premium Ceramic Round Brush 45mm',
    price: 35.00,
    category: 'Tools',
    image: 'https://images.unsplash.com/photo-1590159983013-d4ff5fc71c1d?auto=format&fit=crop&q=80',
  },
  {
    id: '23',
    name: 'Wide Tooth Detangling Comb – Rose Gold',
    price: 15.00,
    category: 'Tools',
    image: 'https://images.unsplash.com/photo-1585747860019-8237312097ad?auto=format&fit=crop&q=80',
  },
  {
    id: '24',
    name: 'Microfiber Hair Towel Wrap – Charcoal',
    price: 22.00,
    category: 'Tools',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80',
  },
];

const categories = ['All', 'Shampoo', 'Conditioner', 'Treatment', 'Styling', 'Skincare', 'Tools'];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-navy pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">The Boutique</h1>
          <p className="font-sans text-slate-300 max-w-2xl mx-auto text-lg">
            Curated premium products from Aveda, Wella & 3TENX — maintain your salon-perfect look at home.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-3 min-w-max justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-sans text-sm font-semibold tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-navy text-white shadow-lg shadow-navy/20'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12 border-b border-slate-200 pb-4">
            <h2 className="font-serif text-2xl text-navy">
              {activeCategory === 'All' ? 'All Products' : activeCategory}
            </h2>
            <div className="font-sans text-sm text-slate-500 uppercase tracking-widest">
              Showing {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-serif text-xl text-slate-400">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
