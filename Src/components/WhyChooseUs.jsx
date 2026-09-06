import React from 'react';
import { motion } from 'framer-motion';
import { Users, Leaf, DollarSign, Zap, Award } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Experienced Team',
    desc: 'Skilled professionals with years of automotive detailing expertise.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    desc: 'Biodegradable, water-safe solutions that protect your car and the planet.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    desc: 'Premium results without the premium price tag.',
  },
  {
    icon: Zap,
    title: 'Fast Service',
    desc: 'Efficient turnaround so you get back on the road quickly.',
  },
  {
    icon: Award,
    title: '100% Satisfaction',
    desc: "We're not done until you're completely happy with the result.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-fuchsia-500/15 rounded-full blur-[130px] opacity-50" />
      <div className="absolute bottom-0 -left-20 w-[26rem] h-[26rem] bg-primary/20 rounded-full blur-[130px] opacity-60" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-sky-500/15 rounded-full blur-[120px] opacity-40" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">
            Why CarWashy.com
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-4 mb-4 tracking-tight">
            The Difference Is Clear
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            We know how to get your car looking its best, using quality products
            and taking the time to make sure the little details are taken care of.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-base mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}