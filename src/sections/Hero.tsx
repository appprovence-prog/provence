import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Container, FadeIn } from '../components/ui/Layout';
import siteData from '../data/site.json';

export const Hero = () => {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-brand-charcoal pt-32 pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          src="img/Mask-group-1.webp"
          alt="Luxury Custom Closet"
          className="w-full h-full object-cover"
        />
      </div>

      <Container className="relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.4em] font-medium mb-8 block text-brand-gold">
              FLORIDA'S PREMIER DESIGN FIRM
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 leading-[1.1] tracking-tight text-white">
              {siteData.hero.title}
            </h1>
            <p className="text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed text-brand-stone/80">
              {siteData.hero.subtitle}
            </p>
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-12 h-12 rounded-full border-2 border-brand-charcoal object-cover" alt="Designer" />
                ))}
              </div>
              <p className="text-xs uppercase tracking-widest text-brand-stone/60 font-bold">
                1,200+ Projects <br /> Completed Locally
              </p>
            </div>
          </FadeIn>

          <FadeIn className="glass p-8 md:p-10 text-brand-charcoal">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-serif mb-4">Request Confirmed</h3>
                <p className="text-sm font-light text-brand-charcoal/70 mb-8">A designer will contact you shortly.</p>
                <Button variant="outline" className="w-full" onClick={() => setStatus('idle')}>New Request</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-serif mb-2">Free Consultation</h2>
                  <p className="text-xs uppercase tracking-widest text-brand-charcoal/60 font-bold">Transform your space today</p>
                </div>
                
                <div className="space-y-4">
                  <input required placeholder="Your Name" className="w-full bg-white/50 border border-brand-charcoal/10 px-4 py-3 text-sm focus:border-brand-gold outline-none transition-colors" />
                    <input required placeholder="E-mail" className="w-full bg-white/50 border border-brand-charcoal/10 px-4 py-3 text-sm focus:border-brand-gold outline-none transition-colors" />
                  <input required type="tel" placeholder="Phone Number" className="w-full bg-white/50 border border-brand-charcoal/10 px-4 py-3 text-sm focus:border-brand-gold outline-none transition-colors" />
                  <select className="w-full bg-white/50 border border-brand-charcoal/10 px-4 py-3 text-sm focus:border-brand-gold outline-none transition-colors appearance-none">
                     <option>Schedule a Showroom Visit</option>
                    <option>Request a Catalog</option>
                    <option>Get a Quote</option>
                    <option>Speak to Our Team</option>
                  </select>
                </div>

                <Button disabled={status === 'loading'} type="submit" className="w-full py-4 text-sm font-bold tracking-widest" variant="primary">
                  {status === 'loading' ? 'Processing...' : 'Send'}
                </Button>
                
                <p className="text-[10px] text-center opacity-40 leading-relaxed italic">
                  *Your privacy is our priority. We never share your data.
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </Container>

      {/* Decorative vertical lines */}
      <div className="absolute bottom-12 left-12 hidden lg:flex flex-col items-center gap-4 text-brand-stone/40">
        <span className="vertical-text text-[10px] tracking-[0.2em]">SINCE 1994</span>
        <div className="w-[1px] h-24 bg-brand-stone/20" />
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-stone/60"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-stone/60 to-transparent" />
      </motion.div>
    </section>
  );
};
