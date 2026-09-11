import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { weddingData } from '../data/weddingContent';

gsap.registerPlugin(ScrollTrigger);

export const Story: React.FC = () => {
  const milestones = weddingData.story.milestones;
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      rowRefs.current.forEach((row) => {
        if (!row) return;

        const lines = row.querySelectorAll<HTMLElement>('.gsap-line');
        const diamonds = row.querySelectorAll<HTMLElement>('.gsap-diamond');
        const content = row.querySelector<HTMLElement>('.gsap-content');

        gsap.set(lines, { scaleY: 0, transformOrigin: 'top' });
        gsap.set(diamonds, { scale: 0 });
        if (content) gsap.set(content, { opacity: 0, y: 24, filter: 'blur(4px)' });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        });

        // 1. Draw line -> 2. Reveal diamond -> 3. Reveal content
        tl.to(lines, { scaleY: 1, duration: 0.7, ease: 'power2.inOut' })
          .to(diamonds, { scale: 1, duration: 0.4, ease: 'back.out(2)' }, '-=0.15')
          .to(content, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7, ease: 'power2.out' }, '-=0.1');
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="panel-section relative px-4 md:px-6" ref={sectionRef}>
      <div className="section-container">
        {/* Floating luxury card — the whole Love Story lives inside this, not directly on the page */}
        <div className="luxury-card relative overflow-hidden">

          {/* Heading */}
          <motion.div
            className="text-center mb-12 md:mb-20"
            initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <p className="font-sans uppercase tracking-[0.25em] text-[10px] md:text-xs mb-3 md:mb-4" style={{ color: '#F0BF4C' }}>
              {weddingData.story.subtitle}
            </p>
            <h2 className="font-script text-3xl sm:text-4xl md:text-7xl mb-4 md:mb-6 leading-tight" style={{ color: '#2C6E91' }}>
              {weddingData.story.title}
            </h2>
            <div className="gold-divider">
              <span className="gold-divider-line" />
              <span className="gold-divider-heart">&#10084;</span>
              <span className="gold-divider-line" />
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  ref={(el) => { rowRefs.current[index] = el; }}
                  className="relative flex flex-col md:flex-row items-start md:items-center mb-14 md:mb-20 last:mb-0"
                >
                  {/* Desktop connecting line segment for this row */}
                  <div className="gsap-line hidden md:block timeline-line absolute left-1/2 top-0 -translate-x-1/2 h-full -z-10" />
                  {/* Mobile connecting line segment for this row */}
                  <div className="gsap-line md:hidden absolute left-0 top-0 timeline-line h-full" style={{ width: '2px' }} />

                  {/* Desktop diamond marker */}
                  <div className="gsap-diamond hidden md:flex timeline-diamond absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ring-2 ring-[rgb(250,245,255)]" />

                  {/* Mobile diamond marker */}
                  <div className="gsap-diamond timeline-diamond md:hidden absolute -left-[5px] top-1.5" />

                  {/* Text block */}
                  <div
                    className={`gsap-content w-full md:w-1/2 pl-6 md:pl-0 ${
                      isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 md:order-last text-left'
                    }`}
                  >
                    <span className="font-script text-2xl md:text-4xl block mb-1" style={{ color: '#F0BF4C' }}>
                      {item.year}
                    </span>
                    <h3 className="font-script text-2xl md:text-4xl mb-2" style={{ color: '#2C6E91' }}>
                      {item.title}
                    </h3>
                    <p
                      className={`font-sans text-sm md:text-base leading-relaxed max-w-sm ${isEven ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}
                      style={{ color: '#607D96' }}
                    >
                      {item.text}
                    </p>
                  </div>

                  {/* Empty spacer to preserve the alternating grid on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>

          {/* Decorative train illustration — feels like a keepsake sticker on the page, not a separate photo */}
          <motion.div
            className="flex justify-center mt-4 md:mt-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src={weddingData.story.train}
              alt=""
              aria-hidden="true"
              className="w-full max-w-[420px] sm:max-w-[480px] md:max-w-[560px] h-auto object-contain select-none pointer-events-none drop-shadow-sm"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
