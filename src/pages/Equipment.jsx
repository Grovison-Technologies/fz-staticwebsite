import React, { useEffect, useRef, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection.jsx';
import { EQUIPMENT_CATEGORIES } from '../data/equipmentCatalog.js';
import { SITE_CONTACT } from '../data/siteConfig.js';
import { X, ArrowRight, Eye, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const EquipmentDetailsModal = ({ product, onClose, onQuote }) => {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [product]);

  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-zinc-950 border border-white/10 max-w-5xl w-full overflow-hidden relative rounded-xl my-auto max-h-[95vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 text-white/60 hover:text-white transition-colors bg-black/50 backdrop-blur-sm rounded-full p-2"
          aria-label="Close product details"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="relative min-h-[240px] sm:min-h-[320px] w-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-t-xl md:rounded-none"
            />
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/70 backdrop-blur-sm px-2 sm:px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.3em] border border-white/20 rounded">
              {product.categoryTitle}
            </div>
          </div>

          <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
            <div>
              <p className="text-red-500 uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold">
                {product.leadTime}
              </p>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-2 leading-tight">{product.name}</h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2">{product.summary}</p>
            </div>

            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">{product.details}</p>

            <div className="flex flex-wrap gap-2">
              {product.specs?.map((spec) => (
                <span
                  key={spec}
                  className="px-2 sm:px-3 py-1 border border-white/10 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/80 rounded"
                >
                  {spec}
                </span>
              ))}
            </div>

            <div className="space-y-2">
              {product.features?.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => onQuote(product.name)}
                className="w-full sm:flex-1 bg-red-600 text-white py-3 uppercase tracking-[0.3em] text-xs font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 rounded"
              >
                <MessageCircle className="w-4 h-4" />
                Get Quote
              </button>
              <button
                onClick={onClose}
                className="w-full sm:flex-1 border border-white/20 text-white py-3 uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition-colors rounded"
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
    <div className="pt-6 sm:pt-10 bg-black min-h-screen flex flex-col">
      <section className="relative border-b border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10 flex flex-col gap-6 sm:gap-10" style={{ paddingTop: 'calc(var(--app-header-height) + 1.5rem)' }}>
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <p className="text-red-500 uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-xs font-bold">
              Flagship Inventory
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase leading-tight px-2">
              Slide through every <span className="text-red-600">equipment tier</span> without
              scrolling
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg px-2">
              Choose a category below, then swipe or use the controls to browse every product
              inside. Additions automatically appear inside the slider.
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              className="p-2 sm:p-3 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white transition-colors flex-shrink-0 bg-black/30 backdrop-blur-sm"
              onClick={() => cycleCategory(-1)}
              aria-label="Previous category"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div
              ref={categoryRailRef}
              className="flex-1 overflow-x-auto flex flex-nowrap gap-2 sm:gap-3 pb-2 no-scrollbar scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {EQUIPMENT_CATEGORIES.map((category, idx) => (
                <button
                  key={category.id}
                  onClick={() => focusCategory(idx)}
                  className={`px-3 sm:px-4 py-2 sm:py-3 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] border transition-colors whitespace-nowrap shrink-0 rounded ${
                    idx === activeCategoryIndex
                      ? 'bg-white text-black border-white font-bold'
                      : 'border-white/20 text-white/70 hover:text-white hover:border-white/40'
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
            <button
              className="p-2 sm:p-3 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white transition-colors flex-shrink-0 bg-black/30 backdrop-blur-sm"
              onClick={() => cycleCategory(1)}
              aria-label="Next category"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {activeCategory && (
        <section className="flex-1 bg-black">
          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                <div>
                  <p className="text-red-500 uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold">
                    {activeCategory.highlight}
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase leading-tight mt-2">
                    {activeCategory.title}
                  </h2>
                  <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed mt-3">
                    {activeCategory.tagline}
                  </p>
                </div>
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={activeCategory.background}
                    alt={activeCategory.title}
                    className="w-full h-48 sm:h-64 object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 space-y-1">
                    <p className="text-white/70 uppercase tracking-[0.4em] text-[9px] sm:text-[10px]">Featured</p>
                    <p className="text-lg sm:text-2xl font-bold text-white">
                      {activeCategory.products[0]?.name}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <button
                  className="flex sm:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white transition-colors bg-black/60 backdrop-blur"
                  onClick={() => scrollCarousel(-1)}
                  aria-label="Slide left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  className="hidden sm:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white transition-colors bg-black/60 backdrop-blur"
                  onClick={() => scrollCarousel(-1)}
                  aria-label="Slide left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div
                  ref={carouselRef}
                  key={activeCategory.id}
                  className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 sm:pb-6 pr-2 sm:pr-4 no-scrollbar scroll-smooth"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {activeCategory.products.map((product) => (
                    <Motion.article
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="min-w-[85%] sm:min-w-[70%] md:min-w-[55%] lg:min-w-[45%] xl:min-w-[32%] bg-zinc-900 border border-white/5 rounded-xl sm:rounded-2xl overflow-hidden snap-start flex flex-col"
                    >
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 sm:h-56 object-cover"
                        />
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/70 backdrop-blur-sm text-white text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] px-2 sm:px-3 py-1 border border-white/10 rounded">
                          {product.leadTime}
                        </div>
                      </div>

                      <div className="p-4 sm:p-6 flex flex-col flex-1">
                        <div className="flex items-start justify-between gap-3 sm:gap-4">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">{product.name}</h3>
                          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/60 flex-shrink-0">
                            {product.price}
                          </span>
                        </div>
                        <p className="text-zinc-400 text-xs sm:text-sm mt-2 sm:mt-3 flex-1">{product.summary}</p>

                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                          {product.features.slice(0, 3).map((feature) => (
                            <span
                              key={feature}
                              className="px-2 sm:px-3 py-1 border border-white/10 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/70 rounded"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6">
                          <button
                            onClick={() => handleViewMore(product, activeCategory.title)}
                            className="w-full sm:flex-1 border border-white/20 text-white uppercase tracking-[0.4em] text-[10px] py-2.5 sm:py-3 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 rounded"
                          >
                            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            View More
                          </button>
                          <button
                            onClick={() => handleQuote(product.name)}
                            className="w-full sm:flex-1 bg-red-600 text-white uppercase tracking-[0.4em] text-[10px] py-2.5 sm:py-3 hover:bg-red-700 transition-colors flex items-center justify-center gap-2 rounded"
                          >
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Get Quote
                          </button>
                        </div>
                      </div>
                    </Motion.article>
                  ))}
                </div>
                <button
                  className="flex sm:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white transition-colors bg-black/60 backdrop-blur"
                  onClick={() => scrollCarousel(1)}
                  aria-label="Slide right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  className="hidden sm:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white transition-colors bg-black/60 backdrop-blur"
                  onClick={() => scrollCarousel(1)}
                  aria-label="Slide right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
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
