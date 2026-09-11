import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingContent';

export const Gallery: React.FC = () => {
  const sizeClasses = [
    'md:col-span-2 md:row-span-2',
    'md:col-span-1',
    'md:col-span-1',
    'md:col-span-2',
    'md:col-span-1',
    'md:col-span-1',
    'md:col-span-2',
    'md:col-span-2',
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(72,202,228,0.16),transparent_38%)]" />
      <div className="section-container max-w-7xl mx-auto px-4 md:px-6">

        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans uppercase tracking-[0.25em] text-[10px] md:text-xs text-secondary/90 mb-2 md:mb-3">Captured Moments</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-background">A Weekend by the Sea</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6 auto-rows-[200px] md:auto-rows-[180px] relative z-10">
          {weddingData.gallery.map((item, idx) => (
            <motion.div
              key={idx}
              className={`overflow-hidden rounded-2xl relative group ${sizeClasses[idx % sizeClasses.length]}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-sans uppercase tracking-[0.22em] text-[11px] text-secondary/80">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
