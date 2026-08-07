import { Github, Linkedin, Mail } from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/profile'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {2026} Ray Angelo Aguilos. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-500 hover:text-blue-700 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-gray-500 hover:text-blue-700 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            aria-label="Send email"
            className="text-gray-500 hover:text-blue-700 transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
