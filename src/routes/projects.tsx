
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

const PROJECTS = [
  {
    title:
      'Using Random Forest-Based Performance Signals to Prioritize SEO Content Review',
    category: 'Machine Learning & Data Analytics',
    description:
      'Developed a Random Forest-based decision-support model using search and engagement signals to prioritize SEO content observations for potential review or refresh. Evaluated results under different validation designs and presented actionable recommendations while acknowledging limitations in generalization and model interpretation.',
    images: [
      {
        src: '/flyrankproject-heading%20page.png',
        label: 'Research Paper Overview',
      },
      {
        src: '/flyrankproject-content.png',
        label: 'Model Validation Results',
      },
    ],
  },
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
      <section className="mx-auto max-w-5xl px-4 pt-16 pb-12">
        <p className="mb-3 font-medium text-blue-600">Selected Work</p>

        <h1 className="mb-5 text-4xl font-bold text-gray-900 md:text-5xl">
          Projects
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
          A selection of academic, internship, and machine learning projects
          that reflect my background in information systems, web development,
          analytics, and practical problem-solving.
        </p>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="space-y-12">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              {/* Project Information */}
              <div className="p-6 md:p-8">
                <p className="mb-2 text-sm font-medium text-blue-600">
                  {project.category}
                </p>

                <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                  {project.title}
                </h2>

                <p className="max-w-3xl leading-relaxed text-gray-600">
                  {project.description}
                </p>
              </div>

              {/* Project Images */}
              <div className="grid grid-cols-1 gap-6 bg-gray-50 p-6 md:grid-cols-2 md:p-8">
                {project.images.map((image) => (
                  <div key={image.src}>
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                      <img
                        src={image.src}
                        alt={`${project.title} - ${image.label}`}
                        className="h-auto w-full object-contain"
                        loading="lazy"
                        onError={(event) => {
                          console.error(
                            `Failed to load project image: ${image.src}`,
                          )
                          event.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>

                    <p className="mt-3 text-sm font-medium text-gray-700">
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
