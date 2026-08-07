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
      'Translating raw business data into clear, actionable insight for decision-makers.',
  },
  {
    title: 'Data Analytics',
    description:
      'Cleaning, exploring, and visualizing data with SQL, Python, and Power BI.',
  },
  {
    title: 'Machine Learning',
    description:
      'Building and evaluating predictive models to solve real business problems.',
  },
  {
    title: 'Artificial Intelligence',
    description:
      'Exploring practical AI applications, from NLP to automated decision support.',
  },
]

function Home() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-center">
          <div>
            <p className="text-blue-700 font-semibold mb-3">
              Hi, I'm Ray Angelo Aguilos
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Information Systems graduate turning data into decisions
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              I specialize in Business Analytics, Data Analytics, Machine
              Learning, and AI — helping organizations understand their data
              and make better decisions with it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                View My Projects
                <ArrowRight size={16} />
              </Link>
              <a
                href={RESUME_PDF_PATH}
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-800 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700 transition-colors"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700 transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>
          <img
            src="/headshot-on-white.jpg"
            alt="Portrait of Ray Angelo Aguilos"
            className="w-48 h-56 md:w-56 md:h-64 rounded-2xl object-cover mx-auto shadow-sm"
          />
        </div>
      </section>

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

      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Let's work together
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Open to internships, entry-level analyst roles, and collaborations
          in data analytics and machine learning.
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
