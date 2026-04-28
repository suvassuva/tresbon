import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft, Star } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import ServiceCard from "@/components/ui/ServiceCard";

const FEATURED_PRODUCTS = [
  {
    id: "prod-1",
    name: "Revive Serum",
    price: 85.0,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMMlc94BaLX5Y6wHRfNsCPtt7M9PexGdlNWODxs-giEP0U7XZMNLROznsp63syhtj0tSpIByK_wnWyn63RnmD1ltSuYzVCEUXiQ_dNxLuNFfihnnTQbK2a0ZaoeKHYJn72TIeiFeBKWtFGx5_DIF8MpOe-B2vsFbe2mBqmi_ZN0iUi9B9ILAx5YQ5oV9vTUKeN4slam3twquFhIaVRAT0OMwOYVUsY9BbUTANhGfVryo9DeicshTFbFm1yMdz5HzUe3fUNAqPNqJ82"
  },
  {
    id: "prod-2",
    name: "Noir Mask",
    price: 120.0,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgLA0D1CoxkBJbveyWi9yi0-I_XIcm_MRubVT-cDWcr_VA6aX-Ny4Ni_QP3u3CDbvfMDTdaKwJAeaEy3nRwTg1qA6UX77tKRoRkj6ItkqgnbUYdO9t3ZF9D9WACB7rwogqX_Cy5-fQY9Z0WGwMd0TdlZ4p_6_j2S6tM0BksHmzIJI_4r_vvAyZLOhDzqJB1XaL98I7BXL_DivGI-9EzKmsZ2S6620aAoDo7zX3qHlpXs6PUA7Phi8P23F5He_u-3U2O4zklYH6nQjD"
  },
  {
    id: "prod-3",
    name: "Elixir 05",
    price: 65.0,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA95hTVnVLqI3BEb4CIsHz9EtG9Ahc7rg-hDYwkzIm0Dqn7FMwXY447cPM4PRQKIHaiTCI6GqPxd-9k_ZkHmDMtb4CqghTKNPdVOxlS9zpsmUYXPwoczI6BhFK5jwM-DwvctKTj4Gr3-N28COlhsXbmnzl56uRDYtst8hZ2nuxcleYj4KHYlcOiZaJRk0pvR9OBz2T2V_R1NlJMY1e9XY1aS2_Y026WQ6NI43BFadaq0cPxRVv7dCZQUIREe2rl2TLVll6oVJ43qK8C"
  },
  {
    id: "prod-4",
    name: "Aura Styler",
    price: 340.0,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7QaiZOWXIYG1ubEd3y_JK9n5FnH3SxSaqMRWoLnhKufgipPvxdj4F6K5Bv_chJ-yGtF0ltehg6Rq9Ev-lEYf1MKHn-Ht33gS19g5fC4xwb4OmnTVeYkYDB5KVwqBnxNW1RAsH5m31byHLUOk26cxxz8r2SlT8KeEqS_dsCL01_Hi_Fl_lTZP2Xyfy5Z6sub0folvNufUZrEcY1QS3Mnjh2_lyB6qEbhF3EngZL-tpjmIJlmSyIVFNruuGTJb9fUPWDFmBxq3hHa4y"
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-navy">
          <img 
            alt="Luxury Salon Interior" 
            className="w-full h-full object-cover brightness-75 opacity-80 mix-blend-overlay" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiA74n1Dc1xcoVNWPxFQGYRTu4eUpOW93i2TkRjOydKSfyki0PUshqiAKZmTkJyKPy0XmNs-Jzdp4bB2YZpTQZ4apORWIcGjGZpBfTT_SdV_HBf-ivhNftGnwWwQaS95g345NGMhrfwdbHbDKG_cWAvcDBxDkjn-DV-_pDFsaq3E1IqWqnqCZT2GtbDH6yGzZVZ-kdU_ZMw6EuWyVQO2sPp9UDbGyCHQY45ORYQnvLe18tCBYEixVRGB4a_Lmiuq6Jkfk_llVP6Txo" 
          />
        </div>
        <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 relative z-10 text-white">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-gold"></div>
              <span className="font-sans text-xs font-semibold tracking-[0.3em] text-gold uppercase">Exclusive Beauty Experience</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
              Artistry in Every <br />
              <span className="italic font-normal">Silhouette</span>
            </h1>
            <p className="font-sans text-lg text-white/90 mb-12 max-w-lg leading-relaxed">
              Experience the pinnacle of luxury hair care and bespoke beauty treatments tailored to your unique essence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/services" className="bg-gold text-white px-10 py-4 font-sans text-xs font-semibold tracking-widest hover:bg-gold/90 transition-all text-center uppercase shadow-xl shadow-gold/20">
                Discover Services
              </Link>
              <Link href="/shop" className="border border-white/40 backdrop-blur-sm px-10 py-4 font-sans text-xs font-semibold tracking-widest hover:bg-white/10 transition-all text-center uppercase">
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-surface px-8 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-20 flex flex-col items-center">
            <div className="w-px h-16 bg-gold mb-12"></div>
            <h2 className="font-serif text-4xl text-navy mb-4">Curated Experiences</h2>
            <p className="font-sans text-slate-500 max-w-xl mx-auto leading-relaxed">
              Designed for those who appreciate the finer details of craftsmanship and personal care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <ServiceCard 
              span="md:col-span-8"
              category="Signature Cut"
              title="Precision Hair Design"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuClH7C9z8ZbSI26mo4iDpLkxx2MIMr83vu5ICA24tbmBf-QMUq4WfXiSfpzMFjU2k8NQmRVSXA3AYaUivcwGeA-L4duxtjl6_lRJ025vqvYVGi08hCxht3qMnRWa6FSLR9cRH8AqmOXGpnp1_4hpe_D4DR45ZNrtql64jthOpFKRpMwLvHFITZ0bNfnREIu6gwAeghJfZi27P-Lojz7u1PgUhu7NzTJNUV7itaPJ5QIzGpfd-LLj3t6T0yEtSNBOzyPrDdh9TMfQzOq"
            />
            <ServiceCard 
              span="md:col-span-4"
              category="Colorimetry"
              title="Artisan Coloring"
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuD4xBm-B0diUo2LuPlbxon2zm9kRTu2FvqMOyF5f2xmcz30WOI6lzilg6AWsff-oKVRJ8yJS57oabpQpiLSTlxPsUcXEXCLoYr5bD8uS28JTT7LyrN4GkXWWN-2Mp2ytl1AjDg_BKzyaMWyU7oJcigisG2mRra7Hmz_XBENEWWU9U4vH8N1zHlkKdgiWRbYCfpmEjXHB4phonQtHCK6SV7oe2yR3eLOsIfflqz7zqnNQSYkmJ_a_aaqneeIStaCrXdO3Fwphl1JBA7q"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-serif text-4xl text-navy">Luxury Essentials</h2>
              <p className="font-sans text-slate-500 mt-4 max-w-md leading-relaxed">
                Professional products used and recommended by our stylists. Experience salon-quality care at home.
              </p>
            </div>
            <Link href="/shop" className="group flex items-center gap-2 font-sans text-sm font-semibold text-navy uppercase tracking-widest hover:text-gold transition-colors">
              View All Products
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Brands */}
      <section className="py-32 bg-navy text-white px-8 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-20 flex flex-col items-center">
            <div className="w-px h-16 bg-gold mb-12"></div>
            <h2 className="font-serif text-4xl mb-4 text-white">Our Premium Partners</h2>
            <p className="font-sans text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We exclusively use the world's finest professional brands to ensure exceptional, uncompromising results for your hair and skin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Hair Care */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-gold/50 transition-colors overflow-hidden flex flex-col">
              <img 
                src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80" 
                alt="Hair Care Brands" 
                className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="p-8 flex-1">
                <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-gold mb-6 border-b border-white/10 pb-4">Hair Care</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-serif text-2xl text-white mb-2">Aveda</h4>
                    <p className="text-sm text-slate-400 font-sans leading-relaxed">
                      Our flagship partner. 100% vegan, cruelty-free, and powered by the art and science of pure botanical flower and plant essences. Sustainable luxury at its finest.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-white">3TENX</h4>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-white">Wella Professionals</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Skin Care */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-gold/50 transition-colors overflow-hidden flex flex-col">
              <img 
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80" 
                alt="Skin Care Brands" 
                className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="p-8 flex-1">
                <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-gold mb-6 border-b border-white/10 pb-4">Skin Care</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-serif text-xl text-white mb-2">Jeannot</h4>
                    <p className="text-sm text-slate-400 font-sans leading-relaxed">Advanced skincare formulations for radiant, glowing skin.</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-white mb-2">DermaFig</h4>
                    <p className="text-sm text-slate-400 font-sans leading-relaxed">Clinical-grade treatments for targeted skin nourishment.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Waxing */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-gold/50 transition-colors overflow-hidden flex flex-col">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80" 
                alt="Waxing Brands" 
                className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="p-8 flex-1">
                <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-gold mb-6 border-b border-white/10 pb-4">Waxing</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-serif text-xl text-white mb-2">Depileve</h4>
                    <p className="text-sm text-slate-400 font-sans leading-relaxed">The global gold standard in professional hair removal systems.</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-white mb-2">Rica</h4>
                    <p className="text-sm text-slate-400 font-sans leading-relaxed">Gentle, natural formulations for sensitive skin care.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatments */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-gold/50 transition-colors overflow-hidden flex flex-col">
              <img 
                src="https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&q=80" 
                alt="Deep Conditioning Brands" 
                className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-gold mb-6 border-b border-white/10 pb-4">Deep Conditioning</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-serif text-2xl text-white mb-2">Cadiveu<br/>Brasil Cacau</h4>
                    <p className="text-sm text-slate-400 font-sans leading-relaxed">
                      The ultimate keratin protein treatment. Eliminates frizz and delivers incredible shine, smooth texture, and deep restructuring.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Creative Director Section */}
      <section className="py-32 bg-white px-8 md:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80" 
              alt="Kamala - Creative Director" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gold"></div>
              <span className="font-sans text-xs font-semibold tracking-[0.3em] text-gold uppercase">Meet Our Visionary</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-navy mb-2">Kamala</h2>
            <h3 className="font-sans text-lg tracking-widest uppercase text-slate-500 mb-8 font-semibold">Creative Director</h3>
            <p className="font-sans text-slate-500 leading-relaxed text-lg mb-6">
              Kamala, our visionary Creative Director, leads our team with an unparalleled passion for hair artistry and innovation. With over 15 years of experience, Kamala specializes in avant-garde cuts, vibrant color transformations, and personalized styling that truly reflects each client's unique personality.
            </p>
            <p className="font-sans text-slate-500 leading-relaxed text-lg">
              Her commitment to continuous learning and trend-setting techniques ensures Très Bon Salon remains at the forefront of the beauty industry, delivering exceptional results and an unforgettable salon experience.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 bg-surface px-8 md:px-16 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto relative flex justify-center">
          <div className="text-[250px] font-serif text-slate-200 absolute -top-32 md:-left-12 leading-none select-none z-0">“</div>
          <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
            <span className="font-sans text-xs font-semibold tracking-widest text-gold uppercase mb-8 block">Reflections</span>
            <p className="font-serif text-3xl md:text-5xl text-navy italic leading-relaxed mb-12">
              "TrèsBon is more than a salon; it's a sanctuary. The attention to detail and the personalized approach to my hair color changed how I feel every day."
            </p>
            <div className="flex flex-col items-center">
              <img 
                className="w-20 h-20 rounded-full object-cover mb-6 border-2 border-gold shadow-xl" 
                alt="Testimonial author" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSC9Xdk3l5V6gIWdLwHMchAF8NEN1YIMDQgS1A1WJ8zvuez6lC7yXvC3wZjZqssXy-88tnK6xmGsHMp6Nxxyo8PtO8sSIEb4QLDGwum00T8R-kJ1ZpPtE76rRhFCDYWEGlUSfw52XrEXfncjXu0shGdI4x4YPU4tgt5l3wc1AmuJUOccbrZwCVujwcAfa748uu9Jjj3uPECg0XXHp66ug3V0w5scFJDbFKx6dlApKpzZBX1nKgfpnX7URmbo-Mu0msb7dbD1eGXycu" 
              />
              <p className="font-sans text-sm font-semibold uppercase tracking-widest text-navy">Alexandra Vance</p>
              <p className="text-xs text-slate-500 tracking-wider mt-1 mb-8">LIFESTYLE CURATOR</p>
              
              <a 
                href="https://www.google.com/search?q=Tres+Bon+Unisex+Salon+BTM+2nd+Stage+Bengaluru" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white border border-slate-200 px-8 py-4 rounded-full hover:border-gold hover:shadow-lg transition-all font-sans text-sm font-semibold text-navy group"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold group-hover:scale-110 transition-transform delay-75" />
                  ))}
                </div>
                <span className="uppercase tracking-widest text-xs">Review us on Google</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
