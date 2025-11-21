import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, TrendingUp, Globe, Users } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading.jsx';
import Button from '../components/common/Button.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';

const founderStats = [
  { label: 'Gyms Installed', value: 187, suffix: '+', duration: 1800 },
  { label: 'Cities Powered', value: 42, suffix: '+', duration: 1600 },
  { label: 'Sq Ft Fabricated', value: 80, suffix: 'K+', duration: 2000 },
  { label: 'Athletes Supported', value: 6, suffix: 'K+', duration: 2100 },
];

const founderMilestones = [
  {
    title: 'Strength Architect',
    copy: 'Designed elite training centers for ISL clubs, defense academies, and global franchises.',
  },
  {
    title: 'Fabrication Pioneer',
    copy: 'Pioneered modular rigs and powder-coat finishes now standard in premium Indian gyms.',
  },
  {
    title: 'Coach Collaborator',
    copy: 'Co-created progressive overload templates with 40+ strength coaches nationwide.',
  },
  {
    title: 'Mentor & Speaker',
    copy: 'Leads workshops for gym owners on scaling revenue through experiential layouts.',
  },
];

const CountUpNumber = ({ target, suffix = '', duration = 1800 }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const startTime = performance.now();

            const animate = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              setValue(Math.floor(progress * target));
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black text-white">
      {value.toLocaleString()}
      <span className="text-red-500">{suffix}</span>
    </span>
  );
};

const AboutPage = ({ setActivePage }) => (
  <div className="pt-6 sm:pt-10">
    <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="container mx-auto px-6 py-20 relative z-10 grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <p className="text-red-500 uppercase tracking-[0.4em] font-bold mt-[110px]">Meet the Founder</p>
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase leading-tight">
            Surajbhan Nain <span className="text-red-600">builds gyms</span> that outlast the hype
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Surajbhan Nain is a fitness icon & entrepreneur, known for increasing fitness awareness among people of Punjab. He is a world-famous International Bodybuilding judge, also known for his 20 years of contribution in spreading health and fitness in Punjab, Haryana, Delhi. He has been honored and awarded with several prestigious sports bodies in Punjab and Haryana. He is also associated with Indian body builder’s federation, recognized by Government of India, Punjab bodybuilding association and Chandigarh bodybuilding sports association.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {founderMilestones.map((item) => (
              <div
                key={item.title}
                className="border border-white/10 bg-zinc-950/60 p-4 rounded-xl hover:border-red-600/50 transition-colors"
              >
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button primary onClick={() => setActivePage('equipment')}>
              Explore Equipment
            </Button>
            <Button onClick={() => setActivePage('contact')}>Schedule Facility Tour</Button>
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="rounded-3xl items-center overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
              <img
                src="founder.jpeg"
                alt="Surajbhan Nain"
                className="w-full h-[26rem] object-cover"
              />
              {/* <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur px-4 py-3 border border-white/10 rounded-lg">
                <p className="text-white font-black text-lg uppercase tracking-[0.3em]">
                  Founder · Fabricator
                </p>
                <p className="text-zinc-300 text-sm">FZ Fitness Factory</p>
              </div> */}
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {founderStats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 border border-white/10 rounded-2xl bg-black/60 backdrop-blur"
                >
                  <CountUpNumber target={stat.value} suffix={stat.suffix} duration={stat.duration} />
                  <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
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
