import React from 'react';
import { motion } from 'framer-motion';
import { Music } from 'lucide-react';
import { weddingData } from '../data/weddingContent';

export const Footer: React.FC = () => {
  const handleMusicClick = () => {
    window.dispatchEvent(new CustomEvent('wedding-toggle-audio'));
  };

  return (
    <footer
      className="relative pt-16 pb-20 text-center px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0F4C75, #0A6C94, #0096C7)' }}
    >
      {/* Wave SVG on top of footer */}
      <div className="absolute top-0 left-0 w-full leading-[0] -translate-y-[1px]">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C240,100 480,0 720,40 C960,80 1200,20 1440,50 L1440,0 L0,0 Z"
            fill="#FCFAF6"
          />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="section-container max-w-2xl mx-auto flex flex-col items-center relative z-10 mt-10 md:mt-16 px-4"
      >
        <h2 className="font-script text-4xl sm:text-5xl md:text-8xl mb-3 md:mb-4 text-white">
          {weddingData.couple.bride} &amp; {weddingData.couple.groom}
        </h2>
        <p className="font-serif text-sm md:text-xl mb-6 md:mb-8 tracking-[0.12em] md:tracking-[0.15em] uppercase text-white/80">
          {weddingData.couple.dateFormatted}
        </p>
        <p className="font-serif text-lg md:text-2xl mb-8 md:mb-10 italic text-white text-center">
          {weddingData.footer.text}
        </p>

        <button
          onClick={handleMusicClick}
          className="flex items-center gap-2 px-6 py-3 rounded-full mb-10 font-sans text-xs uppercase tracking-widest text-white border border-white/30 hover:bg-white/10 transition-colors"
          aria-label="Play our song"
        >
          <Music size={16} /> Play Our Song
        </button>

        <div className="gold-divider mb-8">
          <span className="gold-divider-line" />
          <span className="gold-divider-heart">&#10084;</span>
          <span className="gold-divider-line" />
        </div>
        <p className="font-sans uppercase tracking-[0.3em] text-sm text-white/80">
          {weddingData.footer.hashtag}
        </p>
      </motion.div>
    </footer>
  );
};
