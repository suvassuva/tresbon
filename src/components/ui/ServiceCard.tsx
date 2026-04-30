'use client';

import Link from 'next/link';
import TactileCard from './TactileCard';

interface ServiceCardProps {
  title: string;
  category: string;
  image: string;
  span?: string;
}

export default function ServiceCard({ title, category, image, span = 'col-span-1' }: ServiceCardProps) {
  return (
    <TactileCard 
      padding="none" 
      elevation="low"
      className={`${span} group overflow-hidden h-[400px] relative`}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="glass rounded-2xl p-6 transition-all duration-300 group-hover:translate-y-[-8px]">
          <span className="font-display text-[10px] font-bold text-accent-blue tracking-[0.2em] mb-2 block uppercase">
            {category}
          </span>
          <h3 className="font-display text-xl font-bold text-text-main mb-4">
            {title}
          </h3>
          <Link 
            href="/contact" 
            className="inline-flex items-center text-xs font-bold text-text-main hover:text-accent-blue transition-colors gap-2 uppercase tracking-widest"
          >
            Book Now
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </TactileCard>
  );
}

