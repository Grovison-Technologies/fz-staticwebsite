import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ChevronRight, Settings, CheckCircle } from 'lucide-react';
import Button from '../common/Button.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import { EQUIPMENT_DATA } from '../../data/content.js';

const ProductCard = ({ product, openQuote }) => (
  <Motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="group relative bg-zinc-900 rounded-lg overflow-hidden border border-white/5 hover:border-red-500/50 transition-colors duration-300"
  >
    <div className="aspect-[4/3] overflow-hidden relative">
      <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-white uppercase tracking-wider border border-white/10">
        {product.category}
      </div>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

      <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 translate-y-4 group-hover:translate-y-0">
        <button
          onClick={() => openQuote(product.name)}
          className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
        >
          <Settings className="w-5 h-5" />
        </button>
        <button className="bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>

    <div className="p-6 relative">
      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors">
        {product.name}
      </h3>
      <p className="text-zinc-500 text-sm mb-4">{product.price}</p>

      <div className="space-y-2 mb-6">
        {product.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2 text-xs text-zinc-400">
            <CheckCircle className="w-3 h-3 text-red-500" />
            {feature}
          </div>
        ))}
      </div>

      <button
        onClick={() => openQuote(product.name)}
        className="w-full py-3 border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all"
      >
        Get Quote
      </button>
    </div>
  </Motion.div>
);

const ProductsSection = ({ openQuote, limit = false }) => {
  const displayData = limit ? EQUIPMENT_DATA.slice(0, 3) : EQUIPMENT_DATA;

  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Elite Arsenal" subtitle="Equipment Catalog" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayData.map((item) => (
            <ProductCard key={item.id} product={item} openQuote={openQuote} />
          ))}
        </div>

        {limit && (
          <div className="mt-16 text-center">
            <Button className="mx-auto" onClick={() => window.scrollTo(0, 0)}>
              View Full Inventory
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;


