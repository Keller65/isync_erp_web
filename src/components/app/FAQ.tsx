import { Nata_Sans } from 'next/font/google'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const nataSans = Nata_Sans({ subsets: ['latin'] })

interface FAQItem {
  question: string
  answer: string
}

function FAQ() {

  const faqData: FAQItem[] = [
    {
      question: "¿Cómo se integra iSync ERP con nuestro sistema actual de contabilidad?",
      answer: "iSync ERP cuenta con conectores nativos para los principales sistemas contables como QuickBooks, SAP, y sistemas locales hondureños. Nuestro equipo técnico realiza la migración de datos sin interrumpir sus operaciones actuales. El proceso incluye mapeo de cuentas, sincronización automática y validación de datos para garantizar la integridad de la información."
    },
    {
      question: "¿Qué sucede con nuestros datos actuales durante la migración?",
      answer: "Realizamos una migración completa y segura de todos sus datos existentes. Incluimos clientes, proveedores, inventario, historial de ventas y registros contables. El proceso se realiza en horarios no laborales y mantenemos respaldos completos. Sus datos permanecen seguros y accesibles durante todo el proceso de transición."
    },
    {
      question: "¿Pueden nuestros empleados acceder al sistema desde diferentes ubicaciones?",
      answer: "Sí, iSync ERP es una solución basada en la nube que permite acceso seguro desde cualquier ubicación con internet. Sus empleados pueden trabajar desde oficina, casa o campo usando cualquier dispositivo. Incluimos controles de acceso por roles y autenticación de dos factores para mantener la seguridad de su información empresarial."
    },
    {
      question: "¿Qué tipo de soporte técnico ofrecen después de la implementación?",
      answer: "Ofrecemos soporte técnico completo que incluye: chat en vivo durante horario laboral, soporte telefónico, base de conocimientos en línea, y sesiones de entrenamiento personalizadas. Para planes empresariales incluimos un gerente de cuenta dedicado y soporte prioritario 24/7. También proporcionamos actualizaciones automáticas sin costo adicional."
    },
    {
      question: "¿Cómo manejan la facturación electrónica en Honduras?",
      answer: "iSync ERP cumple completamente con las regulaciones de facturación electrónica de Honduras (SAR/DEI). Generamos automáticamente facturas con CAI válido, calculamos impuestos según normativas locales, y enviamos reportes directamente a las autoridades fiscales. Mantenemos actualización constante con los cambios en la legislación tributaria hondureña."
    },
    {
      question: "¿Pueden personalizar el sistema según nuestras necesidades específicas?",
      answer: "Absolutamente. iSync ERP es altamente personalizable. Podemos adaptar flujos de trabajo, crear campos personalizados, diseñar reportes específicos para su industria, e integrar con sistemas terceros que ya utilicen. Nuestro equipo de desarrollo trabaja con usted para asegurar que el sistema se adapte perfectamente a sus procesos de negocio únicos."
    }
  ]

  return (
    <section className={`py-16 px-4 bg-white ${nataSans.className}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            TRUSTED BY
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Preguntas<br />
            Frecuentes
          </h2>
        </div>

        {/* FAQ Items */}
        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-5 text-left hover:bg-gray-50 transition-all duration-300 data-[state=open]:bg-gray-50 [&[data-state=open]>svg]:rotate-45">
                <span className="text-lg font-medium text-gray-900 pr-4 text-left">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQ