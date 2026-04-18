'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LANGUAGES, type Language } from '@/data/siteContent';
import { cn } from '@/lib/utils';
import { smoothScrollTo } from '@/lib/utils';

const NAV_ITEMS = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.portfolio', href: '#portfolio' },
  { key: 'nav.whyUs', href: '#why-us' },
  { key: 'nav.process', href: '#process' },
  { key: 'nav.testimonials', href: '#testimonials' },
  { key: 'nav.contact', href: '#contact' },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    smoothScrollTo(href);
  };

  const currentLang = LANGUAGES.find((l) => l.code === lang);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/98 backdrop-blur-xl shadow-[0_4px_30px_rgba(13,27,42,0.08)]'
            : 'bg-transparent'
        )}
      >
        <nav className="container-site flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
            className="flex items-center gap-2 group"
            aria-label="Kal Digitals home"
          >
            {/* Monogram mark */}
            <span
              className="w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center text-xs md:text-sm font-bold text-white shrink-0 transition-transform duration-300 group-hover:scale-105"
              style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)' }}
              aria-hidden="true"
            >
              KD
            </span>
            <span
              className={cn(
                'font-serif font-semibold text-lg md:text-xl tracking-tight transition-colors duration-300',
                scrolled ? 'text-[var(--navy)]' : 'text-white'
              )}
            >
              Kal Digitals
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-0.5" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => handleNav(item.href)}
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-md transition-all duration-150',
                    scrolled
                      ? 'text-[var(--text-secondary)] hover:text-[var(--navy)] hover:bg-[var(--cream)]'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  )}
                >
                  {t(item.key)}
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language switcher */}
            <div ref={langRef} className="relative">
              <button
                id="lang-switcher"
                aria-expanded={langOpen}
                aria-haspopup="listbox"
                onClick={() => setLangOpen(!langOpen)}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200',
                  scrolled
                    ? 'text-[var(--text-secondary)] hover:text-[var(--navy)] hover:bg-[var(--cream)]'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                <Globe size={14} />
                <span>{currentLang?.code === 'en' ? 'EN' : currentLang?.nativeLabel}</span>
                <ChevronDown
                  size={12}
                  className={cn('transition-transform', langOpen && 'rotate-180')}
                />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.ul
                    role="listbox"
                    aria-label="Select language"
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1 w-40 bg-white rounded-xl shadow-[var(--shadow-lg)] border border-[var(--cream-dark)] overflow-hidden z-50"
                  >
                    {LANGUAGES.map((l) => (
                      <li key={l.code}>
                        <button
                          role="option"
                          aria-selected={lang === l.code}
                          onClick={() => { setLang(l.code as Language); setLangOpen(false); }}
                          className={cn(
                            'w-full text-left px-4 py-2.5 text-sm transition-colors font-ethiopic',
                            lang === l.code
                              ? 'bg-[var(--cream)] text-[var(--navy)] font-semibold'
                              : 'text-[var(--text-secondary)] hover:bg-[var(--cream)] hover:text-[var(--navy)]'
                          )}
                        >
                          {l.nativeLabel}
                          {l.code !== 'en' && (
                            <span className="text-[var(--text-muted)] ml-2 text-xs">({l.label})</span>
                          )}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <button
              onClick={() => handleNav('#contact')}
              className="btn-primary"
            >
              {t('nav.cta')}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              scrolled ? 'text-[var(--navy)]' : 'text-white'
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-navy/60 backdrop-blur-xl lg:hidden"
              style={{ backgroundColor: 'rgba(13,27,42,0.6)' }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[280px] bg-white shadow-2xl flex flex-col lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between px-5 h-16 border-b border-[var(--cream-dark)]">
                <span className="font-serif font-semibold text-lg text-[var(--navy)]">Kal Digitals</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-[var(--text-secondary)] hover:text-[var(--navy)] transition-colors rounded-lg hover:bg-[var(--cream)]"
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="flex-1 flex flex-col px-3 py-4 gap-1 overflow-y-auto" role="list">
                {NAV_ITEMS.map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => handleNav(item.href)}
                      className="w-full text-left px-4 py-3.5 rounded-xl text-[var(--text-secondary)] hover:text-[var(--navy)] hover:bg-[var(--cream)] text-base font-medium transition-all"
                    >
                      {t(item.key)}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Mobile language selector */}
              <div className="px-4 pb-3">
                <p className="px-4 pb-2 text-xs text-[var(--text-muted)] font-semibold uppercase tracking-widest">Language</p>
                <div className="flex gap-2">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code as Language); }}
                      className={cn(
                        'flex-1 py-2.5 rounded-xl text-sm font-semibold font-ethiopic transition-all hover:scale-[1.02]',
                        lang === l.code
                          ? 'bg-[var(--navy)] text-white'
                          : 'bg-[var(--cream)] text-[var(--text-secondary)] hover:bg-[var(--cream-dark)]'
                      )}
                    >
                      {l.nativeLabel}
                    </button>
                  ))}
                </div>
              </div>

              <div className="px-4 pb-6">
                <button
                  onClick={() => handleNav('#contact')}
                  className="w-full py-3.5 text-base font-semibold rounded-xl text-white transition-all hover:shadow-[var(--shadow-gold)]"
                  style={{ background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)' }}
                >
                  {t('nav.cta')}
                </button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
