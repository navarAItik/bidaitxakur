'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { NAV_LINKS, REGION_DATA } from '@/lib/constants';
import { LANGUAGES } from '@/lib/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [regionMenuOpen, setRegionMenuOpen] = useState(false);
  const { data: session } = useSession();
  const { language, setLanguage, translations } = useLanguage();
  const { nav, ui } = translations;
  const activeLanguageLabel = LANGUAGES.find((lang) => lang.code === language)?.label ?? language.toUpperCase();

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white" role="banner">
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Ir a la página principal">
          <Image
            src="/images/logo_huellas.png"
            width={160}
            height={48}
            alt="Logotipo de Huellas - BidaiTxakur"
            priority
            className="site-logo"
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 lg:flex" role="navigation" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary-600 transition-colors">
              {nav[link.key]}
            </a>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setRegionMenuOpen(true)}
            onMouseLeave={() => setRegionMenuOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-primary-600 transition-colors" aria-haspopup="true" aria-expanded={regionMenuOpen}>
              {nav.regions}
              <span aria-hidden="true">▾</span>
            </button>
            {regionMenuOpen && (
              <div className="absolute right-0 top-full mt-2 min-w-[280px] rounded-2xl border border-neutral-200 bg-white p-4 text-left shadow-card" role="menu">
                <p className="mb-3 text-xs uppercase tracking-wide text-neutral-500">Norte</p>
                <div className="grid grid-cols-2 gap-3">
                  {REGION_DATA.filter((region) => region.slug !== 'norte').map((region) => (
                    <Link
                      key={region.slug}
                      href={`/${region.slug}`}
                      className="rounded-xl border border-neutral-100 p-3 text-sm hover:border-primary-200 hover:bg-primary-50 transition-colors"
                      onClick={() => setRegionMenuOpen(false)}
                      role="menuitem"
                    >
                      <p className="font-semibold capitalize">{region.name}</p>
                      <p className="text-xs text-neutral-500">{region.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className="flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide hover:border-primary-300 hover:text-primary-600 transition-colors"
              onClick={() => setLanguageMenuOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={languageMenuOpen}
              aria-label="Seleccionar idioma"
            >
              {activeLanguageLabel}
              <span aria-hidden="true">▾</span>
            </button>
            {languageMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-32 rounded-2xl border border-neutral-200 bg-white p-2 text-sm shadow-card" role="menu">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLanguageMenuOpen(false);
                    }}
                    className={`w-full rounded-xl px-3 py-2 text-left hover:bg-primary-50 transition-colors ${
                      language === lang.code ? 'text-primary-600' : 'text-neutral-600'
                    }`}
                    role="menuitem"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          {session ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-neutral-700">
                Hola, {session.user?.name || session.user?.email}
              </span>
              <button
                onClick={() => signOut()}
                className="btn-secondary"
              >
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <Link
              href="/auth/signin"
              className="btn-secondary"
            >
              Iniciar Sesión
            </Link>
          )}
          <Link
            href="/alta-negocio"
            className="btn-accent"
          >
            {nav.addBusiness}
          </Link>
        </div>
        <button
          className="rounded-full border border-neutral-200 p-2 text-neutral-700 lg:hidden hover:bg-neutral-50 transition-colors"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menú de navegación"
          aria-expanded={open}
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="border-t border-neutral-200 bg-white px-4 py-4 lg:hidden" role="navigation" aria-label="Menú móvil">
          <div className="flex flex-col gap-3 text-sm text-neutral-700">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="rounded-lg px-3 py-2 hover:bg-neutral-100 transition-colors">
                {nav[link.key]}
              </a>
            ))}
            {REGION_DATA.filter((region) => region.slug !== 'norte').map((region) => (
              <Link key={region.slug} href={`/${region.slug}`} className="rounded-lg px-3 py-2 hover:bg-neutral-100 transition-colors">
                {region.name}
              </Link>
            ))}
            {session ? (
              <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-3">
                <span className="text-sm text-neutral-700">
                  Hola, {session.user?.name || session.user?.email}
                </span>
                <button
                  onClick={() => signOut()}
                  className="btn-secondary text-sm"
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <Link
                href="/auth/signin"
                className="block rounded-lg border border-neutral-200 p-3 text-center hover:bg-neutral-50 transition-colors"
              >
                Iniciar Sesión
              </Link>
            )}
            <div className="rounded-lg border border-neutral-200 p-3">
              <p className="text-xs uppercase tracking-wide text-neutral-500">{ui.languageLabel}</p>
              <div className="mt-2 flex gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex-1 rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                      language === lang.code
                        ? 'bg-primary-600 text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
