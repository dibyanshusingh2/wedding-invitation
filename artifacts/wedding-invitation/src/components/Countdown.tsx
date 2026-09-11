import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingContent';

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const targetDate = new Date(weddingData.couple.date).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null;

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="countdown-section relative">
      <div className="section-container">
        <div className="countdown-panel relative flex flex-col items-center">
          <motion.div
            className="flex flex-wrap justify-center items-start gap-x-8 gap-y-6 sm:gap-x-12 md:gap-x-16"
            initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            {timeBlocks.map((block) => (
              <div key={block.label} className="flex flex-col items-center w-14 sm:w-18 md:w-24">
                <span
                  className="font-serif italic leading-none mb-2 md:mb-4 text-4xl sm:text-5xl md:text-7xl"
                  style={{
                    backgroundImage: 'linear-gradient(180deg, #F7D488 0%, #F0BF4C 45%, #D89A2E 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {String(block.value).padStart(2, '0')}
                </span>
                <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.25em]" style={{ color: '#2C6E91' }}>
                  {block.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Decorative bow — the "stage" beneath the countdown */}
          <motion.div
            className="flex justify-center mt-14 md:mt-20 w-full"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src={weddingData.countdown.bow}
              alt=""
              aria-hidden="true"
              className="h-auto object-contain select-none pointer-events-none drop-shadow-sm w-full max-w-[360px] sm:max-w-[460px] md:max-w-[560px]"
            />
          </motion.div>

          {/* Gold divider */}
          <motion.div
            className="gold-divider mt-10 md:mt-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="gold-divider-line" />
            <span className="gold-divider-heart">&#10084;</span>
            <span className="gold-divider-line" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
