import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingContent';
import { Check, HeartHandshake } from 'lucide-react';
import { CloudShape } from './Clouds';

type Attending = 'yes' | 'no' | null;

export const RSVP: React.FC = () => {
  const [attending, setAttending] = useState<Attending>(null);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('1');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !attending) return;
    setSubmitted(true);
  };

  const floatingInputClass =
    'peer w-full bg-white border border-border rounded-sm px-4 pt-6 pb-2 font-serif text-base text-foreground placeholder-transparent focus:outline-none focus:ring-1 focus:ring-primary';
  const floatingLabelClass =
    'absolute left-4 top-4 font-sans text-xs uppercase tracking-widest text-foreground/50 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest';

  return (
    <section className="panel-section bg-transparent relative px-4 md:px-6 overflow-hidden">
      {/* Extra clouds just for Be Our Guest / RSVP */}
      <CloudShape className="cloud-decoration cloud-float w-8 md:w-14 left-3 md:left-10" style={{ top: '4%', animationDelay: '1s' }} />
      <CloudShape className="cloud-decoration cloud-float w-10 md:w-16 right-4 md:right-12" style={{ top: '90%', animationDelay: '2.8s' }} />
      <CloudShape className="cloud-decoration cloud-float w-8 md:w-14 right-10 md:right-22" style={{ top: '46%', animationDelay: '1.3s' }} />

      <div className="section-container max-w-3xl mx-auto relative">
        <div className="luxury-card relative overflow-hidden">
          <motion.div
            className="text-center mb-10 md:mb-12"
            initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <p className="font-sans uppercase tracking-[0.25em] text-[10px] md:text-xs mb-3 md:mb-4" style={{ color: '#F0BF4C' }}>RSVP</p>
            <h2 className="font-script text-3xl sm:text-4xl md:text-7xl mb-3 md:mb-4" style={{ color: '#2C6E91' }}>
              {weddingData.rsvp.title}
            </h2>
            <p className="font-serif text-sm md:text-lg mb-1" style={{ color: '#607D96' }}>{weddingData.rsvp.description}</p>
            <p className="font-sans text-[10px] md:text-xs uppercase tracking-widest" style={{ color: '#607D96' }}>{weddingData.rsvp.subtitle}</p>
            <div className="gold-divider mt-6">
              <span className="gold-divider-line" />
              <span className="gold-divider-heart">&#10084;</span>
              <span className="gold-divider-line" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(240,191,76,0.15)' }}>
                  <Check style={{ color: '#F0BF4C' }} size={28} />
                </div>
                <h3 className="font-serif text-2xl mb-2" style={{ color: '#2C6E91' }}>RSVP Received</h3>
                <p className="font-sans text-sm max-w-xs" style={{ color: '#607D96' }}>
                  {attending === 'yes'
                    ? "Thank you — we've saved your seat and can't wait to see you there."
                    : "Thank you for letting us know. You'll be in our hearts on the day."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    id="rsvp-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=" "
                    className={floatingInputClass}
                  />
                  <label htmlFor="rsvp-name" className={floatingLabelClass}>
                    Full Name
                  </label>
                </div>

                <div>
                  <span className="block font-sans text-xs uppercase tracking-widest text-foreground/60 mb-2">
                    Will you be joining us?
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setAttending('yes')}
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-sm border font-sans text-xs uppercase tracking-widest transition-colors ${
                        attending === 'yes'
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'border-border text-foreground/70 hover:border-primary/50'
                      }`}
                    >
                      <HeartHandshake size={16} /> Joyfully Accept
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttending('no')}
                      className={`px-4 py-3 rounded-sm border font-sans text-xs uppercase tracking-widest transition-colors ${
                        attending === 'no'
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'border-border text-foreground/70 hover:border-primary/50'
                      }`}
                    >
                      Regretfully Decline
                    </button>
                  </div>
                </div>

                {attending === 'yes' && (
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <input
                      id="rsvp-guests"
                      type="number"
                      min={1}
                      max={10}
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      placeholder=" "
                      className={floatingInputClass}
                    />
                    <label htmlFor="rsvp-guests" className={floatingLabelClass}>
                      Number of Guests
                    </label>
                  </motion.div>
                )}

                <div className="relative">
                  <textarea
                    id="rsvp-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder=" "
                    className={`${floatingInputClass} resize-none`}
                  />
                  <label htmlFor="rsvp-message" className={floatingLabelClass}>
                    Message to the Couple (optional)
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!name || !attending}
                  className="btn-luxury w-full inline-flex items-center justify-center gap-2 px-8 py-4 font-sans uppercase tracking-widest text-xs rounded-sm disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Send RSVP
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
