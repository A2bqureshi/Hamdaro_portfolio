'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-1"
        >
          <span
            className="text-white/40 text-[9px] tracking-[0.5em] uppercase"
            style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
          >
            Portraits by
          </span>
          <span
            className="text-white text-2xl tracking-[0.12em] uppercase font-light"
            style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
          >
            Midsommar
          </span>
        </motion.div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-12 h-px bg-[#c9a96e] origin-center"
        />

        {/* Nav links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {['Work', 'About', 'Contact'].map((link) => (
            <button
              key={link}
              onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white/40 text-[10px] tracking-[0.3em] uppercase hover:text-[#c9a96e] transition-colors duration-300"
              style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
            >
              {link}
            </button>
          ))}
        </motion.div>

        {/* Social / Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center"
        >
          <a
            href="mailto:Bymidsommar@gmail.com"
            className="text-white/30 text-[11px] hover:text-[#c9a96e] transition-colors duration-300"
            style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
          >
            Bymidsommar@gmail.com
          </a>
          <span className="hidden md:block w-1 h-1 rounded-full bg-[#c9a96e]/30" />
          <a
            href="tel:07387074069"
            className="text-white/30 text-[11px] hover:text-[#c9a96e] transition-colors duration-300"
            style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
          >
            07387 074 069
          </a>
          <span className="hidden md:block w-1 h-1 rounded-full bg-[#c9a96e]/30" />
          <a
            href="https://instagram.com/bymidsommar"
            target="_blank"
            rel="noreferrer"
            className="text-white/30 text-[11px] hover:text-[#c9a96e] transition-colors duration-300"
            style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
          >
            @bymidsommar
          </a>
        </motion.div>

        {/* Bottom line */}
        <div className="border-t border-white/5 w-full pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-white/20 text-[10px] tracking-[0.2em]"
            style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
          >
            © {year} Bymidsommar. All rights reserved.
          </p>
          <p
            className="text-white/20 text-[10px] tracking-[0.2em]"
            style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
          >
            Greater Manchester, UK
          </p>
        </div>
      </div>
    </footer>
  );
}
