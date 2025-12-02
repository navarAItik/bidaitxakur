import { clsx } from 'clsx';

const sources = {
  dark: '/images/logo-dark.png',
  light: '/images/logo-light.png',
};

export default function Logo({ className, variant = 'dark' }: { className?: string; variant?: 'dark' | 'light' }) {
  const src = sources[variant] ?? sources.dark;

  return (
    <img
      className={clsx('shrink-0 object-contain', className)}
      src={src}
      alt="Patas Navarricas"
      loading="lazy"
      decoding="async"
    />
  );
}
