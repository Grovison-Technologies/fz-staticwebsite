import React, { useState, useEffect, lazy, Suspense } from 'react';
import NavBar from './components/layout/NavBar.jsx';
import FloatingSidebar from './components/layout/FloatingSidebar.jsx';
import Footer from './components/layout/Footer.jsx';
import QuoteModal from './components/layout/QuoteModal.jsx';

const HomePage = lazy(() => import('./pages/Home.jsx'));
const EquipmentPage = lazy(() => import('./pages/Equipment.jsx'));
const ManufacturingPage = lazy(() => import('./pages/Manufacturing.jsx'));
const ContactPage = lazy(() => import('./pages/Contact.jsx'));
const AboutPage = lazy(() => import('./pages/About.jsx'));

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page) => {
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
      const supportsSmoothScroll =
        typeof document !== 'undefined' && 'scrollBehavior' in document.documentElement.style;

      if (!prefersReducedMotion && supportsSmoothScroll) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    }

    setActivePage(page);
  };

  const openQuote = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={handleNavigate} openQuote={openQuote} />;
      case 'equipment':
        return <EquipmentPage openQuote={openQuote} />;
      case 'manufacturing':
        return <ManufacturingPage />;
      case 'about':
        return <AboutPage setActivePage={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setActivePage={handleNavigate} openQuote={openQuote} />;
    }
  };

  const PageFallback = () => (
    <div className="flex flex-col items-center justify-center py-24 gap-4 text-gray-400">
      <span
        className="h-10 w-10 rounded-full border-2 border-gray-700 border-t-red-600 animate-spin"
        aria-hidden="true"
      />
      <p className="tracking-[0.4em] text-xs uppercase text-gray-500">Loading</p>
    </div>
  );

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-red-600 selection:text-white relative">
      <NavBar activePage={activePage} setActivePage={handleNavigate} isScrolled={isScrolled} />

      <FloatingSidebar isVisible={isScrolled} openQuote={openQuote} />

      <Suspense fallback={<PageFallback />}>
        <main>{renderPage()}</main>
      </Suspense>

      <Footer setActivePage={handleNavigate} />

      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        productName={selectedProduct}
      />
    </div>
  );
};

export default App;
