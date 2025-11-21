import React from 'react';
import { Dumbbell, ArrowRight } from 'lucide-react';

const Footer = ({ setActivePage }) => (
  <footer className="bg-black border-t border-white/10 pt-16 pb-8">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => setActivePage('home')}>
            <div className="w-8 h-8 bg-red-600 flex items-center justify-center rounded-sm rotate-45">
              <Dumbbell className="text-white w-4 h-4 -rotate-45" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white uppercase">
              FZ<span className="text-red-600">Factory</span>
            </span>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Engineering the future of strength. We build equipment for those who refuse to compromise on quality.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6">Equipment</h4>
          <ul className="space-y-2 text-zinc-500 text-sm">
            <li className="hover:text-red-500 cursor-pointer">Racks &amp; Rigs</li>
            <li className="hover:text-red-500 cursor-pointer">Machines</li>
            <li className="hover:text-red-500 cursor-pointer">Cardio</li>
            <li className="hover:text-red-500 cursor-pointer">Flooring</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6">Support</h4>
          <ul className="space-y-2 text-zinc-500 text-sm">
            <li className="hover:text-red-500 cursor-pointer">Warranty Info</li>
            <li className="hover:text-red-500 cursor-pointer">Financing</li>
            <li className="hover:text-red-500 cursor-pointer">Shipping Policy</li>
            <li className="hover:text-red-500 cursor-pointer" onClick={() => setActivePage('contact')}>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6">Newsletter</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="bg-zinc-900 text-white px-4 py-2 w-full text-sm border-none focus:ring-1 focus:ring-red-600"
            />
            <button className="bg-red-600 text-white px-4 py-2 hover:bg-red-700">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs">
        <p>© 2024 FZ Fitness Factory. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;


