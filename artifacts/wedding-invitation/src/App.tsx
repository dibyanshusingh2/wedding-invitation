import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { EnvelopeReveal } from './components/EnvelopeReveal';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Countdown } from './components/Countdown';
import { Timeline } from './components/Timeline';
import { Venue } from './components/Venue';
// import { RSVP } from './components/RSVP';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
import { Clouds } from './components/Clouds';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [envelopeRevealed, setEnvelopeRevealed] = useState(false);

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-transparent relative font-sans">
      {/* 1. Loading Screen */}
      <LoadingScreen isLoading={isLoading} />
      
      {/* 2. Envelope Reveal (Mounts after loading, unmounts after reveal) */}
      {!isLoading && !envelopeRevealed && (
        <EnvelopeReveal onComplete={() => setEnvelopeRevealed(true)} />
      )}

      {/* 3. Main Content (Hidden until envelope is open) */}
      <div 
        className={`relative transition-opacity duration-1000 ${
          envelopeRevealed ? 'opacity-100 visible' : 'opacity-0 invisible h-screen overflow-hidden'
        }`}
      >
        <Clouds />
        <AudioPlayer />
        <Hero />
        <Countdown />
        <Story />
        <Timeline />
        <Venue />
        {/* <RSVP /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
