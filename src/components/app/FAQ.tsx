import { Nata_Sans } from 'next/font/google'
import React, { useRef, useState, useEffect } from 'react'

const nataSans = Nata_Sans({ subsets: ['latin'] })

interface FAQItem {
  question: string
  answer: string
  category?: string
}

// ------------------------------------------------
// Subcomponente interno para la lógica de animación
// ------------------------------------------------
interface FAQCardProps {
  item: FAQItem
}

// Mantenemos esta lógica interna para aislar la animación de cada tarjeta.
const FAQCard: React.FC<FAQCardProps> = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Definición del Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Deja de observar una vez que el elemento ha aparecido
          if (cardRef.current) {
            observer.unobserve(cardRef.current)
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2, // 20% del elemento visible
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    // Función de limpieza
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <article
      ref={cardRef}
      className={`
        group relative flex flex-col
        rounded-2xl border border-slate-200/80 bg-white/80
        p-5 md:p-6
        overflow-hidden
        transition-all duration-700 ease-out 
        // Clases de animación:
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} 
      `}
    >
      {/* Categoría / chip */}
      {item.category && (
        <span className="inline-flex w-fit tracking-[-0.2px] items-center rounded-full bg-slate-100 text-[10px] font-medium text-slate-500 px-2 py-0.5 mb-3 uppercase">
          {item.category}
        </span>
      )}

      {/* Pregunta */}
      <h3
        className="
          text-sm md:text-base font-semibold text-slate-900 mb-2
          leading-snug
        "
      >
        {item.question}
      </h3>

      {/* Respuesta */}
      <p
        className="
          text-sm text-slate-600 leading-relaxed
          transition-all duration-300 ease-out
          group-hover:text-slate-700
        "
      >
        {item.answer}
      </p>

      {/* Hint de interacción */}
      <div
        className="
          mt-3 flex items-center justify-between text-[11px] text-slate-400
        "
      >
        <span className="inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Habla con un asesor
          <span className="text-slate-300 group-hover:translate-x-0.5 transition-transform duration-300">
            →
          </span>
        </span>
      </div>
    </article>
  )
}

// ------------------------------------------------
// Componente Principal FAQ
// ------------------------------------------------
function FAQ() {
  const faqData: FAQItem[] = [
    // Gestión de ventas y pedidos
    {
      question: "¿La gestión de ventas cubre desde la cotización hasta el cobro final?",
      answer: "Sí. iSync te permite manejar todo el ciclo comercial: cotizaciones, pedidos, documentos en línea, gestión de cobros y seguimiento del estado de cada operación, manteniendo todo centralizado y trazable.",
      category: "Ventas"
    },
    {
      question: "¿Podemos editar pedidos después de haberlos creado?",
      answer: "Sí. Puedes editar pedidos siempre que estén en estado editable según las reglas configuradas. Es posible ajustar precios, productos, descuentos y condiciones antes de confirmar o facturar.",
      category: "Ventas"
    },
    {
      question: "¿El sistema permite manejar diferentes listas de precios por cliente?",
      answer: "Sí. Puedes asignar listas de precios por cliente, canal de venta, zona o tipo de cliente. El sistema selecciona automáticamente la lista correspondiente al crear un nuevo pedido.",
      category: "Precios"
    },

    // Carrito inteligente de compras
    {
      question: "¿Podemos cambiar el precio de un producto directamente desde el carrito?",
      answer: "Sí. El carrito inteligente permite ajustar precios, aplicar descuentos y gestionar promociones desde la misma pantalla, recalculando totales e impuestos en tiempo real según los permisos del usuario.",
      category: "Carrito inteligente"
    },
    {
      question: "¿Es posible configurar descuentos automáticos y promociones?",
      answer: "Sí. Puedes definir reglas de descuentos por volumen, temporadas, listas de precios u ofertas especiales. El sistema aplica las condiciones automáticamente al agregar productos al carrito.",
      category: "Carrito inteligente"
    },

    // Documentos en línea
    {
      question: "¿Qué tipos de documentos se pueden gestionar en línea?",
      answer: "Puedes gestionar pedidos, cotizaciones, facturas, recibos y otros documentos comerciales en línea. Todos se almacenan en formato digital, accesibles desde cualquier dispositivo autorizado.",
      category: "Documentos en línea"
    },
    {
      question: "¿Se pueden enviar documentos al cliente por correo o WhatsApp?",
      answer: "Sí. Desde iSync puedes compartir documentos en PDF (como pedidos, cotizaciones o estados de cuenta) directamente por correo o WhatsApp, sin salir de la aplicación.",
      category: "Documentos en línea"
    },

    // Gestión de cobros
    {
      question: "¿Qué métodos de pago soporta la gestión de cobros?",
      answer: "Puedes registrar cobros en efectivo, tarjeta, transferencia, depósito y cheques. El sistema vincula cada pago con el cliente y los documentos correspondientes, actualizando saldos en tiempo real.",
      category: "Cobros"
    },
    {
      question: "¿Podemos ver saldos pendientes y el historial de pagos por cliente?",
      answer: "Sí. Cada cliente cuenta con su estado de cuenta, donde puedes ver facturas abiertas, saldos pendientes, abonos realizados e historial completo de cobros.",
      category: "Cobros"
    },

    // GPS y rutas
    {
      question: "¿Podemos actualizar la ubicación GPS de los clientes desde la app?",
      answer: "Sí. Los vendedores pueden actualizar la dirección y el punto GPS del cliente directamente en campo, manteniendo la base de datos siempre al día y mejorando la precisión de las rutas.",
      category: "Rutas y GPS"
    },
    {
      question: "¿El sistema ayuda a planificar rutas de visita a clientes?",
      answer: "Sí. iSync usa las direcciones y coordenadas GPS para ayudarte a planificar rutas optimizadas entre el vendedor y los clientes, facilitando las visitas y entregas.",
      category: "Rutas y GPS"
    },

    // Catálogo digital en PDF
    {
      question: "¿El catálogo digital en PDF se actualiza con nuestros productos y precios?",
      answer: "Sí. El catálogo se genera con la información de tu base de datos: productos, descripciones, imágenes y precios vigentes. Puedes actualizarlo cuando cambien tus listas de precios u ofertas.",
      category: "Catálogo PDF"
    },
    {
      question: "¿Podemos compartir el catálogo en PDF con nuestros clientes?",
      answer: "Claro. Puedes descargarlo, imprimirlo o compartirlo por correo y WhatsApp, permitiendo que tus clientes vean tu catálogo actualizado sin necesidad de material impreso.",
      category: "Catálogo PDF"
    },

    // Dashboard KPI interactivo
    {
      question: "¿Qué tipo de indicadores muestra el dashboard KPI interactivo?",
      answer: "Incluye métricas como ventas por período, por vendedor, por cliente o zona, productos más vendidos, cumplimiento de metas y más. Todo en gráficas interactivas y fáciles de interpretar.",
      category: "Dashboard KPI"
    },
    {
      question: "¿Se pueden personalizar los KPI del dashboard?",
      answer: "Sí. Podemos adaptar los indicadores a las necesidades de tu empresa: filtros por fecha, zona, vendedor, canal de venta y otros criterios relevantes para tu operación.",
      category: "Dashboard KPI"
    },

    // Seguridad y acceso
    {
      question: "¿Podemos definir permisos para cada tipo de usuario?",
      answer: "Sí. iSync permite configurar roles y permisos para administradores, supervisores y vendedores. Puedes controlar quién ve qué información y qué acciones puede realizar dentro del sistema.",
      category: "Seguridad"
    },
    {
      question: "¿El sistema registra quién hizo cambios en los documentos?",
      answer: "Sí. Existe historial de acciones clave: creación, edición, cancelación y cobros, para mantener trazabilidad y control interno sobre cada operación.",
      category: "Seguridad"
    },

    // Extra: integración, soporte, facturación HN, personalización
    {
      question: "¿Cómo se integra iSync ERP con nuestro sistema actual de contabilidad?",
      answer: "iSync ERP puede integrarse con sistemas contables y ERPs mediante conectores y APIs. Nuestro equipo técnico se encarga del mapeo de cuentas, sincronización y validación de datos para mantener la integridad de la información sin interrumpir tus operaciones.",
      category: "Integración"
    },
    {
      question: "¿Qué sucede con nuestros datos actuales durante la migración?",
      answer: "Realizamos una migración estructurada de clientes, productos, inventario e historial de ventas. Trabajamos con respaldos y ambientes de prueba para asegurar que la transición sea segura y controlada.",
      category: "Implementación"
    },
    {
      question: "¿Pueden nuestros empleados acceder al sistema desde diferentes ubicaciones?",
      answer: "Sí. iSync está pensado para equipos en campo y oficina. Pueden acceder desde cualquier lugar con conexión a internet, con control de acceso por usuario y rol.",
      category: "Acceso"
    },
    {
      question: "¿Qué tipo de soporte técnico ofrecen después de la implementación?",
      answer: "Ofrecemos soporte continuo a través de canales como chat, correo y sesiones remotas. Para cuentas empresariales se puede asignar un contacto técnico dedicado y niveles de servicio acordados.",
      category: "Soporte"
    },
    {
      question: "¿Cómo manejan la facturación electrónica en Honduras?",
      answer: "iSync se adapta a los requisitos fiscales locales, incluyendo facturación electrónica según normativa vigente y estructuras de impuestos configurables de acuerdo con lo que exige la autoridad tributaria.",
      category: "Facturación"
    },
    {
      question: "¿Pueden personalizar el sistema según nuestras necesidades específicas?",
      answer: "Sí. iSync es flexible: se pueden ajustar flujos, permisos, campos personalizados y reportes. Nuestro equipo evalúa contigo los requerimientos para adaptar el sistema a tus procesos.",
      category: "Personalización"
    },
  ]

  return (
    <section
      className={`
        relative py-20 px-4
        bg-gradient-to-b from-slate-50 via-white to-slate-50
        ${nataSans.className}
      `}
    >
      {/* Glow de fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-10 h-40 bg-gradient-to-r from-sky-100/40 via-transparent to-indigo-100/40 blur-3xl opacity-70" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 shadow-sm backdrop-blur-sm">
            FAQ · iSync
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Preguntas frecuentes
          </h2>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-500">
            Respuestas claras a las preguntas más comunes sobre implementación, uso diario, ventas, rutas, cobros y seguridad en iSync.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Renderiza las tarjetas usando el subcomponente interno */}
          {faqData.map((item, index) => (
            <FAQCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ