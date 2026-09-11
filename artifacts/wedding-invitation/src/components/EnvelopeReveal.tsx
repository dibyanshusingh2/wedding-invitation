import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingContent';

interface EnvelopeRevealProps {
  onComplete: () => void;
}

export const EnvelopeReveal: React.FC<EnvelopeRevealProps> = ({ onComplete }) => {
  const [isGlowing, setIsGlowing] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleSealClick = () => {
    if (isGlowing) return;
    setIsGlowing(true);
    // Let the seal glow briefly before the video fades and the site reveals
    setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        onComplete();
      }, 900); // Wait for fade out
    }, 550);
  };

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          className="fixed inset-0 z-50 bg-black overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          {/* Full-screen looping video of the wax seal on the invitation */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={weddingData.envelope.sealVideo} type="video/mp4" />
          </video>

          {/* Soft dark vignette so the "tap to open" hint stays legible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

          {/* Clickable seal area */}
          <button
            onClick={handleSealClick}
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            aria-label="Tap the seal to open your invitation"
          >
            <span className={`seal-tap-glow ${isGlowing ? 'seal-tap-glow-active' : ''}`} />
          </button>

          {/* Gentle pulsing hint */}
          <motion.p
            className="absolute bottom-14 md:bottom-20 inset-x-0 text-center font-sans uppercase tracking-[0.3em] text-[11px] md:text-xs text-white/90 pointer-events-none"
            animate={{ opacity: isGlowing ? 0 : [0.35, 1, 0.35] }}
            transition={{ repeat: isGlowing ? 0 : Infinity, duration: 2.2, ease: 'easeInOut' }}
          >
            Tap the seal to open
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
