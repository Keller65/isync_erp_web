import React, { useState } from 'react';
import Navbar from '@/components/app/Navbar';
import Image from 'next/image';

function ContactPage() {
  const [isUnlimitedDevices, setIsUnlimitedDevices] = useState("Sí");

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex justify-center mt-12">
        <section className="py-16 px-6 w-full max-w-6xl bg-white rounded-lg grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-6">
            <div className='size-[46px] flex items-center justify-center rounded-xl bg-[#1a3d59]'>
              <Image
                src="/iSync_logo_white.svg"
                alt="Logo iSync"
                width={36}
                height={36}
                className="w-9 h-9"
              />
            </div>

            <h2 className="text-4xl font-bold text-gray-900">Contáctanos</h2>
            <p className="text-lg text-gray-600">Estamos aquí para ayudarte. Envíanos tus preguntas o comentarios.</p>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Email:</strong> isynchn@gmail.com
              </p>
              <p className="text-gray-700">
                <strong>Teléfono:</strong> +504 9595-5397
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <i className="fab fa-xing"></i>
              </a>
            </div>
          </div>

          {/* Formulario de contacto */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 block w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 block w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Nombre de la Empresa
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="mt-2 block w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                  placeholder="Nombre de la empresa"
                />
              </div>

              <div>
                <label htmlFor="rtn" className="block text-sm font-medium text-gray-700">
                  RTN
                </label>
                <input
                  type="text"
                  id="rtn"
                  name="rtn"
                  className="mt-2 block w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                  placeholder="RTN de la empresa"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-2 block w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                placeholder="Número de teléfono"
              />
            </div>

            <div>
              <label htmlFor="system" className="block text-sm font-medium text-gray-700">
                Sistema
              </label>
              <select
                id="system"
                name="system"
                className="mt-2 block w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
              >
                <option value="SAP B1">SAP B1</option>
                <option value="CONTPAQI">CONTPAQI</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="devices" className="block text-sm font-medium text-gray-700">
                  Dispositivos Ilimitados
                </label>
                <select
                  id="devices"
                  name="devices"
                  className="mt-2 block w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                  value={isUnlimitedDevices}
                  onChange={(e) => setIsUnlimitedDevices(e.target.value)}
                >
                  <option value="Sí">Sí</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div>
                <label htmlFor="licenses" className="block text-sm font-medium text-gray-700">
                  Cantidad de Licencias a Comprar
                </label>
                <input
                  type="number"
                  id="licenses"
                  name="licenses"
                  className="mt-2 block w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                  placeholder="Número de licencias"
                  disabled={isUnlimitedDevices === "Sí"}
                />
              </div>
            </div>

            <div>
              <label htmlFor="contractType" className="block text-sm font-medium text-gray-700">
                Tipo de Contratación
              </label>
              <select
                id="contractType"
                name="contractType"
                className="mt-2 block w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
              >
                <option value="Mensual">Mensual</option>
                <option value="Anual">Anual</option>
                <option value="Permanente">Permanente</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-2 block w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto inline-flex justify-center py-3 px-6 border border-transparent rounded-lg text-lg font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default ContactPage;