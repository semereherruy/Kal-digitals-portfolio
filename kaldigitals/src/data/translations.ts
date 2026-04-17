// ─── Translations ─────────────────────────────────────────────────────────────
// All UI text in English (en), Tigrinya (ti), and Amharic (am).

import type { Language } from './siteContent';

type TranslationMap = Record<string, string>;
type Translations = Record<Language, TranslationMap>;

export const translations: Translations = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.whyUs': 'Why Us',
    'nav.process': 'Process',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.cta': 'Get Started',

    // Hero
    'hero.headline': 'Empowering Ethiopian Brands Through Digital Excellence',
    'hero.sub': 'We help businesses in Mekelle and across Ethiopia build a meaningful digital presence — through design, development, and marketing that actually works.',
    'hero.cta.primary': 'Start a Project',
    'hero.cta.secondary': 'View Our Work',

    // Metrics
    'metrics.businesses': 'Local Businesses Supported',
    'metrics.experience': 'Years of Experience',
    'metrics.projects': 'Projects Delivered',
    'metrics.services': 'Core Service Areas',

    // Services
    'services.heading': 'What We Do',
    'services.sub': 'A focused set of services built to help Ethiopian businesses grow online — each one delivered with craft, care, and clarity.',
    'services.design.title': 'UI/UX Design',
    'services.design.desc': 'Beautiful, functional interfaces that reflect your brand and serve your users — crafted with precision and intention.',
    'services.development.title': 'Web Development',
    'services.development.desc': 'Fast, accessible, and scalable websites and apps built with modern technology and clean code.',
    'services.marketing.title': 'Digital Marketing',
    'services.marketing.desc': 'Data-informed campaigns that reach the right people, at the right time, with the right message.',
    'services.branding.title': 'Brand Identity',
    'services.branding.desc': 'Logos, color systems, and visual language that make your business recognizable and unforgettable.',
    'services.content.title': 'Content Creation',
    'services.content.desc': 'Photography, copywriting, and multimedia assets that tell your story and build trust with your audience.',
    'services.social.title': 'Social Media Strategy',
    'services.social.desc': 'Consistent, on-brand social presence with strategy, scheduling, and community engagement built in.',

    // About
    'about.heading': 'Who We Are',
    'about.sub': 'A digital agency rooted in Mekelle, building brands that stand the test of time.',
    'about.p1': "Kal Digitals was founded with a simple belief: that Ethiopian businesses deserve the same quality of digital work as any global brand. We started small — but with big ambitions and a deep understanding of the local market.",
    'about.p2': "Today, we work with entrepreneurs, SMEs, and growth-stage businesses across Tigray and Ethiopia, delivering design, development, and marketing work that combines international standards with local insight.",
    'about.mission.label': 'Our Mission',
    'about.mission.text': 'To give every Ethiopian business access to world-class digital tools and strategy — regardless of size or budget.',
    'about.vision.label': 'Our Vision',
    'about.vision.text': 'A thriving digital economy in Ethiopia, where local businesses lead on their own terms.',

    // Portfolio
    'portfolio.heading': 'Featured Work',
    'portfolio.sub': 'A selection of projects we\'re proud of — from social campaigns to full brand transformations.',
    'portfolio.social-campaign.title': 'Social Media Campaign',
    'portfolio.social-campaign.desc': 'End-to-end campaign strategy and creative production for a Mekelle-based retail brand.',
    'portfolio.web-redesign.title': 'Website Redesign',
    'portfolio.web-redesign.desc': 'Full redesign of a hospitality brand\'s online presence — mobile-first, fast, and conversion-optimized.',
    'portfolio.brand-identity.title': 'Brand Identity',
    'portfolio.brand-identity.desc': 'Complete visual identity for a new fintech startup entering the Ethiopian market.',
    'portfolio.marketing-strategy.title': 'Marketing Strategy',
    'portfolio.marketing-strategy.desc': 'Six-month digital growth plan with measurable KPIs for an education business in Tigray.',
    'portfolio.growth-project.title': 'Digital Growth Project',
    'portfolio.growth-project.desc': 'Integrated strategy combining SEO, content, and paid media for a regional healthcare provider.',
    'portfolio.view': 'View Case Study',

    // Why Us
    'whyUs.heading': 'Why Kal Digitals',
    'whyUs.sub': 'We don\'t promise magic. We deliver work that is honest, skilled, and built to last.',
    'whyUs.pricing.title': 'Transparent Pricing',
    'whyUs.pricing.desc': 'No hidden fees, no surprise invoices. You know what you\'re paying for, and why.',
    'whyUs.clientFirst.title': 'Client-First Culture',
    'whyUs.clientFirst.desc': 'Your goals drive every decision. We listen before we design, and iterate based on your feedback.',
    'whyUs.localUnderstanding.title': 'Deep Local Knowledge',
    'whyUs.localUnderstanding.desc': 'We know the Ethiopian market — its rhythms, its audiences, and its opportunities — from the inside.',
    'whyUs.creativeThinking.title': 'Creative Rigour',
    'whyUs.creativeThinking.desc': 'Beautiful work and strategic thinking aren\'t opposites. We bring both to every project.',
    'whyUs.reliableDelivery.title': 'On-Time, Every Time',
    'whyUs.reliableDelivery.desc': 'Deadlines are not suggestions. We build realistic timelines and honor them.',
    'whyUs.measurableResults.title': 'Results You Can Measure',
    'whyUs.measurableResults.desc': 'We set clear goals at the start and report on them honestly at the end.',

    // Process
    'process.heading': 'How We Work',
    'process.sub': 'A clear, six-stage process that keeps you informed at every step — no black boxes.',
    'process.discover.title': 'Discover',
    'process.discover.desc': 'We learn your business, your audience, and your goals inside-out.',
    'process.strategy.title': 'Strategy',
    'process.strategy.desc': 'A clear plan is built — channels, timelines, deliverables, and success metrics.',
    'process.design.title': 'Design',
    'process.design.desc': 'Visual concepts are crafted and refined until they\'re exactly right.',
    'process.build.title': 'Build',
    'process.build.desc': 'Development or content production under rigorous quality standards.',
    'process.launch.title': 'Launch',
    'process.launch.desc': 'Careful deployment with testing, checks, and a seamless handover.',
    'process.optimize.title': 'Optimize',
    'process.optimize.desc': 'Ongoing monitoring, reporting, and improvement — so results compound over time.',

    // Testimonials
    'testimonials.heading': 'Client Voices',
    'testimonials.sub': 'Real feedback from businesses we\'ve had the privilege of working with.',
    'testimonials.hiwot.name': 'Hiwot Berhe',
    'testimonials.hiwot.role': 'Owner, Mekelle Boutique',
    'testimonials.hiwot.text': 'Kal Digitals redesigned our entire online presence. Within two months of launch, our enquiries doubled. Their team is professional, responsive, and genuinely creative.',
    'testimonials.dawit.name': 'Dawit Tesfaye',
    'testimonials.dawit.role': 'Founder, TechStart Ethiopia',
    'testimonials.dawit.text': 'They delivered a brand identity that felt completely right — modern, but grounded in who we are. The process was smooth, and the result exceeded what we imagined.',
    'testimonials.meron.name': 'Meron Gebremichael',
    'testimonials.meron.role': 'Director, Tigray Education Hub',
    'testimonials.meron.text': 'The social media strategy they built for us transformed our reach. We went from 400 followers to over 12,000 in six months. Couldn\'t recommend them more.',
    'testimonials.yohannes.name': 'Yohannes Abraha',
    'testimonials.yohannes.role': 'CEO, Abraha Imports',
    'testimonials.yohannes.text': "What I appreciate most is their honesty. They told us what would work and what wouldn't — and they were right. A team you can actually trust.",

    // CTA
    'cta.heading': 'Ready to Build Something That Lasts?',
    'cta.sub': "Let's talk about your business goals and how we can help you reach them.",
    'cta.primary': 'Start a Conversation',
    'cta.secondary': 'See Our Services',

    // Contact
    'contact.heading': 'Get in Touch',
    'contact.sub': 'Whether you have a project in mind or just want to learn more, we\'d love to hear from you.',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.location': 'Location',
    'contact.info.follow': 'Follow Us',

    // Footer
    'footer.tagline': 'Digital excellence for Ethiopian businesses.',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow Us',
    'footer.copyright': '© 2025 Kal Digitals. All rights reserved.',
  },

  ti: {
    // Nav
    'nav.home': 'ቤት',
    'nav.services': 'ኣገልግሎታት',
    'nav.about': 'ብዛዕባና',
    'nav.portfolio': 'ስርሓትና',
    'nav.whyUs': 'ስለምንታይ ንሕና',
    'nav.process': 'ሂደት',
    'nav.testimonials': 'ምስክርነታት',
    'nav.contact': 'ርኸቡና',
    'nav.cta': 'ጀምሩ',

    // Hero
    'hero.headline': 'ናይ ኢትዮጵያ ናይ ዲጂታል ዓለም ወኪልኩም',
    'hero.sub': 'ኣብ መቐለን ኣብ ኢትዮጵያን ዘሎ ትካላት ኣብ ዲጂታል ምህርቲ፣ ምዕባለ ፣ ማርኬቲንግ ኣቢልና ንሕግዞም።',
    'hero.cta.primary': 'ፕሮጀክት ጀምሩ',
    'hero.cta.secondary': 'ስርሓትና ርኣዩ',

    // Metrics
    'metrics.businesses': 'ዝተሕጉዙ ትካላት',
    'metrics.experience': 'ዓመታት ልምዲ',
    'metrics.projects': 'ዝተወጸዑ ፕሮጀክታት',
    'metrics.services': 'ዋና ኣገልግሎታት',

    // Services
    'services.heading': 'ስርሓትና',
    'services.sub': 'ናይ ኢትዮጵያ ትካላት ኣብ ዲጂታል ዓለም ንምዕባለ ዝዓለሙ ኣገልግሎታት።',
    'services.design.title': 'ዲዛይን',
    'services.design.desc': 'ናትካ ብራንድ ዘንጸባርቕ ሱፍ ኢድ ዘለዎ ዲዛይን።',
    'services.development.title': 'ወብ ምስራሕ',
    'services.development.desc': 'ዘዛምድ፣ ቀሊልን ዘደክምን ዘይኮነ ወብሳይትን ኣፕሊኬሽናት።',
    'services.marketing.title': 'ዲጂታል ማርኬቲንግ',
    'services.marketing.desc': 'ንቕሓት ባህሪ ዘለዎ ካምፓኝ ቅርጺ።',
    'services.branding.title': 'ምልክት ትካሊ',
    'services.branding.desc': 'ናይ ዕዮ ጋህዲ ዝገልጽ ሎጎ፣ ስርዓት ሕብሪ፣ ራኢ።',
    'services.content.title': 'ምፍጣር ትሕዝቶ',
    'services.content.desc': 'ፎቶ፣ ጽሑፍ፣ ሚዲያ ዘፍቅር ዘቕርቡ ሓሳባት።',
    'services.social.title': 'ናይ ሶሻል ሚዲያ ስትራቴጂ',
    'services.social.desc': 'ቀጻሊ ሶሻል ሚዲያ ምርኮሳ ምስ ስትራቴጂ ሕቶን ቲሙን።',

    // About
    'about.heading': 'ብዛዕባና',
    'about.sub': 'ካብ መቐለ ዝወፈረ ዲጂታል ኤጀንሲ ናብ ዓለማዊ ደረጃ።',
    'about.p1': 'ካል ዲጂታልስ ምስ ሓንቲ ሓሳብ ጀሚሩ፡ ናይ ኢትዮጵያ ትካላት ናይ ዓለም ደረጃ ዘለዎ ዲጂታል ስርሒ ክረኽቡ ኣለዎም።',
    'about.p2': 'ሎሚ ምስ ተሸርቶ፣ ኤስኤምኢን ዕብየት ዘለዎ ትካላት ኣብ ትግራይን ኢትዮጵያን ንሰርሕ።',
    'about.mission.label': 'ዕላማና',
    'about.mission.text': 'ናብ ዓለም ደረጃ ዝበጽሕ ዲጂታል ሓሳብን ስትራቴጅን ናብ ኩሉ ናይ ኢትዮጵያ ትካሊ ምቕራብ።',
    'about.vision.label': 'ራኢና',
    'about.vision.text': 'ኣብ ኢትዮጵያ ዝቕጽሉ ዲጂታል ቁጠባ ምሕናጽ።',

    // Portfolio
    'portfolio.heading': 'ስርሓትና',
    'portfolio.sub': 'ካብ ሶሻል ካምፓኝ ክሳዕ ናይ ሙሉእ ብራንድ ምቕያር ዝዓለሙ ፕሮጀክታት።',
    'portfolio.social-campaign.title': 'ናይ ሶሻል ሚዲያ ካምፓኝ',
    'portfolio.social-campaign.desc': 'ናይ ሙሉእ ካምፓኝ ስትራቴጂ ንሓንቲ ናይ መቐለ ናይ ሸቐጥ ትካሊ።',
    'portfolio.web-redesign.title': 'ናይ ወብሳይት ዳግም ዲዛይን',
    'portfolio.web-redesign.desc': 'ምሉእ NameValuePair ናይ ሆቴል ምቅናዕ ዲጂታል ዋንነት።',
    'portfolio.brand-identity.title': 'ናይ ብራንድ ምልክት',
    'portfolio.brand-identity.desc': 'ናይ ሓዲሽ ፊንቴክ ስታርተፕ ምሉእ ምልክት።',
    'portfolio.marketing-strategy.title': 'ናይ ማርኬቲንግ ስትራቴጂ',
    'portfolio.marketing-strategy.desc': 'ሽዱሽተ ወርሒ ናይ ዲጂታል ዕብየት ፕላን ብዝካኣሉ KPIታት።',
    'portfolio.growth-project.title': 'ናይ ዲጂታል ዕብየት ፕሮጀክት',
    'portfolio.growth-project.desc': 'SEO፣ ትሕዝቶ፣ ዝኸፈሉ ሚዲያ ዝሓውስ ስትራቴጂ።',
    'portfolio.view': 'ፕሮጀክት ርኣዩ',

    // Why Us
    'whyUs.heading': 'ስለምንታይ ካል ዲጂታልስ',
    'whyUs.sub': 'ሰሓቢ ቃላት ኣይንብልን። ቅን፣ ዝሰልጠነን ዘቕንዕን ስርሒ ንህብ።',
    'whyUs.pricing.title': 'ንጹር ዋጋ',
    'whyUs.pricing.desc': 'ሕቡእ ወጻኢ፣ ናይ መወዳእታ ናይ ዋጋ መሸጠ ዘለዎ መስርዕ ዘሎ ዋጋ።',
    'whyUs.clientFirst.title': 'ዓሚልን ቀዳምነቱ',
    'whyUs.clientFirst.desc': 'ናትካ ዕላማ ኩሉ ውሳኔ ይምርሕ። ቅድሚ ምዲዛይን ንሰምዕ፡ ካብ ርእይቶኻ ድማ ንቕይር።',
    'whyUs.localUnderstanding.title': 'ዓሚቕ ናይ ከባቢ ፍልጠት',
    'whyUs.localUnderstanding.desc': 'ናይ ኢትዮጵያ ሸቐጥ ካብ ውሽጢ ንሉሕ።',
    'whyUs.creativeThinking.title': 'ናይ ፍጠሪ ትጉሃት',
    'whyUs.creativeThinking.desc': 'ዕቑር ስርሒን ስትራቴጂ ሓሳብን ኣሕዊስና ናብ ኩሉ ፕሮጀክት።',
    'whyUs.reliableDelivery.title': 'ኣብ ግዜ ምብጻሕ',
    'whyUs.reliableDelivery.desc': 'መዓልቲ ዕጸፋ ሕጊ ኣይኮነን። ዝካኣሉ ኣሃዙ ብምሃብ ክነኽብሮ።',
    'whyUs.measurableResults.title': 'ዝካኣሉ ውጽኢታት',
    'whyUs.measurableResults.desc': 'ዕላማ ቅድሚ ምሓዝ ንቕምጦ ኣብ መወዳእታ ድማ ቅን ዝኾነ ጸብጻብ ንህብ።',

    // Process
    'process.heading': 'ስርሒ ሂደትና',
    'process.sub': 'ሓደ ንጹር ሽዱሽተ ሳዕ ዝቕጽሉ ሂደት ኣብ ዝኾነ ደረጃ ዝሕብሩ።',
    'process.discover.title': 'ምርካብ',
    'process.discover.desc': 'ናትካ ትካሊ፣ ዕዳጋ፣ ዕላማ ምልላይ።',
    'process.strategy.title': 'ስትራቴጂ',
    'process.strategy.desc': 'ንጹር ፕላን ምፍጣር፡ ቻናሎ፣ ግዜ፣ ምርካቢ፣ ውጽኢት ምዕቃብ።',
    'process.design.title': 'ዲዛይን',
    'process.design.desc': 'ምስሊ ሓሳብ ምፍጣርን ምዕቃብን ክሳዕ ትቕሰን።',
    'process.build.title': 'ምህናጽ',
    'process.build.desc': 'ምዕባለ ወይ ዳኛ ምምዕባሊ ኣብ ጽቡቕ ደረጃ ክፍሊ ዝቛጸር።',
    'process.launch.title': 'ምጅማር',
    'process.launch.desc': 'ምሉእ ምርመራ ምስ ምትካኣ ምሉእ ደገፍ።',
    'process.optimize.title': 'ምምሕያሽ',
    'process.optimize.desc': 'ቀጻሊ ምርኮሳ፣ ጸብጻብ፣ ምምሕያሽ ─ ውጽኢት ድሕሪ ውጽኢት።',

    // Testimonials
    'testimonials.heading': 'ናይ ዓሚሎ ቃላት',
    'testimonials.sub': 'ካብ ዝሰርሕናሎም ትካላት ኣቕሪቡ ሓቀኛ ርእይቶ።',
    'testimonials.hiwot.name': 'ሂወት ብርሃነ',
    'testimonials.hiwot.role': 'ዝወነነት፣ ናይ መቐለ ቡቲክ',
    'testimonials.hiwot.text': 'ካል ዲጂታልስ ናይ ዲጂታል ምህርቲ ዳግም ዲዛይን ጌሩ። ኣብ ክልተ ወርሒ ናይ ደምበ ሕቶ ብዕጽፊ ወሲኹ።',
    'testimonials.dawit.name': 'ዳዊት ተስፋዬ',
    'testimonials.dawit.role': 'መስራቲ፣ ቴክስታርት ኢትዮጵያ',
    'testimonials.dawit.text': 'ዘምሰሎ ናይ ብራንድ ምልክት ሂቦምና። ሂደት ዕዉት፣ ውጽኢት ደሃይ ሓሊፉ።',
    'testimonials.meron.name': 'ሜሮን ገብሬሚካኤል',
    'testimonials.meron.role': 'ዳይሬክተር፣ ናይ ትግራይ ትምህርቲ ሃብ',
    'testimonials.meron.text': 'ናይ ሶሻል ሚዲያ ስትራቴጂ ዘደናጕዕ ምዕባለ ሂቡ። ካብ 400 ሙዕቡያን ናብ 12,000 ኣዕቢዩ።',
    'testimonials.yohannes.name': 'ዮሃንስ ኣብርሃ',
    'testimonials.yohannes.role': 'ፕረዚደንት፣ ኣብርሃ ኢምፖርትስ',
    'testimonials.yohannes.text': 'ዘምስሎ ቅንዕና ዘደንቕ ዩ። ዝሰርሕ ዝኸዓወን ዘይሰርሕ ዝካዓወን ሓቢሮምና ─ ሓቆም ወጺኦም።',

    // CTA
    'cta.heading': 'ዘቕንዕ ዝኾነ ምህናጽ ምጅማርዶ ትደሊ?',
    'cta.sub': 'ብዛዕባ ዕላማታት ትካልካ ክንዛተ ኣሎና።',
    'cta.primary': 'ወዲሱ ርኸቡና',
    'cta.secondary': 'ኣገልግሎታት ርኣዩ',

    // Contact
    'contact.heading': 'ርኸቡና',
    'contact.sub': 'ፕሮጀክት ዘለካ ወይ ዝያዳ ክትፈልጥ ምስ ትደሊ ንሕጉስ ኢና።',
    'contact.form.name': 'ስምካ',
    'contact.form.email': 'ኢሜይልካ',
    'contact.form.subject': 'ኣርእስቲ',
    'contact.form.message': 'መልእኽትኻ',
    'contact.form.send': 'ሰዱ',
    'contact.info.phone': 'ቴሌፎን',
    'contact.info.email': 'ኢሜይል',
    'contact.info.location': 'ቦታ',
    'contact.info.follow': 'ተኸተሉና',

    // Footer
    'footer.tagline': 'ንናይ ኢትዮጵያ ትካላት ዲጂታል ምሉእ.',
    'footer.links': 'ቀልጠፍ ጠቋሚ',
    'footer.contact': 'ርኸቡና',
    'footer.follow': 'ተኸተሉና',
    'footer.copyright': '© 2025 ካል ዲጂታልስ። ኩሉ መሰል ተሓዙ።',
  },

  am: {
    // Nav
    'nav.home': 'ዋና ገጽ',
    'nav.services': 'አገልግሎቶች',
    'nav.about': 'ስለ እኛ',
    'nav.portfolio': 'ሥራዎቻቸን',
    'nav.whyUs': 'ለምን እኛ',
    'nav.process': 'ሂደት',
    'nav.testimonials': 'ምስክርነቶች',
    'nav.contact': 'ያግኙን',
    'nav.cta': 'ጀምር',

    // Hero
    'hero.headline': 'የኢትዮጵያ ብራንዶችን ወደ ዲጂታል ምርጌ ማብቃት',
    'hero.sub': 'በመቀለ እና በኢትዮጵያ ያሉ ድርጅቶች ዲዛይን፣ ልማት፣ እና ማርኬቲንግ አማካይነት ቀልጥፈው ዲጂታል ዓለምን እንዲቆጣጠሩ እናግዛቸዋለን።',
    'hero.cta.primary': 'ፕሮጀክት ጀምር',
    'hero.cta.secondary': 'ሥራዎቻቸንን እይ',

    // Metrics
    'metrics.businesses': 'የተደገፉ አካባቢ ድርጅቶች',
    'metrics.experience': 'ዓመታት ልምድ',
    'metrics.projects': 'የተጠናቀቁ ፕሮጀክቶች',
    'metrics.services': 'ዋና አገልግሎት ዘርፎች',

    // Services
    'services.heading': 'ምን እናደርጋለን',
    'services.sub': 'የኢትዮጵያ ድርጅቶችን ዲጂታሉን ዓለም ለማሸነፍ የተቀረጹ አገልግሎቶች።',
    'services.design.title': 'UI/UX ዲዛይን',
    'services.design.desc': 'የእርስዎን ብራንድ የሚያሳይ፣ ለተጠቃሚዎ የሚሠራ ቆንጆ ዲዛይን።',
    'services.development.title': 'ድR ልማት',
    'services.development.desc': 'ፈጣን፣ ተደራሽ፣ ዘመናዊ ቴክኖሎጂ ያለው ድR ሳይቶችና አፕሊኬሽኖች።',
    'services.marketing.title': 'ዲጂታል ማርኬቲንግ',
    'services.marketing.desc': 'ትክክለኛ ሰዎችን በትክክለኛ ጊዜ የሚደርሱ ዘመቻዎች።',
    'services.branding.title': 'የብራንድ ማንነት',
    'services.branding.desc': 'ሎጎ፣ የቀለም ሥርዓት፣ ድርጅትህ የሚለይበት ምስላዊ ቋንቋ።',
    'services.content.title': 'ይዘት ፍጠር',
    'services.content.desc': 'ፎቶ፣ ጽሑፍ፣ ሚዲያ — ታሪኩን ለሰዎች የሚያቀርብ።',
    'services.social.title': 'የማህበራዊ ሚዲያ ስትራቴጂ',
    'services.social.desc': 'ቀጣይ ማህበራዊ ሚዲያ ኅልውና ምስ ስትራቴጂ፣ ቅደም ተከተልና ማህበረሰብ ተሳትፎ።',

    // About
    'about.heading': 'ስለ እኛ',
    'about.sub': 'ከመቀለ ተነስቶ ዓለምን ለማሸነፍ የተቋቋመ ዲጂታል ኤጀንሲ።',
    'about.p1': 'ካል ዲጂታልስ ቀላል እምነት ይዞ ተቋቋመ፡ የኢትዮጵያ ድርጅቶች ዓለም አቀፍ ምርጥ ዲጂታልን ሥራ ማግኘት አለባቸው።',
    'about.p2': 'ዛሬ ካል ዲጂታልስ ከትግራይ እና ኢትዮጵያ ኢ-ንግዶች ጋር ዓለምን ሳይቃረን ዲዛይን፣ ልማት፣ ማርኬቲንግ ይሰራል።',
    'about.mission.label': 'ተልዕኮ',
    'about.mission.text': 'ለኢትዮጵያ ድርጅቶች ዓለምን ሳይቃረን ዲጂታልን መሣሪያዎችን ማቅረብ — ምንም ያህል ቢሆኑ።',
    'about.vision.label': 'ራዕይ',
    'about.vision.text': 'ኢትዮጵያ ውስጥ ዳዴ የሚደርግ ዲጂታልን ኢኮኖሚ ማቋቋም።',

    // Portfolio
    'portfolio.heading': 'ምርጥ ሥራዎቻቸን',
    'portfolio.sub': 'ከማህበራዊ ዘመቻ ጀምሮ እስከ ሙሉ ብራንድ ለውጥ። ፕሮጀክቶቻቸን።',
    'portfolio.social-campaign.title': 'ማህበራዊ ሚዲያ ዘመቻ',
    'portfolio.social-campaign.desc': 'ለአንድ ምርት ሙሉ ዘመቻ ስትራቴጂ ለሜቀለ አካባቢ ድርጅት።',
    'portfolio.web-redesign.title': 'ድR ሳይት ማደስ',
    'portfolio.web-redesign.desc': 'ሆቴሉ ዲጂታልን ዓለምን ያደሱት ሙሉ ዲዛይን።',
    'portfolio.brand-identity.title': 'የብራንድ ማንነት',
    'portfolio.brand-identity.desc': 'ለአዲስ ፊን-ቴክ ስታርተፕ ሙሉ ምስላዊ ማንነት። ',
    'portfolio.marketing-strategy.title': 'ማርኬቲንግ ስትራቴጂ',
    'portfolio.marketing-strategy.desc': 'ስድስት ወር ዲጂታልን ዕድገት ፕላን ለትምህርት ቤት።',
    'portfolio.growth-project.title': 'ዲጂታልን ዕድገት ፕሮጀክት',
    'portfolio.growth-project.desc': 'SEO ፣ ይዘት፣ ዲጂታልን ሞዴር ስትራቴጂ ለጤናቤቱ።',
    'portfolio.view': 'ፕሮጀክቱን ተመልከት',

    // Why Us
    'whyUs.heading': 'ለምን ካል ዲጂታልስ',
    'whyUs.sub': 'አስደናቂ ቃላቶን አንናገርም። ቅን፣ ጥንካሬ ያለው ሥራ እናቀርባለን።',
    'whyUs.pricing.title': 'ግልፅ ዋጋ',
    'whyUs.pricing.desc': 'ሸሸጋ ወጪ፣ ያልተጠበቀ ክፍያ የለም። ምን እንደሚከፈሉ ያውቃሉ።',
    'whyUs.clientFirst.title': 'ደንበኛ ቀዳሚ',
    'whyUs.clientFirst.desc': 'ዓላማዎ ሁሉ ውሳኔ ይመራናል። ዲዛይን ሳናደርግ እናዳምጣለን።',
    'whyUs.localUnderstanding.title': 'ጥልቅ አካባቢ እውቀት',
    'whyUs.localUnderstanding.desc': 'የኢትዮጵያ ገበያ እናውቀዋለን — ከውስጥ።',
    'whyUs.creativeThinking.title': 'ፈጠራዊ ጥልቀት',
    'whyUs.creativeThinking.desc': 'ቆንጆ ሥራ እና ስትራቴጂካዊ አስተሳሰብ አንዳቸው ሌላቸውን አያቀናቅኑም — ሁለቱን አምጣለን።',
    'whyUs.reliableDelivery.title': 'ሁሌ በጊዜ',
    'whyUs.reliableDelivery.desc': 'ቀኖቹ ምክሮቹ አይደሉም። ሀሳቡ ናቸው — ሁሌ ናቸው።',
    'whyUs.measurableResults.title': 'ሊለካ የሚችሉ ውጤቶች',
    'whyUs.measurableResults.desc': 'ዓለሙ ሲጀምሩ ዓላሙን ያዘጋጃሉ ሲጨርሱ ቅን ዘገባ ያቀርባሉ።',

    // Process
    'process.heading': 'እንዴት እንሰራለን',
    'process.sub': 'ንጹር ስድስት ደረጃ ሂደት — ለዚህ ምን ሆነ ሁሌ ንገሩዎት።',
    'process.discover.title': 'ማወቅ',
    'process.discover.desc': 'ድርጅቶን፣ ተደራሽ፣ ዓላሞን ምን ኑሮ ናቸው።',
    'process.strategy.title': 'ስትራቴጂ',
    'process.strategy.desc': 'ንጹር ፕላን ያዘጋጃሉ — ቻናሎቹ፣ ጊዜ ሰሌዳ፣ ምርቶቹ፣ ዓሳ።',
    'process.design.title': 'ዲዛይን',
    'process.design.desc': 'ምስላዊ ሀሳቦቹን ያዘጋጃሉ እስክ ትክክለኛ ሆኑ ድረስ።',
    'process.build.title': 'ምንደቃ',
    'process.build.desc': 'ልማት ወይ ይዘት ምንደቃ ጥሩ ጥራት ባለው ደረጃ።',
    'process.launch.title': 'ሳሽ',
    'process.launch.desc': 'ሙሉ ፈተና ምስ ምፈጣን ሙሉ ድጋፍ።',
    'process.optimize.title': 'ማሻሻል',
    'process.optimize.desc': 'ቀጣይ ክትትል፣ ዘገባ፣ ምሻሻል — ውጤቱ ።',

    // Testimonials
    'testimonials.heading': 'የደምበኛ ድምፆቸ',
    'testimonials.sub': 'ለዚህ ሀቀኛ አስተያዩ የአብረን ከሠርነው ድርጅቶቹ።',
    'testimonials.hiwot.name': 'ሂወት ብርሃነ',
    'testimonials.hiwot.role': 'ባለቤት፣ ሜቀለ ቡቲክ',
    'testimonials.hiwot.text': 'ካልዲጂታልስ ሙሉ ዲጂታልን ዓለምን አደሰ። ሁለት ወር በኋላ ጥያቄዎቻቸን ሁለት እጥፍ ሆኑ።',
    'testimonials.dawit.name': 'ዳዊት ተስፋዬ',
    'testimonials.dawit.role': 'መሥራቂ፣ ቴክስታርት ኢትዮጵያ',
    'testimonials.dawit.text': 'ሙሉ የሆነ ብራንድ ማንነት ሰጡን። ሂደቱ ዕዉት ነበር ውጤቱ ፍቅር ያዘ ።',
    'testimonials.meron.name': 'ሜሮን ገብረ-ሚካኤል',
    'testimonials.meron.role': 'ዳሬክቶር፣ ትግራይ ትምህርት ሃብ',
    'testimonials.meron.text': 'ማህበራዊ ሚዲያ ስትራቴጂ አስደናቂ ዕድገት ሰጠ። ከ400 ደምጪዎቹ ወደ 12,000 አቆ ።',
    'testimonials.yohannes.name': 'ዮሐንስ ኣብርሃ',
    'testimonials.yohannes.role': 'ፕሬዝዳንት፣ ኣብርሃ ኢምፖርትስ',
    'testimonials.yohannes.text': 'ቅንነቱ ይደነቃልናል። ምን ሠርቶ ምን ሊሠራ እንደሚችል ነግሩን — ሀቀኛ ቡድን።',

    // CTA
    'cta.heading': 'ዘላቂ ሆነ ነገር ለመሥራት ዝግጁ ነዎት?',
    'cta.sub': 'ስለ ዕቅዶዎ ልናወራ ዝግጁ ነን።',
    'cta.primary': 'ውይይቱን ጀምር',
    'cta.secondary': 'አገልግሎቶቻቸን ዩ',

    // Contact
    'contact.heading': 'ያግኙን',
    'contact.sub': 'ፕሮጀክት ካለዎ ወይ የበለጠ ለማወቅ ሲፈልጉ ሁሌ ደስ ይለናል።',
    'contact.form.name': 'ስምዎ',
    'contact.form.email': 'ኢሜሉ',
    'contact.form.subject': 'ርዕስ',
    'contact.form.message': 'መልዕክቶ',
    'contact.form.send': 'ላክ',
    'contact.info.phone': 'ስ',
    'contact.info.email': 'ኢሜ',
    'contact.info.location': 'አ',
    'contact.info.follow': 'ተከተሉን',

    // Footer
    'footer.tagline': 'ለኢትዮጵያ ድርጅቶቸ ዲጂታልን ምርጌ።',
    'footer.links': 'ፈጣን ሊንኮቸ',
    'footer.contact': 'ያግኙን',
    'footer.follow': 'ተከተሉን',
    'footer.copyright': '© 2025 ካል ዲጂታልስ። ሁሉ መብት ተጠብቋል።',
  },
};

export function getTranslation(lang: Language, key: string): string {
  return translations[lang][key] ?? translations['en'][key] ?? key;
}
