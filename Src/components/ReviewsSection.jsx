import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Michael R.',
    rating: 5,
    text: "Really happy with how my car turned out. The staff were nice and got everything cleaned up really well. I'll definitely be coming back.",
    vehicle: '2023 BMW 5 Series',
  },
  {
    name: 'Sarah L.',
    rating: 5,
    text: "Took my car here for a wash and honestly wasn't disappointed. It came out looking really clean and shiny, and the service was pretty quick too.",
    vehicle: '2022 Tesla Model 3',
  },
  {
    name: 'James T.',
    rating: 5,
    text: "Great experience overall. Everyone was friendly, and they did a really good job on my car. Definitely worth checking out if you need a good car wash.",
    vehicle: '2021 Audi Q5',
  },
  {
    name: 'Emily C.',
    rating: 5,
    text: "I've been to a few car washes before, but this one did a really good job. My car looked great afterward and the whole process was easy. Would recommend!",
    vehicle: '2023 Honda CR-V',
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-violet-500/15 rounded-full blur-[130px] opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-[26rem] h-[26rem] bg-primary/20 rounded-full blur-[130px] opacity-60" />
      <div className="absolute top-1/2 -left-20 w-72 h-72 bg-cyan-500/15 rounded-full blur-[120px] opacity-40" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">
            Testimonials
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-4 mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Here's what some of our customers have to say about their experience
            with CarWashy.com.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-3 italic">
            Reviews shown are placeholders and will be replaced with verified customer testimonials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/90 text-base leading-relaxed mb-6">
                "{r.text}"
              </p>

              <div>
                <p className="font-heading font-semibold text-foreground text-sm">
                  {r.name}
                </p>
                <p className="font-mono text-xs text-muted-foreground mt-0.5">
                  {r.vehicle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}