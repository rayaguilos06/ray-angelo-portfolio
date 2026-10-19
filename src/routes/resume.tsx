
import { marked } from 'marked'
import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Download } from 'lucide-react'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

// This file must exist inside your public folder.
const RESUME_PDF_PATH = '/Aguilos%2C%20Ray%20Angelo%20B_Resume.pdf'

function Resume() {
  const jobs = [...allJobs].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  )

  return (
    <div className="min-h-screen p-8 lg:p-12">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-bold">Resume</h1>

          <p className="text-lg text-gray-600">
            Ray Angelo Aguilos — Business &amp; Data Analytics
          </p>

          <a
            href={RESUME_PDF_PATH}
            download="Aguilos, Ray Angelo B_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-800"
          >
            <Download size={16} />
            Download Resume (PDF)
          </a>

          <Separator className="mt-8" />
        </div>

        {/* Career Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Career Summary</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col-reverse items-center gap-8 sm:flex-row">
              <p className="flex-1 leading-relaxed">
                Information Systems graduate specializing in Business
                Analytics, Data Analytics, Machine Learning, and AI. Skilled
                in SQL and Python, with experience in web development and
                applied machine learning. Interested in applying analytical
                and technical skills to practical business and technology
                problems.
              </p>

              <img
                src="/headshot-on-white.jpg"
                alt="Professional headshot"
                className="h-52 w-44 rounded-2xl object-cover"
              />
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Experience</h2>

          <div className="space-y-6">
            {jobs.map((job) => (
              <Card key={`${job.jobTitle}-${job.company}`}>
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">
                        {job.jobTitle}
                      </CardTitle>

                      <p className="font-medium">
                        {job.company} — {job.location}
                      </p>
                    </div>

                    <Badge variant="secondary" className="text-sm">
                      {job.startDate.slice(0, 7)} –{' '}
                      {job.endDate ? job.endDate.slice(0, 7) : 'Present'}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="mb-6 leading-relaxed">{job.summary}</p>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {job.content && (
                    <div
                      className="prose prose-sm mt-6 max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: marked(job.content) as string,
                      }}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Education</h2>

          <div className="space-y-6">
            {allEducations.map((education) => (
              <Card key={education.school}>
                <CardHeader>
                  <CardTitle className="text-xl">
                    {education.school}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="leading-relaxed">{education.summary}</p>

                  {education.content && (
                    <div
                      className="prose prose-sm mt-6 max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: marked(education.content) as string,
                      }}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
