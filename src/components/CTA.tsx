'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { fadeUp, stagger, viewport } from '@/lib/utils';
import { smoothScrollTo } from '@/lib/utils';

export default function CTA() {
  const { t } = useLanguage();

  const handleScroll = (id: string) => {
    smoothScrollTo(id);
  };

  return (
    <section className="section relative overflow-hidden" style={{ background: 'var(--navy)' }}>
      {/* Subtle Ethiopian pattern texture */}
      <div className="absolute inset-0 eth-pattern opacity-20 pointer-events-none" aria-hidden="true" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--gold), transparent)' }}
        aria-hidden="true"
      />

      {/* Gold accent lines */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="display-lg text-white mb-5"
          >
            {t('cta.heading')}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/60 text-lg leading-relaxed mb-10"
          >
            {t('cta.sub')}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleScroll('#contact')}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:shadow-[0_8px_32px_rgba(201,150,42,0.4)]"
              style={{ background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)' }}
            >
              {t('cta.primary')}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => handleScroll('#services')}
              className="px-8 py-4 rounded-xl font-semibold text-white/80 text-sm border border-white/20 transition-all duration-200 hover:bg-white/10 hover:text-white"
            >
              {t('cta.secondary')}
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }}
        aria-hidden="true"
      />
    </section>
  );
}
