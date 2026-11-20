import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About', end: false },
  { to: '/blog', label: 'Writing', end: false },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const deskClass = ({ isActive }: { isActive: boolean }) =>
    `font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
      isActive ? 'text-accent' : 'text-stone-400 hover:text-white'
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b hairline bg-stone-950/85 backdrop-blur">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="group flex items-baseline gap-2">
            <span className="font-display text-base font-semibold tracking-tight text-white">
              Vikas Srinivasa
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-stone-500 sm:inline">
              /AI
            </span>
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={deskClass}>
                {l.label}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 text-stone-400 hover:text-white"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t hairline bg-stone-950">
          <div className="px-5 py-3 space-y-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 font-mono text-sm uppercase tracking-[0.15em] ${
                    isActive ? 'text-accent' : 'text-stone-400 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
