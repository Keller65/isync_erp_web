import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { Nata_Sans } from "next/font/google";
import { ShoppingCart, FileText, ChartBar, MapPin, Package, Bell, Fingerprint, Printer, Cardholder, FilePdf } from "phosphor-react";
import Link from "next/link";

const nataSans = Nata_Sans({ subsets: ["latin"] });

const beneficios = [
  {
    icono: <ShoppingCart size={32} weight="regular" className="text-white" />,
    titulo: "Pedidos y Carrito de Compras",
    descripcion:
      "Gestiona pedidos de clientes en tiempo real, optimizando el flujo de ventas y asegurando transacciones rápidas y organizadas desde la app móvil.",
  },
  {
    icono: <Cardholder size={32} weight="regular" className="text-white" />,
    titulo: "Cobros y Facturación en PDF",
    descripcion:
      "Genera recibos y facturas digitales en PDF, envíalos y gestiona todo el proceso de cobro integrado con el ERP.",
  },
  {
    icono: <Printer size={32} weight="regular" className="text-white" />,
    titulo: "Impresión de Recibos",
    descripcion:
      "Imprime recibos directamente desde la app o en impresoras térmicas conectadas, facilitando entregas y comprobantes en el punto de venta.",
  },
  {
    icono: <ChartBar size={32} weight="regular" className="text-white" />,
    titulo: "Dashboard Comparativo",
    descripcion:
      "Panel visual interactivo para comparar ventas, cobros y desempeño, con reportes claros y gráficos intuitivos para mejores decisiones.",
  },
  {
    icono: <MapPin size={32} weight="regular" className="text-white" />,
    titulo: "Rutas y Geolocalización",
    descripcion:
      "Crea rutas optimizadas y actualiza ubicaciones en tiempo real, mejorando la logística y el seguimiento de operaciones comerciales.",
  },
  {
    icono: <FilePdf size={32} weight="regular" className="text-white" />,
    titulo: "Exportación de Catálogo de Productos",
    descripcion:
      "Organiza y exporta el catálogo por categorías, compártelo en PDF y presenta tus productos de forma profesional.",
  },
  {
    icono: <Bell size={32} weight="regular" className="text-white" />,
    titulo: "Notificaciones Push (FCM)",
    descripcion:
      "Mantén informados a clientes y equipo con notificaciones push inmediatas y personalizadas en tiempo real sobre pedidos, promociones y alertas importantes.",
  },
  {
    icono: <Fingerprint size={28} weight="regular" className="text-white" />,
    titulo: "Seguridad Biométrica",
    descripcion:
      "Acceso seguro y rápido mediante Face ID o huella digital, protegiendo la información sensible de tu empresa.",
  },
  {
    icono: <FileText size={32} weight="regular" className="text-white" />,
    titulo: "Cotizaciones",
    descripcion:
      "Crea y gestiona cotizaciones profesionales, permite revisiones y aprobaciones para convertirlas fácilmente en pedidos.",
  },
  {
    icono: <Package size={32} weight="regular" className="text-white" />,
    titulo: "Consignaciones",
    descripcion:
      "Administra productos en consignación, lleva control de stock consignado y facilita la facturación y retorno según acuerdos.",
  },
];

const firstRow = beneficios.slice(0, Math.ceil(beneficios.length / 2));
const secondRow = beneficios.slice(Math.ceil(beneficios.length / 2));


type Beneficio = {
  icono: React.ReactNode;
  titulo: string;
  descripcion: string;
};

const BeneficioCard = ({
  icono,
  titulo,
  descripcion,
}: Beneficio) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-3xl border p-3",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex gap-3 mb-3 items-center">
        <div className="bg-[#1A3D59] p-2 rounded-xl">
          <div>{icono}</div>
        </div>
        <figcaption className="text-lg font-semibold text-gray-900 leading-tight dark:text-white">
          {titulo}
        </figcaption>
      </div>
      <div className="flex flex-col">
        <blockquote className="text-gray-600 text-base dark:text-white/70">{descripcion}</blockquote>
      </div>
    </figure>
  )
}

function Beneficios() {
  return (
    <section className={`w-full min-h-[60vh] py-16 px-2 sm:px-4 md:px-0 ${nataSans.className}`}>

      <div className="flex flex-col m-auto gap-4 mb-12">
        <h2 className="text-4xl font-bold text-center text-gray-900">Beneficios de iSync</h2>
        <Link className="m-auto text-center" href="/beneficios">Ver todos los beneficios</Link>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((beneficio, index) => (
            <BeneficioCard key={`first-${index}`} {...beneficio} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((beneficio, index) => (
            <BeneficioCard key={`second-${index}`} {...beneficio} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </section>
  );
}

export default Beneficios;