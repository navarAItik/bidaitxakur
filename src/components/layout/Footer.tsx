import Image from 'next/image';
import Link from 'next/link';
import { REGION_DATA, CATEGORIES } from '@/lib/constants';

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/huellasdelnorte' },
  { label: 'YouTube', href: 'https://youtube.com/@huellasdelnorte' },
  { label: 'TikTok', href: 'https://tiktok.com/@huellasdelnorte' },
  { label: 'Newsletter', href: '/newsletter' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="space-y-4">
            <Image src="/logo-footer.svg" width={200} height={80} alt="Huellas del Norte" />
            <p className="text-sm text-slate-400">
              Tu GPS de seguridad para viajar con perro por el norte de España. Negocios verificados,
              normativa legal y rutas creadas por un equipo que viaja con perro cada semana.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">Regiones</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {REGION_DATA.filter((region) => region.slug !== 'norte').map((region) => (
                <li key={region.slug}>
                  <Link href={`/${region.slug}`} className="hover:text-white">
                    {region.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">Categorías</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link href={`/norte/${category.slug}`} className="hover:text-white">
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">Comunidad</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-slate-500">
              Aviso legal | Política de privacidad | Cookies
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {currentYear} Huellas del Norte. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
