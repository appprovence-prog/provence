import React, { useEffect } from 'react';
import siteData from '../data/site.json';

interface SEOProps {
  title?: string;
  description?: string;
  type?: 'website' | 'article' | 'LocalBusiness';
  schema?: any;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  type = 'website',
  schema 
}) => {
  const finalTitle = title ? `${title} | ${siteData.company.name}` : siteData.seo.defaultTitle;
  const finalDescription = description || siteData.seo.defaultDescription;

  useEffect(() => {
    document.title = finalTitle;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', finalDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = finalDescription;
      document.head.appendChild(meta);
    }

    // JSON-LD Schema
    if (schema) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [finalTitle, finalDescription, schema]);

  return null;
};

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": siteData.company.name,
  "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteData.company.address,
    "addressLocality": "Newport Beach",
    "addressRegion": "CA",
    "postalCode": "92660",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.6189,
    "longitude": -117.9298
  },
  "url": "https://provenceclosets.com",
  "telephone": siteData.company.phone,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "16:00"
    }
  ]
});
