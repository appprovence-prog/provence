import React from 'react';
import { Section, Container, FadeIn } from '../components/ui/Layout';

const steps = [
  {
    title: "Consultation",
    description: "A professional designer visits your home to measure the space and discuss your lifestyle needs."
  },
  {
    title: "3D Rendering",
    description: "Receive a photorealistic 3D visualization of your new space before any construction begins."
  },
  {
    title: "Production",
    description: "Our local Florida craftsmen build your system using premium sustainble materials."
  },
  {
    title: "Installation",
    description: "White-glove installation that leaves your home cleaner than we found it, guaranteed."
  }
];

export const Process = () => {
  return (
    <Section bg="charcoal">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 self-start sticky top-32">
            <FadeIn>
              <span className="text-brand-gold text-xs uppercase tracking-widest font-bold mb-4 block">THE EXPERIENCE</span>
              <h2 className="text-4xl md:text-5xl leading-tight mb-8">Four steps to a more organized life.</h2>
              <p className="text-brand-stone/60 leading-relaxed font-light">
                We believe that great design should be effortless. From the first sketch to the final screw, we handle every detail with precision.
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-7 lg:offset-1 space-y-24 pt-12">
            {steps.map((step, index) => (
              <FadeIn key={step.title} transition={{ delay: index * 0.1 }}>
                <div className="flex gap-8 group">
                  <span className="font-serif text-6xl text-brand-gold/20 group-hover:text-brand-gold transition-colors duration-500">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl mb-4">{step.title}</h3>
                    <p className="text-brand-stone/50 font-light leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
