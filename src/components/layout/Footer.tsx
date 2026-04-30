import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-100 py-20 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-16 max-w-[1440px] mx-auto gap-12">
        <div className="text-2xl font-display font-black text-text-main tracking-tighter">TrèsBon</div>
        
        <nav className="flex flex-wrap justify-center gap-10 font-display text-xs font-bold uppercase tracking-[0.2em]">
          <Link href="/services" className="text-text-sub hover:text-accent-blue transition-colors">
            Services
          </Link>
          <Link href="/shop" className="text-text-sub hover:text-accent-blue transition-colors">
            Shop
          </Link>
          <Link href="/cart" className="text-text-sub hover:text-accent-blue transition-colors">
            Cart
          </Link>
          <Link href="/contact" className="text-text-sub hover:text-accent-blue transition-colors">
            Contact
          </Link>
        </nav>
        
        <div className="text-text-sub font-display text-[10px] font-bold uppercase tracking-widest">
          © {new Date().getFullYear()} TrèsBon. PREMIUM CARE.
        </div>
      </div>
    </footer>
  );
}

