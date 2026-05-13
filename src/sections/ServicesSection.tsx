import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Section, Container, FadeIn } from '../components/ui/Layout';
import servicesData from '../data/services.json';
import siteData from '../data/site.json';
import { Button } from '../components/ui/Button';

export const ServicesSection = () => {
  return (
    <Section bg="white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <FadeIn className="max-w-2xl">
            <span className="text-brand-gold text-xs uppercase tracking-widest font-bold mb-4 block">OUR EXPERTISE</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">Tailored solutions for every room in your home.</h2>
          </FadeIn>
          <FadeIn>
            
            <a
  href={`https://wa.me/${siteData.company.whatsapp}?text=Hello%20I%20would%20like%20to%20get%20a%20quote`}
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" size="md">
    Get a Quote
  </Button>
</a>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {servicesData.map((service, index) => (
            <FadeIn key={service.id} transition={{ delay: index * 0.1 }}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden mb-8">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 p-4 glass text-brand-charcoal text-xs uppercase tracking-widest font-bold">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-2xl mb-4 group-hover:text-brand-gold transition-colors">{service.title}</h3>
                <p className="text-brand-charcoal/60 leading-relaxed mb-6">
                  {service.description}
                </p>
                   <a
  href={`https://wa.me/${siteData.company.whatsapp}?text=Hello%20I%20would%20like%20to%20get%20a%20quote`}
  target="_blank"
  rel="noopener noreferrer"
>
                <div className="flex items-center text-xs uppercase tracking-widest font-bold group-hover:gap-4 transition-all">
                  
                  Know more <ArrowRight size={16} className="ml-2" />
                </div>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
};
