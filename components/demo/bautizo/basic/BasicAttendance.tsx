"use client"

import { useState } from 'react'
import { CheckCircle, XCircle, Heart } from 'lucide-react'
import { basicDemoData } from './data/basic-demo-data'

export function BasicAttendance() {
  const [formData, setFormData] = useState({
    name: '',
    response: '',
    companions: '',
    phone: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // En un demo real, aquí se enviaría la información
    console.log('Datos de confirmación:', formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-pink-50">
      <div className="max-w-2xl mx-auto">
        {/* Header Celestial */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-pink-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">
            {basicDemoData.attendance.title}
          </h2>
          <p className="text-lg text-sky-600 mb-2">
            {basicDemoData.attendance.message}
          </p>
          <p className="text-sky-600">
            {basicDemoData.attendance.subtitle}
          </p>
        </div>

        {/* Formulario */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border-2 border-sky-100">
            {/* Nombre */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-sky-700 mb-2">
                {basicDemoData.attendance.fields.name}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                placeholder="Ej: María González López"
                required
              />
            </div>

            {/* Respuesta */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-sky-700 mb-2">
                {basicDemoData.attendance.fields.response}
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => handleInputChange('response', 'yes')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.response === 'yes'
                      ? 'border-sky-500 bg-sky-50 text-sky-700'
                      : 'border-sky-300 hover:border-sky-400'
                  }`}
                >
                  <CheckCircle className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm font-medium">
                    {basicDemoData.attendance.fields.responseOptions.yes}
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => handleInputChange('response', 'no')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.response === 'no'
                      ? 'border-pink-500 bg-pink-50 text-pink-700'
                      : 'border-sky-300 hover:border-pink-400'
                  }`}
                >
                  <XCircle className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm font-medium">
                    {basicDemoData.attendance.fields.responseOptions.no}
                  </p>
                </button>
              </div>
            </div>

            {/* Acompañantes */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-sky-700 mb-2">
                {basicDemoData.attendance.fields.companions}
              </label>
              <input
                type="text"
                value={formData.companions}
                onChange={(e) => handleInputChange('companions', e.target.value)}
                className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                placeholder="Ej: Juan González, Ana García (opcional)"
              />
            </div>

            {/* Teléfono */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-sky-700 mb-2">
                {basicDemoData.attendance.fields.phone}
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                placeholder="Ej: 811 123 4567"
                required
              />
            </div>

            {/* Botón enviar */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-500 to-pink-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-sky-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Confirmar Asistencia
            </button>

            {/* Nota adicional */}
            <div className="mt-6 p-4 bg-gradient-to-r from-sky-50 to-pink-50 rounded-lg border border-sky-200">
              <p className="text-center text-sm text-sky-700">
                <strong>🙏 Nota:</strong> {basicDemoData.attendance.additionalInfo.note}
              </p>
            </div>
          </form>
        ) : (
          /* Mensaje de confirmación */
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-2 border-sky-100">
            <div className="w-20 h-20 bg-gradient-to-r from-sky-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-sky-800 mb-4">
              ¡Confirmación Recibida!
            </h3>
            
            <p className="text-lg text-sky-600 mb-6">
              Gracias por confirmar su asistencia al bautismo de Sofia Valentina.
            </p>

            <div className="bg-gradient-to-r from-sky-50 to-pink-50 rounded-lg p-6 border border-sky-200">
              <div className="text-3xl mb-3">👼</div>
              <p className="text-sky-700 font-medium">
                Resumen de su confirmación:
              </p>
              <div className="mt-4 space-y-2 text-left">
                <p><strong>Nombre:</strong> {formData.name}</p>
                <p><strong>Asistencia:</strong> {formData.response === 'yes' ? '✅ Sí asistiré' : '❌ No podré asistir'}</p>
                {formData.companions && <p><strong>Acompañantes:</strong> {formData.companions}</p>}
                <p><strong>Contacto:</strong> {formData.phone}</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border border-pink-200">
              <p className="text-pink-700 italic">
                {basicDemoData.attendance.additionalInfo.blessing}
              </p>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({ name: '', response: '', companions: '', phone: '' })
              }}
              className="mt-6 text-sky-600 hover:text-sky-800 underline text-sm"
            >
              Enviar otra confirmación
            </button>
          </div>
        )}

        {/* Decoración celestial */}
        <div className="text-center mt-8">
          <div className="flex justify-center items-center gap-2">
            <div className="h-1 w-20 bg-gradient-to-r from-sky-300 to-transparent rounded-full"></div>
            <Heart className="w-6 h-6 text-pink-400 fill-current" />
            <div className="h-1 w-20 bg-gradient-to-l from-pink-300 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}