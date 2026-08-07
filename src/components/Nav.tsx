import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
] as const

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-lg font-bold text-gray-900 tracking-tight"
          onClick={() => setOpen(false)}
        >
          Ray Angelo Aguilos
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
                activeProps={{ className: 'text-blue-700' }}
                activeOptions={{ exact: link.to === '/' }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2 text-gray-700"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden border-t border-gray-200 bg-white px-4 py-3 space-y-3">
          {LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="block text-sm font-medium text-gray-700 hover:text-blue-700"
                activeProps={{ className: 'text-blue-700' }}
                activeOptions={{ exact: link.to === '/' }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
