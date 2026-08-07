import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Ray Angelo Aguilos | Business & Data Analytics',
      },
      {
        name: 'description',
        content:
          'Portfolio of Ray Angelo Aguilos, an Information Systems graduate specializing in Business Analytics, Data Analytics, Machine Learning, and AI.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="flex min-h-screen flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Scripts />
      </body>
    </html>
  )
}
