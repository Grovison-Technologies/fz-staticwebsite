import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import SectionHeading from '../common/SectionHeading.jsx';
import Button from '../common/Button.jsx';
import { SITE_CONTACT } from '../../data/siteConfig.js';

const ContactSection = () => (
  <section className="py-24 bg-zinc-950 relative">
    <div className="container mx-auto px-6 max-w-4xl">
      <SectionHeading title="Start Your Build" subtitle="Get In Touch" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-black border border-white/10 p-8 md:p-12">
        <div className="space-y-8">
          <div>
            <h4 className="text-2xl font-bold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-zinc-400">
                <Phone className="w-5 h-5 text-red-600" />
                <a href={`tel:${SITE_CONTACT.phonePlain}`} className="hover:text-white transition-colors">
                  {SITE_CONTACT.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-4 text-zinc-400">
                <Mail className="w-5 h-5 text-red-600" />
                <a
                  href={`mailto:${SITE_CONTACT.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {SITE_CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-4 text-zinc-400">
                <MapPin className="w-5 h-5 text-red-600" />
                <span>2045 Industrial Blvd, Austin, TX</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full text-white hover:bg-red-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="bg-zinc-900 border border-zinc-800 text-white p-4 focus:outline-none focus:border-red-600 transition-colors"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-zinc-900 border border-zinc-800 text-white p-4 focus:outline-none focus:border-red-600 transition-colors"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-zinc-900 border border-zinc-800 text-white p-4 focus:outline-none focus:border-red-600 transition-colors"
          />
          <select className="w-full bg-zinc-900 border border-zinc-800 text-zinc-400 p-4 focus:outline-none focus:border-red-600 transition-colors">
            <option>Interested In...</option>
            <option>Home Gym</option>
            <option>Commercial Facility</option>
            <option>Distribution</option>
          </select>
          <textarea
            rows="4"
            placeholder="Tell us about your project..."
            className="w-full bg-zinc-900 border border-zinc-800 text-white p-4 focus:outline-none focus:border-red-600 transition-colors"
          ></textarea>
          <Button primary className="w-full justify-center">
            Send Request
          </Button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;


