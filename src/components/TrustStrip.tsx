'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { METRICS } from '@/data/siteContent';
import { stagger, fadeUp, viewport } from '@/lib/utils';

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = 16;
    const increment = target / (duration / step);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function TrustStrip() {
  const { t } = useLanguage();

  return (
    <section className="section-sm relative overflow-hidden" style={{ background: 'var(--navy)' }}>
      {/* Subtle horizontal rule accent — Ethiopian-inspired */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-site">
        <motion.dl
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8 text-center"
        >
          {METRICS.map((metric) => (
            <motion.div key={metric.labelKey} variants={fadeUp} className="flex flex-col items-center gap-2">
              <dt className="text-4xl md:text-5xl font-serif font-bold text-white">
                <CountUp target={metric.value} suffix={metric.suffix} />
              </dt>
              <dd className="text-xs uppercase tracking-widest text-white/50 font-medium leading-tight max-w-[10rem]">
                {t(metric.labelKey)}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }}
        aria-hidden="true"
      />
    </section>
  );
}
