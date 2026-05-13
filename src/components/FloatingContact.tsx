import React from 'react';
import { MessageSquare, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import siteData from '../data/site.json';

export const FloatingContact = () => {
  const actions = [
    {
      icon: <MessageCircle size={20} />,
      label: 'WhatsApp',
      href: `https://wa.me/${siteData.company.whatsapp.replace(/\D/g, '')}`,
      color: 'bg-[#25D366]',
    },
    {
      icon: <Phone size={20} />,
      label: 'Call',
      href: `tel:${siteData.company.phone}`,
      color: 'bg-brand-charcoal',
    },
    {
      icon: <MessageSquare size={20} />,
      label: 'SMS',
      href: `sms:${siteData.company.phone}`,
      color: 'bg-brand-gold',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 pointer-events-none">
      {actions.map((action, index) => (
        <motion.a
          key={action.label}
          href={action.href}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`${action.color} text-white p-4 rounded-full shadow-2xl pointer-events-auto flex items-center justify-center group relative`}
          aria-label={action.label}
        >
          {action.icon}
          <span className="absolute right-full mr-4 bg-white text-brand-charcoal px-3 py-1 rounded text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity shadow-sm whitespace-nowrap">
            {action.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
};
