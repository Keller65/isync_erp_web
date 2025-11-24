import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding y redes sociales */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">iSync</h2>
            <p className="text-gray-400 text-sm mb-4">
              Simplificando la gestión empresarial con herramientas modernas y seguras.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Enlaces de producto */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Producto</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/payment" className="hover:underline">Pagos</a></li>
              <li><a href="/card" className="hover:underline">Tarjetas</a></li>
              <li><a href="/pricing" className="hover:underline">Precios</a></li>
            </ul>
          </div>

          {/* Enlaces de soporte */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Soporte</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/help" className="hover:underline">Ayuda</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/contact" className="hover:underline">Contacto</a></li>
            </ul>
          </div>

          {/* Suscripción al boletín */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Suscríbete</h3>
            <p className="text-gray-400 text-sm mb-3">Recibe novedades y actualizaciones.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="footer-email" className="sr-only">Correo electrónico</label>
              <input
                id="footer-email"
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-3 py-2 rounded bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded text-white transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} iSync. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}