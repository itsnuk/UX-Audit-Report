import { Finding, QuickWin, ReferenceItem, WireframeSection } from './types';
import { Layout, PenTool, Star, CheckCircle, Settings, Mail } from 'lucide-react';
import React from 'react';

export const FINDINGS: Finding[] = [
  // Critical
  {
    id: 1,
    severity: 'critical',
    section: 'Hero Section',
    title: 'Vague CTA — "Discover" doesn\'t tell visitors what to do',
    heuristic: 'Visibility of system status / Recognition over recall',
    effort: 'Low',
    impact: 'The single highest-visibility spot on the page wastes its opportunity. Visitors who came to inquire have no obvious path to do so within the first 3 seconds.',
    fix: 'Replace with a large, high-contrast button: "Request a Quote" or "Get a Free Sample." Add a secondary CTA like "Browse Products" below it.'
  },
  {
    id: 2,
    severity: 'critical',
    section: 'Full Page',
    title: 'No inquiry form or contact mechanism anywhere on the homepage',
    heuristic: 'Flexibility and efficiency of use',
    effort: 'Medium',
    impact: 'Every additional click to reach a form loses a percentage of potential leads. B2B buyers comparison-shopping may leave before ever finding the form.',
    fix: 'Add an inline inquiry form in the lower third of the homepage (Name, Email, Product Interest, Message). Alternatively, add a sticky floating "Request Quote" button that stays visible while scrolling.'
  },
  // High
  {
    id: 3,
    severity: 'high',
    section: 'Products Section',
    title: '"LET US KNOW" button is ambiguous — let you know what?',
    heuristic: 'Match between system and real world',
    effort: 'Low',
    impact: 'The Products section is where buyer intent is strongest. An unclear CTA at this exact moment kills conversions.',
    fix: 'Rename to something specific: "Request Product Specs" or "See Full Catalog." Make the button larger and pair it with a one-line explanation of what happens next.'
  },
  {
    id: 4,
    severity: 'high',
    section: 'Products Section',
    title: 'Only 3 categories shown — no specs, no use cases, no drill-down for 10,000+ SKUs',
    heuristic: 'Flexibility and efficiency of use',
    effort: 'Medium',
    impact: 'Architects need thickness & light transmission specs, buyers need pricing tiers, distributors need product range info. None of these personas can self-serve.',
    fix: 'Under each category card, add: a 1-line description (e.g., "Crystal-clear sheets from 2mm–100mm"), 2–3 key specs, and a clear "View range →" link. Consider a product finder: "Choose by application: signage / architecture / industrial."'
  },
  {
    id: 5,
    severity: 'high',
    section: 'Key Numbers',
    title: 'Strong social proof dead-ends — no CTA after trust is built',
    heuristic: 'User control and freedom',
    effort: 'Low',
    impact: 'This section successfully builds credibility, then wastes it. A CTA here would convert visitors who are already impressed.',
    fix: 'Add a CTA at the bottom: "Join 55+ countries — get a quote today" or "See why industry leaders choose Alfaplas."'
  },
  // Medium
  {
    id: 6,
    severity: 'medium',
    section: 'Sustainability',
    title: 'Certification logos buried near the footer — procurement buyers need them early',
    heuristic: 'Recognition over recall',
    effort: 'Low',
    fix: 'Move certification badges into a horizontal trust bar directly below the hero. Common B2B pattern: a strip of ISO, quality, and environmental logos. Limit to 3–4 badges to avoid clutter.'
  },
  {
    id: 7,
    severity: 'medium',
    section: 'Tagline',
    title: 'Corporate language talks about Alfaplas, not the buyer\'s problem',
    heuristic: 'Match between system and real world',
    effort: 'Medium',
    fix: 'Rewrite to be buyer-focused. Example: "Cast acrylic sheets for architecture, signage, and industrial applications — manufactured to spec, shipped to 55+ countries."'
  },
  {
    id: 8,
    severity: 'medium',
    section: 'Vision & Mission',
    title: 'Takes prime homepage real estate — most B2B buyers skip mission statements',
    heuristic: 'Aesthetic and minimalist design',
    effort: 'Low',
    fix: 'Move to the About page. Replace this space with customer testimonials or a brief case study carousel showing real projects using Alfaplas acrylic.'
  },
  {
    id: 9,
    severity: 'medium',
    section: 'Full Page',
    title: 'No customer testimonials, case studies, or client logos anywhere',
    heuristic: 'Trust & credibility (core B2B principle)',
    effort: 'Low', // Or high depending on assets
    fix: 'If testimonials exist: Add 2–3 short text quotes with client name, role, and company. Focus on quality, reliability, or delivery speed. If not: Start with a horizontal row of client/partner logos as a lightweight trust signal.'
  },
  {
    id: 12,
    severity: 'medium',
    section: 'Full Page',
    title: 'No sticky navigation or persistent CTA on this long-scroll page',
    heuristic: 'User control and freedom',
    effort: 'Medium',
    fix: 'Add a sticky header with a "Request Quote" button that remains visible at all times, or a floating action button (FAB) in the bottom-right corner.'
  },
  // Low
  {
    id: 10,
    severity: 'low',
    section: 'Navigation',
    title: '"SKU\'s" is internal jargon — buyers look for "Catalog" or "Products"',
    heuristic: 'Match between system and real world',
    effort: 'Low',
    fix: 'Rename to "Product Catalog" or simply "Catalog." Use language your audience uses.'
  },
  {
    id: 11,
    severity: 'low',
    section: 'Factory',
    title: 'Showcases capability but doesn\'t connect to a lead action',
    heuristic: 'Aesthetic and minimalist design',
    effort: 'Low',
    fix: 'Add a CTA: "Need custom manufacturing? Tell us about your project" linking to the inquiry form.'
  }
];

export const WIREFRAME_SECTIONS: WireframeSection[] = [
  {
    name: 'Navigation',
    type: 'nav',
    content: "ALFAPLAS   SKU's   Services   Articles   Contact",
    markers: [{ id: 10, severity: 'medium' }]
  },
  {
    name: 'Hero Section',
    type: 'hero',
    content: "Leader in Cast Acrylic",
    markers: [{ id: 1, severity: 'critical' }, { id: 7, severity: 'medium' }]
  },
  {
    name: 'Our Products',
    type: 'products',
    content: "Transparent | Opaque | LED",
    markers: [{ id: 3, severity: 'high' }, { id: 4, severity: 'high' }]
  },
  {
    name: 'Vision & Mission',
    type: 'vision',
    content: "Vision & Mission",
    markers: [{ id: 8, severity: 'medium' }]
  },
  {
    name: 'Key Numbers',
    type: 'numbers',
    content: "25 yrs  10K SKUs  55+ countries",
    markers: [{ id: 5, severity: 'high' }]
  },
  {
    name: 'Factory',
    type: 'factory',
    content: "Factory",
    markers: [{ id: 11, severity: 'low' }]
  },
  {
    name: 'Sustainability',
    type: 'sustainability',
    content: "Certs & Badges",
    markers: [{ id: 6, severity: 'medium' }]
  },
  {
    name: 'Full Page Issues',
    type: 'full',
    content: "",
    markers: [{ id: 2, severity: 'critical' }, { id: 9, severity: 'medium' }, { id: 12, severity: 'medium' }]
  }
];

export const REFERENCES: ReferenceItem[] = [
  {
    title: 'Daikin Applied',
    description: 'Manufacturing site that nails the hero: clear product carousel, trust badges directly below the fold, and strong CTAs above the fold. Study how they balance corporate authority with accessibility.',
    fixes: [1, 6],
    icon: <Layout className="w-12 h-12 opacity-30 text-blue-300" />,
    bgGradient: 'bg-gradient-to-br from-slate-800 to-slate-700',
    iconColor: 'text-blue-400'
  },
  {
    title: 'Mark3D',
    description: '"Request a demo part" CTA challenges prospects to test them for free. Modular layout with clearly labeled sections makes the buyer\'s journey effortless. Great model for an inline inquiry form placement.',
    fixes: [2, 3],
    icon: <PenTool className="w-12 h-12 opacity-30 text-emerald-300" />,
    bgGradient: 'bg-gradient-to-br from-slate-900 to-slate-800',
    iconColor: 'text-emerald-400'
  },
  {
    title: 'Grainger',
    description: 'Industrial distributor with powerful search and filtering across massive product ranges. Detailed specs, real-time stock info, and custom pricing. Model for how to handle 10,000+ SKUs without overwhelming visitors.',
    fixes: [4],
    icon: <Star className="w-12 h-12 opacity-30 text-amber-300" />,
    bgGradient: 'bg-gradient-to-br from-slate-800 to-slate-700',
    iconColor: 'text-amber-400'
  },
  {
    title: 'BES (British Engineering Services)',
    description: 'Conversion-optimized manufacturing site with strategically placed conversion points throughout. Clear navigation, consistent trust signals, and a design that supports both lead generation and long-term nurturing.',
    fixes: [5, 9],
    icon: <CheckCircle className="w-12 h-12 opacity-30 text-indigo-300" />,
    bgGradient: 'bg-gradient-to-br from-slate-800 to-slate-700',
    iconColor: 'text-indigo-400'
  },
  {
    title: 'FourJaw',
    description: 'Translates a technical manufacturing product into a compelling value proposition. Animated graphics and clear headline copy communicate the core benefit without jargon. Model for rewriting Alfaplas\'s tagline.',
    fixes: [7],
    icon: <Settings className="w-12 h-12 opacity-30 text-orange-300" />,
    bgGradient: 'bg-gradient-to-br from-slate-800 to-slate-700',
    iconColor: 'text-orange-400'
  },
  {
    title: 'Docunet',
    description: 'B2B printing services site with a persistent chat feature for real-time help, clear CTAs, and the option to upload files directly. Shows how a sticky contact mechanism keeps the conversion path always accessible.',
    fixes: [12],
    icon: <Mail className="w-12 h-12 opacity-30 text-pink-300" />,
    bgGradient: 'bg-gradient-to-br from-slate-800 to-slate-900',
    iconColor: 'text-pink-400'
  }
];

export const QUICK_WINS: QuickWin[] = [
  {
    id: '01',
    title: 'Hero CTA -> "Request a Quote"',
    description: 'Large button, high contrast against the acrylic imagery, immediately communicates the next step. Biggest single conversion lever on the page.'
  },
  {
    id: '02',
    title: 'Add inline inquiry form',
    description: 'Simple 4-field form (Name, Email, Product Interest dropdown, Message) placed after the Key Numbers section while trust is high.'
  },
  {
    id: '03',
    title: 'Certification trust bar',
    description: 'Move ISO and quality logos from the footer to a horizontal strip directly below the hero tagline. Limit to 3–4 badges.'
  }
];