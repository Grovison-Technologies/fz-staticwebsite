import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button.jsx';
import { TOP_SELLERS } from '../../data/siteConfig.js';

const Hero = ({ setActivePage }) => {
  const statCards = [
    { id: 'lead-time', label: 'Lead time', value: '6-8 wks', sub: 'avg premium builds' },
    { id: 'installs', label: 'Installs', value: '187+', sub: 'gyms since 2021' },
    { id: 'support', label: 'Support', value: '24/7', sub: 'whatsapp response' },
  ];

  const heroBentos = [
    ...TOP_SELLERS.map((item) => ({ type: 'product', ...item })),
    ...statCards.map((stat) => ({ type: 'stat', ...stat })),
  ];

  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ minHeight: 'calc(115vh - var(--app-header-height))' }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black z-10 opacity-60" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50 scale-105"
        >
          <source src="https://videos.pexels.com/video-files/4114798/4114798-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 z-20 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 relative z-30 pt-16 sm:pt-20 pb-16">
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6 sm:flex-row mt-[110px]">
            <div className="h-[2px] w-20 bg-red-600" ></div>
            <span className="text-red-500 font-bold tracking-[0.3em] uppercase">
              Premium Fitness Manufacturing
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[0.95] mb-6 sm:mb-8 uppercase italic">
            FZ Fitness <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">
              Factory
            </span>
          </h1>

          <p className="text-zinc-400 text-base md:text-xl max-w-xl mb-10 leading-relaxed font-light">
            Precision-engineered gym equipment for elite facilities.
            Designed in the FZ, built to outlast the competition.
            Set Up Your <span className="text-red-500 font-bold  uppercase"> gym</span> today With <span className="text-white font-bold  uppercase"> fz </span><span className="text-red-500 font-bold  uppercase">fitness</span>.
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <Button primary onClick={() => setActivePage('equipment')}>
              Explore Catalog <ArrowRight className="w-5 h-5" />
            </Button>
            <Button onClick={() => setActivePage('contact')}>
              Book Consultation
            </Button>
          </div>
        </Motion.div>
      </div>

      <Motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-white/50"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-red-600 to-transparent mx-auto"></div>
      </Motion.div>

      <div className="hidden absolute bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-full md:max-w-lg z-30">
        <p className="text-[0.55rem] uppercase tracking-[0.4em] text-white/70 mb-2">
          Power Highlights
        </p>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar">
          {heroBentos.map((card) =>
            card.type === 'product' ? (
              <div
                key={card.id}
                className="snap-start min-w-[220px] bg-black/55 border border-white/10 rounded-2xl p-3 flex gap-3 backdrop-blur-xl hover:border-red-500/60 transition-colors"
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
                  <img
                    src={card.thumb}
                    alt={card.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
                </div>
                <div className="text-white">
                  <p className="uppercase tracking-[0.3em] text-red-400 text-[0.45rem] mb-1">
                    {card.category}
                  </p>
                  <p className="text-sm font-semibold leading-snug">{card.name}</p>
                  <p className="text-[0.6rem] text-white/60">Top seller</p>
                </div>
              </div>
            ) : (
              <div
                key={card.id}
                className="snap-start min-w-[200px] bg-black/55 border border-white/10 rounded-2xl p-4 backdrop-blur-xl"
              >
                <p className="text-[0.55rem] uppercase tracking-[0.4em] text-white/60">
                  {card.label}
                </p>
                <p className="text-2xl font-black text-white mt-1">{card.value}</p>
                <p className="text-[0.65rem] text-white/60 mt-1">{card.sub}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;


