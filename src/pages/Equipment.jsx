import React, { useEffect, useRef, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection.jsx';
import { EQUIPMENT_CATEGORIES } from '../data/equipmentCatalog.js';
import { SITE_CONTACT } from '../data/siteConfig.js';
import { X, ArrowRight, Eye, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const EquipmentDetailsModal = ({ product, onClose, onQuote }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-zinc-950 border border-white/10 max-w-5xl w-full overflow-hidden relative rounded-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative min-h-[320px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 text-xs uppercase tracking-[0.3em] border border-white/20">
              {product.categoryTitle}
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <p className="text-red-500 uppercase tracking-[0.4em] text-xs font-bold">
                {product.leadTime}
              </p>
              <h3 className="text-3xl font-black text-white mt-2">{product.name}</h3>
              <p className="text-zinc-400 text-sm mt-2">{product.summary}</p>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed">{product.details}</p>

            <div className="flex flex-wrap gap-2">
              {product.specs?.map((spec) => (
                <span
                  key={spec}
                  className="px-3 py-1 border border-white/10 text-xs uppercase tracking-[0.2em] text-white/80"
                >
                  {spec}
                </span>
              ))}
            </div>

            <div className="space-y-2">
              {product.features?.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <button
                onClick={() => onQuote(product.name)}
                className="flex-1 min-w-[160px] bg-red-600 text-white py-3 uppercase tracking-[0.3em] text-xs font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Get Quote
              </button>
              <button
                onClick={onClose}
                className="flex-1 min-w-[140px] border border-white/20 text-white py-3 uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-black transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EquipmentPage = ({ openQuote }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const carouselRef = useRef(null);
  const categoryRailRef = useRef(null);

  const sendWhatsAppQuote = (productName) => {
    if (typeof window === 'undefined') return;
    const encodedMessage = encodeURIComponent(
      `${SITE_CONTACT.whatsappGreeting} ${productName}`
    );
    window.open(`https://wa.me/${SITE_CONTACT.phonePlain}?text=${encodedMessage}`, '_blank');
  };

  const handleQuote = (productName) => {
    if (openQuote) {
      openQuote(productName);
    }
    sendWhatsAppQuote(productName);
  };

  const handleViewMore = (product, categoryTitle) => {
    setSelectedProduct({ ...product, categoryTitle });
  };

  const focusCategory = (index) => {
    setActiveCategoryIndex(index);
    requestAnimationFrame(() => {
      const target = categoryRailRef.current?.children?.[index];
      target?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
  };

  const activeCategory = EQUIPMENT_CATEGORIES[activeCategoryIndex];

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'auto' });
    }
  }, [activeCategoryIndex]);

  const scrollCarousel = (direction) => {
    const node = carouselRef.current;
    if (!node) return;
    const distance = node.clientWidth * 0.8;
    node.scrollBy({ left: distance * direction, behavior: 'smooth' });
  };

  const cycleCategory = (direction) => {
    const next =
      (activeCategoryIndex + direction + EQUIPMENT_CATEGORIES.length) % EQUIPMENT_CATEGORIES.length;
    focusCategory(next);
  };

  return (
    <div className="pt-6 sm:pt-10 bg-black min-h-screen flex flex-col overflow-hidden">
      <section className="relative  border-b border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="absolute  inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mt-[110px] mx-auto px-6 py-16 md:py-20 relative z-10 flex flex-col gap-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-red-500 uppercase tracking-[0.5em] text-xs font-bold">
              Flagship Inventory
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight">
              Slide through every <span className="text-red-600">equipment tier</span> without
              scrolling
            </h1>
            <p className="text-zinc-400 text-base md:text-lg">
              Choose a category below, then swipe or use the controls to browse every product
              inside. Additions automatically appear inside the slider.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="p-3 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white transition-colors"
              onClick={() => cycleCategory(-1)}
              aria-label="Previous category"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div
              ref={categoryRailRef}
              className="flex-1 overflow-x-auto flex flex-nowrap gap-3 pb-2 no-scrollbar"
            >
              {EQUIPMENT_CATEGORIES.map((category, idx) => (
                <button
                  key={category.id}
                  onClick={() => focusCategory(idx)}
                  className={`px-4 py-3 text-[10px] md:text-xs uppercase tracking-[0.4em] border transition-colors whitespace-nowrap shrink-0 ${
                    idx === activeCategoryIndex
                      ? 'bg-white text-black border-white'
                      : 'border-white/20 text-white/70 hover:text-white'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
            <button
              className="p-3 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white transition-colors"
              onClick={() => cycleCategory(1)}
              aria-label="Next category"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {activeCategory && (
        <section className="flex-1 bg-black">
          <div className="container mx-auto px-6 py-16 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <div className="space-y-6">
              <p className="text-red-500 uppercase tracking-[0.4em] text-xs font-bold">
                {activeCategory.highlight}
              </p>
              <h2 className="text-4xl font-black text-white uppercase leading-tight">
                {activeCategory.title}
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                {activeCategory.tagline}
              </p>
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={activeCategory.background}
                  alt={activeCategory.title}
                  className="w-full h-64 object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 space-y-1">
                  <p className="text-white/70 uppercase tracking-[0.4em] text-[10px]">Featured</p>
                  <p className="text-2xl font-bold text-white">
                    {activeCategory.products[0]?.name}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <button
                className="hidden sm:flex absolute -left-6 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white transition-colors bg-black/60 backdrop-blur"
                onClick={() => scrollCarousel(-1)}
                aria-label="Slide left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div
                ref={carouselRef}
                key={activeCategory.id}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pr-4 no-scrollbar scroll-px-4"
              >
                {activeCategory.products.map((product) => (
                  <Motion.article
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="min-w-[82%] sm:min-w-[55%] lg:min-w-[45%] xl:min-w-[32%] bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden snap-start flex flex-col"
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-black/70 text-white text-[10px] uppercase tracking-[0.4em] px-3 py-1 border border-white/10">
                        {product.leadTime}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                          {product.price}
                        </span>
                      </div>
                      <p className="text-zinc-400 text-sm mt-3 flex-1">{product.summary}</p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {product.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 border border-white/10 text-[10px] uppercase tracking-[0.3em] text-white/70"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 mt-6">
                        <button
                          onClick={() => handleViewMore(product, activeCategory.title)}
                          className="flex-1 min-w-[140px] border border-white/20 text-white uppercase tracking-[0.4em] text-[10px] py-3 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
                        >
                          <Eye className="w-4 h-4" />
                          View More
                        </button>
                        <button
                          onClick={() => handleQuote(product.name)}
                          className="flex-1 min-w-[140px] bg-red-600 text-white uppercase tracking-[0.4em] text-[10px] py-3 hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                        >
                          <ArrowRight className="w-4 h-4" />
                          Get Quote
                        </button>
                      </div>
                    </div>
                  </Motion.article>
                ))}
              </div>
              <button
                className="hidden sm:flex absolute -right-6 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white transition-colors bg-black/60 backdrop-blur"
                onClick={() => scrollCarousel(1)}
                aria-label="Slide right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      <ContactSection />

      <EquipmentDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onQuote={handleQuote}
      />
    </div>
  );
};

export default EquipmentPage;
