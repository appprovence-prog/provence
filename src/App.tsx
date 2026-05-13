import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { ServicesSection } from './sections/ServicesSection';
import { Process } from './sections/Process';
import { ContactForm } from './sections/ContactForm';
import { SEO, getLocalBusinessSchema } from './seo/SEO';
import { About } from './app/About';
import { Portfolio } from './app/Portfolio';
import { FloatingContact } from './components/FloatingContact';
import { Contact } from './app/Contact';
import { Showroom } from './app/Showroom';

const Home = () => (
  <>
    <SEO schema={getLocalBusinessSchema()} />
    <Hero />
    <ServicesSection />
    <Process />
    {/* Trust / Testimonial section could go here */}
    <ContactForm />
    <FloatingContact />
  </>
);

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Home />} /> {/* Temporary redirect */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/showroom" element={<Showroom />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
