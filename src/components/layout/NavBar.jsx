import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { Dumbbell, Menu, X, PhoneCall, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROMO_BANNERS, SITE_CONTACT } from '../../data/siteConfig.js';

const NavBar = ({ activePage, setActivePage, isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [promoIndex, setPromoIndex] = useState(0);

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Equipment', id: 'equipment' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const goTo = (id) => {
    window.scrollTo(0, 0);
    setActivePage(id);
  };

  useEffect(() => {
    if (!PROMO_BANNERS.length) return undefined;
    const timer = setInterval(() => {
      setPromoIndex((prev) => (prev + 1) % PROMO_BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const changePromo = (direction) => {
    if (!PROMO_BANNERS.length) return;
    setPromoIndex((prev) => {
      const next = (prev + direction + PROMO_BANNERS.length) % PROMO_BANNERS.length;
      return next;
    });
  };

  const currentPromo = PROMO_BANNERS[promoIndex] ?? null;

  return (
    <header className="fixed w-full z-50">
      <div className="relative bg-gradient-to-r from-red-800 via-red-600 to-red-500 text-white text-[10px] sm:text-xs uppercase tracking-[0.35em] flex items-center justify-center py-1.5 sm:py-2 px-12 sm:px-16 border-b border-white/20 overflow-hidden">
        <button
          className="absolute left-2 sm:left-4 text-white/70 hover:text-white transition-colors p-1 sm:p-2"
          aria-label="Previous promotion"
          onClick={() => changePromo(-1)}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex flex-col sm:flex-row items-center gap-2 text-center" aria-live="polite">
          <AnimatePresence mode="wait">
            {currentPromo && (
              <Motion.div
                key={currentPromo.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col sm:flex-row items-center gap-2"
              >
                <span className="px-2 py-0.5 bg-black/20 rounded-sm text-[0.65rem] tracking-[0.45em] font-black">
                  {currentPromo.highlight}
                </span>
                <span className="hidden sm:inline-block text-white/70 tracking-[0.45em]">•</span>
                <span className="text-[0.6rem] sm:text-[0.7rem] tracking-[0.2em] text-white/95">
                  {currentPromo.message}
                </span>
              </Motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="absolute right-2 sm:right-4 flex items-center gap-2">
          {/* <a
            href={`tel:${SITE_CONTACT.phonePlain}`}
            className="flex items-center gap-1 font-semibold tracking-[0.2em] text-[0.6rem] sm:text-[0.7rem]"
          >
            <PhoneCall className="w-3 h-3" />
            <span className="hidden sm:inline">{SITE_CONTACT.phoneDisplay}</span>
            <span className="sm:hidden uppercase tracking-[0.4em]">Call</span>
          </a> */}
          <button
            className="text-white/70 hover:text-white transition-colors p-1 sm:p-2"
            aria-label="Next promotion"
            onClick={() => changePromo(1)}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <nav
        className={`relative transition-all duration-500 ${
          isScrolled
            ? 'bg-black/30 backdrop-blur-xl border-b border-white/10 py-3 sm:py-4 shadow-[0_10px_50px_rgba(0,0,0,0.6)]'
            : 'bg-transparent py-5 sm:py-6 lg:py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => goTo('home')}
        >
          {/* <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-sm rotate-45">
            <Dumbbell className="text-white w-6 h-6 -rotate-45" />
          </div> */}
          <span className='w-40 h-27 justify-center items-center' >
            <img className='w-40 h-27 justify-center items-center' src="fzlogo.png" alt="" />
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                activePage === link.id
                  ? 'text-red-500'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            className="bg-white text-black px-5 py-2 font-bold uppercase text-xs tracking-wider hover:bg-red-600 hover:text-white transition-colors rounded-md"
            onClick={() => goTo('contact')}
          >
            Get Quote
          </button>
        </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <Motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full bg-black/30 backdrop-blur-2xl border-t border-white/10 flex flex-col rounded-md items-center justify-center gap-6 py-10"
            >
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    goTo(link.id);
                    setIsOpen(false);
                  }}
                  className="text-2xl font-black uppercase text-white/90 hover:text-white"
                >
                  {link.name}
                </button>
              ))}
            </Motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default NavBar;


