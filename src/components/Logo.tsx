import { clsx } from 'clsx';

export default function Logo({ className, variant = 'dark' }: { className?: string; variant?: 'dark' | 'light' }) {
  const stroke = variant === 'light' ? '#F2E8CF' : '#1F2A2E';
  const fill = variant === 'light' ? '#3B7A57' : '#F2E8CF';

  return (
    <svg
      className={clsx('shrink-0', className)}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Patas Navarricas"
    >
      <circle cx="32" cy="32" r="30" fill={fill} stroke={stroke} strokeWidth="4" />
      <path
        d="M16 30c0-5 4-9 9-9 3 0 5 2 7 4 2-2 4-4 7-4 5 0 9 4 9 9 0 6-6 13-16 19-10-6-16-13-16-19Z"
        fill={stroke}
      />
      <circle cx="22" cy="24" r="4" fill={fill} />
      <circle cx="42" cy="24" r="4" fill={fill} />
      <circle cx="32" cy="18" r="3" fill={fill} />
    </svg>
  );
}
