'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT } from '@/data/siteContent';
import { smoothScrollTo } from '@/lib/utils';

/* Custom SVG social icons */
function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function TwitterIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function YoutubeIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
    </svg>
  );
}
function TelegramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.866-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

const NAV_LINKS = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.portfolio', href: '#portfolio' },
  { key: 'nav.contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { href: CONTACT.social.facebook, Icon: FacebookIcon, label: 'Facebook' },
  { href: CONTACT.social.twitter, Icon: TwitterIcon, label: 'Twitter' },
  { href: CONTACT.social.youtube, Icon: YoutubeIcon, label: 'YouTube' },
  { href: CONTACT.social.telegram, Icon: TelegramIcon, label: 'Telegram' },
];

export default function Footer() {
  const { t } = useLanguage();

  const handleNav = (href: string) => {
    smoothScrollTo(href);
  };

  return (
    <footer className="relative" style={{ background: 'linear-gradient(180deg, var(--navy) 0%, #0a1628 100%)' }}>
      {/* Top golden rule with glow */}
      <div className="absolute top-0 left-0 right-0 h-px" aria-hidden="true">
        <div
          className="h-full w-2/3 mx-auto"
          style={{
            background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
            boxShadow: '0 0 20px rgba(201,150,42,0.4), 0 0 40px rgba(201,150,42,0.2)'
          }}
        />
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[var(--gold)] to-transparent opacity-10" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-[var(--gold)] opacity-10 blur-3xl" />
      </div>

      <div className="container-site relative py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 lg:pr-8">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-sm font-bold text-white shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)',
                  boxShadow: '0 4px 16px rgba(201,150,42,0.35), inset 0 1px 0 rgba(255,255,255,0.2)'
                }}
              >
                KD
              </div>
              <span className="font-serif font-semibold text-white text-xl tracking-tight">
                Kal Digitals
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-[18rem] text-white/60">
              {t('footer.tagline')}
            </p>

            {/* Social */}
            <div className="flex gap-2.5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 text-white/50 hover:text-white hover:shadow-lg"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', '--tw-shadow-color': 'rgba(201,150,42,0.25)' } as React.CSSProperties}
                >
                  <s.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-[0.1em] mb-5 pb-2 border-b border-white/10">
              {t('footer.links')}
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-white/60 hover:text-[var(--gold)] transition-colors duration-200 hover:translate-x-1 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[var(--gold)] transition-all duration-300 group-hover:w-3" />
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-[0.1em] mb-5 pb-2 border-b border-white/10">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href={`tel:${CONTACT.phone}`} className="text-white/60 hover:text-[var(--gold)] transition-colors hover:translate-x-1 flex items-center gap-2 group">
                  <Phone size={14} className="text-white/30 group-hover:text-[var(--gold)] transition-colors" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="text-white/60 hover:text-[var(--gold)] transition-colors hover:translate-x-1 flex items-center gap-2 group">
                  <Mail size={14} className="text-white/30 group-hover:text-[var(--gold)] transition-colors" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-white/60 flex items-start gap-2">
                <MapPin size={14} className="text-white/30 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{CONTACT.location}</span>
              </li>
            </ul>
          </div>

          {/* Follow CTA */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-[0.1em] mb-5 pb-2 border-b border-white/10">
              {t('footer.follow')}
            </h4>
            <p className="text-sm leading-relaxed mb-5 text-white/60 max-w-[14rem]">
              Connect with us on social media or reach out directly to start your project.
            </p>
            <button
              onClick={() => handleNav('#contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              style={{
                background: 'linear-gradient(135deg, rgba(201,150,42,0.2) 0%, rgba(224,176,74,0.15) 100%)',
                color: 'var(--gold)',
                border: '1px solid rgba(201,150,42,0.3)',
                boxShadow: '0 4px 16px rgba(201,150,42,0.15)'
              }}
            >
              <span>{t('nav.cta')}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="relative border-t"
        style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(10,22,40,0.4)' }}
      >
        <div className="container-site py-5 md:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
            <p className="flex items-center gap-2">
              <span>{t('footer.copyright')}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="hidden sm:inline">Mekelle, Ethiopia</span>
            </p>
            <div className="flex items-center gap-4">
              <button className="hover:text-white transition-colors hover:text-[var(--gold)]">Privacy</button>
              <button className="hover:text-white transition-colors hover:text-[var(--gold)]">Terms</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
