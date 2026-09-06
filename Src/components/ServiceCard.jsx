import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-xs text-primary/80 tracking-wider uppercase mb-1">
              {service.tag}
            </p>
            <h3 className="font-heading font-bold text-lg md:text-xl text-foreground mb-1">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {service.description}
            </p>
          </div>
          <div className="ml-4 shrink-0">
            <span className="font-mono text-xl font-medium text-primary">
              {service.price}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}