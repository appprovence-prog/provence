import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

import { Section, Container, FadeIn } from '../components/ui/Layout';
import { Button } from '../components/ui/Button';
import { SEO } from '../seo/SEO';

import siteData from '../data/site.json';

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-32">

      <SEO
        title="Contact Us"
        description="Get in touch with our luxury interior design specialists."
      />

      {/* HERO */}
      <Section bg="white">
        <Container>

          <div className="max-w-4xl mx-auto text-center mb-24">

            <span className="text-brand-gold text-xs uppercase tracking-[0.3em] font-bold mb-6 block">
              CONTACT US
            </span>

            <h1 className="text-5xl md:text-7xl font-serif leading-tight tracking-tight mb-8">
              Let's Create <br /> Something Exceptional
            </h1>

            <p className="text-brand-charcoal/60 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
              Connect with our design team to begin planning your luxury custom space.
            </p>

          </div>

          {/* CONTACT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* LEFT */}
            <FadeIn>

              <div className="space-y-10">

                {/* PHONE */}
                <div className="flex items-start gap-6">

                  <div className="w-14 h-14 rounded-full border border-brand-charcoal/10 flex items-center justify-center text-brand-gold">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-charcoal/40 mb-2">
                      Phone
                    </p>

                    <p className="text-2xl font-serif">
                      {siteData.company.phone}
                    </p>
                  </div>

                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-6">

                  <div className="w-14 h-14 rounded-full border border-brand-charcoal/10 flex items-center justify-center text-brand-gold">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-charcoal/40 mb-2">
                      Email
                    </p>

                    <p className="text-2xl font-serif break-all">
                      {siteData.company.email}
                    </p>
                  </div>

                </div>

                {/* ADDRESS */}
                <div className="flex items-start gap-6">

                  <div className="w-14 h-14 rounded-full border border-brand-charcoal/10 flex items-center justify-center text-brand-gold">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-charcoal/40 mb-2">
                      Showroom
                    </p>

                    <p className="text-2xl font-serif leading-relaxed">
                      {siteData.company.address}
                    </p>
                  </div>

                </div>

              </div>

              {/* IMAGE */}
              <div className="mt-20 relative overflow-hidden">

                <img
                  src="src/assets/img/01-10-1400x1000-1-1024x731.webp"
                  alt="Luxury Interior"
                  className="w-full h-[500px] object-cover grayscale"
                />

                <div className="absolute inset-0 bg-black/10" />

              </div>

            </FadeIn>

            {/* FORM */}
            <FadeIn className="bg-brand-stone p-8 md:p-12">

              {status === 'success' ? (

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >

                  <div className="w-20 h-20 rounded-full bg-brand-gold flex items-center justify-center mx-auto mb-8 text-white">
                    <Send size={32} />
                  </div>

                  <h2 className="text-3xl font-serif mb-4">
                    Request Received
                  </h2>

                  <p className="text-brand-charcoal/60 leading-relaxed font-light max-w-md mx-auto">
                    One of our consultants will contact you shortly to discuss your project.
                  </p>

                  <Button
                    variant="outline"
                    className="mt-8"
                    onClick={() => setStatus('idle')}
                  >
                    Send Another
                  </Button>

                </motion.div>

              ) : (

                <form onSubmit={handleSubmit} className="space-y-8">

                  {/* HEADER */}
                  <div className="mb-10">

                    <span className="text-brand-gold text-xs uppercase tracking-[0.3em] font-bold block mb-4">
                      START YOUR PROJECT
                    </span>

                    <h2 className="text-4xl font-serif leading-tight">
                      Schedule Your Consultation
                    </h2>

                  </div>

                  {/* NAME */}
                  <div className="space-y-2">

                    <label className="text-[10px] uppercase tracking-[0.25em] font-bold opacity-40">
                      Name
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      className="w-full bg-transparent border-b border-brand-charcoal/20 py-4 outline-none transition-all duration-300 focus:border-brand-gold placeholder:text-brand-charcoal/30"
                    />

                  </div>

                  {/* PHONE */}
                  <div className="space-y-2">

                    <label className="text-[10px] uppercase tracking-[0.25em] font-bold opacity-40">
                      Phone
                    </label>

                    <input
                      required
                      type="tel"
                      placeholder="(000) 000-0000"
                      className="w-full bg-transparent border-b border-brand-charcoal/20 py-4 outline-none transition-all duration-300 focus:border-brand-gold placeholder:text-brand-charcoal/30"
                    />

                  </div>

                  {/* EMAIL */}
                  <div className="space-y-2">

                    <label className="text-[10px] uppercase tracking-[0.25em] font-bold opacity-40">
                      Email
                    </label>

                    <input
                      required
                      type="email"
                      placeholder="you@email.com"
                      className="w-full bg-transparent border-b border-brand-charcoal/20 py-4 outline-none transition-all duration-300 focus:border-brand-gold placeholder:text-brand-charcoal/30"
                    />

                  </div>

                  {/* SELECT */}
                  <div className="space-y-2">

                    <label className="text-[10px] uppercase tracking-[0.25em] font-bold opacity-40">
                      Select Inquiry
                    </label>

                    <select
                      className="w-full bg-transparent border-b border-brand-charcoal/20 py-4 outline-none transition-all duration-300 appearance-none focus:border-brand-gold"
                    >
                      <option>Schedule a Showroom Visit</option>
                      <option>Request a Catalog</option>
                      <option>Get a Quote</option>
                      <option>Speak to Our Team</option>
                    </select>

                  </div>

                  {/* MESSAGE */}
                  <div className="space-y-2">

                    <label className="text-[10px] uppercase tracking-[0.25em] font-bold opacity-40">
                      Message
                    </label>

                    <textarea
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full bg-transparent border-b border-brand-charcoal/20 py-4 outline-none transition-all duration-300 resize-none focus:border-brand-gold placeholder:text-brand-charcoal/30"
                    />

                  </div>

                  {/* BUTTON */}
                  <Button
                    disabled={status === 'loading'}
                    type="submit"
                    className="w-full py-4 text-sm tracking-[0.25em]"
                    variant="primary"
                  >
                    {status === 'loading'
                      ? 'Submitting...'
                      : 'Submit Request'}
                  </Button>

                </form>

              )}

            </FadeIn>

          </div>

        </Container>
      </Section>

    </div>
  );
};