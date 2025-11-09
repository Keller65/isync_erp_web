import Navbar from "../components/app/Navbar"
import { Nata_Sans } from 'next/font/google'
import { useState } from 'react'

const nataSans = Nata_Sans({ subsets: ['latin'] })

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Básico",
      description: "Ideal para pequeñas empresas",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "Hasta 5 usuarios",
        "Gestión de pedidos básica",
        "Reportes básicos",
        "Soporte por email",
        "1GB de almacenamiento"
      ],
      popular: false
    },
    {
      name: "Profesional",
      description: "Para empresas en crecimiento",
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        "Hasta 25 usuarios",
        "Gestión avanzada de pedidos",
        "Gestión de rutas optimizada",
        "Reportes avanzados",
        "Soporte prioritario",
        "10GB de almacenamiento",
        "Integración con APIs",
        "Dashboard personalizado"
      ],
      popular: true
    },
    {
      name: "Empresarial",
      description: "Para grandes organizaciones",
      monthlyPrice: 149,
      annualPrice: 1490,
      features: [
        "Usuarios ilimitados",
        "Todas las funciones incluidas",
        "Gestión multi-sucursal",
        "Análisis predictivo",
        "Soporte 24/7",
        "100GB de almacenamiento",
        "Integraciones personalizadas",
        "Gerente de cuenta dedicado",
        "SLA garantizado"
      ],
      popular: false
    }
  ]

  return (
    <>
      <Navbar />

      <main className={`min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 ${nataSans.className}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Planes y Precios
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elige el plan perfecto para tu empresa. Todos los planes incluyen actualizaciones gratuitas y soporte técnico.
            </p>
          </div>

          {/* Toggle Mensual/Anual */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-full flex items-center">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  !isAnnual 
                    ? 'bg-white text-gray-900 shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Mensual
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full transition-all duration-300 relative ${
                  isAnnual 
                    ? 'bg-white text-gray-900 shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Anual
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  -17%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular 
                    ? 'ring-2 ring-blue-500 scale-105' 
                    : 'hover:scale-105'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">
                        $
                      </span>
                      <span className="text-5xl font-bold text-gray-900">
                        {isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600 ml-2">
                        /mes
                      </span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-green-600 mt-1">
                        Facturado anualmente (${plan.annualPrice}/año)
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg 
                          className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border-2 border-gray-200 hover:border-gray-300'
                  }`}>
                    {plan.popular ? 'Comenzar Ahora' : 'Seleccionar Plan'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">
              ¿Necesitas más de 100 usuarios? <a href="#" className="text-blue-500 hover:underline">Contáctanos</a> para precios personalizados.
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                30 días de garantía
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Cancela cuando quieras
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                SSL seguro
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Pricing