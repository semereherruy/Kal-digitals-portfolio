'use client';

import { motion } from 'framer-motion';
import {
  Banknote, Heart, MapPin, Lightbulb, Shield, BarChart3,
  type LucideProps,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { WHY_US_ITEMS } from '@/data/siteContent';
import { fadeUp, stagger, viewport } from '@/lib/utils';

type IconName = 'Banknote' | 'Heart' | 'MapPin' | 'Lightbulb' | 'Shield' | 'BarChart3';

const ICON_MAP: Record<IconName, React.FC<LucideProps>> = {
  Banknote, Heart, MapPin, Lightbulb, Shield, BarChart3,
};

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="section" style={{ background: 'var(--white)' }}>
      <div className="container-site">
        {/* Header */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-10 md:mb-14 text-center max-w-2xl mx-auto"
        >
          <motion.span variants={fadeUp} className="section-label block mb-4">
            Why Us
          </motion.span>
          <motion.h2 variants={fadeUp} className="display-lg text-[var(--navy)] mb-4">
            {t('whyUs.heading')}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg">
            {t('whyUs.sub')}
          </motion.p>
        </motion.div>

        {/* Grid layout */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto"
        >
          {WHY_US_ITEMS.map((item, i) => {
            const Icon = ICON_MAP[item.icon as IconName] ?? Shield;
            const isRight = i % 2 === 1;

            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className={`card group hover:-translate-y-1 ${
                  isRight ? 'md:translate-y-4' : ''
                }`}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:text-[var(--gold)]"
                    style={{ background: 'var(--cream)', border: '1px solid var(--cream-dark)' }}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-base font-semibold text-[var(--navy)] mb-1.5 font-serif">
                    {t(`whyUs.${item.id}.title`)}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {t(`whyUs.${item.id}.desc`)}
                  </p>
                </div>

                {/* Hover accent rule at top */}
                <div
                  className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to right, var(--gold), transparent)' }}
                  aria-hidden="true"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
