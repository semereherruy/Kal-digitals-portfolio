// ─── Site Content ────────────────────────────────────────────────────────────
// Single source of truth for all business data.
// Component-level copy (headings, paragraphs) lives in translations.ts.

export const CONTACT = {
  phone: '+251-947-809-835',
  email: 'info@kaldigitals.com',
  location: 'St. Michael Building, Mekelle, Tigray, Ethiopia',
  whatsapp: 'https://wa.me/251947809835',
  social: {
    facebook: 'https://facebook.com/kaldigitals',
    twitter: 'https://twitter.com/kaldigitals',
    youtube: 'https://youtube.com/@kaldigitals',
    telegram: 'https://t.me/kaldigitals',
    instagram: 'https://instagram.com/kaldigitals',
  },
} as const;

export const METRICS = [
  { value: 50, suffix: '+', labelKey: 'metrics.businesses' },
  { value: 4, suffix: '+', labelKey: 'metrics.experience' },
  { value: 120, suffix: '+', labelKey: 'metrics.projects' },
  { value: 6, suffix: '', labelKey: 'metrics.services' },
] as const;

export const SERVICES = [
  {
    id: 'design',
    icon: 'Palette',
    featured: true,
  },
  {
    id: 'development',
    icon: 'Code2',
  },
  {
    id: 'marketing',
    icon: 'TrendingUp',
  },
  {
    id: 'branding',
    icon: 'Layers',
  },
  {
    id: 'content',
    icon: 'PenTool',
  },
  {
    id: 'social',
    icon: 'Share2',
  },
] as const;

export const PORTFOLIO_ITEMS = [
  {
    id: 'social-campaign',
    category: 'Social Media',
    color: '#1A2F45',
    accent: '#C9962A',
  },
  {
    id: 'web-redesign',
    category: 'Web Development',
    color: '#0D1B2A',
    accent: '#8B4A2F',
  },
  {
    id: 'brand-identity',
    category: 'Branding',
    color: '#2A1A0D',
    accent: '#C9962A',
  },
  {
    id: 'marketing-strategy',
    category: 'Marketing',
    color: '#0D2A1A',
    accent: '#4A8B6F',
  },
  {
    id: 'growth-project',
    category: 'Digital Strategy',
    color: '#1A1A2A',
    accent: '#C9962A',
  },
] as const;

export const WHY_US_ITEMS = [
  { id: 'pricing', icon: 'Banknote' },
  { id: 'clientFirst', icon: 'Heart' },
  { id: 'localUnderstanding', icon: 'MapPin' },
  { id: 'creativeThinking', icon: 'Lightbulb' },
  { id: 'reliableDelivery', icon: 'Shield' },
  { id: 'measurableResults', icon: 'BarChart3' },
] as const;

export const PROCESS_STEPS = [
  { id: 'discover', number: '01', icon: 'Search' },
  { id: 'strategy', number: '02', icon: 'Map' },
  { id: 'design', number: '03', icon: 'PenTool' },
  { id: 'build', number: '04', icon: 'Code2' },
  { id: 'launch', number: '05', icon: 'Rocket' },
  { id: 'optimize', number: '06', icon: 'Settings' },
] as const;

export const TESTIMONIALS = [
  {
    id: 'hiwot',
    nameKey: 'testimonials.hiwot.name',
    roleKey: 'testimonials.hiwot.role',
    textKey: 'testimonials.hiwot.text',
    rating: 5,
    initials: 'HB',
  },
  {
    id: 'dawit',
    nameKey: 'testimonials.dawit.name',
    roleKey: 'testimonials.dawit.role',
    textKey: 'testimonials.dawit.text',
    rating: 5,
    initials: 'DT',
  },
  {
    id: 'meron',
    nameKey: 'testimonials.meron.name',
    roleKey: 'testimonials.meron.role',
    textKey: 'testimonials.meron.text',
    rating: 5,
    initials: 'MG',
  },
  {
    id: 'yohannes',
    nameKey: 'testimonials.yohannes.name',
    roleKey: 'testimonials.yohannes.role',
    textKey: 'testimonials.yohannes.text',
    rating: 5,
    initials: 'YA',
  },
] as const;

export type Language = 'en' | 'ti' | 'am';
export const LANGUAGES: { code: Language; label: string; nativeLabel: string }[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'ti', label: 'Tigrinya', nativeLabel: 'ትግርኛ' },
  { code: 'am', label: 'Amharic', nativeLabel: 'አማርኛ' },
];
