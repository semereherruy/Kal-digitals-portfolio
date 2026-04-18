'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT } from '@/data/siteContent';

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
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'var(--navy)' }} className="text-white/70">
      {/* Top golden rule */}
      <div
        className="h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-site py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                style={{ background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)' }}
              >
                KD
              </span>
              <span className="font-serif font-semibold text-white text-lg">
                Kal Digitals
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-[16rem]">
              {t('footer.tagline')}
            </p>

            {/* Social */}
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-[var(--gold)] hover:bg-white/5 transition-all duration-200"
                >
                  <s.Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              {t('footer.links')}
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm hover:text-[var(--gold)] transition-colors duration-150"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${CONTACT.phone}`} className="hover:text-[var(--gold)] transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-[var(--gold)] transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="leading-relaxed">{CONTACT.location}</li>
            </ul>
          </div>

          {/* Follow CTA */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              {t('footer.follow')}
            </h4>
            <p className="text-sm leading-relaxed mb-4">
              Connect with us on social media or reach out directly to start your project.
            </p>
            <button
              onClick={() => handleNav('#contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                background: 'rgba(201,150,42,0.15)',
                color: 'var(--gold)',
                border: '1px solid rgba(201,150,42,0.3)',
              }}
            >
              {t('nav.cta')}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-6"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>{t('footer.copyright')}</p>
          <p>Crafted with care in Mekelle</p>
        </div>
      </div>
    </footer>
  );
}
