import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, MapPin, Mail } from 'lucide-react';

import { Section, Container, FadeIn } from '../components/ui/Layout';
import { Button } from '../components/ui/Button';

import siteData from '../data/site.json';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <Section id="contact" bg="white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <FadeIn>
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight tracking-tight">
              Start your design <br /> journey today.
            </h2>

            <p className="text-brand-charcoal/60 text-lg font-light mb-12 max-w-lg leading-relaxed">
              Book your complimentary consultation. Our designers are ready
              to help transform your space into something exceptional.
            </p>

            <div className="space-y-8">

              {/* PHONE */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-brand-charcoal/10 flex items-center justify-center text-brand-gold">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold">
                    Call Us
                  </p>

                  <p className="text-lg font-serif">
                    {siteData.company.phone}
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-brand-charcoal/10 flex items-center justify-center text-brand-gold">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold">
                    Email
                  </p>

                  <p className="text-lg font-serif">
                    {siteData.company.email}
                  </p>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-brand-charcoal/10 flex items-center justify-center text-brand-gold">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold">
                    Studio
                  </p>

                  <p className="text-lg font-serif">
                    {siteData.company.address}
                  </p>
                </div>
              </div>

            </div>
          </FadeIn>

          {/* FORM */}
          <FadeIn className="bg-brand-stone p-8 md:p-12 rounded-sm">

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >

                <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 text-white">
                  <Send size={32} />
                </div>

                <h3 className="text-3xl mb-4 font-serif">
                  Request Received
                </h3>

                <p className="text-brand-charcoal/60 leading-relaxed font-light max-w-md mx-auto">
                  One of our consultants will contact you shortly to discuss
                  your project and next steps.
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

                <form  action="https://splitforms.com/api/submit"
  method="POST"
  className="space-y-8">
    <input
  type="hidden"
  name="access_key"
  value="da156ff4669e40389c6a45741d634cc4"
/>

                {/* NAME */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.25em] font-bold opacity-40">
                    Name
                  </label>

                  <input
                  name="name"
                    required
                    type="text"
                    placeholder="Your full name"
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
                    name="email"
                    type="email"
                    placeholder="you@email.com"
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
                    name="phone"
                    placeholder="(000) 000-0000"
                    className="w-full bg-transparent border-b border-brand-charcoal/20 py-4 outline-none transition-all duration-300 focus:border-brand-gold placeholder:text-brand-charcoal/30"
                  />
                </div>

                {/* SELECT */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.25em] font-bold opacity-40">
                    Select Inquiry
                  </label>

                  <select
                    className="w-full bg-transparent border-b border-brand-charcoal/20 py-4 outline-none transition-all duration-300 appearance-none focus:border-brand-gold" name="inquiry"
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
                  name="message"
                    rows={4}
                    placeholder="Tell us a little about your project..."
                    className="w-full bg-transparent border-b border-brand-charcoal/20 py-4 outline-none transition-all duration-300 resize-none focus:border-brand-gold placeholder:text-brand-charcoal/30"
                  />
                </div>

                {/* BUTTON */}
                <Button
                  disabled={status === 'loading'}
                  type="submit"
                  className="w-full"
                  variant="primary"
                >
                  {status === 'loading'
                    ? 'Sending...'
                    : 'Submit Request'}
                </Button>

              </form>
            )}
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
};