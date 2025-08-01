"use client"

import { MapPin, Clock } from 'lucide-react'
import { basicDemoData } from './data/basic-demo-data'

export function BasicEventDetails() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        {/* Header Celestial */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">
            Cuándo y Dónde
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        {/* Información de Sofia Valentina */}
        <div className="bg-white rounded-2xl p-8 mb-8 text-center border-2 border-sky-100 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-pink-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">👼</span>
            </div>
          </div>
          <h3 className="text-3xl font-bold text-sky-800 mb-2">
            {basicDemoData.event.celebrant.name}
          </h3>
          <p className="text-sky-600 mb-2">
            Nacida el {basicDemoData.event.celebrant.birthDate}
          </p>
          <p className="text-pink-600 font-medium text-lg">
            {basicDemoData.event.celebrant.age}
          </p>
          
          {/* Padres y Padrinos */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">👨‍👩‍👧</span>
                <h4 className="font-semibold text-sky-800">Sus Padres</h4>
              </div>
              <p className="text-gray-700">{basicDemoData.event.parents.father}</p>
              <p className="text-gray-700">{basicDemoData.event.parents.mother}</p>
            </div>
            <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">👑</span>
                <h4 className="font-semibold text-pink-800">Sus Padrinos</h4>
              </div>
              <p className="text-gray-700">{basicDemoData.event.godparents.godfather}</p>
              <p className="text-gray-700">{basicDemoData.event.godparents.godmother}</p>
            </div>
          </div>
        </div>

        {/* Fecha del evento */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-sky-500 to-pink-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg">
            {basicDemoData.event.date.full}
          </div>
        </div>

        {/* Ceremonia Religiosa */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-sky-100 p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">⛪</span>
            </div>
            <h3 className="text-2xl font-bold text-sky-800">Ceremonia Religiosa</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-sky-500" />
                <div>
                  <p className="font-semibold text-sky-800">{basicDemoData.event.ceremony.time}</p>
                  <p className="text-gray-600">{basicDemoData.event.ceremony.type}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-500 mt-1" />
                <div>
                  <p className="font-semibold text-sky-800">{basicDemoData.event.ceremony.venue}</p>
                  <p className="text-gray-600">{basicDemoData.event.ceremony.address}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">✨</span>
                <h4 className="font-semibold text-sky-700">Información Importante</h4>
              </div>
              <ul className="text-sm text-sky-700 space-y-1">
                <li>• Llegar 30 minutos antes de la ceremonia</li>
                <li>• Vestimenta: {basicDemoData.event.dressCode}</li>
                <li>• Ambiente familiar y de bendición</li>
                <li>• Se tomará sesión de fotos después del sacramento</li>
              </ul>
            </div>
          </div>

          {/* Verso bíblico */}
          <div className="mt-6 p-4 bg-gradient-to-r from-sky-50 to-pink-50 rounded-lg border border-sky-200">
                      <p className="text-center text-sky-700 italic">
            &ldquo;Porque de los tales es el Reino de los Cielos&rdquo;
          </p>
            <p className="text-center text-xs text-gray-500 mt-1">
              Mateo 19:14
            </p>
          </div>
        </div>

        {/* Celebración Familiar */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-pink-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎉</span>
            </div>
            <h3 className="text-2xl font-bold text-pink-800">Celebración Familiar</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-pink-500" />
                <div>
                  <p className="font-semibold text-pink-800">{basicDemoData.event.celebration.time}</p>
                  <p className="text-gray-600">{basicDemoData.event.celebration.type}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                <div>
                  <p className="font-semibold text-pink-800">{basicDemoData.event.celebration.venue}</p>
                  <p className="text-gray-600">{basicDemoData.event.celebration.address}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">💙</span>
                <h4 className="font-semibold text-pink-700">Qué Esperar</h4>
              </div>
              <ul className="text-sm text-pink-700 space-y-1">
                <li>• Reunión familiar llena de alegría</li>
                <li>• Convivencia y bendiciones compartidas</li>
                <li>• Comida especial preparada con amor</li>
                <li>• Entrega de recuerdos del bautismo</li>
              </ul>
            </div>
          </div>

          {/* Mensaje especial */}
          <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border border-pink-200">
            <div className="text-center">
              <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
              <p className="text-pink-700 font-medium">
                Un momento para compartir en familia la alegría de este sacramento
              </p>
            </div>
          </div>
        </div>

        {/* Temática */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-sky-100 to-pink-100 px-6 py-3 rounded-full border border-sky-200">
            <p className="text-sky-700 font-medium">
              <span className="text-lg">☁️</span> Temática: {basicDemoData.event.theme} <span className="text-lg">☁️</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}