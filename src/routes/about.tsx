import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-4 py-16">
        <p className="text-sm font-medium text-blue-600 mb-3">
          About Me
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Information Systems Graduate with a Focus on Business, Data, and Technology
        </h1>

        <div className="space-y-5 text-gray-700 leading-relaxed max-w-3xl">
          <p>
            I'm Ray Angelo Aguilos, a Bachelor of Science in Information
            Systems graduate with a specialization in Business Analytics. My
            academic background gave me a foundation in information systems,
            databases, business processes, and analytical thinking. Over time,
            my interests have expanded toward data analytics, machine
            learning, artificial intelligence, and project management.
          </p>

          <p>
            I enjoy working on projects where technology and data can help
            solve practical problems. My experience includes academic
            projects involving web applications and an internship project
            involving the development of a conference website. These
            experiences helped me understand how technical solutions can be
            designed around the needs of users and organizations.
          </p>

          <p>
            I am developing my skills in data analytics, machine learning,
            artificial intelligence, and project management through
            coursework, certifications, internship experience, and
            hands-on projects. I am particularly interested in how data and
            technology can support better decisions, improve processes, and
            help teams deliver practical solutions.
          </p>

          <p>
            Currently, I am building experience through my Machine Learning
            internship while continuing to develop my skills across data,
            AI, and project management. I am interested in opportunities where
            I can continue learning, contribute to practical projects, and
            grow in both technical and project-oriented roles.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-semibold text-gray-900 mb-2">
                Education
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Bachelor of Science in Information Systems,
                specialization in Business Analytics.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-semibold text-gray-900 mb-2">
                Analytics & Data
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Interested in Business Analytics, Data Analytics,
                Machine Learning, and practical AI applications.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-semibold text-gray-900 mb-2">
                Project Management
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Developing knowledge in project planning, risk analysis,
                coordination, and technology project delivery.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-semibold text-gray-900 mb-2">
                Currently Learning
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Building practical experience through internship work,
                certifications, projects, and hands-on learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-gray-900 rounded-2xl p-8 md:p-10 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            What I'm Looking For
          </h2>

          <p className="text-gray-300 leading-relaxed max-w-2xl">
            I am interested in opportunities where I can apply my
            Information Systems and Business Analytics background while
            continuing to grow in data, AI, and project management. I am
            particularly interested in roles where technology, business
            analysis, and effective project delivery come together.
          </p>
        </div>
      </section>
    </div>
  )
}
