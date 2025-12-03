import { ShoppingCart, Cardholder, Printer, ChartBar, MapPin, FilePdf, Bell, Fingerprint, FileText, Package, Users, MagnifyingGlass, ArchiveBox, Tag } from "phosphor-react";
import Navbar from "@/components/app/Navbar";
import Head from "next/head";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

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
	{
		icono: <Users size={32} weight="regular" className="text-white" />,
		titulo: "Cartera de Clientes Asignados",
		descripcion:
			"Los usuarios pueden acceder fácilmente a su cartera de clientes asignados, permitiendo un seguimiento personalizado y eficiente.",
	},
	{
		icono: <MagnifyingGlass size={32} weight="regular" className="text-white" />,
		titulo: "Vista Detallada de Productos",
		descripcion:
			"Accede a información completa de cada producto, incluyendo especificaciones, precios y disponibilidad, para tomar decisiones informadas.",
	},
	{
		icono: <ArchiveBox size={32} weight="regular" className="text-white" />,
		titulo: "Control de Inventarios",
		descripcion:
			"Monitorea el stock en tiempo real por almacén, reduce errores y optimiza la reposición de productos para mantener la disponibilidad.",
	},
	{
		icono: <Tag size={32} weight="regular" className="text-white" />,
		titulo: "Gestión de Precios y Descuentos",
		descripcion:
			"Modifica precios de productos directamente desde la app y muestra descuentos por cantidad para facilitar la venta.",
	},
];

export default function Beneficios() {
	return (
		<>
			<Navbar />
			<Head>
				<title>Beneficios de iSync</title>
				<meta
					name="description"
					content="Descubre los beneficios clave de nuestra aplicación móvil integrada con ERP para optimizar la gestión de ventas, inventarios y clientes."
				/>
			</Head>

			<section className="bg-white p-8 mt-18">
				<h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
					Beneficios de Nuestra Aplicación
				</h1>

			

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{beneficios.map((beneficio, index) => (
						<div
							key={index}
							className="bg-gray-100 max-w-md min-w-xs rounded-lg p-6 flex flex-col items-center text-center"
						>
							<div className="w-16 h-16 bg-[#1a3d59] rounded-full flex items-center justify-center mb-4">
								{beneficio.icono}
							</div>
							<h2 className="text-xl font-semibold text-gray-800 mb-2">
								{beneficio.titulo}
							</h2>
							<p className="text-gray-600 text-sm">
								{beneficio.descripcion}
							</p>
						</div>
					))}
				</div>
			</section>
		</>
	);
}