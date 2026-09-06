import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Shield } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Water beads on dark metallic car surface"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono text-primary tracking-wider uppercase">
                Premium Car Care
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] tracking-tight mb-6"
          >
            Make Your Car
            <br />
            <span className="text-primary">Look Brand New</span>
            <br />
            Again
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-muted-foreground font-body leading-relaxed max-w-lg mb-10"
          >
            They do a really good job cleaning both the inside and outside of
            your car, and the prices are reasonable too. Great service without
            breaking the bank.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollTo('#contact')}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg text-base font-heading font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 flex items-center justify-center gap-2"
            >
              <Shield className="w-5 h-5" />
              Book Now
            </button>
            <button
              onClick={() => scrollTo('#services')}
              className="px-8 py-4 bg-secondary/60 text-foreground rounded-lg text-base font-heading font-semibold border border-border hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Services
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-16 flex items-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span className="font-mono text-primary text-lg font-medium">500+</span>
              <span>Cars Detailed</span>
            </div>
            <div className="w-px h-5 bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-mono text-primary text-lg font-medium">4.9</span>
              <span>Star Rating</span>
            </div>
            <div className="w-px h-5 bg-border hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="font-mono text-primary text-lg font-medium">100%</span>
              <span>Satisfaction</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button onClick={() => scrollTo('#services')} className="text-muted-foreground hover:text-foreground transition-colors">
          <ChevronDown className="w-6 h-6" />
        </button>
      </motion.div>
    </section>
  );
}   