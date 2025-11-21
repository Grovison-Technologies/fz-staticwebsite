import React from 'react';

const Button = ({ children, primary, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`
      px-8 py-4 font-bold tracking-wider uppercase transition-all duration-300 transform clip-path-slant group relative overflow-hidden
      ${primary
        ? 'bg-red-600 text-white hover:bg-red-700'
        : 'bg-transparent border border-white/30 text-white hover:border-red-500 hover:text-red-500'}
      ${className}
    `}
  >
    <span className="relative z-10 flex items-center gap-2">
      {children}
    </span>
    {primary && (
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
    )}
  </button>
);

export default Button;


