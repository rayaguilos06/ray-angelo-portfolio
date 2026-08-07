import { createFileRoute } from '@tanstack/react-router'
import { allCertifications } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Award, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/certifications')({
  component: Certifications,
})

function Certifications() {
  const certs = [...allCertifications].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Certifications</h1>
      <p className="text-gray-600 mb-10">
        Courses and certifications that support my work in analytics,
        machine learning, and AI.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {certs.map((cert) => (
          <Card key={cert._meta.path}>
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="mt-1 shrink-0 w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Award size={18} className="text-blue-700" />
                </div>
                <div>
                  <CardTitle className="text-lg leading-snug">
                    {cert.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500">{cert.issuer}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">
                {new Date(cert.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                })}
              </p>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <ExternalLink size={14} />
                  View Credential
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
