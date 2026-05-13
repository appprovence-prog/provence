import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, CreditCard, ChevronRight } from 'lucide-react';
import { Container } from './ui/Layout';
import siteData from '../data/site.json';
import servicesData from '../data/services.json';

export const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-brand-stone pt-24 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-serif tracking-tight font-bold mb-8 block">
              {siteData.company.name.toUpperCase()}
            </Link>
            <p className="text-brand-stone/40 text-sm leading-relaxed font-light mb-8 max-w-xs">
              Provence Closets is Florida's premier luxury storage design firm. Excellence in every corner.
            </p>
            <div className="flex gap-4">
              <a href={siteData.socials.instagram} className="w-10 h-10 rounded-full border border-brand-stone/10 flex items-center justify-center hover:bg-brand-stone hover:text-brand-charcoal transition-all">
                <Instagram size={18} />
              </a>
              <a href={siteData.socials.facebook} className="w-10 h-10 rounded-full border border-brand-stone/10 flex items-center justify-center hover:bg-brand-stone hover:text-brand-charcoal transition-all">
                <Facebook size={18} />
              </a>
              <a href={siteData.socials.linkedin} className="w-10 h-10 rounded-full border border-brand-stone/10 flex items-center justify-center hover:bg-brand-stone hover:text-brand-charcoal transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-stone/30 mb-8">Solutions</h4>
            <ul className="space-y-4">
              {servicesData.map(service => (
                <li key={service.id}>
                  <Link to={`/services`} className="text-sm font-light hover:text-brand-gold transition-colors flex items-center group">
                    <ChevronRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-stone/30 mb-8">Company</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link to="/about" className="hover:text-brand-gold">Our Story</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand-gold">Craftsmanship</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand-gold">Galleries</Link></li>
              <li><Link to="/showroom" className="hover:text-brand-gold">Showrooms</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold">Join the Team</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-brand-stone/30 mb-8">Our Studio</h4>
            <p className="text-sm font-light leading-relaxed text-brand-stone/60 mb-6">
              {siteData.company.address}
            </p>
            <a href={`tel:${siteData.company.phone}`} className="text-lg font-serif block mb-2 hover:text-brand-gold">
              {siteData.company.phone}
            </a>
            <a href={`mailto:${siteData.company.email}`} className="text-sm font-light text-brand-stone/60 hover:text-brand-gold">
              {siteData.company.email}
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-stone/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-brand-stone/20 font-bold">
            © {new Date().getFullYear()} Provence Closets. All Rights Reserved.
          </p>
          
        </div>
      </Container>
    </footer>
  );
};
