import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Anahí Design | Diseño de Interiores',
  description: 'Transformamos espacios en experiencias. Diseño de interiores personalizado que refleja tu estilo. Paquetes de servicio completos para tu hogar o negocio.',
  keywords: 'diseño de interiores, interiorismo, Buenos Aires, decoración, reformas',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Anahí Design | Diseño de Interiores',
    description: 'Transformamos espacios en experiencias. Diseño personalizado.',
    type: 'website',
    url: 'https://anahi-design.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><text y='28' font-size='28' font-family='serif'>A</text></svg>" />
        <meta name="theme-color" content="#faf8f5" />
      </head>
      <body>{children}</body>
    </html>
  )
}
