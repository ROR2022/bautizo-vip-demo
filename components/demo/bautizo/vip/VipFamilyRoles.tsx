"use client"

import { useState, useRef } from 'react'
import { Download, QrCode, Heart, Sparkles, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { vipDemoData } from './data/vip-demo-data'

export function VipFamilyRoles() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const [guestName, setGuestName] = useState('')
  const [guestEmail, setGuestEmail] = useState('')
  const passRef = useRef<HTMLDivElement>(null)

  const generateQRCode = (roleId: string, guestName: string) => {
    // En una implementación real, esto generaría un QR code real
    // Por ahora, simulamos con un div estilizado
    return `QR-${roleId}-${guestName.replace(/\s+/g, '-')}`
  }

  const downloadPass = async () => {
    if (!passRef.current || !selectedRole) return

    try {
      // En una implementación real, usaríamos html2canvas para generar la imagen
      // Por ahora, simulamos la descarga
      const role = vipDemoData.familyRoles.find(r => r.id === selectedRole)
      if (!role) return

      // Simular descarga
      const link = document.createElement('a')
      link.download = `rol-familiar-${role.type.toLowerCase()}-${guestName}.png`
      link.href = '#'
      link.click()
      
      alert('Tarjeta de rol familiar descargada exitosamente! (Demo)')
    } catch (error) {
      console.error('Error al descargar tarjeta:', error)
      alert('Error al descargar la tarjeta')
    }
  }

  const selectedRoleData = selectedRole ? vipDemoData.familyRoles.find(r => r.id === selectedRole) : null

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Celestial */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-sky-300 to-pink-300 text-sky-800 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-xl border-2 border-sky-300">
            <div className="flex items-center gap-2">
              <span>👼</span>
              <span>Roles Familiares Especiales</span>
              <span>☁️</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-sky-800 mb-4">
            👨‍👩‍👧‍👦 ROLES EN LA CELEBRACIÓN
          </h2>
          
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-sky-300 to-pink-300 rounded-full mx-4"></div>
            <Heart className="w-8 h-8 text-sky-500 fill-current" />
            <div className="h-1 w-20 bg-gradient-to-r from-sky-300 to-pink-300 rounded-full mx-4"></div>
          </div>
          
          <p className="text-lg text-sky-700 max-w-3xl mx-auto leading-relaxed">
            Cada miembro de la familia tiene un papel especial en este día bendecido. 
            Genera tarjetas personalizadas de identificación con códigos QR únicos para 
            cada rol familiar en la celebración de Sofia Valentina.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Selección de roles */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-sky-800 mb-6">Roles Familiares Disponibles</h3>
            
            {vipDemoData.familyRoles.map((role) => (
              <div
                key={role.id}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedRole === role.id
                    ? `${role.borderColor} bg-gradient-to-r ${role.color} shadow-xl scale-105`
                    : 'border-sky-200 bg-white hover:border-sky-300 hover:shadow-lg'
                }`}
                onClick={() => setSelectedRole(selectedRole === role.id ? null : role.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{role.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-sky-800">{role.type}</h4>
                      <p className="text-sm text-gray-600">{role.description}</p>
                    </div>
                  </div>
                  {selectedRole === role.id && (
                    <Check className="w-6 h-6 text-sky-600" />
                  )}
                </div>

                <div className="space-y-2">
                  <h5 className="font-semibold text-sky-700 text-sm">Participaciones especiales:</h5>
                  {role.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-sky-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Generador de tarjeta */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-sky-800 mb-6">Generar Tarjeta de Rol</h3>
            
            {!selectedRole ? (
              <div className="bg-white rounded-2xl p-8 border-2 border-sky-100 text-center">
                <div className="text-6xl mb-4">👈</div>
                <h4 className="text-xl font-bold text-sky-800 mb-2">Selecciona un Rol</h4>
                <p className="text-gray-600">
                  Elige uno de los roles familiares de la izquierda para generar una tarjeta personalizada
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Formulario */}
                <div className="bg-white rounded-2xl p-6 border-2 border-sky-100">
                  <h4 className="text-lg font-bold text-sky-800 mb-4">Información del Invitado</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-sky-700 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="Ej: María González López"
                        className="w-full px-4 py-3 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-sky-700 mb-2">
                        Email (opcional)
                      </label>
                      <input
                        type="email"
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        placeholder="ejemplo@email.com"
                        className="w-full px-4 py-3 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Vista previa de la tarjeta */}
                {selectedRoleData && guestName && (
                  <div ref={passRef} className="bg-white rounded-2xl p-1 border-2 border-sky-100">
                    <div className={`rounded-xl p-6 bg-gradient-to-r ${selectedRoleData.color} border-2 ${selectedRoleData.borderColor}`}>
                      {/* Header de la tarjeta */}
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-2">{selectedRoleData.icon}</div>
                        <h3 className="text-2xl font-bold text-sky-800">Bautismo de Sofia Valentina</h3>
                        <p className="text-sm text-sky-600">15 de Septiembre 2024</p>
                      </div>

                      {/* Información del invitado */}
                      <div className="bg-white/80 rounded-lg p-4 mb-6">
                        <div className="text-center">
                          <h4 className="text-lg font-bold text-sky-800">{guestName}</h4>
                          <p className="text-sky-600 font-medium">{selectedRoleData.type}</p>
                          {guestEmail && (
                            <p className="text-xs text-gray-600 mt-1">{guestEmail}</p>
                          )}
                        </div>
                      </div>

                      {/* QR Code simulado */}
                      <div className="text-center mb-4">
                        <div className="inline-block p-2 bg-white rounded-lg">
                          <div 
                            className="w-24 h-24 bg-gray-800 rounded flex items-center justify-center"
                            style={{ backgroundColor: selectedRoleData.qrColor }}
                          >
                            <QrCode className="w-16 h-16 text-white" />
                          </div>
                        </div>
                        <p className="text-xs text-sky-700 mt-2">
                          ID: {generateQRCode(selectedRoleData.id, guestName)}
                        </p>
                      </div>

                      {/* Pie de la tarjeta */}
                      <div className="text-center">
                        <p className="text-xs text-sky-700 font-medium">
                          {selectedRoleData.description}
                        </p>
                        <div className="mt-2 flex items-center justify-center gap-1">
                          <Heart className="w-3 h-3 text-pink-500" />
                          <span className="text-xs text-sky-600">Con amor, Familia García Martínez</span>
                          <Heart className="w-3 h-3 text-pink-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Botón de descarga */}
                {selectedRoleData && guestName && (
                  <Button
                    onClick={downloadPass}
                    className="w-full bg-gradient-to-r from-sky-500 to-pink-500 hover:from-sky-600 hover:to-pink-600 text-white py-3"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Descargar Tarjeta de Rol
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-16 bg-gradient-to-r from-sky-100 to-pink-100 rounded-2xl p-8 border border-sky-200">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-pink-500" />
              <h3 className="text-2xl font-bold text-sky-800">Información Importante</h3>
              <Sparkles className="w-6 h-6 text-pink-500" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl">📱</div>
                <h4 className="font-semibold text-sky-700">Código QR</h4>
                <p className="text-sm text-gray-600">Cada tarjeta incluye un código único para identificación</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl">🎨</div>
                <h4 className="font-semibold text-sky-700">Diseño Personalizado</h4>
                <p className="text-sm text-gray-600">Colores únicos para cada tipo de rol familiar</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl">💝</div>
                <h4 className="font-semibold text-sky-700">Recuerdo Especial</h4>
                <p className="text-sm text-gray-600">Una hermosa tarjeta conmemorativa del día bendecido</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/50 rounded-xl">
              <p className="text-sm text-sky-700">
                <strong>Nota:</strong> Las tarjetas pueden imprimirse en papel fotográfico para mejor calidad. 
                Se recomienda tamaño de tarjeta de crédito (85mm x 54mm) para facilitar el manejo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}