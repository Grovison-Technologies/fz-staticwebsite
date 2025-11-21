import React from 'react';
import Hero from '../components/sections/Hero.jsx';
import BentoGrid from '../components/sections/BentoGrid.jsx';
import ProductsSection from '../components/sections/ProductsSection.jsx';
import VideoReviewsSection from '../components/sections/VideoReviews.jsx';
import ProcessSection from '../components/sections/ProcessSection.jsx';
import TestimonialSection from '../components/sections/TestimonialSection.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';

const HomePage = ({ setActivePage, openQuote }) => (
  <>
    <Hero setActivePage={setActivePage} />
    <BentoGrid />
    <ProductsSection openQuote={openQuote} limit />
    <VideoReviewsSection />
    <ProcessSection />
    <TestimonialSection />
    <ContactSection />
  </>
);

export default HomePage;


