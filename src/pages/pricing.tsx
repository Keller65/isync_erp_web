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

      <main className={`min-h-screen bg-white py-20 px-4 ${nataSans.className}`}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Precios simples y transparentes
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tu negocio
            </p>
          </div>

          {/* Toggle Mensual/Anual */}
          <div className="flex justify-center mb-16">
            <div className="border border-gray-200 rounded-full p-1 flex items-center">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  !isAnnual 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Mensual
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                  isAnnual 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Anual
                {!isAnnual && (
                  <span className="absolute -top-3 -right-3 bg-green-100 text-green-700 text-xs px-1.5 py-0.5 rounded-full">
                    -17%
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative border rounded-xl transition-all duration-200 hover:shadow-lg ${
                  plan.popular 
                    ? 'border-gray-900 bg-gray-50' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Name */}
                  <h3 className="text-xl font-medium text-gray-900 mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-8">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-light text-gray-900">
                        $
                      </span>
                      <span className="text-4xl font-light text-gray-900">
                        {isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-500 ml-1 text-sm">
                        /mes
                      </span>
                    </div>
                    {isAnnual && (
                      <p className="text-xs text-gray-500 mt-1">
                        Facturado anualmente
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <svg 
                          className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" 
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
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'border border-gray-200 text-gray-900 hover:bg-gray-50'
                  }`}>
                    Comenzar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-20">
            <p className="text-sm text-gray-500 mb-8">
              ¿Necesitas una solución personalizada? <a href="#" className="text-gray-900 hover:underline">Hablemos</a>
            </p>
            <div className="flex justify-center items-center space-x-8 text-xs text-gray-400">
              <span>30 días de prueba</span>
              <span>•</span>
              <span>Cancela cuando quieras</span>
              <span>•</span>
              <span>Soporte incluido</span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Pricing