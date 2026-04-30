'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

import TactileCard from '@/components/ui/TactileCard';
import TactileButton from '@/components/ui/TactileButton';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-16 h-1 bg-accent-blue rounded-full mx-auto mb-10"></div>
          <h1 className="font-display text-5xl md:text-7xl font-black text-text-main mb-8 uppercase tracking-tighter">Contact Us</h1>
          <p className="font-sans text-text-sub max-w-2xl mx-auto text-lg leading-relaxed">
            Get in touch to schedule your next appointment or inquire about our services.
          </p>
        </div>
      </section>

      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-3xl font-black text-text-main mb-12 uppercase tracking-tight">Visit The Salon</h2>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center tactile-out border border-white/5">
                    <MapPin className="text-accent-blue shrink-0" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-text-main mb-2 uppercase tracking-widest text-sm">Location</h3>
                    <p className="text-text-sub font-sans leading-relaxed">790 Très Bon Salon, 15th, 5th Cross Rd<br />near Kuvempu Park, Bengaluru, Karnataka 560076</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center tactile-out border border-white/5">
                    <Phone className="text-accent-blue shrink-0" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-text-main mb-2 uppercase tracking-widest text-sm">Phone</h3>
                    <p className="text-text-sub font-sans text-lg">+91 7483 502 470</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center tactile-out border border-white/5">
                    <Clock className="text-accent-blue shrink-0" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-text-main mb-2 uppercase tracking-widest text-sm">Hours</h3>
                    <div className="text-text-sub font-sans space-y-2">
                      <p className="flex justify-between w-64"><span>Mon - Fri:</span> <span className="text-text-main font-medium">9:00 AM - 8:00 PM</span></p>
                      <p className="flex justify-between w-64"><span>Saturday:</span> <span className="text-text-main font-medium">10:00 AM - 6:00 PM</span></p>
                      <p className="flex justify-between w-64"><span>Sunday:</span> <span className="text-text-main font-medium">10:00 AM - 6:00 PM</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Interaction */}
            <TactileCard padding="none" className="overflow-hidden h-72 group relative border border-white/5">
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" 
                 alt="Map location" 
                 className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
               />
               <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-all duration-500">
                 <button className="bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-2xl shadow-2xl font-display text-xs font-black tracking-[0.2em] text-white uppercase flex items-center space-x-3 tactile-out hover:scale-110 active:scale-95 transition-all">
                   <MapPin size={18} className="text-accent-blue"/>
                   <span>Get Directions</span>
                 </button>
               </div>
            </TactileCard>
          </div>

          {/* Contact Form */}
          <TactileCard elevation="low" className="p-8 md:p-16 border border-white/5">
            <h2 className="font-display text-3xl font-black text-text-main mb-12 uppercase tracking-tight">Send a Message</h2>
            
            {isSubmitted ? (
              <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 tactile-out border border-green-500/10">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-3xl font-black text-text-main mb-4 uppercase tracking-tight">Message Sent</h3>
                <p className="font-sans text-text-sub text-lg max-w-xs mx-auto">
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 font-sans">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-black text-text-sub uppercase tracking-[0.2em] ml-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-6 py-4 bg-background border border-white/5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent-blue/20 tactile-in text-text-main transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-black text-text-sub uppercase tracking-[0.2em] ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-6 py-4 bg-background border border-white/5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent-blue/20 tactile-in text-text-main transition-all"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-xs font-black text-text-sub uppercase tracking-[0.2em] ml-1">Subject</label>
                  <div className="relative">
                    <select 
                      id="subject"
                      className="w-full px-6 py-4 bg-background border border-white/5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent-blue/20 tactile-in text-text-main transition-all appearance-none"
                    >
                      <option value="booking">Appointment Booking</option>
                      <option value="products">Product Inquiry</option>
                      <option value="general">General Question</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-text-sub">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-black text-text-sub uppercase tracking-[0.2em] ml-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    className="w-full px-6 py-4 bg-background border border-white/5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent-blue/20 tactile-in text-text-main transition-all resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>
                
                <TactileButton 
                  type="submit"
                  variant="default"
                  className="w-full py-5 text-sm"
                >
                  Send Message
                </TactileButton>
              </form>
            )}
          </TactileCard>
        </div>
      </section>
    </main>
  );
}

