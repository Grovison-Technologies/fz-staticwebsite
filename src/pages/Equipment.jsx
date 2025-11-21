import React from 'react';
import ProductsSection from '../components/sections/ProductsSection.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';

const EquipmentPage = ({ openQuote }) => (
  <div className="pt-20">
    <div className="py-12 bg-zinc-950 text-center border-b border-white/5">
      <h1 className="text-5xl font-black text-white uppercase">
        Full <span className="text-red-600">Inventory</span>
      </h1>
      <p className="text-zinc-500 mt-4">
        Complete selection of racks, machines, flooring, and cardio built for elite facilities.
      </p>
    </div>
    <ProductsSection openQuote={openQuote} />
    <ContactSection />
  </div>
);

export default EquipmentPage;


