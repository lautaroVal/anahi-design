'use client'

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  highlights: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Casa Cruz - Cocina Integral',
    category: 'Diseño de Cocina',
    description: 'Rediseño completo de cocina con melamina blanca y enchapado de madera natural.',
    image: '🏠',
    highlights: ['Cocina moderna', 'Muebles personalizados', 'Iluminación LED'],
  },
  {
    id: 2,
    title: 'Familia García - Home Office',
    category: 'Espacios Multifuncionales',
    description: 'Sector especial destinado a home office con almacenamiento inteligente.',
    image: '💼',
    highlights: ['Home office', 'Almacenamiento', 'Organización'],
  },
  {
    id: 3,
    title: 'Pasarela UM - Camino al Infinito',
    category: 'Diseño Comercial',
    description: 'Instalación artística con líneas que crean sensación de infinito continuo.',
    image: '✨',
    highlights: ['Interiorismo comercial', 'Diseño artístico', 'Iluminación especial'],
  },
  {
    id: 4,
    title: 'CASA FOA 2023 - Laundry',
    category: 'Espacios de Servicio',
    description: 'Premio Johnson por mejor aplicación de producto en diseño de laundry.',
    image: '🌿',
    highlights: ['Premio reconocido', 'Diseño funcional', 'Sustentabilidad'],
  },
  {
    id: 5,
    title: 'Proyecto Habana - Cocina',
    category: 'Diseño Residencial',
    description: 'Cocina para conjunto de edificios con melamina y enchapado petiribi.',
    image: '🎨',
    highlights: ['Diseño a medida', 'Materiales premium', 'Instalación'],
  },
  {
    id: 6,
    title: 'Casa Castores - Vintage Moderno',
    category: 'Diseño Integral',
    description: 'Cocina estilo vintage moderno co-diseñada con los usuarios.',
    image: '🏡',
    highlights: ['Diseño colaborativo', 'Estilo vintage', 'Melamina y laqueado'],
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="section-padding bg-white">
      <div className="container-custom space-y-16">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-beige-900">
            Proyectos realizados
          </h2>
          <p className="text-lg text-neutral">
            Cada proyecto es único y refleja el estilo personal de nuestros clientes. Aquí algunos de nuestros trabajos más destacados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group border border-beige-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-cream-50"
            >
              <div className="h-48 bg-gradient-to-br from-rose-100 to-beige-100 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                {project.image}
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs text-rose-400 font-semibold uppercase tracking-wide">
                    {project.category}
                  </p>
                  <h3 className="text-xl text-beige-900 mt-2 group-hover:text-rose-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-neutral">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-beige-100 text-beige-700 px-3 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <p className="text-neutral mb-6">
            ¿Te gustaría ver más proyectos? Contáctanos para conocer nuestro portafolio completo.
          </p>
        </div>
      </div>
    </section>
  )
}
