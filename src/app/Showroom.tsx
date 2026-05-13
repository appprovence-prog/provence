import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone } from 'lucide-react';

import { Section, Container, FadeIn } from '../components/ui/Layout';
import { Button } from '../components/ui/Button';
import { SEO } from '../seo/SEO';

import siteData from '../data/site.json';

export const Showroom = () => {
  return (
    <div className="pt-32">

      <SEO
        title="Luxury Showroom"
        description="Experience our immersive luxury showroom in North Miami."
      />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-brand-charcoal">

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50 z-10" />

          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8 }}
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Showroom"
            className="w-full h-full object-cover"
          />
        </div>

        <Container className="relative z-20">

          <div className="max-w-4xl">

            <span className="text-brand-gold text-xs uppercase tracking-[0.35em] font-bold block mb-8">
              THE PROVENCE EXPERIENCE
            </span>

            <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.05] tracking-tight mb-10">
              An Immersive Experience <br />
              of Luxury and Design
            </h1>

            <p className="text-xl text-brand-stone/80 font-light leading-relaxed max-w-2xl">
              Where luxury meets functionality and your dreams come to life.
            </p>

          </div>

        </Container>

      </section>

      {/* CONTENT */}
      <Section bg="white">

        <Container>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <FadeIn>

              <div className="space-y-8">

                <div>

                  <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
                    Designed to Inspire
                  </h2>

                  <div className="space-y-6 text-brand-charcoal/65 text-lg font-light leading-relaxed">

                    <p>
                      Located in the heart of North Miami, our showroom has been
                      carefully designed to inspire and delight, offering a
                      tangible preview of what we can create for your home.
                    </p>

                    <p>
                      Explore meticulously assembled closets, kitchens, and
                      living spaces that replicate real environments. Feel at
                      home as you visualize the endless possibilities for your
                      own space.
                    </p>

                    <p>
                      Touch, feel, and experience our premium selection of
                      materials. From fine woods to exclusive finishes, discover
                      the superior quality that defines every Provence creation.
                    </p>

                  </div>

                </div>

                {/* INFO */}
                <div className="space-y-8 pt-8">

                  {/* ADDRESS */}
                  <div className="flex items-start gap-5">

                    <div className="w-12 h-12 rounded-full border border-brand-charcoal/10 flex items-center justify-center text-brand-gold">
                      <MapPin size={18} />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-charcoal/40 mb-2">
                        Showroom Address
                      </p>

                      <p className="text-xl font-serif leading-relaxed">
                        {siteData.company.address}
                      </p>
                    </div>

                  </div>

                  {/* HOURS */}
                  <div className="flex items-start gap-5">

                    <div className="w-12 h-12 rounded-full border border-brand-charcoal/10 flex items-center justify-center text-brand-gold">
                      <Clock size={18} />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-charcoal/40 mb-2">
                        Opening Hours
                      </p>

                      <p className="text-xl font-serif">
                        Monday – Friday · 9AM – 6PM
                      </p>
                    </div>

                  </div>

                  {/* PHONE */}
                  <div className="flex items-start gap-5">

                    <div className="w-12 h-12 rounded-full border border-brand-charcoal/10 flex items-center justify-center text-brand-gold">
                      <Phone size={18} />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-charcoal/40 mb-2">
                        Contact
                      </p>

                      <p className="text-xl font-serif">
                        {siteData.company.phone}
                      </p>
                    </div>

                  </div>

                </div>

                {/* BUTTON */}
                <div className="pt-10">

                  <a
                    href={`https://wa.me/${siteData.company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" variant="primary">
                      Schedule a Visit
                    </Button>
                  </a>

                </div>

              </div>

            </FadeIn>

            {/* RIGHT */}
            <FadeIn>

              <div className="relative overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1400"
                  alt="Luxury Interior"
                  className="w-full h-[800px] object-cover"
                />

              </div>

            </FadeIn>

          </div>

        </Container>

      </Section>

      {/* MAP */}
      <Section bg="stone">

        <Container>

          <div className="text-center mb-16">

            <span className="text-brand-gold text-xs uppercase tracking-[0.35em] font-bold block mb-6">
              VISIT OUR SHOWROOM
            </span>

            <h2 className="text-4xl md:text-5xl font-serif">
              Find Us in North Miami
            </h2>

          </div>

          <div className="overflow-hidden border border-brand-charcoal/10">

            <iframe
              title="Showroom Location"
              src="https://www.google.com/maps?q=North+Miami+Florida&output=embed"
              width="100%"
              height="600"
              loading="lazy"
              className="w-full"
            />

          </div>

        </Container>

      </Section>

    </div>
  );
};