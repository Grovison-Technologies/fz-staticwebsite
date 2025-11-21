import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Settings, Globe, ShieldCheck, TrendingUp } from 'lucide-react';
import SectionHeading from '../common/SectionHeading.jsx';

const BentoGrid = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading title="Why Choose FZ" subtitle="Engineering Excellence" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="md:col-span-2 md:row-span-2 bg-zinc-900/50 border border-white/5 rounded-2xl p-8 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=800"
              className="absolute right-0 bottom-0 w-3/4 opacity-20 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity"
              alt="Factory"
            />
            <Settings className="w-12 h-12 text-red-500 mb-6 relative z-10" />
            <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Custom Engineering</h3>
            <p className="text-zinc-400 relative z-10 max-w-sm">
              From powder coat colors to custom branding laser-cut into the steel. We tailor every piece to your
              facility&apos;s identity.
            </p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-2 bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-8 relative group overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>
            <div className="relative z-10">
              <Globe className="w-10 h-10 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Global Logistics</h3>
              <p className="text-zinc-500 text-sm">
                We ship worldwide with white-glove installation services available.
              </p>
            </div>
            <div className="relative z-10 mt-8">
              <div className="text-4xl font-black text-red-600">50+</div>
              <div className="text-zinc-400 text-xs uppercase tracking-widest">Countries Served</div>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 bg-zinc-900 border border-white/5 rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-red-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"></div>
            <ShieldCheck className="w-8 h-8 text-red-500 group-hover:text-white mb-3 relative z-10 transition-colors" />
            <h3 className="text-xl font-bold text-white relative z-10">Lifetime Warranty</h3>
            <p className="text-zinc-500 text-xs group-hover:text-white/80 relative z-10 transition-colors">
              On all structural steel frames.
            </p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 bg-zinc-900 border border-white/5 rounded-2xl p-6 flex flex-col justify-center"
          >
            <TrendingUp className="w-8 h-8 text-red-500 mb-3" />
            <h3 className="text-xl font-bold text-white">ROI Focused</h3>
            <p className="text-zinc-500 text-xs">Equipment built to retain value.</p>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;


