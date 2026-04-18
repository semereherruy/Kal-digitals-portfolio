'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT } from '@/data/siteContent';
import { fadeUp, slideLeft, stagger, viewport } from '@/lib/utils';

/* Custom SVG social icons — lucide-react no longer ships brand icons */
function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
    </svg>
  );
}
function TelegramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.866-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--cream)' }}>
      {/* Ethiopian pattern decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[var(--gold)] blur-[100px]" />
        <div className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-[var(--terra)] blur-[120px]" />
      </div>

      <div className="container-site relative">
        {/* Header */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-16 md:mb-20 text-center max-w-2xl mx-auto"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
            style={{ background: 'rgba(201,150,42,0.1)', border: '1px solid rgba(201,150,42,0.2)', color: 'var(--gold)' }}>
            <span className="w-2 h-2 rounded-full bg-[var(--gold)]" />
            Get in Touch
          </motion.div>
          <motion.h1 variants={fadeUp} className="display-lg text-[var(--navy)] mb-5">
            {t('contact.heading')}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[var(--text-secondary)] leading-relaxed text-lg md:text-xl max-w-2xl mx-auto">
            {t('contact.sub')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left col — Contact info */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {[
              {
                icon: Phone,
                labelKey: 'contact.info.phone',
                value: CONTACT.phone,
                href: `tel:${CONTACT.phone}`,
              },
              {
                icon: Mail,
                labelKey: 'contact.info.email',
                value: CONTACT.email,
                href: `mailto:${CONTACT.email}`,
              },
              {
                icon: MapPin,
                labelKey: 'contact.info.location',
                value: CONTACT.location,
                href: undefined,
              },
            ].map((item) => (
              <motion.div
                key={item.labelKey}
                variants={fadeUp}
                className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/50"
              >
                <div
                  className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[var(--shadow-gold)]"
                  style={{ background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)', border: '1px solid var(--gold-light)' }}
                >
                  <item.icon size={20} strokeWidth={1.5} className="text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-1.5">
                    {t(item.labelKey)}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-base text-[var(--navy)] font-medium hover:text-[var(--gold)] transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base text-[var(--navy)] font-medium leading-relaxed">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div variants={fadeUp} className="mt-2">
              <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-4">
                {t('contact.info.follow')}
              </p>
              <div className="flex gap-3">
                {[
                  { href: CONTACT.social.facebook, Icon: FacebookIcon, label: 'Facebook' },
                  { href: CONTACT.social.youtube, Icon: YoutubeIcon, label: 'YouTube' },
                  { href: CONTACT.social.telegram, Icon: TelegramIcon, label: 'Telegram' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-[var(--text-secondary)] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[var(--shadow-gold)]"
                    style={{ background: 'var(--white)', border: '1px solid var(--cream-dark)' }}
                  >
                    <social.Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right col — Form */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="relative rounded-2xl p-8 md:p-10 space-y-6 transition-all duration-500 hover:shadow-[var(--shadow-lg)]"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '0 8px 32px rgba(13, 27, 42, 0.08), 0 2px 8px rgba(13, 27, 42, 0.04)'
              }}
            >
              {/* Decorative gradient accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)',
                  filter: 'blur(20px)'
                }}
              />

              {/* Success/Error messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="rounded-xl p-4 text-sm flex items-center gap-3"
                  style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', color: '#16a34a' }}
                >
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="font-medium">Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="rounded-xl p-4 text-sm flex items-center gap-3"
                  style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#dc2626' }}
                >
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <span className="font-medium">Something went wrong. Please try again or contact us directly.</span>
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-2.5">
                    {t('contact.form.name')}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl text-sm border transition-all duration-200 text-[var(--navy)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
                    style={{ background: 'rgba(248, 244, 239, 0.6)', borderColor: 'var(--cream-dark)' }}
                    placeholder="Kebede Alemu"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-2.5">
                    {t('contact.form.email')}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl text-sm border transition-all duration-200 text-[var(--navy)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
                    style={{ background: 'rgba(248, 244, 239, 0.6)', borderColor: 'var(--cream-dark)' }}
                    placeholder="kebede@business.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-2.5">
                  {t('contact.form.subject')}
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl text-sm border transition-all duration-200 text-[var(--navy)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent"
                  style={{ background: 'rgba(248, 244, 239, 0.6)', borderColor: 'var(--cream-dark)' }}
                  placeholder="Website redesign project"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-2.5">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl text-sm border transition-all duration-200 text-[var(--navy)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent resize-none"
                  style={{ background: 'rgba(248, 244, 239, 0.6)', borderColor: 'var(--cream-dark)' }}
                  placeholder="Tell us about your project..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:shadow-[var(--shadow-gold)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)' }}
                >
                  {/* Shimmer effect */}
                  {!isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                  )}
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>{t('contact.form.send')}</span>
                      <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>

                <p className="text-xs text-[var(--text-muted)] text-center sm:text-left leading-relaxed">
                  We typically respond within 24 hours.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
