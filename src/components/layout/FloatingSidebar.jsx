import React from 'react';
import { MessageCircle, FileText } from 'lucide-react';

const FloatingSidebar = ({ isVisible, openQuote }) => {
  return (
    <div
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 transition-transform duration-500 ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col">
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 hover:bg-[#20b858] transition-colors flex items-center gap-2 group relative"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-0 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all whitespace-nowrap">
            WhatsApp Now
          </span>
        </a>
        <button
          onClick={() => openQuote('General Inquiry')}
          className="bg-red-600 text-white p-4 hover:bg-red-700 transition-colors flex items-center gap-2 group relative border-t border-black/10"
        >
          <FileText className="w-6 h-6" />
          <span className="absolute right-full mr-0 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all whitespace-nowrap">
            Inquire Now
          </span>
        </button>
      </div>
    </div>
  );
};

export default FloatingSidebar;


