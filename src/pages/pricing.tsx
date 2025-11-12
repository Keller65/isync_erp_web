import Navbar from "../components/app/Navbar"
import { Nata_Sans } from 'next/font/google'

const nataSans = Nata_Sans({ subsets: ['latin'] })

function Pricing() {

  const plans = [
    {
      name: "Plan Mensual",
      description: "Licencia por dispositivo - Facturación mensual",
      price: 150,
      period: "mes",
      features: [
        "Licencia por dispositivo",
        "Compatible con Android e iOS",
        "Todas las funciones incluidas",
        "Gestión completa de pedidos",
        "Gestión de rutas optimizada",
        "Reportes y análisis",
        "Soporte técnico",
        "Actualizaciones automáticas",
        "Sin compromisos a largo plazo"
      ],
      popular: false
    },
    {
      name: "Plan Anual",
      description: "Licencia por dispositivo - Facturación anual",
      price: 500,
      period: "año",
      features: [
        "Licencia por dispositivo",
        "Compatible con Android e iOS",
        "Todas las funciones incluidas",
        "Gestión completa de pedidos",
        "Gestión de rutas optimizada",
        "Reportes y análisis avanzados",
        "Soporte prioritario",
        "Actualizaciones automáticas",
        "Ahorro del 72% vs mensual",
        "Facturación anual"
      ],
      popular: true
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
              Licencias por dispositivo
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              Elige entre facturación mensual o anual. Cada licencia cubre un dispositivo.
            </p>
            
            {/* Platform Icons */}
            <div className="flex justify-center items-center space-x-8">
              <div className="flex items-center space-x-2">
                <svg className="w-8 h-8 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1518-.5972.416.416 0 00-.5972.1518l-2.0223 3.5024c-1.5025-.6852-3.1917-1.0652-4.9308-1.0652-1.7391 0-3.4283.38-4.9308 1.0652L5.2535 5.8526a.4161.4161 0 00-.5972-.1518.416.416 0 00-.1518.5972L6.4818 9.3214C2.6888 11.5127 0 15.559 0 20.2273h24C24 15.559 21.3112 11.5127 17.8772 9.3214z"/>
                </svg>
                <span className="text-sm text-gray-600 font-medium">Android</span>
              </div>
              
              <div className="w-px h-6 bg-gray-300"></div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-8 h-8 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="text-sm text-gray-600 font-medium">iOS</span>
              </div>
            </div>
          </div>



          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                        {plan.price}
                      </span>
                      <span className="text-gray-500 ml-1 text-sm">
                        /{plan.period}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Por dispositivo
                    </p>
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