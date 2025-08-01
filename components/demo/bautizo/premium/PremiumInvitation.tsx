"use client"

import { Heart, Users, Baby } from 'lucide-react'
import { premiumDemoData } from './data/premium-demo-data'

export function PremiumInvitation() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        {/* Header Celestial */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-pink-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">👼</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">
            {premiumDemoData.invitation.title}
          </h2>
          <p className="text-xl text-sky-600">
            {premiumDemoData.invitation.message}
          </p>
        </div>

        {/* Contenido principal de la invitación */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-sky-100">
          {/* Título principal */}
          <div className="text-center mb-8">
            <h3 className="text-4xl md:text-5xl font-bold text-sky-700 mb-4">
              {premiumDemoData.invitation.subtitle}
            </h3>
            <p className="text-lg text-sky-600">
              {premiumDemoData.invitation.blessing}
            </p>
          </div>

          {/* Información de la bebé */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-sky-100 to-pink-100 rounded-xl p-6 mb-6 border border-sky-200">
              <div className="text-4xl mb-4">✨</div>
              <h4 className="text-3xl font-bold text-sky-800 mb-2">
                {premiumDemoData.invitation.celebrant.name}
              </h4>
              <p className="text-sky-600">
                Nacida el {premiumDemoData.invitation.celebrant.birthDate}
              </p>
              <p className="text-pink-600 font-medium">
                {premiumDemoData.invitation.celebrant.age}
              </p>
            </div>
          </div>

          {/* Información de padres y padrinos */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Padres */}
            <div className="bg-sky-50 rounded-xl p-6 border border-sky-200">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-sky-600" />
                <h5 className="text-xl font-semibold text-sky-800">
                  Sus Padres
                </h5>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">👨</span>
                  <p className="font-medium">
                    {premiumDemoData.invitation.parents.father}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pink-500">👩</span>
                  <p className="font-medium">
                    {premiumDemoData.invitation.parents.mother}
                  </p>
                </div>
              </div>
            </div>

            {/* Padrinos */}
            <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">👑</span>
                <h5 className="text-xl font-semibold text-pink-800">
                  Sus Padrinos
                </h5>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">👨</span>
                  <p className="font-medium">
                    {premiumDemoData.invitation.godparents.godfather}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pink-500">👩</span>
                  <p className="font-medium">
                    {premiumDemoData.invitation.godparents.godmother}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Información de la ceremonia y celebración */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Ceremonia */}
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⛪</span>
                <h5 className="text-xl font-semibold text-purple-800">
                  Ceremonia Religiosa
                </h5>
              </div>
              <div className="space-y-2 text-gray-700">
                <p className="font-bold text-purple-700">
                  {premiumDemoData.invitation.ceremony.date}
                </p>
                <p className="font-medium">
                  {premiumDemoData.invitation.ceremony.time}
                </p>
                <p className="text-sm">
                  {premiumDemoData.invitation.ceremony.venue}
                </p>
                <p className="text-xs text-gray-600">
                  {premiumDemoData.invitation.ceremony.address}
                </p>
              </div>
            </div>

            {/* Celebración */}
            <div className="bg-rose-50 rounded-xl p-6 border border-rose-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎉</span>
                <h5 className="text-xl font-semibold text-rose-800">
                  Celebración Familiar
                </h5>
              </div>
              <div className="space-y-2 text-gray-700">
                <p className="font-bold text-rose-700">
                  Mismo día
                </p>
                <p className="font-medium">
                  {premiumDemoData.invitation.celebration.time}
                </p>
                <p className="text-sm">
                  {premiumDemoData.invitation.celebration.venue}
                </p>
                <p className="text-xs text-gray-600">
                  {premiumDemoData.invitation.celebration.address}
                </p>
              </div>
            </div>
          </div>

          {/* Mensaje decorativo celestial */}
          <div className="text-center bg-gradient-to-r from-sky-50 to-pink-50 rounded-xl p-6 border border-sky-200">
            <div className="text-3xl mb-3">☁️✨☁️</div>
            <p className="text-lg text-sky-700 italic font-medium">
              {premiumDemoData.invitation.decorativeMessage}
            </p>
          </div>

          {/* Elementos decorativos celestiales */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-sky-200 rounded-full flex items-center justify-center">
                <span className="text-xs">☁️</span>
              </div>
              <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
                <span className="text-lg">👼</span>
              </div>
              <div className="w-8 h-8 bg-sky-200 rounded-full flex items-center justify-center">
                <span className="text-xs">☁️</span>
              </div>
            </div>
          </div>

          {/* Verso bíblico */}
          <div className="text-center mt-8 pt-6 border-t border-sky-100">
            <p className="text-sm text-sky-600 italic">
              "Porque de los tales es el Reino de los Cielos"
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Mateo 19:14
            </p>
          </div>
        </div>

        {/* Decoración inferior */}
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