import { createFileRoute } from '@tanstack/react-router'
import { Award } from 'lucide-react'

export const Route = createFileRoute('/certifications')({
  component: Certifications,
})

const CERTIFICATIONS = [
  {
    title: 'Data Annotation for Aspiring BPO Professionals',
    issuer: 'University of the Philippines Open University (UPOU)',
    year: '2026',
  },
  {
    title: 'Risk Analysis for Project Management',
    issuer: 'University of the Philippines Open University (UPOU)',
    year: '2026',
  },
  {
    title: 'AI Engineer for Developers Associate',
    issuer: 'DataCamp',
    year: '2025',
  },
  {
    title: 'Data Analyst Associate',
    issuer: 'DataCamp',
    year: '2025',
  },
  {
    title: 'Google Analytics for Beginners',
    issuer: 'Google',
    year: '2024',
  },
  {
    title: 'Introduction to Data Studio',
    issuer: 'Google',
    year: '2024',
  },
  {
    title: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM',
    year: '2023',
  },
  {
    title: 'Enterprise Design Thinking Team Essentials for AI',
    issuer: 'IBM',
    year: '2023',
  },
  {
    title: 'Lean Six Sigma White Belt',
    issuer: 'CertiProf',
    year: '2023',
  },
]

function Certifications() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-12">
        <p className="text-blue-600 font-medium mb-3">
          Professional Development
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
          Certifications
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          Courses and certifications that support my development in business
          analytics, data analytics, machine learning, artificial intelligence,
          and professional problem-solving.
        </p>
      </section>

      {/* Certifications */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="grid sm:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((certification) => (
            <article
              key={`${certification.title}-${certification.year}`}
              className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Award size={20} className="text-blue-700" />
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-gray-900 leading-snug">
                    {certification.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-2">
                    {certification.issuer}
                  </p>

                  <p className="text-sm font-medium text-blue-600 mt-2">
                    {certification.year}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
