import React from 'react';
import { Droplets } from 'lucide-react';

const footerLinks = {
  Services: ['Basic Wash', 'Deluxe Wash', 'Interior Cleaning', 'Full Detailing', 'Wax & Protection'],
  Company: ['About Us', 'Gallery', 'Reviews', 'Pricing', 'Contact'],
  Connect: ['Facebook', 'Instagram', 'Twitter', 'Google Maps', 'Yelp'],
};

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-8 bg-card">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                <Droplets className="w-5 h-5 text-primary" />
              </div>
              <span className="font-heading font-bold text-lg text-foreground tracking-tight">
                CarWashy<span className="text-primary">.com</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
              Professional car wash and detailing services in Los Angeles. 
              We treat every vehicle like it's our own — with precision, care, 
              and eco-friendly products.
            </p>
            <div className="space-y-2">
              <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                Business Hours
              </p>
              <p className="text-sm text-foreground">Mon – Sat: 8:00 AM – 7:00 PM</p>
              <p className="text-sm text-foreground">Sunday: 9:00 AM – 5:00 PM</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-foreground text-sm mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        if (title === 'Services') scrollTo('#services');
                        else if (link === 'Gallery') scrollTo('#gallery');
                        else if (link === 'Reviews') scrollTo('#reviews');
                        else if (link === 'Pricing') scrollTo('#pricing');
                        else if (link === 'Contact') scrollTo('#contact');
                      }}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CarWashy.com. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}