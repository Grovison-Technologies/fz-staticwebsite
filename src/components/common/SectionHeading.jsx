import React from 'react';
import { motion as Motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-16 text-${align} relative z-10`}>
    <Motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-red-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
    >
      {subtitle}
    </Motion.span>
    <Motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter"
    >
      {title} <span className="text-red-600">.</span>
    </Motion.h2>
  </div>
);

export default SectionHeading;


