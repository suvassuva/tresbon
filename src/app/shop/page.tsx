import ProductCard from '@/components/ui/ProductCard';

const products = [
  {
    id: '1',
    name: 'Aveda Invati Advanced Shampoo',
    price: 36.00,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Aveda Botanical Repair Conditioner',
    price: 39.00,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    name: 'Aveda Rosemary Mint Shampoo',
    price: 20.00,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80',
  },
  {
    id: '4',
    name: 'Aveda Nutriplenish Leave-in',
    price: 41.00,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80',
  },
  {
    id: '5',
    name: 'Aveda Shampure Nurturing Shampoo',
    price: 21.00,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80',
  },
  {
    id: '6',
    name: 'Aveda Cherry Almond Shampoo',
    price: 21.00,
    image: 'https://images.unsplash.com/photo-1590156546946-ce55a12a6a5d?auto=format&fit=crop&q=80',
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-navy pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">The Boutique</h1>
          <p className="font-sans text-slate-300 max-w-2xl mx-auto text-lg">
            Curated Aveda products to maintain your salon-perfect look at home.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filters/Sorting header can go here */}
          <div className="flex justify-between items-end mb-12 border-b border-slate-200 pb-4">
            <h2 className="font-serif text-2xl text-navy">All Products</h2>
            <div className="font-sans text-sm text-slate-500 uppercase tracking-widest">
              Showing {products.length} results
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
