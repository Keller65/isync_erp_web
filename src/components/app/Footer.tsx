import { FacebookLogo, InstagramLogo, WhatsappLogo, CheckCircle } from "phosphor-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const whatsappCita = "https://wa.me/50495955397?text=Agendar%20Cita";
  const whatsappCotizar = "https://wa.me/50495955397?text=Cotizar";

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">

        {/* Sección principal de Contacto e Invitación - Estilo similar a la parte superior de la imagen */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8">

          <div className="mb-6 md:mb-0">
            {/* Logo/Marca */}
            <div className="flex items-center mb-6">
              {/* Icono azul principal */}
              <div className="h-10 w-10 p-1 mr-2 bg-[#1a3d59] rounded-lg flex items-center justify-center">
                <Image
                  src="/iSync_logo_white.svg"
                  alt="Logo iSync"
                  width={36}
                  height={36}
                  className="w-9 h-9"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-900">iSync</h2>
            </div>

            {/* Información de contacto (simulando la estructura de email y teléfono) */}
            <div className="grid grid-cols-2 gap-x-8 text-sm text-gray-600">
              <div>
                <p className="font-semibold text-gray-500">Email</p>
                <p className="text-gray-800">isynchn@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold text-gray-500">Teléfono</p>
                <p className="text-gray-800">+504 9595-5397</p>
              </div>
            </div>
          </div>

          {/* Botones de Llamada a la Acción (CTA) */}
          <div className="flex flex-col gap-3">
            <div className="text-right md:text-left mb-4 md:mb-0">
              <p className="text-lg font-semibold text-gray-900">
                Potencia tus ventas <span className="hidden md:inline">ahora</span> mismo
              </p>
            </div>
            <div className="flex gap-4">
              <Link target="_blank" href={whatsappCotizar} className="px-6 cursor-pointer py-2 bg-[#1a3d59] rounded-full text-white">
                Cotizar
              </Link>
              <Link target="_blank" href={whatsappCita} className="px-6 cursor-pointer py-2 border border-[#1a3d59] hover:bg-gray-100 rounded-full text-[#1a3d59]">
                Agendar Cita
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-300" /> {/* Línea separadora */}

        {/* Sección Inferior: Disponibilidad y Redes Sociales */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">

          {/* Texto de disponibilidad (Usando CheckCircle de Phosphor Icons) */}
          <div className="flex items-center mb-4 md:mb-0">
            <CheckCircle size={20} weight="fill" className="mr-2 text-[#1a3d59]" />
            Disponible en Android
          </div>

          {/* Redes Sociales (Usando Phosphor Icons) */}
          <div className="flex space-x-3">

            {/* Facebook */}
            <Link target="_blank" href="https://www.facebook.com/profile.php?id=61585131111294" aria-label="Facebook" className="p-2 border border-gray-300 rounded-md hover:border-[#1a3d59] hover:text-[#1a3d59] transition-colors">
              <FacebookLogo size={20} />
            </Link>

            {/* Instagram */}
            <Link target="_blank" href="https://www.instagram.com/isynchn/" aria-label="Instagram" className="p-2 border border-gray-300 rounded-md hover:border-[#1a3d59] hover:text-[#1a3d59] transition-colors">
              <InstagramLogo size={20} />
            </Link>

            {/* WhatsApp */}
            <Link target="_blank" href="https://wa.me/50495955397" aria-label="Whatsapp" className="p-2 border border-gray-300 rounded-md hover:border-[#1a3d59] hover:text-[#1a3d59] transition-colors">
              <WhatsappLogo size={20} />
            </Link>

          </div>
        </div>

        {/* Derechos de autor */}
        <div className="mt-8 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} iSync. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}