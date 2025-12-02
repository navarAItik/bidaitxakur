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
  `px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
    isActive ? 'bg-brand-green text-white' : 'text-brand-dark hover:bg-brand-green/10'
  }`;

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-brand-sand text-brand-dark">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-brand-dark/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <Logo className="h-8 w-8" />
            <span>Patas Navarricas</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={activeClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/destacar"
            className="hidden sm:inline-flex bg-brand-green text-white px-3 py-2 rounded-md text-sm font-semibold shadow"
          >
            Destaca tu negocio
          </Link>
        </div>
      </header>
      <main className="flex-1 pb-16">{children}</main>
      <footer className="bg-brand-dark text-white mt-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <Logo className="h-10 w-10 mb-3" variant="light" />
            <p className="text-sm text-white/80">
              Directorio pet-friendly en Navarra para que tu perro sea bienvenido en cada plan.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Explora</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/directorio" className="hover:underline">
                  Directorio completo
                </Link>
              </li>
              <li>
                <Link to="/planes" className="hover:underline">
                  Planes de finde
                </Link>
              </li>
              <li>
                <Link to="/rutas" className="hover:underline">
                  Rutas y agua
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Negocios</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/destacar" className="hover:underline">
                  Planes de visibilidad
                </Link>
              </li>
              <li>
                <Link to="/sugerir" className="hover:underline">
                  Sugerir un sitio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link to="/legal/privacidad" className="hover:underline">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link to="/legal/cookies" className="hover:underline">
                  Cookies
                </Link>
              </li>
              <li>
                <Link to="/legal/aviso" className="hover:underline">
                  Aviso legal
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-white/70">
          © {new Date().getFullYear()} Patas Navarricas. Con amor perruno desde Navarra.
        </div>
      </footer>
    </div>
  );
}
