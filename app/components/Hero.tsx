'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slow zoom background image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
      </motion.div>

      {/* Cinematic overlay — gradient from dark bottom to lighter top */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Tagline above */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 1, ease: 'easeOut' }}
          className="text-white/70 text-[10px] tracking-[0.5em] uppercase mb-6"
          style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
        >
          Wedding &amp; Portrait Photography
        </motion.p>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
          className="text-white/60 text-[10px] tracking-[0.4em] uppercase mb-8"
          style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
        >
          Portraits by
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1.2, ease: 'easeOut' }}
          className="text-white text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.08em] uppercase mb-4"
          style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
        >
          Midsommar
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.9, duration: 1.2, ease: 'easeOut' }}
          className="w-24 h-px bg-[#c9a96e] mb-8"
        />

        {/* Story line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1, ease: 'easeOut' }}
          className="text-white/65 text-[11px] tracking-[0.45em] uppercase"
          style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
        >
          Stories in Every Frame
        </motion.p>

        {/* Scroll CTA */}
        <motion.button
          onClick={scrollToWork}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-3 group"
        >
          <span className="text-white/50 text-[9px] tracking-[0.4em] uppercase" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
            View Work
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-[#c9a96e] to-transparent"
          />
        </motion.button>
      </div>
    </section>
  );
}
