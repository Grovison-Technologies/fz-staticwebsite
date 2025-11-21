import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button.jsx';

const Hero = ({ setActivePage }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
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

      <div className="container mx-auto px-6 relative z-30 pt-20">
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-20 bg-red-600"></div>
            <span className="text-red-500 font-bold tracking-[0.3em] uppercase">
              Premium Fitness Manufacturing
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 uppercase italic">
            FZ Fitness <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">
              Factory
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
            Precision-engineered gym equipment for elite facilities.
            Designed in the USA, built to outlast the competition.
            Elevate your training environment today.
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
    </div>
  );
};

export default Hero;


