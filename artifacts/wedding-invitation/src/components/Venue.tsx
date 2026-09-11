import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingContent';
import { MapPin, ExternalLink } from 'lucide-react';
import { CloudShape } from './Clouds';

export const Venue: React.FC = () => {
  return (
    <section className="solid-panel-section relative overflow-hidden">
      {/* Extra clouds just for the Venue section */}
      <CloudShape className="cloud-decoration cloud-float w-8 md:w-14 right-3 md:right-10" style={{ top: '8%', animationDelay: '1.6s' }} />
      <CloudShape className="cloud-decoration cloud-float w-10 md:w-16 left-4 md:left-12" style={{ top: '85%', animationDelay: '3s' }} />
      <CloudShape className="cloud-decoration cloud-float w-8 md:w-14 left-8 md:left-20" style={{ top: '42%', animationDelay: '0.4s' }} />

      <div className="section-container max-w-6xl mx-auto relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-script text-3xl sm:text-4xl md:text-7xl mb-3 md:mb-4" style={{ color: '#2C6E91' }}>
              {weddingData.venue.title}
            </h2>
            <div className="gold-divider mb-6 md:mb-8" style={{ justifyContent: 'flex-start' }}>
              <span className="gold-divider-line" />
              <span className="gold-divider-heart">&#10084;</span>
            </div>
            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              <h3 className="font-serif text-2xl md:text-3xl" style={{ color: '#2C6E91' }}>
                {weddingData.venue.name}
              </h3>
              <p className="font-sans text-sm md:text-base flex items-start gap-2" style={{ color: '#607D96' }}>
                <MapPin className="shrink-0 mt-1" style={{ color: '#F0BF4C' }} size={18} />
                <span>{weddingData.venue.address}</span>
              </p>
              <p className="font-serif text-sm md:text-lg leading-relaxed" style={{ color: '#607D96' }}>
                {weddingData.venue.description}
              </p>
            </div>

            <a
              href={weddingData.venue.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury inline-flex items-center gap-2 px-8 py-4 font-sans uppercase tracking-widest text-xs rounded-sm"
            >
              Explore Resort <ExternalLink size={16} />
            </a>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 30, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="card-luxury aspect-[4/5] md:aspect-square overflow-hidden relative">
              <img
                src={weddingData.venue.image}
                alt={weddingData.venue.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
