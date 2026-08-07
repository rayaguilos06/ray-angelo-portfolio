import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import { SOCIAL_LINKS, RESUME_PDF_PATH } from '@/lib/profile'

export const Route = createFileRoute('/')({
  component: Home,
})

const FOCUS_AREAS = [
  {
    title: 'Business Analytics',
    description:
      'Applying analytical thinking to understand business problems and support better decisions.',
  },
  {
    title: 'Data Analytics',
    description:
      'Cleaning, exploring, and visualizing data using SQL, Python, and analytics tools.',
  },
  {
    title: 'Machine Learning',
    description:
      'Learning and applying machine learning methods to identify patterns and build practical models.',
  },
  {
    title: 'Artificial Intelligence',
    description:
      'Exploring practical AI tools, agents, and workflows to improve productivity and problem-solving.',
  },
]

function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Introduction */}
          <div>
            <p className="text-blue-600 font-medium text-lg mb-4">
              Hi, I'm Ray Angelo Aguilos
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Information Systems Graduate | Business Analytics | Data & AI
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-8">
              I'm interested in using data, analytics, machine learning, and AI
              to understand problems and build practical solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View My Projects
                <ArrowRight size={16} />
              </Link>

              <a
                href={RESUME_PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-800 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/headshot-on-white.JPG"
              alt="Ray Angelo Aguilos"
              className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl border border-gray-200 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            What I Focus On
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOCUS_AREAS.map((area) => (
              <div
                key={area.title}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {area.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Let's work together
        </h2>

        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Open to entry-level opportunities and collaborations in business
          analytics, data analytics, machine learning, and AI.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Get in Touch
          <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  )
}
