"use client"

import { useState } from 'react'
import { Users, Heart } from 'lucide-react'
import { premiumDemoData } from './data/premium-demo-data'

export function PremiumFamily() {
  const [selectedFamily, setSelectedFamily] = useState<number | null>(null)

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Celestial */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-pink-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">
            Nuestra Familia Especial
          </h2>
          <p className="text-lg text-sky-600 max-w-2xl mx-auto">
            Personas bendecidas que Dios ha puesto en nuestro camino y que forman parte 
            fundamental en la vida de Sofia Valentina. Cada uno tiene un lugar especial 
            en nuestros corazones.
          </p>
        </div>

        {/* Grid de familia especial */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {premiumDemoData.family.map((familyMember, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                selectedFamily === index 
                  ? 'border-sky-400 shadow-lg scale-105 bg-gradient-to-br from-sky-50 to-pink-50' 
                  : 'border-sky-200 hover:border-sky-300'
              }`}
              onClick={() => setSelectedFamily(selectedFamily === index ? null : index)}
            >
              {/* Icono y rol */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-pink-400 rounded-full flex items-center justify-center text-white">
                  <span className="text-xl">{familyMember.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-sky-800">
                  {familyMember.role}
                </h3>
              </div>

              {/* Nombres */}
              <div className="space-y-2 mb-4">
                {familyMember.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-gray-700 font-medium">
                    {name}
                  </p>
                ))}
              </div>

              {/* Descripción */}
              <p className="text-sm text-sky-600 italic">
                {familyMember.description}
              </p>

              {/* Indicador de selección */}
              {selectedFamily === index && (
                <div className="mt-4 pt-4 border-t border-sky-200">
                  <div className="flex items-center gap-2 text-pink-600">
                    <Heart className="w-4 h-4 fill-current" />
                    <span className="text-xs font-medium">
                      Personas especiales en la vida de Sofia Valentina
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mensaje especial */}
        <div className="mt-16 bg-gradient-to-r from-sky-100 to-pink-100 rounded-2xl p-8 border border-sky-200">
          <div className="text-center">
            <div className="text-4xl mb-4">💙</div>
            <h3 className="text-2xl font-bold text-sky-800 mb-4">
              Bendiciones de Familia
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl">👑</div>
                <h4 className="font-semibold text-sky-700">Padrinos</h4>
                <p className="text-sm text-gray-600">Guías espirituales elegidos con amor para acompañar a Sofia en su fe</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl">👴👵</div>
                <h4 className="font-semibold text-sky-700">Abuelos</h4>
                <p className="text-sm text-gray-600">Pilares de sabiduría que bendicen con su experiencia y amor incondicional</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl">💕</div>
                <h4 className="font-semibold text-sky-700">Familia del Corazón</h4>
                <p className="text-sm text-gray-600">Seres queridos que eligimos para que sean parte de esta bendición</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/50 rounded-xl">
              <p className="text-sm text-sky-700">
                <strong>🙏 Bendición familiar:</strong> "Que cada uno de ustedes sea instrumento 
                de amor y bendición en la vida de Sofia Valentina, guiándola siempre por el 
                camino del bien y la fe."
              </p>
            </div>
          </div>
        </div>

        {/* Decoración celestial */}
        <div className="text-center mt-8">
          <div className="flex justify-center items-center gap-2">
            <div className="h-1 w-20 bg-gradient-to-r from-sky-300 to-transparent rounded-full"></div>
            <div className="flex gap-2">
              <span className="text-lg">☁️</span>
              <Heart className="w-6 h-6 text-pink-400 fill-current" />
              <span className="text-lg">☁️</span>
            </div>
            <div className="h-1 w-20 bg-gradient-to-l from-pink-300 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}