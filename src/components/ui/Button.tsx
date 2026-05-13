import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '../../lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  const variants = {
    primary: 'bg-brand-charcoal text-brand-stone hover:bg-brand-charcoal/90 shadow-sm',
    secondary: 'bg-brand-gold text-white hover:bg-brand-gold/90',
    outline: 'border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-stone',
    ghost: 'text-brand-charcoal hover:bg-brand-charcoal/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-sm font-medium tracking-wider uppercase',
    lg: 'px-10 py-5 text-base font-medium tracking-widest uppercase',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};
