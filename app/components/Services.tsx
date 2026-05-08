'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

const packages = [
  {
    name: 'Intimate',
    subtitle: 'Essential Coverage',
    duration: '4 Hours',
    features: [
      'Getting ready & ceremony',
      'Edited digital gallery',
      '150+ curated images',
      'Private online gallery',
      'Print release included',
    ],
  },
  {
    name: 'Classic',
    subtitle: 'Full Day Coverage',
    duration: '8 Hours',
    features: [
      'Getting ready to first dance',
      'Two locations included',
      '400+ curated images',
      'Premium edited gallery',
      'Private online gallery',
      'Print release included',
    ],
    featured: true,
  },
  {
    name: 'Cinematic',
    subtitle: 'Complete Experience',
    duration: 'Full Weekend',
    features: [
      'Engagement session included',
      'Full wedding day coverage',
      'Mehndi / walima coverage',
      '600+ curated images',
      'Fine art editing style',
      'Private online gallery',
      'Print release included',
    ],
  },
];

export default function Services() {
  const ref = useRef(null);

  return (
    <section id="services" className="bg-[#1a1a1a] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#c9a96e] text-[10px] tracking-[0.45em] uppercase mb-4"
            style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
          >
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-3xl md:text-4xl font-light text-white"
            style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
          >
            Photography Packages
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-12 h-px bg-[#c9a96e] mt-5 origin-center"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/40 text-sm mt-6 max-w-md leading-relaxed"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Each package is tailored to preserve the beauty and emotion of your
            special day. Get in touch to discuss a bespoke quote.
          </motion.p>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col p-8 border transition-all duration-500 group ${
                pkg.featured
                  ? 'border-[#c9a96e]/60 bg-[#c9a96e]/5'
                  : 'border-white/10 hover:border-[#c9a96e]/30'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="bg-[#c9a96e] text-[#1a1a1a] text-[9px] tracking-[0.3em] uppercase px-4 py-1"
                    style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p
                  className="text-[#c9a96e] text-[10px] tracking-[0.35em] uppercase mb-2"
                  style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
                >
                  {pkg.subtitle}
                </p>
                <h3
                  className="text-white text-2xl font-light"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {pkg.name}
                </h3>
                <p
                  className="text-white/40 text-[10px] tracking-[0.3em] uppercase mt-2"
                  style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
                >
                  {pkg.duration}
                </p>
              </div>

              <div className="w-full h-px bg-white/10 mb-6" />

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="text-[#c9a96e] mt-1 text-xs">◆</span>
                    <span
                      className="text-white/60 text-sm leading-relaxed"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className={`text-center text-[10px] tracking-[0.3em] uppercase py-3 border transition-all duration-400 ${
                  pkg.featured
                    ? 'border-[#c9a96e] text-[#1a1a1a] bg-[#c9a96e] hover:bg-[#e2c99a] hover:border-[#e2c99a]'
                    : 'border-white/20 text-white/70 hover:border-[#c9a96e] hover:text-[#c9a96e]'
                }`}
                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
