import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionHeading from '../common/SectionHeading.jsx';
import { TESTIMONIALS } from '../../data/content.js';

const TestimonialSection = () => (
  <section className="py-24 bg-black relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-red-900/10 blur-[100px]"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading title="Gym Owner Approved" subtitle="Testimonials" align="left" />
          <div className="space-y-8">
            {TESTIMONIALS.map((t, i) => (
              <Motion.div
                key={t.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-md border-l-4 border-red-600 p-8"
              >
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xl text-zinc-300 italic mb-6">&quot;{t.text}&quot;</p>
                <div>
                  <div className="text-white font-bold uppercase tracking-wider">{t.name}</div>
                  <div className="text-red-500 text-sm">{t.role}</div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 border-2 border-red-600 translate-x-4 translate-y-4 z-0"></div>
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800"
            alt="Gym Owner"
            className="w-full grayscale relative z-10"
          />
          <div className="absolute bottom-10 left-10 bg-black p-4 z-20 border border-white/20">
            <div className="text-4xl font-black text-white">4.9/5</div>
            <div className="text-zinc-500 text-xs uppercase">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialSection;


