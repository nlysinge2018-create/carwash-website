import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(555) 123-4567', href: 'tel:+15551234567' },
  { icon: Mail, label: 'Email', value: 'info@crystalshinecarwash.com', href: 'mailto:info@crystalshinecarwash.com' },
  { icon: MapPin, label: 'Address', value: '1200 Shine Boulevard, Suite 100, Los Angeles, CA 90001' },
  { icon: Clock, label: 'Hours', value: 'Mon–Sat: 8AM – 7PM | Sun: 9AM – 5PM' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1200));
    toast.success('Message sent! We\'ll get back to you shortly.');
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mt-4 mb-4 tracking-tight">
            Book Your Appointment
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Ready for a CarWashy.com finish? Reach out or fill in the form below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((c) => (
              <div key={c.label} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <c.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a href={c.href} className="text-sm text-foreground hover:text-primary transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Phone
                  </label>
                  <Input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Service
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full h-12 rounded-md border bg-secondary/50 border-border/50 px-3 text-sm text-foreground focus:outline-none focus:border-primary/50"
                  >
                    <option value="">Select a service</option>
                    <option value="basic">Basic Wash – $15</option>
                    <option value="deluxe">Deluxe Wash – $30</option>
                    <option value="interior">Interior Cleaning – $40</option>
                    <option value="full">Full Detail – $120</option>
                    <option value="wax">Wax & Protection</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your vehicle or any special requests..."
                  rows={4}
                  className="bg-secondary/50 border-border/50 focus:border-primary/50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-heading font-semibold text-base flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 disabled:opacity-50"
              >
                {sending ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}