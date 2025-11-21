import React, { useState, useEffect } from 'react';
import NavBar from './components/layout/NavBar.jsx';
import FloatingSidebar from './components/layout/FloatingSidebar.jsx';
import Footer from './components/layout/Footer.jsx';
import QuoteModal from './components/layout/QuoteModal.jsx';
import HomePage from './pages/Home.jsx';
import EquipmentPage from './pages/Equipment.jsx';
import ManufacturingPage from './pages/Manufacturing.jsx';
import ContactPage from './pages/Contact.jsx';
import AboutPage from './pages/About.jsx';

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
    window.scrollTo(0, 0);
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

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-red-600 selection:text-white relative">
      <NavBar activePage={activePage} setActivePage={handleNavigate} isScrolled={isScrolled} />

      <FloatingSidebar isVisible={isScrolled} openQuote={openQuote} />

      <main>{renderPage()}</main>

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
