'use client';

import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { fadeUp, stagger } from '@/lib/utils';
import { smoothScrollTo } from '@/lib/utils';
import { ThreeSceneSkeleton } from '@/components/ui/Skeleton';

const ThreeScene = lazy(() => import('./ThreeScene'));

export default function Hero() {
  const { t } = useLanguage();

  const handleScroll = (id: string) => {
    smoothScrollTo(id);
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(150deg, var(--navy) 0%, var(--navy-mid) 60%, #1c3a52 100%)' }}
    >
      {/* Three.js background scene */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Suspense fallback={<ThreeSceneSkeleton />}>
          <ThreeScene />
        </Suspense>
      </div>

      {/* Subtle Ethiopian pattern overlay */}
      <div
        className="absolute inset-0 eth-pattern opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      {/* Gradient fade at bottom */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 md:h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, var(--cream) 0%, transparent 100%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-site relative z-10 pt-28 pb-16 md:pt-36 md:pb-24">
        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Location badge with glow */}
          <motion.div variants={fadeUp} className="mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-xs font-medium text-white/80 shadow-lg">
              <Sparkles size={12} className="text-[var(--gold)]" />
              <span className="hidden sm:inline">Mekelle, Tigray,</span> Ethiopia
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="display-xl text-white mb-5 md:mb-6 leading-[1.15]"
          >
            {t('hero.headline')}
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg lg:text-xl text-white/70 leading-relaxed mb-8 md:mb-10 max-w-xl"
          >
            {t('hero.sub')}
          </motion.p>

          {/* CTAs - Full width on mobile */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={() => handleScroll('#contact')}
              className="btn-primary text-base py-3.5 md:py-4"
            >
              {t('hero.cta.primary')}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => handleScroll('#portfolio')}
              className="btn-secondary text-base py-3.5 md:py-4"
            >
              <Play size={16} />
              {t('hero.cta.secondary')}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden="true"
      >
        <span className="text-[10px] text-white/35 tracking-[0.2em] uppercase font-medium">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center pt-1"
        >
          <div className="w-0.5 h-1.5 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>

      {/* Decorative accent line */}
      <div
        className="absolute right-4 md:right-8 top-1/4 w-px h-32 md:h-48 opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)' }}
        aria-hidden="true"
      />
    </section>
  );
}
