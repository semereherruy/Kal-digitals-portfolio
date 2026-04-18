'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PORTFOLIO_ITEMS } from '@/data/siteContent';
import { fadeUp, stagger, viewport } from '@/lib/utils';

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="section" style={{ background: 'var(--cream)' }}>
      <div className="container-site">
        {/* Header */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-10 md:mb-14 max-w-2xl"
        >
          <motion.span variants={fadeUp} className="section-label block mb-4">
            Portfolio
          </motion.span>
          <motion.h2 variants={fadeUp} className="display-lg text-[var(--navy)] mb-4">
            {t('portfolio.heading')}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg">
            {t('portfolio.sub')}
          </motion.p>
        </motion.div>

        {/* Masonry-inspired grid */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          style={{ gridAutoRows: 'minmax(200px, auto)' }}
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
                   background: `linear-gradient(160deg, ${item.color}EE 0%, ${item.color}BB 100%)`,
                   minHeight: tall ? '380px' : '200px',
                 }}
               >
                 {/* Ethiopian pattern texture */}
                 <div className="absolute inset-0 eth-pattern opacity-20" aria-hidden="true" />

                 {/* Bottom content gradient fade */}
                 <div
                   className="absolute bottom-0 inset-x-0 h-3/4"
                   style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)' }}
                   aria-hidden="true"
                 />

                 {/* Hover overlay */}
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

                 {/* Index number — watermark style */}
                 <div className="absolute top-4 left-5" aria-hidden="true">
                   <span
                     className="text-5xl md:text-6xl font-serif font-bold"
                     style={{ color: 'rgba(255,255,255,0.1)' }}
                   >
                     {String(i + 1).padStart(2, '0')}
                   </span>
                 </div>

                 {/* Content at bottom */}
                 <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 flex flex-col gap-2">
                   {/* Category chip */}
                   <span
                     className="self-start px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)]"
                     style={{
                       background: `${item.accent}30`,
                       color: item.accent,
                       border: `1px solid ${item.accent}50`,
                     }}
                   >
                     {item.category}
                   </span>

                   {/* Title */}
                   <h3 className="text-lg md:text-xl font-serif font-semibold text-white leading-tight">
                     {t(`portfolio.${item.id}.title`)}
                   </h3>

                   {/* Description */}
                   <p className="text-white/65 text-sm leading-relaxed line-clamp-2">
                     {t(`portfolio.${item.id}.desc`)}
                   </p>

                   {/* View case study link */}
                   <motion.div
                     initial={{ opacity: 0, y: 8 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="mt-2"
                   >
                     <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--gold)] group-hover:gap-2.5 transition-all duration-300">
                       {t('portfolio.view')}
                       <ArrowUpRight size={14} />
                     </span>
                   </motion.div>
                 </div>
               </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
