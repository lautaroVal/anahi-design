'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError('Error al enviar el mensaje. Intenta de nuevo.')
      }
    } catch (err) {
      setError('Error al enviar el mensaje. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-beige-900">
              Comenzar tu proyecto
            </h2>
            <p className="text-lg text-neutral">
              Cuéntame sobre tu espacio y tus ideas. Juntos crearemos el ambiente perfecto.
            </p>
          </div>

          {submitted && (
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 text-green-800 text-sm">
              ✓ ¡Mensaje enviado exitosamente! Me pondré en contacto muy pronto.
            </div>
          )}

          {error && (
            <div className="bg-rose-50 border-2 border-rose-200 rounded-lg p-4 text-rose-800 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-beige-900 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-beige-200 rounded-lg focus:outline-none focus:border-rose-400 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-beige-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-beige-200 rounded-lg focus:outline-none focus:border-rose-400 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-beige-900 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-beige-200 rounded-lg focus:outline-none focus:border-rose-400 transition-colors"
                  placeholder="+54 9 11..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-beige-900 mb-2">
                  Tipo de servicio *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-beige-200 rounded-lg focus:outline-none focus:border-rose-400 transition-colors"
                >
                  <option value="">Selecciona un paquete</option>
                  <option value="basico">Pack Básico - Asesoría Online</option>
                  <option value="avanzado">Pack Avanzado - Asesoría Mixta</option>
                  <option value="full">Pack Full - Asesoría Presencial</option>
                  <option value="otro">Otro - Consulta especial</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-beige-900 mb-2">
                Cuéntame sobre tu proyecto *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border-2 border-beige-200 rounded-lg focus:outline-none focus:border-rose-400 transition-colors resize-none"
                placeholder="Describe tu espacio, qué te gustaría cambiar, tu estilo..."
              />
            </div>

            <div className="bg-beige-50 border-2 border-beige-200 rounded-lg p-4 text-xs text-beige-700">
              <p>
                <strong>Respuesta rápida:</strong> Recibirás una respuesta en máximo 24 horas hábiles. Si prefieres contacto más directo, escríbeme por WhatsApp.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-rose-400 text-white rounded-lg hover:bg-rose-500 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>

          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t-2 border-beige-200">
            <div>
              <p className="text-sm text-light mb-2">📱 WhatsApp directo</p>
              <a href="https://wa.me/5491151650852" className="text-rose-400 font-semibold hover:text-rose-500 transition-colors">
                +54 9 11-5165-0852
              </a>
            </div>
            <div>
              <p className="text-sm text-light mb-2">📧 Email</p>
              <a href="mailto:galeano.bardisa@gmail.com" className="text-rose-400 font-semibold hover:text-rose-500 transition-colors">
                galeano.bardisa@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
