export const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Enterprise', href: '/enterprise' },
  { label: 'Pricing', href: '/pricing' },
]

export const footerLinks = {
  company: [
    { label: 'Features', href: '/features' },
    { label: 'Enterprise', href: '/enterprise' },
  ],
  resources: [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Privacy', href: '#' },
  ],
  legal: [
    { label: 'Terms', href: '#' },
    { label: 'Contact', href: '#' },
  ]
}

export const homeData = {
  hero: {
    headline: 'Transform every card into your next opportunity.',
    highlight: 'opportunity.',
    subheadline: 'Cinematic digitisation meets enterprise-grade CRM integration. ScanCard uses advanced AI to instantly turn physical business cards into actionable intelligence.',
    primaryCta: 'Get Started',
    secondaryCta: 'Watch Video',
    image: '/images/hero_scan_card_1782462073607.png'
  },
  problem: {
    headline: 'The end of forgotten connections.',
    description: 'Stacks of paper cards sitting on desks represent lost revenue and missed partnerships. Stop manually entering data and start building relationships.'
  },
  solution: {
    videoThumbnail: '/images/how_it_works_1782462083494.png'
  },
  features: [
    {
      icon: 'center_focus_strong',
      title: 'Precision OCR',
      description: 'Industry-leading optical character recognition boasting 99.9% accuracy. Reads obscure fonts, multi-lingual text, and complex card layouts instantly.',
      color: 'bg-primary-container text-on-primary-container'
    },
    {
      icon: 'auto_awesome',
      title: 'Smart Categorization',
      description: 'AI automatically tags and sorts contacts by industry, role, and location based on context clues.',
      color: 'bg-secondary-container text-on-secondary-container',
      tags: ['Fintech', 'CEO', 'London']
    },
    {
      icon: 'insights',
      title: 'Actionable Insights',
      description: 'Turn static data into dynamic leads. ScanCard connects with public professional networks to enrich profiles and suggest the perfect icebreaker for your follow-up.',
      color: 'bg-tertiary-container text-on-tertiary-container'
    }
  ],
  cta: {
    headline: 'Join the future of professional networking.',
    subheadline: 'Stop collecting paper. Start collecting opportunities.',
    buttonText: 'Start Scanning for Free'
  }
}

export const featuresData = {
  hero: {
    headline: 'Intelligence in every scan.',
    subheadline: 'Our advanced AI OCR engine goes beyond simple text recognition. It understands context, structure, and intent, transforming physical cards into actionable digital intelligence instantly.',
    image: '/images/features_ocr_1782462095078.png'
  },
  bento: [
    {
      badge: 'Neural OCR',
      title: 'Flawless extraction.',
      description: 'Our proprietary vision models achieve 99.9% accuracy across 40+ languages, handling exotic fonts, poor lighting, and complex layouts with ease.',
      image: '/images/bento_extraction_1782462106703.png'
    },
    {
      badge: 'Enterprise Grade',
      title: 'Zero-Trust Architecture.',
      description: 'End-to-end AES-256 encryption. Data is processed locally on device whenever possible, ensuring your contacts never leave your control unencrypted.'
    },
    {
      badge: 'Seamless Integration',
      title: 'Direct to Salesforce.',
      description: 'Automated deduplication, field mapping, and activity logging. Watch scanned cards populate your CRM pipeline instantly.',
      image: '/images/bento_crm_1782462119021.png'
    },
    {
      badge: 'Native iOS',
      title: 'Fluid capture.',
      description: 'Designed for one-handed operation at busy conferences. Auto-capture detects the card boundaries and snaps instantly.',
      image: '/images/bento_ios_1782462127909.png'
    }
  ]
}

export const enterpriseData = {
  hero: {
    headline: 'Networking for the modern enterprise.',
    subheadline: 'Deploy seamless contact management across your entire global organization. Uncompromising security meets effortless scalability.'
  },
  securityImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy9J7-fGxr7oUxZ8oB5JMqM74HYzHWCz3FCkrrYRtZMXrfVuHg8O3y1JINveOaERrS8FxL5GFf4wi2y8WterQQ7ONo61uBVCKNrt4KntABAImwE92dWAqS8Q7ykonn4BNlxvRh5veAEJWnNgwNvm6HDVYSN3O-DHl-pE1NK7dHVPuJqx0PFd-CkApkZQMUGp4GD0af0_WYWWHh-6DKxSUl3PiSgkcpvR5NhH-4MsWEzWTj1OhPV2Hb-gF-YYUR9K6S2rQ4RIfG1w'
}

export const pricingData = {
  hero: {
    headline: 'Simple, transparent pricing.',
    subheadline: 'Unlock the full power of ScanCard. Choose the plan that best fits your needs, with no hidden fees.'
  },
  plans: [
    {
      name: 'Monthly',
      description: 'Perfect for short-term projects and flexibility.',
      price: '$9',
      period: '/mo',
      features: [
        'Unlimited business card scans',
        'Secure cloud sync across devices',
        'Export to CSV and CRM integration',
        'Standard email support'
      ]
    },
    {
      name: 'Annual',
      description: 'Save over 50% with a yearly commitment.',
      price: '$49',
      period: '/yr',
      featured: true,
      badge: 'Best Value',
      features: [
        'Everything in Monthly, plus:',
        'Significant cost savings',
        'Advanced custom branding options',
        'Priority 24/7 support'
      ]
    }
  ]
}
