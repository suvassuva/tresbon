'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useEffect, useState } from 'react';
import TactileButton from '@/components/ui/TactileButton';

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems());
  const openCart = useCartStore((state) => state.openCart);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-4' : 'py-8'
    }`}>
      <div className={`mx-auto max-w-7xl px-6 transition-all duration-500 ${
        scrolled ? 'max-w-5xl' : 'max-w-7xl'
      }`}>
        <div className="glass border border-white/10 rounded-3xl px-8 flex justify-between items-center h-20 shadow-2xl">
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center text-text-main border border-white/20 tactile-out active:scale-90 transition-all"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          
          <Link href="/" className="group">
            <span className="text-2xl font-display font-black tracking-tighter text-text-main uppercase group-hover:text-accent-blue transition-all">
              TrèsBon
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-display text-xs font-bold tracking-[0.2em] uppercase transition-all hover:text-accent-blue relative group ${
                  pathname === link.href ? 'text-accent-blue' : 'text-text-main/70'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-accent-blue transition-transform duration-300 ${
                  pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                }`} />
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={openCart} 
              className="w-12 h-12 rounded-2xl bg-white/40 flex items-center justify-center text-text-main border border-white/20 tactile-out hover:scale-110 active:scale-90 transition-all relative group"
            >
              <ShoppingBag size={22} className="group-hover:text-accent-blue transition-colors" />
              {mounted && totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-blue text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center shadow-lg border-2 border-[#E0E5EC]">
                  {totalItems}
                </span>
              )}
            </button>
            <Link href="/contact" className="hidden lg:block">
              <TactileButton variant="default" className="py-4 px-8 text-xs font-black tracking-[0.2em]">
                BOOK NOW
              </TactileButton>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-10'
          }`}
        >
          <div className="glass border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-display text-lg font-black tracking-[0.2em] uppercase transition-all ${
                  pathname === link.href ? 'text-accent-blue' : 'text-text-sub'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="w-full">
              <TactileButton variant="default" className="w-full py-5 text-sm">
                BOOK NOW
              </TactileButton>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

