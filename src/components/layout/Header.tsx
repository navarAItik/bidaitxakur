'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { NAV_LINKS, REGION_DATA } from '@/lib/constants';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" width={160} height={42} alt="Huellas del Norte" priority />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary-600">
              {link.label}
            </a>
          ))}
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-primary-600">
              Regiones
              <span aria-hidden>▾</span>
            </button>
            <div className="invisible absolute right-0 top-full mt-2 min-w-[280px] rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-card opacity-0 transition group-hover:visible group-hover:opacity-100">
              <p className="mb-3 text-xs uppercase tracking-wide text-slate-500">Norte</p>
              <div className="grid grid-cols-2 gap-3">
                {REGION_DATA.filter((region) => region.slug !== 'norte').map((region) => (
                  <Link
                    key={region.slug}
                    href={`/${region.slug}`}
                    className="rounded-xl border border-slate-100 p-3 text-sm hover:border-primary-200 hover:bg-primary-50"
                  >
                    <p className="font-semibold capitalize">{region.name}</p>
                    <p className="text-xs text-slate-500">{region.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
        <div className="hidden lg:flex">
          <Link
            href="/alta-negocio"
            className="rounded-full bg-primary-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary-600/30"
          >
            Dar de alta mi negocio
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
                {link.label}
              </a>
            ))}
            {REGION_DATA.filter((region) => region.slug !== 'norte').map((region) => (
              <Link key={region.slug} href={`/${region.slug}`} className="rounded-lg px-3 py-2 hover:bg-slate-100">
                {region.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
