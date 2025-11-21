import React, { useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { Dumbbell, Menu, X } from 'lucide-react';

const NavBar = ({ activePage, setActivePage, isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Equipment', id: 'equipment' },
    { name: 'Manufacturing', id: 'manufacturing' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const goTo = (id) => {
    window.scrollTo(0, 0);
    setActivePage(id);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4'
          : 'bg-transparent py-8'
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
            className="bg-white text-black px-5 py-2 font-bold uppercase text-xs tracking-wider hover:bg-red-600 hover:text-white transition-colors"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-black border-t border-white/10 flex flex-col items-center justify-center gap-8"
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  goTo(link.id);
                  setIsOpen(false);
                }}
                className="text-2xl font-black uppercase text-white hover:text-red-600"
              >
                {link.name}
              </button>
            ))}
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;


