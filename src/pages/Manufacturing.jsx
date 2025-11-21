import React from 'react';
import ProcessSection from '../components/sections/ProcessSection.jsx';
import BentoGrid from '../components/sections/BentoGrid.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';

const ManufacturingPage = () => (
  <div className="pt-6 sm:pt-10">
    <div className="py-12 bg-black text-center border-b border-white/5">
      <h1 className="text-5xl font-black text-white uppercase">
        Manufacturing <span className="text-red-600">Pipeline</span>
      </h1>
      <p className="text-zinc-500 mt-4">
        From raw steel to floor-ready equipment, our process is engineered for precision.
      </p>
    </div>
    <ProcessSection />
    <BentoGrid />
    <ContactSection />
  </div>
);

export default ManufacturingPage;


