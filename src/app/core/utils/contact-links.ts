import { SiteSettings } from '../models/site.models';

export function telHref(number: string): string {
  return `tel:${number.replace(/[\s-]/g, '')}`;
}

export function whatsappHref(settings: SiteSettings): string {
  const digits = settings.contact.whatsapp.replace(/\D/g, '');
  const text = encodeURIComponent(
    'Hello, I would like to inquire about admissions at Bhonsala Institute of Nursing.',
  );
  return `https://wa.me/${digits}?text=${text}`;
}
