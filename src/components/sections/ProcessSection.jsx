import React from 'react';
import { motion as Motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading.jsx';

const steps = [
  { step: '01', title: 'Consultation', desc: 'We analyze your floor plan and demographics.' },
  { step: '02', title: 'Design', desc: '3D renderings of your facility with custom colors.' },
  { step: '03', title: 'Manufacturing', desc: 'Laser cutting, welding, and powder coating.' },
  { step: '04', title: 'Install', desc: 'Professional delivery and assembly team.' },
];

const ProcessSection = () => (
  <section className="py-24 bg-zinc-950 border-t border-white/5">
    <div className="container mx-auto px-6">
      <SectionHeading title="The Process" subtitle="From Concept to Floor" />

      <div className="relative mt-20">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-900 to-transparent -translate-y-1/2 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {steps.map((item, idx) => (
            <Motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-black border border-white/10 p-8 relative hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-6xl font-black text-white/5 absolute top-2 right-4">{item.step}</div>
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-6 text-white font-bold relative shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                {idx + 1}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 uppercase">{item.title}</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;


