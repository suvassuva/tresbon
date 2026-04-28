'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems());
  const openCart = useCartStore((state) => state.openCart);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-gold/20 sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-8 md:px-16 max-w-[1440px] mx-auto h-20">
        <div className="flex items-center gap-4">
          <button className="md:hidden">
            <Menu className="w-6 h-6 text-navy" />
          </button>
        </div>
        
        <Link href="/" className="text-2xl font-serif tracking-[0.2em] text-navy">
          TrèsBon
        </Link>
        
        <nav className="hidden md:flex items-center gap-12 font-serif text-lg tracking-widest uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors duration-300 hover:text-gold ${
                pathname === link.href ? 'text-gold border-b-2 border-gold pb-1' : 'text-slate-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-6">
          <button onClick={openCart} className="relative group">
            <ShoppingBag className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
            {mounted && totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <Link href="/contact" className="hidden md:block bg-navy text-white font-sans text-sm font-semibold px-6 py-3 tracking-widest hover:bg-navy/90 active:scale-95 transition-all uppercase">
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
