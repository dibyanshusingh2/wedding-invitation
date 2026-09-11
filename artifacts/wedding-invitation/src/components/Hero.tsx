import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingContent';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden text-primary-foreground flex items-center justify-center">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        {weddingData.hero.video ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={weddingData.hero.image}
            className="w-full h-full object-cover"
            style={{ objectPosition: '68% 55%' }}
          >
            <source src={weddingData.hero.video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={weddingData.hero.image}
            alt={weddingData.couple.fullNames}
            className="w-full h-full object-cover"
            style={{ objectPosition: '68% 55%' }}
          />
        )}
        {/* Dark overlay per spec: rgba(0,0,0,.35) -> rgba(0,0,0,.45) */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(180deg, rgba(0,0,0,.35) 0%, rgba(0,0,0,.45) 100%)' }}
        />
        {/* Bottom fade to sand background color so Hero blends into the page */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 md:h-56 z-10"
          style={{ background: 'linear-gradient(180deg, transparent 0%, #FCFAF6 100%)' }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center justify-start h-full pt-24 md:pt-32">
        <motion.p
          className="font-sans uppercase tracking-[0.25em] text-[10px] sm:text-xs md:text-sm mb-4 md:mb-6 text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {weddingData.hero.tagline}
        </motion.p>
        
        <motion.h1
          className="font-script text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-none mb-6 md:mb-8 text-background/50 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {weddingData.couple.bride} <br className="md:hidden" />
          <span className="text-accent">&</span> <br className="md:hidden" />
          {weddingData.couple.groom}
        </motion.h1>

        <motion.div
          className="flex flex-col items-center gap-3 md:gap-4 mt-32 sm:mt-50 md:mt-7" style={{marginTop: '206px'}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <p className="font-serif text-base sm:text-xl md:text-2xl text-secondary">
            {weddingData.couple.dateFormatted}
          </p>
          <div className="w-px h-6 md:h-8 bg-accent" />
          <p className="font-serif text-sm sm:text-lg md:text-xl text-secondary">
            {weddingData.couple.location}
          </p>
          <p className="font-sans text-xs sm:text-sm md:text-base tracking-wide text-background/90 max-w-lg px-4">
            {weddingData.hero.invitationText}
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-secondary/70 w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};
