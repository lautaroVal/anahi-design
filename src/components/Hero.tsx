'use client'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="relative section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-beige-900">
              Transformamos espacios en experiencias
            </h1>
            
            <p className="text-lg text-neutral max-w-md">
              Diseño de interiores personalizado que refleja tu estilo y funciona perfectamente para tu día a día.
            </p>

            <p className="text-base text-light max-w-md">
              Con más de 10 años de experiencia, hemos ayudado a cientos de clientes a crear los espacios de sus sueños.
            </p>

            <div className="flex gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contacto')}
                className="px-8 py-3.5 bg-rose-400 text-white rounded-lg hover:bg-rose-500 font-medium transition-all hover:shadow-lg"
              >
                Comenzar proyecto
              </button>
              <button
                onClick={() => scrollToSection('proyectos')}
                className="px-8 py-3.5 border-2 border-beige-300 text-beige-900 rounded-lg hover:border-rose-400 hover:text-rose-400 font-medium transition-all"
              >
                Ver proyectos
              </button>
            </div>
          </div>

          <div className="relative h-96 md:h-full hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-beige-100 rounded-3xl opacity-50"></div>
            <div className="relative h-full bg-beige-100 rounded-3xl flex items-center justify-center border-2 border-beige-200">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-rose-200 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-4xl">✨</span>
                </div>
                <p className="text-beige-700 font-serif text-2xl">Anahí Design</p>
                <p className="text-beige-600 text-sm">Interiorismo & Diseño</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
