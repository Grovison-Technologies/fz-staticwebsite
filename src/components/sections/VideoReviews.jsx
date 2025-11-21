import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Play } from 'lucide-react';
import SectionHeading from '../common/SectionHeading.jsx';
import { VIDEO_REVIEWS } from '../../data/content.js';

const VideoReviewsSection = () => {
  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <SectionHeading title="Visual Proof" subtitle="In The Field" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEO_REVIEWS.map((video, idx) => (
            <Motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div className="aspect-video bg-zinc-900 rounded-xl overflow-hidden border border-white/10 relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mt-4 group-hover:text-red-500 transition-colors">
                {video.title}
              </h3>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoReviewsSection;


