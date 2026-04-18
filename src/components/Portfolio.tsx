'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PORTFOLIO_ITEMS } from '@/data/siteContent';
import { fadeUp, stagger, viewport } from '@/lib/utils';

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-28" style={{ background: 'var(--cream)' }}>
      <div className="container-site">
        {/* Header */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-16 max-w-2xl"
        >
          <motion.span variants={fadeUp} className="section-label block mb-4">
            Portfolio
          </motion.span>
          <motion.h2 variants={fadeUp} className="display-lg text-[var(--navy)] mb-5">
            {t('portfolio.heading')}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[var(--text-secondary)] leading-relaxed text-lg">
            {t('portfolio.sub')}
          </motion.p>
        </motion.div>

        {/* Masonry-inspired grid */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ gridAutoRows: 'minmax(220px, auto)' }}
        >
          {PORTFOLIO_ITEMS.map((item, i) => {
            const tall = i === 0 || i === 3;
            return (
              <motion.article
                key={item.id}
                variants={fadeUp}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  tall ? 'sm:row-span-2' : ''
                }`}
                style={{
                  /* Slightly lighter gradient so content is readable */
                  background: `linear-gradient(160deg, ${item.color}EE 0%, ${item.color}BB 100%)`,
                  minHeight: tall ? '420px' : '200px',
                }}
              >
                {/* Ethiopian pattern texture */}
                <div className="absolute inset-0 eth-pattern opacity-25" aria-hidden="true" />

                {/* Bottom content gradient fade */}
                <div
                  className="absolute bottom-0 inset-x-0 h-3/4"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)' }}
                  aria-hidden="true"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

                {/* Index number — watermark style */}
                <div className="absolute top-5 left-6" aria-hidden="true">
                  <span
                    className="text-6xl font-serif font-bold"
                    style={{ color: 'rgba(255,255,255,0.12)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Accent corner */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 opacity-20 rounded-bl-full transition-opacity duration-300 group-hover:opacity-40"
                  style={{ background: item.accent }}
                  aria-hidden="true"
                />

                {/* Content at bottom */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col gap-2">
                  {/* Category chip */}
                  <span
                    className="self-start px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{
                      background: `${item.accent}35`,
                      color: item.accent,
                      border: `1px solid ${item.accent}60`,
                    }}
                  >
                    {item.category}
                  </span>

                  <h3 className="text-lg font-serif font-semibold text-white leading-snug">
                    {t(`portfolio.${item.id}.title`)}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                    {t(`portfolio.${item.id}.desc`)}
                  </p>

                  {/* Hover CTA */}
                  <div className="flex items-center gap-1.5 mt-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-xs font-semibold" style={{ color: item.accent }}>
                      {t('portfolio.view')}
                    </span>
                    <ExternalLink size={11} style={{ color: item.accent }} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
