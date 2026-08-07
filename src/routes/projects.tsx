import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

const PROJECTS = [
  {
    title: 'CarGo — Car Rental PWA',
    category: 'Academic Project',
    description:
      'A progressive web application concept for a car rental service. The project focused on presenting available vehicles and creating a simple, user-friendly rental experience.',
    images: [
      {
        src: '/cargo-before.png',
        label: 'Initial Version',
      },
      {
        src: '/cargo-output.png',
        label: 'Developed Output',
      },
    ],
  },
  {
    title: 'IoT Conference 2025 Website',
    category: 'Internship Project',
    description:
      'A proposed website concept for an IoT conference, focused on organizing event information and presenting a clearer digital experience for conference participants.',
    images: [
      {
        src: '/iotcon-concept.png',
        label: 'Initial Concept',
      },
      {
        src: '/iotcon-draft.png',
        label: 'Draft Design',
      },
    ],
  },
]

function Projects() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-12">
        <p className="text-blue-600 font-medium mb-3">
          Selected Work
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
          Projects
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          A selection of academic and internship projects that reflect my
          experience in information systems, web development, analytics, and
          practical problem-solving.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="space-y-12">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm"
            >
              {/* Project Information */}
              <div className="p-6 md:p-8">
                <p className="text-sm font-medium text-blue-600 mb-2">
                  {project.category}
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h2>

                <p className="text-gray-600 leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>

              {/* Project Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 md:p-8">
                {project.images.map((image) => (
                  <div key={image.src}>
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                      <img
                        src={image.src}
                        alt={`${project.title} - ${image.label}`}
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    <p className="text-sm font-medium text-gray-700 mt-3">
                      {image.label}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
