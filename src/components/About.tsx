'use client'

interface Service {
  name: string
  description: string
  icon: string
  duration: string
}

const services: Service[] = [
  {
    name: 'Pack Básico',
    description: 'Asesoría online con dos reuniones y presentación digital con moodboard',
    icon: '💡',
    duration: '7 días',
  },
  {
    name: 'Pack Avanzado',
    description: 'Asesoría mixta presencial y online con presentación digital y guía de diseño',
    icon: '⭐',
    duration: '15 días',
  },
  {
    name: 'Pack Full',
    description: 'Asesoría presencial completa con gestión de compra y entrega de mobiliario',
    icon: '👑',
    duration: '20 días',
  },
]

const stats = [
  { number: '10+', label: 'Años de experiencia' },
  { number: '300+', label: 'Proyectos completados' },
  { number: '100%', label: 'Clientes satisfechos' },
]

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="acerca-de" className="section-padding">
      <div className="container-custom space-y-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-beige-900">
              Sobre mí
            </h2>
            
            <p className="text-lg text-neutral">
              Soy Agustina Galeano Bardisa, diseñadora de interiores especializada en crear espacios que combinan <strong>estética, funcionalidad y personalidad</strong>.
            </p>

            <p className="text-base text-neutral">
              Mi enfoque es dialogar con mis clientes para entender sus necesidades, gustos y estilo de vida. Cada proyecto es una oportunidad para crear algo único que refleje quiénes son.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-3xl font-serif font-bold text-rose-400">{stat.number}</p>
                  <p className="text-xs text-neutral mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-beige-100 border-2 border-beige-200 rounded-2xl p-8">
              <p className="text-beige-700 font-serif text-2xl mb-4">Mi metodología</p>
              <ul className="space-y-3 text-sm text-neutral">
                <li className="flex gap-3">
                  <span className="text-rose-400 font-bold">→</span>
                  <span><strong>Escucha activa:</strong> Entiendo profundamente tus necesidades</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-400 font-bold">→</span>
                  <span><strong>Propuesta conceptual:</strong> Presento opciones claras y visuales</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-400 font-bold">→</span>
                  <span><strong>Ejecución integral:</strong> Supervisión de cada detalle</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-400 font-bold">→</span>
                  <span><strong>Resultado perfecto:</strong> Tu espacio ideal hecho realidad</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-beige-900">Paquetes de servicio</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 border-2 transition-all ${
                  idx === 2
                    ? 'bg-rose-50 border-rose-200'
                    : 'bg-white border-beige-200 hover:border-rose-200'
                }`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl text-beige-900 font-serif font-semibold mb-2">
                  {service.name}
                </h4>
                <p className="text-sm text-neutral mb-4">
                  {service.description}
                </p>
                <p className="text-xs text-rose-400 font-semibold">
                  ⏱️ {service.duration}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-cream-50 border-2 border-beige-200 rounded-2xl p-8 text-center">
            <p className="text-beige-700 mb-6">
              Cada paquete incluye: <strong>consultorías personalizadas, presentación digital, guía de diseño y seguimiento post-proyecto</strong>
            </p>
            <button
              onClick={() => scrollToSection('contacto')}
              className="px-8 py-3 bg-rose-400 text-white rounded-lg hover:bg-rose-500 font-medium transition-all"
            >
              Cotizar mi proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
