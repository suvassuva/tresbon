'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically handle the form submission, e.g., using an API route or external service
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-navy pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">Contact Us</h1>
          <p className="font-sans text-slate-300 max-w-2xl mx-auto text-lg">
            Get in touch to schedule your next appointment or inquire about our services.
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            <h2 className="font-serif text-3xl text-navy mb-8">Visit The Salon</h2>
            
            <div className="space-y-8 font-sans">
              <div className="flex items-start space-x-4">
                <MapPin className="text-gold mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-navy mb-1 uppercase tracking-widest text-sm">Location</h3>
                  <p className="text-slate-600">790 Très Bon Salon, 15th, 5th Cross Rd<br />near Kuvempu Park, near Little Elly preschool<br />BTM 2nd Stage, Bengaluru, Karnataka 560076</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-gold mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-navy mb-1 uppercase tracking-widest text-sm">Phone</h3>
                  <p className="text-slate-600">+91 7483 502 470</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-gold mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-navy mb-1 uppercase tracking-widest text-sm">Email</h3>
                  <p className="text-slate-600">info@tresbonsalon.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-gold mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-navy mb-1 uppercase tracking-widest text-sm">Hours</h3>
                  <div className="text-slate-600 space-y-2">
                    <p className="grid grid-cols-[100px_1fr] gap-4"><span>Mon - Fri:</span> <span>9:00 AM - 8:00 PM</span></p>
                    <p className="grid grid-cols-[100px_1fr] gap-4"><span>Saturday:</span> <span>10:00 AM - 6:00 PM</span></p>
                    <p className="grid grid-cols-[100px_1fr] gap-4"><span>Sunday:</span> <span>10:00 AM - 6:00 PM</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 bg-slate-100 h-64 rounded-xl overflow-hidden relative">
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" 
                 alt="Map location" 
                 className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg font-sans text-sm font-bold tracking-widest text-navy uppercase flex items-center space-x-2">
                   <MapPin size={16} className="text-gold"/>
                   <span>Get Directions</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface p-8 md:p-12 rounded-2xl">
            <h2 className="font-serif text-3xl text-navy mb-8">Send a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-white p-8 rounded-xl text-center border border-green-100">
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-navy mb-2">Message Sent</h3>
                <p className="font-sans text-slate-600">
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-navy uppercase tracking-widest mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-navy uppercase tracking-widest mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-navy uppercase tracking-widest mb-2">Subject</label>
                  <select 
                    id="subject"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow text-slate-700"
                  >
                    <option value="booking">Appointment Booking</option>
                    <option value="products">Product Inquiry</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-navy uppercase tracking-widest mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition-shadow resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-navy text-white py-4 font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-navy/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
