export default function Footer() {
  return (
    <footer className="bg-beige-900 text-beige-50 py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <p className="font-serif text-lg font-semibold mb-2">Anahí Design</p>
            <p className="text-sm text-beige-200">Interiorismo y diseño de espacios personalizado</p>
          </div>
          
          <div>
            <p className="text-sm font-semibold mb-4">Enlaces rápidos</p>
            <ul className="space-y-2 text-sm text-beige-200">
              <li><a href="#inicio" className="hover:text-rose-400 transition-colors">Inicio</a></li>
              <li><a href="#proyectos" className="hover:text-rose-400 transition-colors">Proyectos</a></li>
              <li><a href="#acerca-de" className="hover:text-rose-400 transition-colors">Acerca de mí</a></li>
              <li><a href="#contacto" className="hover:text-rose-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-4">Contacto</p>
            <ul className="space-y-2 text-sm text-beige-200">
              <li><a href="https://wa.me/5491151650852" className="hover:text-rose-400 transition-colors">WhatsApp: +54 9 11-5165-0852</a></li>
              <li><a href="mailto:galeano.bardisa@gmail.com" className="hover:text-rose-400 transition-colors">Email: galeano.bardisa@gmail.com</a></li>
              <li><a href="https://instagram.com" className="hover:text-rose-400 transition-colors">Instagram: @galeano.bardisa_</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-beige-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-beige-300">
            <p>&copy; {new Date().getFullYear()} Anahí Design. Todos los derechos reservados.</p>
            <p>Diseñado con ❤️ para crear espacios hermosos</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
