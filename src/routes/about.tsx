
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="bg-white">
      {/* Introduction */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <p className="mb-3 text-sm font-medium text-blue-600">
          About Me
        </p>

        <h1 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl">
          Information Systems Graduate Focused on Business, Data, and
          Technology
        </h1>

        <div className="max-w-3xl space-y-5 leading-relaxed text-gray-700">
          <p>
            I'm Ray Angelo Aguilos, an Information Systems graduate
            specializing in Business Analytics. My academic background
            provided a foundation in databases, business processes,
            information systems, and analytical problem-solving.
          </p>

          <p>
            My experience spans web development, data analytics, and applied
            machine learning. Through internships and hands-on projects,
            I've explored how technology and data can address practical
            problems, support business decisions, and improve digital
            experiences.
          </p>

          <p>
            During my Machine Learning Internship at FlyRank AI, I worked
            with search and engagement data and developed a Random
            Forest-based decision-support capstone to prioritize SEO content
            observations for potential review or refresh. This experience
            strengthened my understanding of feature-based modeling,
            validation approaches, analytical interpretation, and the
            importance of recognizing model limitations.
          </p>

          <p>
            My earlier Web Developer Internship at Redwizard Events gave me
            experience maintaining websites, working with WordPress features,
            integrating APIs, and handling registration-related databases.
            Together, these experiences have helped me connect technical
            implementation with analytical thinking and practical business
            needs.
          </p>

          <p>
            I am interested in opportunities where I can apply my
            Information Systems and Business Analytics background while
            continuing to grow in data analytics, machine learning,
            artificial intelligence, and technology project delivery.
          </p>
        </div>
      </section>

      {/* Professional Background */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="mb-8">
            <p className="mb-2 text-sm font-medium text-blue-600">
              My Background
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Areas of Focus
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="mb-3 font-semibold text-gray-900">
                Education
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Bachelor of Science in Information Systems, specializing in
                Business Analytics, from the Technological Institute of the
                Philippines – Quezon City.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="mb-3 font-semibold text-gray-900">
                Data & Analytics
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Exploring search analytics, data analysis, performance
                signals, analytical interpretation, and data-driven
                decision-making.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="mb-3 font-semibold text-gray-900">
                Machine Learning & AI
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Hands-on experience with embeddings, clustering, intent
                classification, opportunity scoring, and Random Forest-based
                decision support.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="mb-3 font-semibold text-gray-900">
                Web & Technology
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Experience with web development, WordPress, API integration,
                database-related tasks, and technology project work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-blue-600">
            Professional Experience
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Experience Highlights
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">
            My internships have helped me explore both analytical
            problem-solving and practical technology development.
          </p>
        </div>

        <div className="space-y-6">
          <article className="rounded-xl border border-gray-200 bg-white p-6 md:p-8">
            <p className="mb-2 text-sm font-medium text-blue-600">
              July 2026 – August 2026
            </p>

            <h3 className="text-xl font-semibold text-gray-900">
              Machine Learning Intern
            </h3>

            <p className="mt-1 font-medium text-gray-600">
              FlyRank AI
            </p>

            <p className="mt-4 leading-relaxed text-gray-700">
              Worked with search and engagement data through applied machine
              learning activities involving embeddings, clustering, intent
              classification, and opportunity scoring. Completed a capstone
              focused on using Random Forest-based performance signals to
              prioritize SEO content observations for potential review or
              refresh.
            </p>

            <a
              href="/projects"
              className="mt-5 inline-flex font-medium text-blue-700 hover:text-blue-800"
            >
              Explore my projects →
            </a>
          </article>

          <article className="rounded-xl border border-gray-200 bg-white p-6 md:p-8">
            <p className="mb-2 text-sm font-medium text-blue-600">
              March 2025 – May 2025
            </p>

            <h3 className="text-xl font-semibold text-gray-900">
              Web Developer Intern
            </h3>

            <p className="mt-1 font-medium text-gray-600">
              Redwizard Events
            </p>

            <p className="mt-4 leading-relaxed text-gray-700">
              Maintained company and event websites, worked with WordPress
              plugins and website functionality, integrated APIs, and
              supported registration-related database tasks for event
              operations.
            </p>

            <a
              href="/projects"
              className="mt-5 inline-flex font-medium text-blue-700 hover:text-blue-800"
            >
              View selected projects →
            </a>
          </article>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/resume"
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-800"
          >
            View My Resume
          </a>
        </div>
      </section>

      {/* Career Direction */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="rounded-2xl bg-gray-900 p-8 text-white md:p-10">
          <p className="mb-3 text-sm font-medium text-blue-300">
            Career Direction
          </p>

          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            What I'm Looking For
          </h2>

          <p className="max-w-3xl leading-relaxed text-gray-300">
            I am seeking entry-level opportunities where I can contribute my
            Information Systems background, analytical thinking, and
            technical skills. I am particularly interested in Data Analytics,
            Business Analysis, Machine Learning, AI-related work, and
            technology roles that connect business needs with practical
            solutions. I value continuous learning, collaboration, and
            responsible use of technology.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/projects"
              className="rounded-lg bg-white px-5 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-100"
            >
              Explore Projects
            </a>

            <a
              href="/contact"
              className="rounded-lg border border-gray-500 px-5 py-3 font-medium text-white transition-colors hover:bg-gray-800"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
