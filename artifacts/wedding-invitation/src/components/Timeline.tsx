import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingContent';
import { CloudShape } from './Clouds';

export const Timeline: React.FC = () => {
  return (
    <section className="solid-panel-section relative overflow-hidden">
      {/* Extra clouds just for Day Program */}
      <CloudShape className="cloud-decoration cloud-float w-10 md:w-16 left-3 md:left-10" style={{ top: '6%', animationDelay: '0.8s' }} />
      <CloudShape className="cloud-decoration cloud-float w-8 md:w-14 right-4 md:right-12" style={{ top: '88%', animationDelay: '2.4s' }} />
      <CloudShape className="cloud-decoration cloud-float w-8 md:w-14 right-10 md:right-24" style={{ top: '45%', animationDelay: '1.9s' }} />

      <div className="section-container max-w-4xl mx-auto relative">

        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <p className="font-sans uppercase tracking-[0.25em] text-[10px] md:text-xs mb-3 md:mb-4" style={{ color: '#F0BF4C' }}>
            Day Program
          </p>
          <h2 className="font-script text-3xl sm:text-4xl md:text-7xl mb-3 md:mb-4" style={{ color: '#2C6E91' }}>The Schedule</h2>
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.2em]" style={{ color: '#607D96' }}>
            {weddingData.couple.dateFormatted}
          </p>
          <div className="gold-divider mt-6">
            <span className="gold-divider-line" />
            <span className="gold-divider-heart">&#10084;</span>
            <span className="gold-divider-line" />
          </div>
        </motion.div>

        <div className="relative border-l border-border md:border-none">
          {weddingData.schedule.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center mb-16 md:mb-24 last:mb-0 group"
              >
                {/* Desktop Center Line */}
                <div className="hidden md:block timeline-line absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full -z-10" />
                <motion.div
                  className="hidden md:flex timeline-diamond absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ring-2 ring-[rgb(250,245,255)]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />

                {/* Mobile Left Line Dot */}
                <div className="md:hidden timeline-diamond absolute -left-[5px] top-8" />

                {/* Content block 1 (Text) */}
                <motion.div
                  className={`w-full md:w-1/2 pl-6 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 md:order-last text-left'} mb-6 md:mb-0`}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="font-serif text-lg md:text-2xl block mb-1 md:mb-2" style={{ color: '#F0BF4C' }}>{item.time}</span>
                  <h3 className="font-serif text-xl md:text-3xl mb-2 md:mb-3" style={{ color: '#2C6E91' }}>{item.title}</h3>
                  <p className="font-sans text-sm md:text-base leading-relaxed" style={{ color: '#607D96' }}>{item.description}</p>
                </motion.div>

                {/* Content block 2 (Image) */}
                <motion.div
                  className={`hidden md:block w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}
                  initial={{ opacity: 0, x: isEven ? 30 : -30, filter: 'blur(4px)' }}
                  whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 1 }}
                >
                  <div className="card-luxury aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </motion.div>

                {/* Mobile Image */}
                <motion.div className="md:hidden w-full pl-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="card-luxury aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
