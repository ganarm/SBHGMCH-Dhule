import { ThemeOption } from './theme.model';

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'navy-care',
    label: 'Navy care',
    description: 'Deep navy with teal accent — modern nursing',
    swatches: ['#0f2d4a', '#0d9488', '#ffffff'],
  },
  {
    id: 'professional-blue',
    label: 'Professional blue',
    description: 'Clinical trust — navy and soft blue',
    swatches: ['#1e3a5f', '#2563eb', '#f5f8fc'],
  },
  {
    id: 'maroon-green',
    label: 'Maroon & green',
    description: 'Burgundy nav with forest green top bar (CHME blend)',
    swatches: ['#7a1a3f', '#1e4d3f', '#c4922a'],
  },
  {
    id: 'classic-maroon',
    label: 'Classic maroon',
    description: 'Maroon & white — burgundy header, nav, and footer',
    swatches: ['#7a1a3f', '#5c1530', '#d4a017'],
  },
  {
    id: 'forest-green',
    label: 'Forest green',
    description: 'CHME society emphasis — green primary',
    swatches: ['#1a4d3e', '#2d6a4f', '#c9a227'],
  },
  {
    id: 'earth-brown',
    label: 'Earth brown & cream',
    description: 'Warm brown with off-white surfaces',
    swatches: ['#5c3d2e', '#b45309', '#faf7f2'],
  },
  {
    id: 'vibrant-orange',
    label: 'Vibrant orange CTA',
    description: 'Dark nav + bold orange buttons (premium “Let’s talk” style)',
    swatches: ['#1e1b2e', '#f97316', '#f8fafc'],
  },
  {
    id: 'saffron-heritage',
    label: 'Saffron & heritage',
    description: 'Maroon institute colors with saffron-orange actions',
    swatches: ['#6b1736', '#ff7a18', '#fffbf5'],
  },
  {
    id: 'coral-midnight',
    label: 'Coral & midnight',
    description: 'Midnight blue bar with coral-orange highlights',
    swatches: ['#0f172a', '#ff6b4a', '#f1f5f9'],
  },
  {
    id: 'royal-plum-gold',
    label: 'Royal plum & gold',
    description: 'Deep plum with rich gold CTAs',
    swatches: ['#3b0764', '#f59e0b', '#faf8ff'],
  },
  {
    id: 'emerald-gold',
    label: 'Emerald & gold',
    description: 'Prestige green with metallic gold buttons',
    swatches: ['#064e3b', '#eab308', '#f0fdf4'],
  },
  {
    id: 'wine-copper',
    label: 'Wine & copper',
    description: 'Wine maroon with warm copper-orange CTAs',
    swatches: ['#4a1525', '#ea580c', '#fdf8f6'],
  },
  {
    id: 'teal-sunset',
    label: 'Teal & sunset',
    description: 'Healthcare teal with sunset orange accents',
    swatches: ['#134e4a', '#f97316', '#f8fafc'],
  },
  {
    id: 'rose-charcoal',
    label: 'Rose & charcoal',
    description: 'Modern charcoal nav with rose-coral CTAs',
    swatches: ['#27272a', '#fb7185', '#fafafa'],
  },
];

export const DEFAULT_THEME_ID = 'navy-care';
