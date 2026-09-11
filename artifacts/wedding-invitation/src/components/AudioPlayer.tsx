import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Waves, Piano, Volume2, VolumeX } from 'lucide-react';
import { weddingData } from '../data/weddingContent';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [track, setTrack] = useState<'ocean' | 'piano'>('ocean');
  const oceanRef = useRef<HTMLAudioElement | null>(null);
  const pianoRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    oceanRef.current = new Audio(weddingData.audio.ocean);
    pianoRef.current = new Audio(weddingData.audio.piano);
    
    if (oceanRef.current) {
      oceanRef.current.loop = true;
      oceanRef.current.volume = 0.4;
    }
    if (pianoRef.current) {
      pianoRef.current.loop = true;
      pianoRef.current.volume = 0.6;
    }

    return () => {
      if (oceanRef.current) {
        oceanRef.current.pause();
        oceanRef.current = null;
      }
      if (pianoRef.current) {
        pianoRef.current.pause();
        pianoRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      oceanRef.current?.pause();
      pianoRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (track === 'ocean') {
        pianoRef.current?.pause();
        oceanRef.current?.play().catch((e) => console.log('Audio play failed', e));
      } else {
        oceanRef.current?.pause();
        pianoRef.current?.play().catch((e) => console.log('Audio play failed', e));
      }
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const handleExternalToggle = () => togglePlay();
    window.addEventListener('wedding-toggle-audio', handleExternalToggle);
    return () => window.removeEventListener('wedding-toggle-audio', handleExternalToggle);
  });

  const switchTrack = (nextTrack: 'ocean' | 'piano') => {
    setTrack(nextTrack);
    if (!isPlaying) return;

    if (nextTrack === 'ocean') {
      pianoRef.current?.pause();
      oceanRef.current?.play().catch((e) => console.log('Audio play failed', e));
    } else {
      oceanRef.current?.pause();
      pianoRef.current?.play().catch((e) => console.log('Audio play failed', e));
    }
  };

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-background/90 backdrop-blur-md px-2 py-2 shadow-xl ring-1 ring-primary/15"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <button
        onClick={() => switchTrack('ocean')}
        className={`h-10 w-10 rounded-full grid place-items-center transition-colors ${
          track === 'ocean' ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-primary'
        }`}
        aria-label="Ocean ambience"
      >
        <Waves size={18} />
      </button>
      <button
        onClick={() => switchTrack('piano')}
        className={`h-10 w-10 rounded-full grid place-items-center transition-colors ${
          track === 'piano' ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-primary'
        }`}
        aria-label="Romantic piano"
      >
        <Piano size={18} />
      </button>
      <button
        onClick={togglePlay}
        className="relative flex items-center justify-center w-12 h-12 bg-accent text-accent-foreground rounded-full shadow-lg hover:scale-105 transition-transform"
        aria-label="Toggle music"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
        {isPlaying && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-accent"></span>
          </span>
        )}
      </button>
    </motion.div>
  );
};
