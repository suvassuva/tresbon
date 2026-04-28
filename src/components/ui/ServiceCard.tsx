import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  category: string;
  image: string;
  span?: 'col-span-1' | 'md:col-span-8' | 'md:col-span-4';
}

export default function ServiceCard({ title, category, image, span = 'md:col-span-4' }: ServiceCardProps) {
  return (
    <div className={`${span} group relative overflow-hidden rounded-2xl shadow-sm min-h-[400px]`}>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent flex flex-col justify-end p-8 md:p-12">
        <span className="font-sans text-xs font-semibold text-gold tracking-widest mb-3 uppercase">
          {category}
        </span>
        <h3 className="font-serif text-white text-3xl mb-6">
          {title}
        </h3>
        <Link 
          href="/contact" 
          className="w-fit text-white font-sans text-sm font-semibold border-b border-white pb-1 tracking-widest hover:text-gold hover:border-gold transition-all uppercase"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
}
