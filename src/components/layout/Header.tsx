'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { NAV_LINKS, REGION_DATA } from '@/lib/constants';
import { LANGUAGES } from '@/lib/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [regionMenuOpen, setRegionMenuOpen] = useState(false);
  const { language, setLanguage, translations } = useLanguage();
  const { nav, ui } = translations;
  const activeLanguageLabel = LANGUAGES.find((lang) => lang.code === language)?.label ?? language.toUpperCase();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" width={160} height={42} alt="Huellas del Norte" priority />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary-600">
              {nav[link.key]}
            </a>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setRegionMenuOpen(true)}
            onMouseLeave={() => setRegionMenuOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-primary-600">
              {nav.regions}
              <span aria-hidden>▾</span>
            </button>
            {regionMenuOpen && (
              <div className="absolute right-0 top-full mt-2 min-w-[280px] rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-card">
                <p className="mb-3 text-xs uppercase tracking-wide text-slate-500">Norte</p>
                <div className="grid grid-cols-2 gap-3">
                  {REGION_DATA.filter((region) => region.slug !== 'norte').map((region) => (
                    <Link
                      key={region.slug}
                      href={`/${region.slug}`}
                      className="rounded-xl border border-slate-100 p-3 text-sm hover:border-primary-200 hover:bg-primary-50"
                      onClick={() => setRegionMenuOpen(false)}
                    >
                      <p className="font-semibold capitalize">{region.name}</p>
                      <p className="text-xs text-slate-500">{region.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide hover:border-primary-300 hover:text-primary-600"
              onClick={() => setLanguageMenuOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={languageMenuOpen}
            >
              {activeLanguageLabel}
              <span aria-hidden>▾</span>
            </button>
            {languageMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-32 rounded-2xl border border-slate-200 bg-white p-2 text-sm shadow-card">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLanguageMenuOpen(false);
                    }}
                    className={`w-full rounded-xl px-3 py-2 text-left hover:bg-primary-50 ${
                      language === lang.code ? 'text-primary-600' : 'text-slate-600'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
        <div className="hidden lg:flex">
          <Link
            href="/alta-negocio"
            className="rounded-full bg-primary-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary-600/30"
          >
            {nav.addBusiness}
          </Link>
        </div>
        <button
          className="rounded-full border border-slate-200 p-2 text-slate-700 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3 text-sm text-slate-700">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="rounded-lg px-3 py-2 hover:bg-slate-100">
                {nav[link.key]}
              </a>
            ))}
            {REGION_DATA.filter((region) => region.slug !== 'norte').map((region) => (
              <Link key={region.slug} href={`/${region.slug}`} className="rounded-lg px-3 py-2 hover:bg-slate-100">
                {region.name}
              </Link>
            ))}
            <div className="rounded-lg border border-slate-200 p-3">
              <p className="text-xs uppercase tracking-wide text-slate-500">{ui.languageLabel}</p>
              <div className="mt-2 flex gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex-1 rounded-full px-3 py-2 text-sm font-semibold ${
                      language === lang.code
                        ? 'bg-primary-600 text-white'
                        : 'bg-slate-100 text-slate-700'
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
