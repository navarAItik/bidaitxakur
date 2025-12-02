import { Link, NavLink } from 'react-router-dom';
import Logo from '../components/Logo';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/directorio', label: 'Directorio' },
  { to: '/planes', label: 'Planes' },
  { to: '/rutas', label: 'Rutas y agua' },
  { to: '/sugerir', label: 'Sugerir' },
  { to: '/destacar', label: 'Destacar' },
];

const activeClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
    isActive ? 'bg-brand-green text-white shadow-sm' : 'text-brand-dark/80 hover:text-brand-dark'
  }`;

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-sand/40 text-brand-dark relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 -right-10 w-80 h-80 bg-brand-sky blur-3xl rounded-full" />
        <div className="absolute top-32 -left-16 w-[28rem] h-[28rem] bg-brand-blush blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-brand-cream blur-[120px] rounded-full" />
      </div>
      <header className="sticky top-0 z-30 border-b border-white/60 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-3 font-display text-xl tracking-tight">
            <Logo className="h-9 w-9" />
            <div>
              <p className="leading-none font-semibold">Patas Navarricas</p>
              <p className="text-xs text-brand-dark/60">Guía pet-friendly</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-1 rounded-full bg-white/80 px-2 py-1 shadow-inner">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={activeClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/destacar"
            className="hidden sm:inline-flex bg-brand-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-soft"
          >
            Destaca tu negocio
          </Link>
        </div>
      </header>
      <main className="flex-1 pb-16 relative z-10">{children}</main>
      <footer className="bg-brand-night text-brand-sand mt-12 relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-8 md:grid-cols-4">
          <div>
            <Logo className="h-10 w-10 mb-3" variant="light" />
            <p className="text-sm text-brand-sand/70 leading-relaxed">
              Lugares, rutas y experiencias contrastadas para moverte con tu peludo por Navarra.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-cream mb-3">Explora</h3>
            <ul className="space-y-2 text-sm text-brand-sand/80">
              <li>
                <Link to="/directorio" className="hover:text-white transition">
                  Directorio completo
                </Link>
              </li>
              <li>
                <Link to="/planes" className="hover:text-white transition">
                  Planes de finde
                </Link>
              </li>
              <li>
                <Link to="/rutas" className="hover:text-white transition">
                  Rutas y agua
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-brand-cream mb-3">Negocios</h3>
            <ul className="space-y-2 text-sm text-brand-sand/80">
              <li>
                <Link to="/destacar" className="hover:text-white transition">
                  Planes de visibilidad
                </Link>
              </li>
              <li>
                <Link to="/sugerir" className="hover:text-white transition">
                  Sugerir un sitio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-brand-cream mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-brand-sand/80">
              <li>
                <Link to="/legal/privacidad" className="hover:text-white transition">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link to="/legal/cookies" className="hover:text-white transition">
                  Cookies
                </Link>
              </li>
              <li>
                <Link to="/legal/aviso" className="hover:text-white transition">
                  Aviso legal
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-brand-sand/70">
          © {new Date().getFullYear()} Patas Navarricas · Navarra pet-friendly
        </div>
      </footer>
    </div>
  );
}
