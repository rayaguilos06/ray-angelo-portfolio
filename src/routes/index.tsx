
import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  BriefcaseBusiness,
} from 'lucide-react'
import { SOCIAL_LINKS, RESUME_PDF_PATH } from '@/lib/profile'

export const Route = createFileRoute('/')({
  component: Home,
})

const FOCUS_AREAS = [
  {
    title: 'Business Analytics',
    description:
      'Connecting business needs with analytical thinking to support informed decisions and practical solutions.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Data Analytics',
    description:
      'Working with data and performance signals to explore patterns, interpret findings, and communicate insights.',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Machine Learning & AI',
    description:
      'Applying machine learning techniques such as embeddings, clustering, intent classification, and opportunity scoring.',
    icon: BrainCircuit,
  },
  {
    title: 'Web Development',
    description:
      'Building and maintaining web experiences using WordPress, web technologies, API integrations, and database-related tasks.',
    icon: Code2,
  },
]

function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Introduction */}
          <div>
            <p className="mb-4 font-medium text-blue-600">
              Information Systems Graduate
            </p>

            <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              Business Analytics, Data, and Applied Machine Learning
            </h1>

            <p className="mb-5 max-w-2xl text-lg leading-relaxed text-gray-600">
              I'm Ray Angelo Aguilos, an Information Systems graduate
              specializing in Business Analytics. My background combines
              web development with hands-on experience in data analytics
              and applied machine learning.
            </p>

            <p className="mb-8 max-w-2xl leading-relaxed text-gray-600">
              During my Machine Learning Internship at FlyRank AI, I
              explored search and engagement data and completed a capstone
              project on prioritizing SEO content observations for potential
              review or refresh.
            </p>

            {/* Primary Actions */}
            <div className="mb-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
              >
                View My Projects
                <ArrowRight size={16} />
              </Link>

              <a
                href={RESUME_PDF_PATH}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-800 transition-colors hover:bg-gray-50"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
              >
                <Github size={20} />
                GitHub
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-600"
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
              className="h-64 w-64 rounded-2xl border border-gray-200 object-cover shadow-sm md:h-72 md:w-72"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-medium text-blue-600">
              What I Bring
            </p>

            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Areas of Focus
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-gray-600">
              A combination of analytical thinking, technical development,
              and practical problem-solving.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FOCUS_AREAS.map((area) => {
              const Icon = area.icon

              return (
                <article
                  key={area.title}
                  className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-sm"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
                    <Icon size={22} className="text-blue-700" />
                  </div>

                  <h3 className="mb-2 font-semibold text-gray-900">
                    {area.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600">
                    {area.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Capstone */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid items-center gap-8 rounded-2xl border border-gray-200 bg-white p-6 md:grid-cols-2 md:p-10">
          <div>
            <p className="mb-3 text-sm font-medium text-blue-600">
              Featured Project · FlyRank AI
            </p>

            <h2 className="mb-4 text-2xl font-bold leading-snug text-gray-900 md:text-3xl">
              Using Random Forest-Based Performance Signals to Prioritize
              SEO Content Review
            </h2>

            <p className="mb-6 leading-relaxed text-gray-600">
              Developed a machine learning decision-support model using
              search and engagement signals to help prioritize SEO content
              observations for potential review or refresh. Evaluated
              different validation approaches and documented the model's
              limitations.
            </p>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-medium text-blue-700 transition-colors hover:text-blue-800"
            >
              Explore the Project
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
            <img
              src="/flyrankproject-content.png"
              alt="FlyRank machine learning capstone showing model validation results"
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            Let's Connect
          </h2>

          <p className="mx-auto mb-6 max-w-2xl leading-relaxed text-gray-600">
            I'm interested in entry-level opportunities across data
            analytics, business analysis, machine learning, and technology.
            I'm eager to contribute my skills, learn from experienced teams,
            and help build practical solutions.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
