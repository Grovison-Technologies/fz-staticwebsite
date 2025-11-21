import React from 'react';
import { motion as Motion } from 'framer-motion';
import { X } from 'lucide-react';
import Button from '../common/Button.jsx';

const QuoteModal = ({ isOpen, onClose, productName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}></div>
      <Motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-zinc-950 border border-white/10 w-full max-w-lg p-8 relative z-10 rounded-xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white"
        >
          <X />
        </button>
        <h3 className="text-2xl font-bold text-white mb-2">Get a Quote</h3>
        <p className="text-zinc-400 mb-6 text-sm">
          Requesting pricing for:{' '}
          <span className="text-red-500 font-bold">
            {productName || 'General Inquiry'}
          </span>
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-black border border-zinc-800 text-white p-3 rounded focus:border-red-600 outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-black border border-zinc-800 text-white p-3 rounded focus:border-red-600 outline-none"
          />
          <textarea
            placeholder="Message / Specific Requirements"
            rows="3"
            className="w-full bg-black border border-zinc-800 text-white p-3 rounded focus:border-red-600 outline-none"
          ></textarea>
          <Button primary className="w-full justify-center">
            Submit Request
          </Button>
        </form>
      </Motion.div>
    </div>
  );
};

export default QuoteModal;


