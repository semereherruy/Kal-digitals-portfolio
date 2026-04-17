'use client';

import { motion } from 'framer-motion';
import {
  Search, Map, PenTool, Code2, Rocket, Settings,
  type LucideProps,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PROCESS_STEPS } from '@/data/siteContent';
import { fadeUp, stagger, viewport } from '@/lib/utils';

type IconName = 'Search' | 'Map' | 'PenTool' | 'Code2' | 'Rocket' | 'Settings';

const ICON_MAP: Record<IconName, React.FC<LucideProps>> = {
  Search, Map, PenTool, Code2, Rocket, Settings,
};

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-28 overflow-hidden" style={{ background: 'var(--cream)' }}>
      <div className="container-site">
        {/* Header */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-20 text-center max-w-2xl mx-auto"
        >
          <motion.span variants={fadeUp} className="section-label block mb-4">
            Process
          </motion.span>
          <motion.h2 variants={fadeUp} className="display-lg text-[var(--navy)] mb-5">
            {t('process.heading')}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[var(--text-secondary)] leading-relaxed text-lg">
            {t('process.sub')}
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative"
        >
          {/* Connecting horizontal line — desktop */}
          <div
            className="hidden lg:block absolute top-[3.25rem] left-0 right-0 h-px"
            style={{ background: 'linear-gradient(to right, transparent 2%, var(--cream-dark) 10%, var(--cream-dark) 90%, transparent 98%)' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
            {PROCESS_STEPS.map((step) => {
              const Icon = ICON_MAP[step.icon as IconName] ?? Search;

              return (
                <motion.div
                  key={step.id}
                  variants={fadeUp}
                  className="group flex flex-col items-center text-center gap-4"
                >
                  {/* Step circle */}
                  <div className="relative">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:border-[var(--gold)] group-hover:shadow-[var(--shadow-gold)]"
                      style={{
                        background: 'var(--white)',
                        borderColor: 'var(--cream-dark)',
                      }}
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        className="text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors duration-300"
                      />
                    </div>

                    {/* Number badge */}
                    <span
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: 'var(--gold)' }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--navy)] mb-1 font-serif">
                      {t(`process.${step.id}.title`)}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-[12rem] mx-auto">
                      {t(`process.${step.id}.desc`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
