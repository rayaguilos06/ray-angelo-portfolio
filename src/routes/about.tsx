import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          I'm Ray Angelo Aguilos, an Information Systems graduate with a
          strong interest in turning data into decisions that matter. My
          academic background gave me a foundation in databases, systems
          analysis, and business processes, while my personal projects and
          coursework pushed me further into analytics, machine learning, and
          applied AI.
        </p>
        <p>
          I enjoy the full journey of a data project: understanding the
          business question, cleaning and exploring the data, building models
          or dashboards, and communicating findings in a way that
          non-technical stakeholders can act on. I'm especially drawn to
          problems where good analysis can directly improve how a business
          operates.
        </p>
        <p>
          Outside of formal projects, I regularly practice with real-world
          datasets, work through machine learning courses, and build small
          tools that sharpen my SQL, Python, and data visualization skills.
          I'm currently looking for opportunities where I can apply these
          skills as a data or business analyst, or in a related entry-level
          role.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-2">Education</h2>
          <p className="text-sm text-gray-600">
            BS in Information Systems, specializing in Business Analytics,
            Data Analytics, Machine Learning, and AI.
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
          <h2 className="font-semibold text-gray-900 mb-2">What I'm Looking For</h2>
          <p className="text-sm text-gray-600">
            Entry-level roles or internships in data analytics, business
            analytics, or machine learning.
          </p>
        </div>
      </div>
    </div>
  )
}
