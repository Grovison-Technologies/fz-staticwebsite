import React from 'react';
import { ShieldCheck, TrendingUp, Globe, Users } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading.jsx';
import Button from '../components/common/Button.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';

const statBlocks = [
  { label: 'Installations Completed', value: '1,200+' },
  { label: 'Sq Ft of Powder Coat', value: '80,000+' },
  { label: 'Partner Gyms Worldwide', value: '50+' },
  { label: 'Avg. Lead Time', value: '6 Weeks' },
];

const AboutPage = ({ setActivePage }) => (
  <div className="pt-20">
    <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="container mx-auto px-6 py-20 relative z-10 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <p className="text-red-500 uppercase tracking-[0.4em] font-bold mb-4">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase leading-tight">
            Built By <span className="text-red-600">Engineers</span>, Forged For Athletes
          </h1>
          <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
            FZ Fitness Factory began as a fabrication lab supporting collegiate programs. Today we manufacture fully
            custom ecosystems for pro facilities, boutique studios, and performance labs worldwide. Every weld, stitch,
            and finish is executed in-house so nothing is left to chance.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Button primary onClick={() => setActivePage('equipment')}>
              Explore Equipment
            </Button>
            <Button onClick={() => setActivePage('contact')}>Schedule Facility Tour</Button>
          </div>
        </div>
        <div className="bg-black border border-white/10 p-8 relative">
          <div className="grid grid-cols-2 gap-6">
            {statBlocks.map((stat) => (
              <div key={stat.label} className="p-4 border border-white/10 text-center">
                <div className="text-3xl font-black text-white">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm text-zinc-500">
            Stats updated Q3 2024 · Includes private performance centers and collegiate athletic departments.
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-black border-b border-white/5">
      <div className="container mx-auto px-6">
        <SectionHeading title="Core Pillars" subtitle="What Drives Us" />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              Icon: ShieldCheck,
              title: 'Zero Compromise Quality',
              copy:
                '11-gauge American steel, robotic welding, and multi-stage inspection. If it leaves our floor, it lasts.',
            },
            {
              Icon: TrendingUp,
              title: 'Performance Obsessed',
              copy:
                'We prototype with strength coaches and athletes to ensure every machine and rack flows with training demands.',
            },
            {
              Icon: Globe,
              title: 'Turnkey Global Support',
              copy:
                'White-glove logistics, install teams, and remote diagnostics keep your facility online regardless of timezone.',
            },
            {
              Icon: Users,
              title: 'Design Integration',
              copy:
                'Custom branding, tailored geometries, and collaborative layout sessions align the equipment with your identity.',
            },
          ].map((item) => (
            <div key={item.title} className="border border-white/10 p-8 bg-zinc-950 hover:border-red-600/50 transition-colors">
              <item.Icon className="w-10 h-10 text-red-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6 grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <SectionHeading title="Sustainability" subtitle="Steel With Purpose" align="left" />
          <p className="text-zinc-400 leading-relaxed">
            We operate a closed-loop powder coating system, recycle scrap steel, and partner with freight carriers who
            offset emissions. Every product is built to be refurbished and re-homed, reducing the landfill footprint for
            commercial gyms worldwide.
          </p>
          <p className="text-zinc-500 text-sm">
            95% of our vendors are within a 200-mile radius of the Austin, TX headquarters, minimizing transport waste
            and supporting local manufacturing talent.
          </p>
        </div>
        <div className="bg-black border border-white/10 p-6">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=900"
            alt="Manufacturing Team"
            className="w-full h-72 object-cover mb-6 opacity-80"
          />
          <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
            <span className="px-3 py-1 border border-red-600/40 uppercase tracking-widest">Solar Assisted Shop</span>
            <span className="px-3 py-1 border border-red-600/40 uppercase tracking-widest">Water Recycling Booths</span>
            <span className="px-3 py-1 border border-red-600/40 uppercase tracking-widest">Veteran Workforce</span>
          </div>
        </div>
      </div>
    </section>

    <ContactSection />
  </div>
);

export default AboutPage;


