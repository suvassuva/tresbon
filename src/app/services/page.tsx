import ServiceCard from "@/components/ui/ServiceCard";

const SERVICES = [
  {
    category: "Signature Cut",
    title: "Precision Hair Design",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClH7C9z8ZbSI26mo4iDpLkxx2MIMr83vu5ICA24tbmBf-QMUq4WfXiSfpzMFjU2k8NQmRVSXA3AYaUivcwGeA-L4duxtjl6_lRJ025vqvYVGi08hCxht3qMnRWa6FSLR9cRH8AqmOXGpnp1_4hpe_D4DR45ZNrtql64jthOpFKRpMwLvHFITZ0bNfnREIu6gwAeghJfZi27P-Lojz7u1PgUhu7NzTJNUV7itaPJ5QIzGpfd-LLj3t6T0yEtSNBOzyPrDdh9TMfQzOq",
    span: "md:col-span-8" as const,
  },
  {
    category: "Colorimetry",
    title: "Artisan Coloring",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4xBm-B0diUo2LuPlbxon2zm9kRTu2FvqMOyF5f2xmcz30WOI6lzilg6AWsff-oKVRJ8yJS57oabpQpiLSTlxPsUcXEXCLoYr5bD8uS28JTT7LyrN4GkXWWN-2Mp2ytl1AjDg_BKzyaMWyU7oJcigisG2mRra7Hmz_XBENEWWU9U4vH8N1zHlkKdgiWRbYCfpmEjXHB4phonQtHCK6SV7oe2yR3eLOsIfflqz7zqnNQSYkmJ_a_aaqneeIStaCrXdO3Fwphl1JBA7q",
    span: "md:col-span-4" as const,
  },
  {
    category: "Wellness",
    title: "Scalp Therapy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2N6YiqB2Tn0Kh6JRp6mcUE1iJjkgUcscxOtq0ckb1SWvX-lydBgvKVRw1dixTdw1jnb5-Ywx6J3nePU6a_kHLqfjlqrb2lXKVz8wYaLRdRY4ld7jhhIcz5usCJPwWP_nUA6WqY2tK9-XJrwtlVRGg3XeagA7hvrjJnjlZieZgLFoF5vNP0Uk9_d1TGHDMac6jcmJjoHj-adPaXqakAx3LF_v5jQZin8_qQsQCCxfpfd0BOJzftEaVjmnEI4qTMhAqVQUZ6f42b3JZ",
    span: "md:col-span-4" as const,
  },
  {
    category: "Occasion",
    title: "Bridal & Special Event",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxuf0bWsekXHS5qd3oZmSc75-6UQCUK8WqWgAtB9vvqB2C3fZs1m8jFDN9dlsQbrjOSFZ9gSmCXoo0dO2nYui2jy2PGu5JxFCljjS6negx6OVgnMeqgRNdkh39XFZgNuMDtKpEjI8lLVKQclkwkZqXR1RpACb27r2Bw8TUb8mh0LFT2GgW15MQoroGOM9fH3Zz4gS9vmJBfWPQXOsdaJF53nygxoYXJWOc0LCC__behwH9RnQlaKvwxJozCB8FZt2q2SvrZTRvtVOC",
    span: "md:col-span-8" as const,
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-20 px-8 md:px-16 text-center">
        <h1 className="font-serif text-5xl md:text-6xl text-navy mb-6">Our Services</h1>
        <div className="w-12 h-px bg-gold mx-auto mb-8"></div>
        <p className="font-sans text-slate-500 max-w-2xl mx-auto leading-relaxed">
          From precision cuts to artisan coloring, discover a curated selection of premium salon services tailored exclusively to your desires.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-8 md:px-16 pb-32">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard 
              key={index}
              category={service.category}
              title={service.title}
              image={service.image}
              span={service.span}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
