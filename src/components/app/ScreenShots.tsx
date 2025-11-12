import { Nata_Sans } from "next/font/google";
import Image from "next/image";

const nataSans = Nata_Sans({ subsets: ["latin"] });

const screenshots = [
  {
    image: "/assets/application/1.jpg",
    title: "Gestión completa de pedidos",
    description: "Administra todos tus pedidos desde una interfaz intuitiva y moderna."
  },
  {
    image: "/assets/application/2.jpg",
    title: "Rutas optimizadas en tiempo real",
    description: "Planifica y optimiza rutas de entrega con geolocalización avanzada."
  },
  {
    image: "/assets/application/3.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/4.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/5.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/6.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/7.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/8.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/9.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/10.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/11.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/12.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/13.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/14.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/15.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/16.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/17.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/18.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/19.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/20.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/21.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/22.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  },
  {
    image: "/assets/application/23.jpg",
    title: "Análisis y reportes detallados",
    description: "Obtén insights valiosos con dashboards interactivos y reportes en tiempo real."
  }
];

function ScreenShots() {
  return (
    <section className={`w-full py-20 px-4 bg-gray-100 ${nataSans.className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Experiencia móvil optimizada
        </h2>
        <p className="text-xl text-center mb-16 text-gray-600 max-w-3xl mx-auto">
          Descubre cómo iSync ERP revoluciona la gestión empresarial con una interfaz móvil potente y fácil de usar
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              {/* Image with gradient overlay */}
              <div className="relative mb-8 transform transition-all duration-300">
                <div className="relative w-64 h-[500px] mx-auto overflow-hidden rounded-2xl">
                  <Image
                    src={screenshot.image}
                    alt={screenshot.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Gradient overlay at bottom */}
                </div>
              </div>

              {/* Content below image */}
              <div className="">
                <p className="text-gray-800 font-semibold text-base">
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScreenShots;