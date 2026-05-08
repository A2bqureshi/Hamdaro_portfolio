'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const vp = { once: true, margin: '-60px' };

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const date = data.get('date') as string;
    const message = data.get('message') as string;
    const subject = encodeURIComponent(`Wedding Photography Enquiry — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nWedding Date: ${date}\n\n${message}`
    );
    window.location.href = `mailto:Bymidsommar@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="bg-[#faf8f4] py-28 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-7"
        >
          <p
            className="text-[#c9a96e] text-[10px] tracking-[0.5em] uppercase"
            style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
          >
            Get in Touch
          </p>

          <h2
            className="text-3xl md:text-4xl font-light text-[#1a1a1a] leading-snug"
            style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
          >
            Let&apos;s Create Something<br />
            <em>Beautiful Together</em>
          </h2>

          <div className="w-10 h-px bg-[#c9a96e]" />

          <p
            className="text-[#6b6560] text-[15px] leading-[1.85]"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Whether you&apos;re planning a wedding, an engagement shoot, or a
            portrait session — I&apos;d love to hear from you.
          </p>

          {/* Contact details — improved hierarchy */}
          <div className="flex flex-col gap-5 mt-1">
            {[
              { label: 'Email', value: 'Bymidsommar@gmail.com', href: 'mailto:Bymidsommar@gmail.com' },
              { label: 'Phone', value: '07387 074 069', href: 'tel:07387074069' },
              { label: 'Instagram', value: '@bymidsommar', href: 'https://instagram.com/bymidsommar' },
              { label: 'Based in', value: 'Greater Manchester, UK', href: null },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex flex-col gap-[3px]">
                <span
                  className="text-[#c9a96e] text-[9px] tracking-[0.4em] uppercase"
                  style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
                >
                  {label}
                </span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="text-[#1a1a1a] text-[17px] tracking-wide hover:text-[#c9a96e] transition-colors duration-300 group relative w-fit"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {value}
                    <span className="absolute -bottom-px left-0 w-0 h-px bg-[#c9a96e] transition-all duration-500 group-hover:w-full" />
                  </a>
                ) : (
                  <span
                    className="text-[#1a1a1a] text-[17px] tracking-wide"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="text-[#c9a96e] text-4xl">♡</div>
              <h3 className="text-2xl font-light text-[#1a1a1a]" style={{ fontFamily: 'Georgia, serif' }}>
                Thank You
              </h3>
              <p className="text-[#6b6560] text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                Your email client has opened. I&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {[
                { name: 'name', label: 'Your Name', type: 'text', required: true },
                { name: 'email', label: 'Email Address', type: 'email', required: true },
                { name: 'date', label: 'Wedding / Event Date', type: 'text', required: false },
              ].map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <label
                    htmlFor={field.name}
                    className="text-[9px] tracking-[0.4em] uppercase text-[#6b6560]"
                    style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
                  >
                    {field.label}
                    {field.required && <span className="text-[#c9a96e] ml-1">*</span>}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    className="bg-transparent border-b border-[#1a1a1a]/20 py-3 text-[15px] text-[#1a1a1a] focus:outline-none focus:border-[#c9a96e] transition-colors duration-300"
                    style={{ fontFamily: 'Georgia, serif' }}
                  />
                </div>
              ))}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-[9px] tracking-[0.4em] uppercase text-[#6b6560]"
                  style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
                >
                  Message <span className="text-[#c9a96e]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="bg-transparent border-b border-[#1a1a1a]/20 py-3 text-[15px] text-[#1a1a1a] focus:outline-none focus:border-[#c9a96e] transition-colors duration-300 resize-none"
                  style={{ fontFamily: 'Georgia, serif' }}
                />
              </div>

              <button
                type="submit"
                className="mt-2 border border-[#1a1a1a] text-[#1a1a1a] text-[10px] tracking-[0.4em] uppercase py-4 hover:bg-[#1a1a1a] hover:text-[#faf8f4] transition-all duration-500"
                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
              >
                Send Enquiry
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
