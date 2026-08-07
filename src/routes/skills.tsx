import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/skills')({
  component: Skills,
})

const SKILL_GROUPS = [
  {
    category: 'Business & Data Analytics',
    skills: [
      'Business Analytics',
      'Data Analysis',
      'Data Visualization',
      'Excel',
      'Power BI',
      'Statistics',
    ],
  },
  {
    category: 'Machine Learning & AI',
    skills: [
      'Machine Learning',
      'Predictive Modeling',
      'Natural Language Processing',
      'scikit-learn',
      'Applied AI',
    ],
  },
  {
    category: 'Programming & Data',
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Database Design'],
  },
  {
    category: 'Tools & Practices',
    skills: [
      'Git & GitHub',
      'Systems Analysis',
      'Data Cleaning',
      'Reporting & Communication',
    ],
  },
]

function Skills() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Skills</h1>
      <p className="text-gray-600 mb-10">
        A snapshot of the tools and techniques I use to analyze data and
        build solutions.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.category}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <h2 className="font-semibold text-gray-900 mb-4">
              {group.category}
            </h2>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
