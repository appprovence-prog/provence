import React from 'react';
import { Section, Container, FadeIn } from '../components/ui/Layout';
import { SEO } from '../seo/SEO';

const galleryItems = [
  {
    id: 1,
    title: 'Total Luxury Closets',
    category: 'Closets',
    image: 'src/assets/img/closet-1400x1000-1-768x549.webp',
  },

  {
    id: 2,
    title: 'Luxury Kitchens',
    category: 'Kitchens',
    image: 'src/assets/img/01-10-1400x1000-1-1024x731.webp',
  },

  {
    id: 3,
    title: 'Multifunctional Home Office',
    category: 'Offices',
    image: 'src/assets/img/01-4-1400x1000-1-1024x731.webp',
  },

  {
    id: 4,
    title: 'Luxury Rooms',
    category: 'Rooms',
    image: 'src/assets/img/loft-dormitorio-2022-1400x1000-1-768x549.webp',
  },

  {
    id: 5,
    title: 'Modern Walk-in Closet',
    category: 'Closets',
    image: 'src/assets/img/closet-1400x1000-1-768x549.webp',
  },

  {
    id: 6,
    title: 'Contemporary Luxury Interior',
    category: 'Luxury Living',
    image: 'src/assets/img/Mask-group-1.webp',
  },
];

export const Portfolio = () => {
  return (
    <div className="pt-32">
      <SEO title="Portfolio" description="Explore our gallery of luxury custom closets and storage solutions." />
      
      <Section bg="stone">
        <Container>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight">Galleries</h1> 
            <p className="text-brand-charcoal/60 max-w-xl mx-auto font-light leading-relaxed">
              Discover how we transform ordinary spaces into extraordinary sanctuaries of order and elegance.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {galleryItems.map((item) => (
              <FadeIn key={item.id} className="break-inside-avoid">
                <div className="group relative overflow-hidden bg-brand-charcoal">
                  <img 
                    src={`${item.image}?auto=format&fit=crop&q=80&w=800`} 
                    alt={item.title} 
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-brand-gold text-[10px] uppercase tracking-widest font-bold mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white text-2xl font-serif">{item.title}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};
