'use client';

import { motion } from 'framer-motion';
import {
  Palette, Code2, TrendingUp, Layers, PenTool, Share2,
  type LucideProps
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SERVICES } from '@/data/siteContent';
import { fadeUp, slideRight, stagger, viewport } from '@/lib/utils';

type IconName = 'Palette' | 'Code2' | 'TrendingUp' | 'Layers' | 'PenTool' | 'Share2';

const ICON_MAP: Record<IconName, React.FC<LucideProps>> = {
  Palette, Code2, TrendingUp, Layers, PenTool, Share2,
};

function ServiceIcon({ name }: { name: string }) {
  const Icon = ICON_MAP[name as IconName] ?? Palette;
  return <Icon size={22} strokeWidth={1.5} />;
}

export default function Services() {
  const { t } = useLanguage();
  const featured = SERVICES.find((s) => 'featured' in s && s.featured);
  const rest = SERVICES.filter((s) => !('featured' in s && s.featured));

  return (
    <section id="services" className="section" style={{ background: 'var(--cream)' }}>
      <div className="container-site">
        {/* Header */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <motion.span variants={fadeUp} className="section-label block mb-4">
            {t('services.heading')}
          </motion.span>
          <motion.h2 variants={fadeUp} className="display-lg text-[var(--navy)] mb-5">
            {t('services.sub')}
          </motion.h2>
        </motion.div>

        {/* Featured service — large editorial band */}
        {featured && (
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="group relative rounded-2xl overflow-hidden mb-6 md:mb-8 flex flex-col md:flex-row items-stretch"
            style={{
              background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)',
              minHeight: '220px',
            }}
          >
            {/* Accent side bar */}
            <div
              className="hidden md:block w-1 self-stretch opacity-70"
              style={{ background: 'linear-gradient(to bottom, var(--gold), var(--terra))' }}
              aria-hidden="true"
            />

            {/* Icon area */}
            <div className="md:w-56 flex items-center justify-center p-10">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-[var(--shadow-gold)]"
                style={{ background: 'rgba(201,150,42,0.15)', border: '1px solid rgba(201,150,42,0.3)' }}
              >
                <ServiceIcon name={featured.icon} />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 flex flex-col justify-center px-8 py-10 md:px-0 md:py-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-px bg-[var(--gold)]" aria-hidden="true" />
                <p className="text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">
                  Featured Service
                </p>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-3">
                {t(`services.${featured.id}.title`)}
              </h3>
              <p className="text-white/65 leading-relaxed max-w-lg">
                {t(`services.${featured.id}.desc`)}
              </p>
            </div>

            {/* Decorative corner motif */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, var(--gold), transparent)' }}
              aria-hidden="true"
            />
          </motion.div>
        )}

        {/* Services grid */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {rest.map((service) => {
            const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP] ?? Palette;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group relative rounded-xl p-6 md:p-7 transition-all duration-300 hover:shadow-[var(--shadow-lg)] hover:-translate-y-1"
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--cream-dark)',
                }}
              >
                {/* Top accent line on hover */}
                <div
                  className="absolute top-0 left-6 right-6 h-px origin-left transition-all duration-300 group-hover:scale-x-100"
                  style={{
                    background: 'linear-gradient(to right, var(--gold), transparent)',
                    transform: 'scaleX(0)',
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div className="mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:text-[var(--gold)] group-hover:shadow-[0_0_0_3px_rgba(201,150,42,0.15)]"
                    style={{ background: 'var(--cream)', border: '1px solid var(--cream-dark)' }}
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-serif font-semibold text-[var(--navy)] mb-2">
                  {t(`services.${service.id}.title`)}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {t(`services.${service.id}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
