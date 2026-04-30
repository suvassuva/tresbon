import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft, Star } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import ServiceCard from "@/components/ui/ServiceCard";
import TactileButton from "@/components/ui/TactileButton";
import TactileCard from "@/components/ui/TactileCard";

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
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link href="/services">
                <TactileButton colorScheme="blue" size="lg" className="w-full sm:w-auto">
                  DISCOVER SERVICES
                </TactileButton>
              </Link>
              <Link href="/shop">
                <TactileButton variant="glass" size="lg" className="w-full sm:w-auto">
                  SHOP COLLECTION
                </TactileButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-surface px-8 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-20 flex flex-col items-center">
            <div className="w-12 h-1 bg-accent-blue rounded-full mb-8"></div>
            <h2 className="font-display text-4xl font-bold text-text-main mb-4 uppercase tracking-tight">Curated Experiences</h2>
            <p className="font-sans text-text-sub max-w-xl mx-auto leading-relaxed">
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
              <h2 className="font-display text-4xl font-bold text-text-main uppercase tracking-tight">Luxury Essentials</h2>
              <p className="font-sans text-text-sub mt-4 max-w-md leading-relaxed">
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
            <p className="font-sans text-white/70 max-w-2xl mx-auto leading-relaxed">
              We exclusively use the world's finest professional brands to ensure exceptional, uncompromising results for your hair and skin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Hair Care */}
            <TactileCard padding="none" elevation="low" className="group flex flex-col h-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80" 
                alt="Hair Care Brands" 
                className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />
              <div className="p-8 flex-1">
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent-blue mb-6 border-b border-gray-100 pb-4">Hair Care</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-display text-2xl font-bold text-text-main mb-2">Aveda</h4>
                    <p className="text-sm text-text-sub font-sans leading-relaxed">
                      Our flagship partner. 100% vegan, cruelty-free, and powered by the art and science of pure botanical flower and plant essences. Sustainable luxury at its finest.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display text-lg font-bold text-text-main">3TENX</h4>
                    <h4 className="font-display text-lg font-bold text-text-main">Wella Professionals</h4>
                  </div>
                </div>
              </div>
            </TactileCard>

            {/* Skin Care */}
            <TactileCard padding="none" elevation="low" className="group flex flex-col h-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80" 
                alt="Skin Care Brands" 
                className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />
              <div className="p-8 flex-1">
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent-blue mb-6 border-b border-gray-100 pb-4">Skin Care</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-display text-xl font-bold text-text-main mb-2">Jeannot</h4>
                    <p className="text-sm text-text-sub font-sans leading-relaxed">Advanced skincare formulations for radiant, glowing skin.</p>
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-text-main mb-2">DermaFig</h4>
                    <p className="text-sm text-text-sub font-sans leading-relaxed">Clinical-grade treatments for targeted skin nourishment.</p>
                  </div>
                </div>
              </div>
            </TactileCard>

            {/* Waxing */}
            <TactileCard padding="none" elevation="low" className="group flex flex-col h-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80" 
                alt="Waxing Brands" 
                className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />
              <div className="p-8 flex-1">
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent-blue mb-6 border-b border-gray-100 pb-4">Waxing</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-display text-xl font-bold text-text-main mb-2">Depileve</h4>
                    <p className="text-sm text-text-sub font-sans leading-relaxed">The global gold standard in professional hair removal systems.</p>
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-text-main mb-2">Rica</h4>
                    <p className="text-sm text-text-sub font-sans leading-relaxed">Gentle, natural formulations for sensitive skin care.</p>
                  </div>
                </div>
              </div>
            </TactileCard>

            {/* Treatments */}
            <TactileCard padding="none" elevation="low" className="group flex flex-col h-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&q=80" 
                alt="Deep Conditioning Brands" 
                className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent-blue mb-6 border-b border-gray-100 pb-4">Treatments</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-display text-2xl font-bold text-text-main mb-2">Cadiveu Brasil Cacau</h4>
                    <p className="text-sm text-text-sub font-sans leading-relaxed">
                      The ultimate keratin protein treatment. Eliminates frizz and delivers incredible restructuring.
                    </p>
                  </div>
                </div>
              </div>
            </TactileCard>

          </div>
        </div>
      </section>

      {/* Creative Director Section */}
      <section className="py-32 bg-white px-8 md:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <TactileCard padding="none" elevation="high" className="relative h-[600px] w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80" 
              alt="Kamala - Creative Director" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105"
            />
          </TactileCard>
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-accent-blue rounded-full"></div>
              <span className="font-display text-xs font-bold tracking-[0.3em] text-accent-blue uppercase">Meet Our Visionary</span>
            </div>
            <h2 className="font-display text-5xl font-bold text-text-main mb-2">Kamala</h2>
            <h3 className="font-display text-sm tracking-[0.3em] uppercase text-text-sub mb-10 font-bold">Creative Director</h3>
            <p className="font-sans text-text-sub leading-relaxed text-lg mb-8">
              Kamala, our visionary Creative Director, leads our team with an unparalleled passion for hair artistry and innovation. With over 15 years of experience, Kamala specializes in avant-garde cuts, vibrant color transformations, and personalized styling that truly reflects each client's unique personality.
            </p>
            <TactileButton variant="default" colorScheme="blue">
              VIEW HER PORTFOLIO
            </TactileButton>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-40 bg-background px-8 md:px-16 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto relative flex justify-center">
          <div className="text-[300px] font-display font-black text-gray-200/50 absolute -top-40 left-0 leading-none select-none z-0">“</div>
          <TactileCard padding="lg" elevation="high" className="relative z-10 max-w-4xl text-center flex flex-col items-center">
            <span className="font-display text-xs font-bold tracking-[0.3em] text-accent-blue uppercase mb-12 block">Reflections</span>
            <p className="font-display text-3xl md:text-5xl text-text-main font-bold leading-relaxed mb-12">
              "TrèsBon is more than a salon; it's a sanctuary. The attention to detail and the personalized approach to my hair color changed how I feel every day."
            </p>
            <div className="flex flex-col items-center">
              <img 
                className="w-24 h-24 rounded-full object-cover mb-8 tactile-out p-1" 
                alt="Testimonial author" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSC9Xdk3l5V6gIWdLwHMchAF8NEN1YIMDQgS1A1WJ8zvuez6lC7yXvC3wZjZqssXy-88tnK6xmGsHMp6Nxxyo8PtO8sSIEb4QLDGwum00T8R-kJ1ZpPtE76rRhFCDYWEGlUSfw52XrEXfncjXu0shGdI4x4YPU4tgt5l3wc1AmuJUOccbrZwCVujwcAfa748uu9Jjj3uPECg0XXHp66ug3V0w5scFJDbFKx6dlApKpzZBX1nKgfpnX7URmbo-Mu0msb7dbD1eGXycu" 
              />
              <p className="font-display text-sm font-bold uppercase tracking-widest text-text-main">Alexandra Vance</p>
              <p className="text-[10px] text-text-sub font-bold tracking-[0.2em] mt-2 mb-12 uppercase">Lifestyle Curator</p>
              
              <a 
                href="https://www.google.com/search?q=Tres+Bon+Unisex+Salon+BTM+2nd+Stage+Bengaluru" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <TactileButton variant="glass" className="flex gap-4 px-8">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent-blue text-accent-blue" />
                    ))}
                  </div>
                  <span className="uppercase tracking-widest text-[10px] font-bold">Review us on Google</span>
                </TactileButton>
              </a>
            </div>
          </TactileCard>
        </div>
      </section>
    </>
  );
}
