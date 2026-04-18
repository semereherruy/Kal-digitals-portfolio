'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { TESTIMONIALS } from '@/data/siteContent';
import { fadeUp, stagger, viewport } from '@/lib/utils';

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--white)' }}>
      <div className="container-site">
        {/* Header */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-12 md:mb-16 text-center max-w-2xl mx-auto"
        >
          <motion.span variants={fadeUp} className="section-label block mb-4">
            Testimonials
          </motion.span>
          <motion.h2 variants={fadeUp} className="display-lg text-[var(--navy)] mb-5">
            {t('testimonials.heading')}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[var(--text-secondary)] leading-relaxed text-lg">
            {t('testimonials.sub')}
          </motion.p>
        </motion.div>

        {/* Testimonial grid with staggered cards */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {TESTIMONIALS.map((item, i) => (
            <motion.blockquote
              key={item.id}
              variants={fadeUp}
              className={`group relative rounded-2xl p-7 transition-all duration-300 hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 border ${
                i % 2 === 1 ? 'md:translate-y-6' : ''
              }`}
              style={{
                background: 'var(--white)',
                borderColor: 'var(--cream-dark)',
              }}
            >
              {/* Gold quote mark */}
              <div
                className="absolute top-5 right-6 text-5xl font-serif leading-none opacity-15 select-none"
                style={{ color: 'var(--gold)' }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: item.rating }, (_, j) => (
                  <Star
                    key={j}
                    size={14}
                    fill="var(--gold)"
                    stroke="var(--gold)"
                    strokeWidth={1}
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 relative z-10">
                {t(item.textKey)}
              </p>

              {/* Author */}
              <footer className="flex items-center gap-3">
                {/* Avatar initials */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                  style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)' }}
                >
                  {item.initials}
                </div>
                <div>
                  <cite className="not-italic text-sm font-semibold text-[var(--navy)] block font-ethiopic">
                    {t(item.nameKey)}
                  </cite>
                  <span className="text-xs text-[var(--text-muted)]">
                    {t(item.roleKey)}
                  </span>
                </div>
              </footer>

              {/* Hover accent top-left corner */}
              <div
                className="absolute top-0 left-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(201,150,42,0.15) 0%, transparent 100%)',
                }}
                aria-hidden="true"
              />
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
