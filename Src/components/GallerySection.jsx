import React from 'react';
import { motion } from 'framer-motion';

export default function GallerySection({ images }) {
  return (
    <section id="gallery" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-20 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[130px] opacity-50" />
      <div className="absolute bottom-0 -left-20 w-[26rem] h-[26rem] bg-primary/20 rounded-full blur-[130px] opacity-60" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-violet-500/15 rounded-full blur-[120px] opacity-40" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">
            Our Results
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-4 mb-4 tracking-tight">
            Before &amp; After
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            See the transformations for yourself — every detail matters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 rounded-full bg-destructive/20 border border-destructive/30">
                    <span className="font-mono text-xs text-destructive">Before</span>
                  </div>
                  <div className="w-8 h-px bg-border" />
                  <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30">
                    <span className="font-mono text-xs text-primary">After</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}