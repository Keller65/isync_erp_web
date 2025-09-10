import { Nata_Sans } from "next/font/google";
import { ShoppingCart, FileText, ChartBar, MapPin, Package, Bell, Fingerprint, Plus } from "phosphor-react";

const nataSans = Nata_Sans({ subsets: ["latin"] });

const beneficios = [
  {
    icono: <ShoppingCart size={32} weight="regular" className="text-gray-800" />,
    titulo: "Pedidos y Carrito de Compras",
    descripcion:
      "Gestiona pedidos de clientes en tiempo real, optimizando el flujo de ventas y asegurando transacciones rápidas y organizadas desde la app móvil.",
  },
  {
    icono: <FileText size={32} weight="regular" className="text-gray-800" />,
    titulo: "Cobros y Facturación en PDF",
    descripcion:
      "Genera recibos y facturas digitales en PDF, envíalos o imprímelos en impresoras térmicas, integrando todo el proceso de cobro con el ERP.",
  },
  {
    icono: <ChartBar size={32} weight="regular" className="text-gray-800" />,
    titulo: "Dashboard Comparativo",
    descripcion:
      "Panel visual interactivo para comparar ventas, cobros y desempeño, con reportes claros y gráficos intuitivos para mejores decisiones.",
  },
  {
    icono: <MapPin size={32} weight="regular" className="text-gray-800" />,
    titulo: "Rutas y Geolocalización",
    descripcion:
      "Crea rutas optimizadas y actualiza ubicaciones en tiempo real, mejorando la logística y el seguimiento de operaciones comerciales.",
  },
  {
    icono: <Package size={32} weight="regular" className="text-gray-800" />,
    titulo: "Exportación de Catálogo de Productos",
    descripcion:
      "Organiza y exporta el catálogo por categorías, compártelo en PDF y presenta tus productos de forma profesional.",
  },
  {
    icono: <Bell size={32} weight="regular" className="text-gray-800" />,
    titulo: "Notificaciones Push (FCM)",
    descripcion:
      "Mantén informados a clientes y equipo con notificaciones push inmediatas sobre pedidos, promociones y alertas importantes.",
  },
  {
    icono: <Fingerprint size={28} weight="regular" className="text-gray-800" />,
    titulo: "Seguridad Biométrica",
    descripcion:
      "Acceso seguro y rápido mediante Face ID o huella digital, protegiendo la información sensible de tu empresa.",
  },
];

function Beneficios() {
  return (
    <section className={`w-full min-h-[60vh] py-16 px-2 sm:px-4 md:px-0 bg-[#f5f6fa] ${nataSans.className}`}>
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-900">Beneficios de iSync ERP</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {beneficios.map((b, i) => (
          <div
            key={i}
            className="relative bg-white rounded-[2rem] flex flex-col justify-between min-h-[260px] p-7 transition"
          >
            <div className="flex flex-row items-start gap-3 mb-4">
              <div className="flex-shrink-0 mt-1">{b.icono}</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">{b.titulo}</h3>
            <p className="text-gray-600 text-base mb-10">{b.descripcion}</p>
            <button
              type="button"
              className="absolute bottom-5 right-5 w-9 h-9 rounded-full bg-[#333336] flex items-center justify-center border border-gray-300 hover:bg-gray-200 transition"
              aria-label="Más información"
            >
              <Plus size={22} weight="bold" className="text-[#f5f6fa]" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Beneficios;
