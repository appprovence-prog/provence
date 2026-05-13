import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  bg?: 'stone' | 'white' | 'charcoal';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className, 
  bg = 'stone',
  ...props 
}) => {
  const backgrounds = {
    stone: 'bg-brand-stone',
    white: 'bg-white',
    charcoal: 'bg-brand-charcoal text-brand-stone',
  };

  return (
    <section 
      className={cn('py-24 md:py-32 overflow-hidden', backgrounds[bg], className)} 
      {...props}
    >
      {children}
    </section>
  );
};

export const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  children, 
  className,
  ...props 
}) => {
  return (
    <div 
      className={cn('max-w-7xl mx-auto px-6 md:px-12', className)} 
      {...props}
    >
      {children}
    </div>
  );
};

export const FadeIn: React.FC<HTMLMotionProps<'div'>> = ({ children, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    {...props}
  >
    {children}
  </motion.div>
);
