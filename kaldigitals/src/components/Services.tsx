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
    <section id="services" className="py-28" style={{ background: 'var(--cream)' }}>
      <div className="container-site">
        {/* Header */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-20 max-w-2xl"
        >
          <motion.span variants={fadeUp} className="section-label block mb-4">
            Our Services
          </motion.span>
          <motion.h2 variants={fadeUp} className="display-lg text-[var(--navy)] mb-5">
            {t('services.heading')}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[var(--text-secondary)] leading-relaxed text-lg">
            {t('services.sub')}
          </motion.p>
        </motion.div>

        {/* Featured service — large editorial band */}
        {featured && (
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="group relative rounded-2xl overflow-hidden mb-6 flex flex-col md:flex-row items-stretch"
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
                className="w-16 h-16 rounded-xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'rgba(201,150,42,0.15)', border: '1px solid rgba(201,150,42,0.3)' }}
              >
                <ServiceIcon name={featured.icon} />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 flex flex-col justify-center px-8 py-10 md:px-0 md:py-12">
              <p className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3 font-semibold">
                Featured Service
              </p>
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

        {/* Remaining services — asymmetric grid */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {rest.map((service, i) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              // Make middle card span 2 columns on lg for rhythm
              className={`group relative rounded-xl p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)] cursor-default border ${
                i === 2 ? 'lg:col-span-2' : ''
              }`}
              style={{
                background: 'var(--white)',
                borderColor: 'var(--cream-dark)',
              }}
            >
              {/* Top accent rule */}
              <div
                className="absolute top-0 left-7 right-7 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to right, var(--gold), transparent)' }}
                aria-hidden="true"
              />

              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center text-[var(--navy)] transition-all duration-300 group-hover:text-[var(--gold)]"
                style={{ background: 'var(--cream)', border: '1px solid var(--cream-dark)' }}
              >
                <ServiceIcon name={service.icon} />
              </div>

              <div>
                <h3 className="text-base font-semibold text-[var(--navy)] mb-1.5 font-serif">
                  {t(`services.${service.id}.title`)}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {t(`services.${service.id}.desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
