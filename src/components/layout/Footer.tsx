import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-slate-200 py-16 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-16 max-w-[1440px] mx-auto gap-8">
        <div className="text-xl font-serif text-navy">TrèsBon</div>
        
        <nav className="flex flex-wrap justify-center gap-8 font-sans text-sm tracking-tight">
          <Link href="/services" className="text-slate-500 hover:text-navy underline decoration-gold underline-offset-4 transition-all duration-200">
            Services
          </Link>
          <Link href="/shop" className="text-slate-500 hover:text-navy underline decoration-gold underline-offset-4 transition-all duration-200">
            Shop
          </Link>
          <Link href="/cart" className="text-slate-500 hover:text-navy underline decoration-gold underline-offset-4 transition-all duration-200">
            Cart
          </Link>
          <Link href="/contact" className="text-slate-500 hover:text-navy underline decoration-gold underline-offset-4 transition-all duration-200">
            Contact
          </Link>
        </nav>
        
        <div className="text-slate-500 font-sans text-sm">
          © {new Date().getFullYear()} TrèsBon luxury hair & beauty.
        </div>
      </div>
    </footer>
  );
}
