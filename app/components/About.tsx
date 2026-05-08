'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const vp = { once: true, margin: '-60px' };

export default function About() {
  return (
    <section id="about" className="bg-[#f0ebe3] py-28 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-full h-full border border-[#c9a96e]/40 pointer-events-none" />
          <div className="relative overflow-hidden aspect-[3/4]">
            <Image
              src="/images/gallery/gallery-11.jpg"
              alt="Portraits by Midsommar"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#c9a96e]/8 mix-blend-multiply" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          <p
            className="text-[#c9a96e] text-[10px] tracking-[0.5em] uppercase"
            style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
          >
            About
          </p>

          <h2
            className="text-3xl md:text-4xl font-light text-[#1a1a1a] leading-snug"
            style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
          >
            Capturing the Beauty<br />
            <em>of Your Moment</em>
          </h2>

          <div className="w-10 h-px bg-[#c9a96e]" />

          <p
            className="text-[#6b6560] text-[15px] leading-[1.9]"
            style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
          >
            Female photographer based in Greater Manchester, specialising in
            portraits, weddings and events — capturing moments naturally.
          </p>

          <p
            className="text-[#6b6560] text-[15px] leading-[1.9]"
            style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
          >
            Focused on preserving the beauty and emotion of your special event.
            Every image is a quiet story told through light, intimacy, and
            genuine feeling.
          </p>

          <div className="flex flex-col gap-3 mt-1">
            {[
              { label: 'Location', value: 'Greater Manchester, UK' },
              { label: 'Speciality', value: 'Weddings · Portraits · Events' },
              { label: 'Instagram', value: '@bymidsommar' },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-4 items-baseline">
                <span
                  className="text-[#c9a96e] text-[9px] tracking-[0.35em] uppercase w-24 shrink-0"
                  style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
                >
                  {label}
                </span>
                <span className="text-[#1a1a1a] text-[14px]" style={{ fontFamily: 'Georgia, serif' }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="mt-3 inline-flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase text-[#1a1a1a] group w-fit"
            style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
          >
            <span className="relative">
              Get in Touch
              <span className="absolute -bottom-px left-0 w-0 h-px bg-[#c9a96e] transition-all duration-500 group-hover:w-full" />
            </span>
            <span className="text-[#c9a96e] transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
