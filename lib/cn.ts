/** Tiny className joiner — avoids pulling in clsx for a portfolio. */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
