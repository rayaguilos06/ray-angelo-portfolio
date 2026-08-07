import { marked } from 'marked'

import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Download } from 'lucide-react'
import { RESUME_PDF_PATH } from '@/lib/profile'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function Resume() {
  const jobs = [...allJobs].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  )

  return (
    <div className="min-h-screen p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Resume</h1>
          <p className="text-lg text-gray-600">
            Ray Angelo Aguilos — Business & Data Analytics
          </p>
          <a
            href={RESUME_PDF_PATH}
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
          >
            <Download size={16} />
            Download CV (PDF)
          </a>
          <Separator className="mt-8" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Career Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col-reverse sm:flex-row items-center gap-8">
              <p className="flex-1 leading-relaxed">
                Information Systems graduate specializing in Business
                Analytics, Data Analytics, Machine Learning, and AI. Skilled
                in SQL, Python, and Power BI, with hands-on experience
                turning raw data into dashboards, models, and reports that
                support real decisions. Looking to grow as a data or
                business analyst.
              </p>
              <img
                src="/headshot-on-white.jpg"
                alt="Professional headshot"
                className="w-44 h-52 rounded-2xl object-cover"
              />
            </div>
          </CardContent>
        </Card>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Experience</h2>
          <div className="space-y-6">
            {jobs.map((job) => (
              <Card key={job.jobTitle}>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
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
                      className="mt-6 prose prose-sm max-w-none"
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

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Education</h2>
          <div className="space-y-6">
            {allEducations.map((education) => (
              <Card key={education.school}>
                <CardHeader>
                  <CardTitle className="text-xl">{education.school}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed">{education.summary}</p>
                  {education.content && (
                    <div
                      className="mt-6 prose prose-sm max-w-none"
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
