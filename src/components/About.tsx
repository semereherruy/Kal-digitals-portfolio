'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { fadeUp, slideLeft, stagger, viewport } from '@/lib/utils';

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="section"
      style={{ background: 'var(--white)' }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Narrative */}
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mb-10 md:mb-12 max-w-2xl"
          >
            <motion.span variants={fadeUp} className="section-label block mb-4">
              {t('about.heading')}
            </motion.span>
            <motion.h2 variants={fadeUp} className="display-lg text-[var(--navy)] mb-4">
              {t('about.sub')}
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4 md:space-y-5 text-[var(--text-secondary)] leading-relaxed">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </motion.div>

            {/* Mission / Vision cards with refined cards */}
            <motion.div variants={stagger(0.1)} className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { labelKey: 'about.mission.label', textKey: 'about.mission.text', accent: 'var(--gold)' },
                { labelKey: 'about.vision.label', textKey: 'about.vision.text', accent: 'var(--terra)' },
              ].map((card) => (
                <motion.div
                  key={card.labelKey}
                  variants={fadeUp}
                  className="rounded-xl p-5 md:p-6 border transition-all duration-300 hover:shadow-[var(--shadow-sm)] hover:-translate-y-0.5"
                  style={{
                    background: 'var(--cream)',
                    borderColor: 'var(--cream-dark)',
                    borderLeftWidth: '3px',
                    borderLeftStyle: 'solid',
                    borderLeftColor: card.accent,
                  }}
                >
                  <p className="text-xs uppercase tracking-widest font-semibold mb-2"
                    style={{ color: card.accent }}>
                    {t(card.labelKey)}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {t(card.textKey)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Visual / Illustration */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="relative"
          >
            {/* Abstract layered composition */}
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto">
              {/* Background circle */}
              <div
                className="absolute inset-0 rounded-full opacity-8"
                style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }}
                aria-hidden="true"
              />

              {/* Outer ring */}
              <div
                className="absolute -inset-4 rounded-full border opacity-15"
                style={{ borderColor: 'var(--gold)' }}
                aria-hidden="true"
              />

              {/* Main card */}
              <div
                className="absolute inset-6 rounded-2xl flex flex-col justify-between overflow-hidden shadow-[var(--shadow-lg)]"
                style={{ background: 'linear-gradient(145deg, var(--navy) 0%, var(--navy-mid) 100%)' }}
              >
                {/* Ethiopian pattern header strip */}
                <div className="h-2 eth-pattern opacity-60" aria-hidden="true" />

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center px-10 py-12 gap-8">
                  {/* KD Monogram */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(201,150,42,0.12)', border: '1px solid rgba(201,150,42,0.3)' }}
                    >
                      <span className="font-serif text-2xl font-bold text-[var(--gold)]">KD</span>
                    </div>
                    <div>
                      <p className="text-white font-serif font-semibold text-lg">Kal Digitals</p>
                      <p className="text-white/50 text-xs mt-0.5">Digital Agency · Est. 2021</p>
                    </div>
                  </div>

                  {/* Stats mini */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { num: '50+', label: 'Clients' },
                      { num: '120+', label: 'Projects' },
                      { num: '4+', label: 'Years' },
                      { num: '6', label: 'Services' },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-3 rounded-lg"
                        style={{ background: 'rgba(255,255,255,0.05)' }}>
                        <p className="text-[var(--gold)] font-serif font-bold text-xl">{stat.num}</p>
                        <p className="text-white/50 text-xs mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Location tag */}
                  <div className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: 'var(--gold)' }}
                    />
                    <p className="text-white/40 text-xs tracking-wide">Mekelle, Tigray, Ethiopia</p>
                  </div>
                </div>

                {/* Bottom rule */}
                <div
                  className="h-px mx-6 mb-6 opacity-20"
                  style={{ background: 'linear-gradient(to right, var(--gold), transparent)' }}
                  aria-hidden="true"
                />
              </div>

              {/* Floating accent chip */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-2.5 shadow-[var(--shadow-md)] flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-xs font-semibold text-[var(--navy)] whitespace-nowrap">4+ Years Active</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-2.5 shadow-[var(--shadow-md)]"
              >
                <p className="text-xs font-semibold text-[var(--navy)]">🇪🇹 Locally Rooted</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
