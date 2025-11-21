import React from 'react';
import ContactSection from '../components/sections/ContactSection.jsx';

const ContactPage = () => (
  <div className="pt-20">
    <div className="py-12 bg-zinc-950 text-center border-b border-white/5">
      <h1 className="text-5xl font-black text-white uppercase">
        Contact <span className="text-red-600">FZ</span>
      </h1>
      <p className="text-zinc-500 mt-4">
        Tell us about your facility, timeline, and goals—we&apos;ll build the blueprint.
      </p>
    </div>
    <ContactSection />
  </div>
);

export default ContactPage;


