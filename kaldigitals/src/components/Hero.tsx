'use client';

import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { fadeUp, stagger, viewport } from '@/lib/utils';

// Dynamically import the Three.js scene — no SSR
const ThreeScene = lazy(() => import('./ThreeScene'));

export default function Hero() {
  const { t } = useLanguage();

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(150deg, var(--navy) 0%, var(--navy-mid) 60%, #1c3a52 100%)' }}
    >
      {/* Three.js background scene */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Suspense fallback={null}>
          <ThreeScene />
        </Suspense>
      </div>

      {/* Subtle Ethiopian pattern overlay */}
      <div
        className="absolute inset-0 eth-pattern opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      {/* Gradient fade at bottom */}
      <div
        className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--cream) 0%, transparent 100%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-site relative z-10 pt-32 pb-20">
        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Location badge */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-xs font-medium text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
              Mekelle, Tigray, Ethiopia
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="display-xl text-white mb-6 leading-tight"
          >
            {t('hero.headline')}
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            variants={fadeUp}
            className="text-lg text-white/75 leading-relaxed mb-10 max-w-xl font-sans"
          >
            {t('hero.sub')}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <button
              onClick={() => handleScroll('#contact')}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:shadow-[0_8px_32px_rgba(201,150,42,0.4)]"
              style={{ background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)' }}
            >
              {t('hero.cta.primary')}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => handleScroll('#portfolio')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm border border-white/30 bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
            >
              <Play size={14} />
              {t('hero.cta.secondary')}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden="true"
      >
        <span className="text-xs text-white/40 tracking-widest uppercase font-medium">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center pt-1.5"
        >
          <div className="w-0.5 h-2 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>

      {/* Decorative accent line */}
      <div
        className="absolute right-0 top-1/4 w-px h-48 opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)' }}
        aria-hidden="true"
      />
    </section>
  );
}
