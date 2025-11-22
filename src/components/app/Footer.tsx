export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Sección de suscripción */}
        <div className="bg-[#1a3d59] text-white rounded-lg p-8 mb-12 shadow-lg flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Suscríbete a nuestro boletín</h2>
            <p className="text-base">Recibe actualizaciones, consejos y noticias directamente en tu correo.</p>
          </div>
          <form className="flex items-center space-x-4">
            <input
              type="email"
              placeholder="Ingresa tu correo"
              className="py-3 px-4 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button className="bg-white text-[#1a3d59] py-3 px-6 rounded-lg font-semibold hover:bg-green-100 transition">
              Suscribirse
            </button>
          </form>
        </div>

        {/* Enlaces organizados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Características</h3>
            <ul className="space-y-3">
              <li><a href="/payment" className="text-base text-gray-600 hover:text-green-700 transition">Pagos</a></li>
              <li><a href="/card" className="text-base text-gray-600 hover:text-green-700 transition">Tarjetas</a></li>
              <li><a href="/pricing" className="text-base text-gray-600 hover:text-green-700 transition">Precios</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Soporte</h3>
            <ul className="space-y-3">
              <li><a href="/help" className="text-base text-gray-600 hover:text-green-700 transition">Ayuda</a></li>
              <li><a href="/faq" className="text-base text-gray-600 hover:text-green-700 transition">FAQ</a></li>
              <li><a href="/contact" className="text-base text-gray-600 hover:text-green-700 transition">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Legal</h3>
            <ul className="space-y-3">
              <li><a href="/privacy" className="text-base text-gray-600 hover:text-green-700 transition">Política de Privacidad</a></li>
              <li><a href="/terms" className="text-base text-gray-600 hover:text-green-700 transition">Términos de Servicio</a></li>
              <li><a href="/cookies" className="text-base text-gray-600 hover:text-green-700 transition">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Marca y derechos reservados */}
        <div className="mt-12 text-center">
          <p className="text-base text-gray-600">&copy; {new Date().getFullYear()} iSync ERP. Simplificando tu gestión empresarial.</p>
        </div>
      </div>
    </footer>
  );
}