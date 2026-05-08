'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = Array.from({ length: 14 }, (_, i) => ({
  src: `/images/gallery/gallery-${i + 1}.jpg`,
  id: i + 1,
}));

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="work" className="bg-[#faf8f4] pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center mb-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#c9a96e] text-[10px] tracking-[0.45em] uppercase mb-3"
            style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-3xl md:text-4xl font-light text-[#1a1a1a]"
            style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
          >
            Selected Work
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-10 h-px bg-[#c9a96e] mt-4 origin-center"
          />
        </div>

        {/* True masonry — natural proportions, 3px gap */}
        <div className="columns-2 md:columns-3" style={{ gap: '3px' }}>
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              className="break-inside-avoid overflow-hidden cursor-pointer group relative"
              style={{ marginBottom: '3px' }}
              onClick={() => setLightbox(i)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={`Wedding photograph ${img.id}`}
                className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-500 pointer-events-none" />
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#c9a96e] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#c9a96e] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[lightbox].src}
                alt={`Wedding photograph ${lightbox + 1}`}
                className="max-w-[90vw] max-h-[88vh] object-contain"
              />
            </motion.div>

            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-6 text-white/60 hover:text-white text-2xl transition-colors"
            >
              ✕
            </button>
            {lightbox > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#c9a96e] text-5xl font-thin transition-colors"
              >
                ‹
              </button>
            )}
            {lightbox < images.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#c9a96e] text-5xl font-thin transition-colors"
              >
                ›
              </button>
            )}
            <div
              className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/30 text-[10px] tracking-[0.4em]"
              style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
            >
              {lightbox + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
