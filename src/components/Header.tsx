import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/Button';
import siteData from '../data/site.json';
import { cn } from '../lib/utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Showroom', href: '/showroom' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
  className={cn(
    'fixed top-0 left-0 w-full z-50 transition-all duration-500',
    isScrolled 
      ? 'py-4 bg-black/90 backdrop-blur-md shadow-sm text-white' 
      : 'py-8 bg-transparent text-white'
  )}
>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
       <Link 
  to="/" 
  className="text-2xl font-serif tracking-tight font-bold transition-colors"
>
  {siteData.company.name.toUpperCase()}
</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link 
  key={link.name} 
  to={link.href}
  className="text-xs uppercase tracking-widest font-medium hover:text-brand-gold transition-colors"
>
  {link.name}
</Link>
          ))}
             <a
  href={`https://wa.me/${siteData.company.whatsapp}?text=Hello%20I%20would%20like%20to%20get%20a%20quote`}
  target="_blank"
  rel="noopener noreferrer"
>
          <Button size="sm" className="hidden lg:flex">
            Get in touch
          </Button>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-6 md:hidden">
          <a href={`tel:${siteData.company.phone}`} className="p-2">
            <Phone size={20} />
          </a>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-brand-stone h-screen flex flex-col items-center pt-12 space-y-8 md:hidden">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-serif"
            >
              {link.name}
            </Link>
          ))}
          <Button size="md" className="w-4/5">
            Book Consultation
          </Button>
        </div>
      )}
    </header>
  );
};
