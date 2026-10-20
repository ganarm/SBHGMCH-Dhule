export type ThemeId =
  | 'maroon-green'
  | 'classic-maroon'
  | 'forest-green'
  | 'professional-blue'
  | 'earth-brown'
  | 'navy-care'
  | 'vibrant-orange'
  | 'saffron-heritage'
  | 'coral-midnight'
  | 'royal-plum-gold'
  | 'emerald-gold'
  | 'wine-copper'
  | 'teal-sunset'
  | 'rose-charcoal';

export interface ThemeOption {
  id: ThemeId;
  label: string;
  description: string;
  swatches: [string, string, string];
}
