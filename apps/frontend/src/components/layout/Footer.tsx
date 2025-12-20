'use client';

import Image from 'next/image';
import Link from 'next/link';
import { REGION_DATA, CATEGORIES, type CategorySlug } from '@/lib/constants';
import { useLanguage } from '@/contexts/LanguageContext';

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/huellasdelnorte' },
  { label: 'YouTube', href: 'https://youtube.com/@huellasdelnorte' },
  { label: 'TikTok', href: 'https://tiktok.com/@huellasdelnorte' },
  { label: 'Newsletter', href: '/newsletter' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const {
    translations: {
      nav,
      footer,
      home: { categoriesSection },
    },
  } = useLanguage();

  return (
    <footer className="bg-neutral-900 text-neutral-100" role="contentinfo">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="space-y-4">
            <Image src="/images/logo_huellas.png" width={200} height={80} alt="Huellas del Norte - Logo alternativo" />
            <p className="text-sm text-neutral-400">{footer.description}</p>
          </div>
          <nav aria-labelledby="footer-regions">
            <p id="footer-regions" className="text-xs uppercase tracking-wide text-neutral-400">{nav.regions}</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              {REGION_DATA.filter((region) => region.slug !== 'norte').map((region) => (
                <li key={region.slug}>
                  <Link href={`/${region.slug}`} className="hover:text-white transition-colors">
                    {region.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="footer-categories">
            <p id="footer-categories" className="text-xs uppercase tracking-wide text-neutral-400">{nav.categories}</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              {CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link href={`/norte/${category.slug}`} className="hover:text-white transition-colors">
                    {categoriesSection.cards[category.slug as CategorySlug]?.label ?? category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-400">{footer.communityLabel}</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors" rel="noopener noreferrer" target="_blank">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-neutral-500">{footer.legal}</p>
          </div>
        </div>
        <div className="mt-10 border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
          © {currentYear} Huellas del Norte. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
