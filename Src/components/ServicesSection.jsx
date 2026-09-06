import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

export default function ServicesSection({ services }) {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-60" />
      <div className="absolute top-1/2 -right-32 w-[28rem] h-[28rem] bg-cyan-500/15 rounded-full blur-[140px] opacity-50" />
      <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-indigo-500/15 rounded-full blur-[120px] opacity-50" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">
            Our Services
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-4 mb-4 tracking-tight">
            Precision Car Care
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Whether you just need a quick clean-up or a full detail, they always
            do a great job and leave your car looking fresh and clean.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}