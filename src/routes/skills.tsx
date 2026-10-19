
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/skills')({
  component: Skills,
})

const SKILL_GROUPS = [
  {
    category: 'Machine Learning & AI',
    description:
      'Techniques explored through applied machine learning work and the FlyRank AI internship.',
    skills: [
      'Machine Learning',
      'Random Forest',
      'Embeddings',
      'Clustering',
      'Intent Classification',
      'Opportunity Scoring',
      'AI-Assisted Development',
    ],
  },
  {
    category: 'Data & Business Analytics',
    description:
      'Skills for examining performance data and supporting evidence-based decisions.',
    skills: [
      'Data Analytics',
      'Business Analytics',
      'Search Analytics',
      'Data Interpretation',
      'Insight-to-Action Reporting',
      'Decision Support',
    ],
  },
  {
    category: 'Programming & Web Development',
    description:
      'Programming languages and development skills from your academic and internship experience.',
    skills: [
      'Python',
      'SQL',
      'Java',
      'TypeScript',
      'HTML/CSS',
      'Web Development',
      'Database Management',
      'WordPress CMS',
      'Git/GitHub',
    ],
  },
  {
    category: 'Tools & Platforms',
    description:
      'Tools used across analytics, development, productivity, and project work.',
    skills: [
      'Google Colab',
      'Visual Studio Code',
      'DuckDB',
      'Oracle Live SQL',
      'Google Analytics',
      'Microsoft 365',
      'Google Workspace',
      'Canva',
      'Claude',
      'ChatGPT',
      'Gemini',
      'Perplexity',
      'Netlify',
    ],
  },
  {
    category: 'Professional Skills & Interests',
    description:
      'Areas that connect technical work with business needs and collaboration.',
    skills: [
      'Project Management',
      'Risk Analysis',
      'Analytical Problem-Solving',
      'Technology Innovation',
      'AI Productivity Tools',
    ],
  },
]

function Skills() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-16">
        <p className="mb-3 text-sm font-medium text-blue-600">
          Technical Profile
        </p>

        <h1 className="mb-5 text-4xl font-bold text-gray-900 md:text-5xl">
          Skills & Expertise
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
          A collection of my technical skills, analytical capabilities, and
          tools developed through my Information Systems education,
          internships, certifications, and hands-on projects.
        </p>
      </section>

      {/* Skill Groups */}
      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <article
              key={group.category}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                {group.category}
              </h2>

              <p className="mb-5 text-sm leading-relaxed text-gray-600">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Featured Experience */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <p className="mb-3 text-sm font-medium text-blue-600">
            Applied Experience
          </p>

          <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
            Putting Skills into Practice
          </h2>

          <p className="max-w-3xl leading-relaxed text-gray-600">
            During my Machine Learning Engineering Internship at FlyRank AI,
            I worked with search and analytics data and explored techniques
            including embeddings, clustering, intent classification, and
            opportunity scoring. My capstone applied a Random Forest-based
            approach to prioritize SEO content observations for potential
            review or refresh. My web development internship at Redwizard
            Events further strengthened my experience with websites, APIs,
            WordPress, and registration-related database tasks.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/projects"
              className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-3 font-medium text-white transition-colors hover:bg-blue-800"
            >
              View My Projects
            </a>

            <a
              href="/resume"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-5 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100"
            >
              View My Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
