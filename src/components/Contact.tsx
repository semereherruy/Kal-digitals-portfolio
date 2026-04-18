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

    // Simulate form submission - replace with actual API call
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
      <div className="container-site">
        {/* Header */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-12 md:mb-16 text-center max-w-2xl mx-auto"
        >
          <motion.span variants={fadeUp} className="section-label block mb-4">
            Contact
          </motion.span>
          <motion.h2 variants={fadeUp} className="display-lg text-[var(--navy)] mb-5">
            {t('contact.heading')}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[var(--text-secondary)] leading-relaxed text-lg">
            {t('contact.sub')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left col — Contact info */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-2 flex flex-col gap-8"
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
                className="flex items-start gap-4"
              >
                <div
                  className="w-11 h-11 shrink-0 rounded-lg flex items-center justify-center"
                  style={{ background: 'var(--white)', border: '1px solid var(--cream-dark)' }}
                >
                  <item.icon size={18} strokeWidth={1.5} className="text-[var(--gold)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-1">
                    {t(item.labelKey)}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-[var(--navy)] font-medium hover:text-[var(--gold)] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-[var(--navy)] font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div variants={fadeUp}>
              <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-3">
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
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--gold)] transition-all duration-200 hover:shadow-[var(--shadow-sm)]"
                    style={{ background: 'var(--white)', border: '1px solid var(--cream-dark)' }}
                  >
                    <social.Icon size={16} />
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
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 md:p-10 space-y-5"
              style={{ background: 'var(--white)', border: '1px solid var(--cream-dark)', boxShadow: 'var(--shadow-sm)' }}
            >
              {/* Success/Error messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg p-4 text-sm"
                  style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', color: '#16a34a' }}
                >
                  Message sent successfully! We&apos;ll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg p-4 text-sm"
                  style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#dc2626' }}
                >
                  Something went wrong. Please try again or contact us directly.
                </motion.div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg text-sm border text-[var(--navy)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
                    style={{ background: 'var(--cream)', borderColor: 'var(--cream-dark)' }}
                    placeholder="Kebede Alemu"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg text-sm border text-[var(--navy)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
                    style={{ background: 'var(--cream)', borderColor: 'var(--cream-dark)' }}
                    placeholder="kebede@business.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-2">
                  {t('contact.form.subject')}
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-sm border text-[var(--navy)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
                  style={{ background: 'var(--cream)', borderColor: 'var(--cream-dark)' }}
                  placeholder="Website redesign project"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-sm border text-[var(--navy)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all resize-none"
                  style={{ background: 'var(--cream)', borderColor: 'var(--cream-dark)' }}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:shadow-[0_4px_16px_rgba(201,150,42,0.5)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                style={{ background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)' }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    {t('contact.form.send')}
                    <Send size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
