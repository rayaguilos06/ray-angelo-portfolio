import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Projects</h1>
      <p className="text-gray-600 mb-10">
        A selection of analytics, machine learning, and data projects I've
        built.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allProjects.map((project) => (
          <Card key={project._meta.path} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-gray-600 mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700 transition-colors"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
