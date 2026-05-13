import React from 'react';
import { Section, Container, FadeIn } from '../components/ui/Layout';
import { SEO } from '../seo/SEO';

export const About = () => {
  return (
    <div className="pt-32">
      <SEO title="Our Story" description="Learn about Provence Closets, Florida's premier custom closet design firm." />
      
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="relative aspect-square">
                <img 
                  src="src/assets/img/01-10-1400x1000-1-1024x731.webp" 
                  alt="Our Craftsmanship" 
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-gold p-12 text-white flex flex-col justify-end">
                  <span className="text-4xl font-serif mb-2">54</span>
                  <span className="text-xs uppercase tracking-widest font-bold">Years of Excellence</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <span className="text-brand-gold text-xs uppercase tracking-widest font-bold mb-6 block">OUR STORY</span>
              <h1 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Born from a passion for detail.</h1>
              <div className="space-y-6 text-brand-charcoal/70 leading-relaxed font-light text-lg">
                <p>
                 Founded in 1971 in Southern Brazil, Provence expanded its operations, reaching South Florida in 2018. Our company was born from a passion for design and the pursuit of excellence in custom woodworking. Our journey began with a clear goal: to elevate the concept of personalized spaces in the heart of Miami.
                </p>
                <p>
                 Our mission is to be recognized as the undisputed reference in design and manufacturing of luxury closets and custom furniture in South Florida, setting new standards for quality, innovation, and personalized service.


                </p>
                <ul className="space-y-6">
  <li>
    <strong>Artisanal Excellence</strong> — Each piece is a testament to our dedication to perfection.
  </li>

  <li>
    <strong>Constant Innovation</strong> — We continuously seek new techniques and materials to exceed expectations.
  </li>

  <li>
    <strong>Personalized Service</strong> — Your dream is our project, and your satisfaction is our priority.
  </li>

  <li>
    <strong>Sustainability</strong> — Committed to responsible practices and durable materials.
  </li>

  <li>
    <strong>Collaboration</strong> — We value partnerships with architects, designers, and clients to create exceptional results.
  </li>
</ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section bg="charcoal">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl mb-8">Our Values</h2>
            <p className="text-brand-stone/50 font-light">
              We never compromise on quality. Every joint, every hinge, and every finish is inspected to meet the Provence standard.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { title: "Precision", desc: "Measured to the millimeter for a factory-perfect fit in every home." },
              { title: "Sustainability", desc: "All our materials are sourced from responsibly managed forests." },
              { title: "Service", desc: "A concierge approach to interior design and home improvement." }
            ].map(value => (
              <div key={value.title}>
                <div className="w-12 h-[1px] bg-brand-gold mx-auto mb-8" />
                <h3 className="text-2xl mb-4 font-serif">{value.title}</h3>
                <p className="text-brand-stone/40 font-light text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};
