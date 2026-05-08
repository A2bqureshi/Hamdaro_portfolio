'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['Work', 'About', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#faf8f4]/92 backdrop-blur-md border-b border-[#c9a96e]/15 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-7 pt-7 pb-5 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col items-start leading-none group"
          >
            <span
              className={`text-[10px] tracking-[0.5em] uppercase transition-colors duration-300 ${
                scrolled ? 'text-[#c9a96e]' : 'text-[#c9a96e]'
              }`}
              style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif', fontWeight: 300 }}
            >
              Portraits by
            </span>
            <span
              className={`text-[19px] tracking-[0.18em] uppercase transition-colors duration-300 leading-tight ${
                scrolled ? 'text-[#1a1a1a]' : 'text-white'
              }`}
              style={{ fontFamily: 'Georgia, Times New Roman, serif', fontWeight: 400 }}
            >
              Midsommar
            </span>
          </button>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className={`text-[10px] tracking-[0.3em] uppercase font-light relative group transition-colors duration-300 ${
                    scrolled ? 'text-[#1a1a1a]' : 'text-white/90'
                  }`}
                  style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a96e] transition-all duration-500 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px transition-all duration-300 ${scrolled ? 'bg-[#1a1a1a]' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-5 h-px transition-all duration-300 ${scrolled ? 'bg-[#1a1a1a]' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px transition-all duration-300 ${scrolled ? 'bg-[#1a1a1a]' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#faf8f4] flex flex-col items-center justify-center gap-10"
          >
            {links.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                onClick={() => scrollTo(link)}
                className="text-3xl tracking-[0.2em] uppercase text-[#1a1a1a] font-light"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {link}
              </motion.button>
            ))}
            <div className="mt-4 text-[#c9a96e] text-[10px] tracking-[0.4em] uppercase" style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}>
              @bymidsommar
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
