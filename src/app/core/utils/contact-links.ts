export function telHref(number: string): string {
  return `tel:${number.replace(/[\s-]/g, '')}`;
}
