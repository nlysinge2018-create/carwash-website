import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Basic Wash',
    price: 15,
    features: ['Exterior hand wash', 'Tire & rim cleaning', 'Window cleaning', 'Air freshener'],
    popular: false,
  },
  {
    name: 'Deluxe Wash',
    price: 30,
    features: [
      'Everything in Basic',
      'Clay bar treatment',
      'Dashboard wipe-down',
      'Tire dressing',
      'Bug & tar removal',
    ],
    popular: true,
  },
  {
    name: 'Interior Cleaning',
    price: 40,
    features: [
      'Full vacuum',
      'Seat shampoo',
      'Dashboard deep clean',
      'Door panel cleaning',
      'Odor elimination',
    ],
    popular: false,
  },
  {
    name: 'Full Detail',
    price: 120,
    features: [
      'Complete interior & exterior',
      'Paint correction',
      'Leather conditioning',
      'Engine bay cleaning',
      'Ceramic sealant finish',
      '2-hour hand detail',
    ],
    popular: false,
  },
];

export default function PricingSection() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-20 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-indigo-500/15 rounded-full blur-[140px] opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-[120px] opacity-40" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">
            Pricing
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-4 mb-4 tracking-tight">
            Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            No hidden fees. Pick the package that fits your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-6 md:p-7 rounded-2xl border transition-all duration-500 ${
                plan.popular
                  ? 'bg-primary/5 border-primary/30 hover:border-primary/50'
                  : 'bg-card border-border/50 hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-mono font-medium">
                    Popular
                  </span>
                </div>
              )}

              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display font-bold text-4xl text-foreground">
                  ${plan.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg text-sm font-heading font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25'
                    : 'bg-secondary text-foreground border border-border hover:border-primary/30'
                }`}
              >
                Book Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}