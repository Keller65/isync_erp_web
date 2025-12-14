'use client';

import React from 'react';
import Navbar from '@/components/app/Navbar';
import Image from 'next/image';
import { db } from '../../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Head from 'next/head';

/* ---------------------- */
/* Schema de validación */
/* ---------------------- */
const contactSchema = z.object({
  name: z.string().min(3, 'Ingresa tu nombre completo'),
  email: z.string().email('Correo inválido'),
  companyName: z.string().min(2, 'Nombre de empresa requerido'),
  rtn: z.string().min(8, 'RTN inválido'),
  phone: z.string().min(8, 'Teléfono inválido'),
  system: z.enum(['SAP B1', 'CONTPAQI']),
  devices: z.boolean(),
  licenses: z.number().min(1).optional(),
  contractType: z.enum(['Mensual', 'Anual', 'Permanente']),
  message: z.string().min(10, 'El mensaje es muy corto'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      system: 'SAP B1',
      devices: true,
      contractType: 'Mensual',
    },
  });

  const devices = watch('devices');

  const onSubmit = async (data: ContactFormData) => {
    await addDoc(collection(db, 'contacts'), {
      ...data,
      createdAt: serverTimestamp(),
    });
    reset();
  };

  return (
    <>
      <Navbar />
      <Head>
        <title>Contacto | iSync – Integración con SAP Business One</title>

        <meta
          name="description"
          content="Contacta con iSync y conecta tu empresa con SAP Business One o CONTPAQi. Automatiza pedidos, ventas y cobranzas desde el móvil."
        />

        <meta
          name="keywords"
          content="SAP Business One, CONTPAQi, integración SAP, app para SAP B1, ventas móviles, iSync"
        />

        <link rel="canonical" href="https://isynchn.com/contacto" />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="iSync" />

        {/* Open Graph */}
        <meta property="og:title" content="Contacto | iSync" />
        <meta
          property="og:description"
          content="Solicita información y conecta tu empresa con SAP Business One o CONTPAQi."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://isync.com/contacto" />
        <meta property="og:image" content="https://isync.com/og-contact.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto | iSync" />
        <meta
          name="twitter:description"
          content="Automatiza tu empresa con iSync y SAP Business One."
        />
        <meta name="twitter:image" content="https://isync.com/og-contact.png" />
      </Head>

      <div className="min-h-screen flex justify-center px-6 py-16 bg-white p-4">
        <section className="w-full max-w-7xl mt-6 bg-white rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-12 p-10">

          {/* ---------------------- */}
          {/* Información */}
          {/* ---------------------- */}
          <div className="space-y-6">
            <div className="size-12 flex items-center justify-center rounded-xl bg-[#1a3d59]">
              <Image
                src="/iSync_logo_white.svg"
                alt="Logo iSync"
                width={32}
                height={32}
              />
            </div>

            <h1 className="text-3xl font-bold text-gray-900">
              Contáctanos
            </h1>

            <p className="text-gray-600 leading-relaxed">
              Cuéntanos sobre tu empresa y te ayudaremos a integrar iSync
              con tu sistema contable de forma segura y eficiente.
            </p>

            <p className="text-sm text-gray-500">
              Solución móvil para ventas, pedidos y cobranzas integrada con SAP Business One y CONTPAQi.
            </p>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>✔ Integración directa con SAP Business One</li>
              <li>✔ Ventas y pedidos desde el móvil</li>
              <li>✔ Impresión de recibos y documentos</li>
              <li>✔ Seguridad y control empresarial</li>
            </ul>

            <div className="space-y-2 text-sm text-gray-700 pt-4">
              <p><strong>Email:</strong> isynchn@gmail.com</p>
              <p><strong>Teléfono:</strong> +504 9595-5397</p>
            </div>

            <p className="text-xs text-gray-500">
              Diseñado para empresas que usan ERP y equipos comerciales en campo.
            </p>
          </div>

          {/* ---------------------- */}
          {/* Formulario */}
          {/* ---------------------- */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">

            {/* Datos de contacto */}
            <div className="space-y-6 border-b pb-8">
              <h3 className="text-lg font-semibold text-gray-900">
                Datos de contacto
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Nombre completo" error={errors.name?.message}>
                  <input {...register('name')} />
                </Input>

                <Input label="Correo electrónico" error={errors.email?.message}>
                  <input type="email" {...register('email')} />
                </Input>
              </div>

              <Input label="Teléfono" error={errors.phone?.message}>
                <input {...register('phone')} />
              </Input>
            </div>

            {/* Empresa */}
            <div className="space-y-6 border-b pb-8">
              <h3 className="text-lg font-semibold text-gray-900">
                Información de la empresa
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Nombre de la empresa" error={errors.companyName?.message}>
                  <input {...register('companyName')} />
                </Input>

                <Input label="RTN" error={errors.rtn?.message}>
                  <input {...register('rtn')} />
                </Input>
              </div>
            </div>

            {/* Servicio */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Detalles del servicio
              </h3>

              <Select label="Sistema" {...register('system')}>
                <option value="SAP B1">SAP Business One</option>
                <option value="CONTPAQI">CONTPAQi</option>
              </Select>

              <Select
                label="Dispositivos ilimitados"
                {...register('devices', { setValueAs: v => v === 'true' })}
              >
                <option value="true">Sí</option>
                <option value="false">No</option>
              </Select>

              {!devices && (
                <Input
                  label="Cantidad de licencias"
                  error={errors.licenses?.message}
                >
                  <input type="number" {...register('licenses', { valueAsNumber: true })} />
                </Input>
              )}

              <Select label="Tipo de contratación" {...register('contractType')}>
                <option value="Mensual">Mensual</option>
                <option value="Anual">Anual</option>
                <option value="Permanente">Permanente</option>
              </Select>

              <Textarea label="Mensaje" error={errors.message?.message}>
                <textarea rows={4} {...register('message')} />
              </Textarea>
            </div>

            {/* Feedback */}
            {isSubmitSuccessful && (
              <p className="text-green-600 text-sm">
                Mensaje enviado correctamente. Pronto nos pondremos en contacto contigo.
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-[#1a3d59] py-3 text-white font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {isSubmitting ? 'Enviando...' : 'Solicitar información'}
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

function Input({ label, error, children }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      <div className="rounded-xl border border-gray-300 bg-gray-50 focus-within:bg-white focus-within:border-gray-900 transition">
        {React.cloneElement(children, {
          className:
            'w-full bg-transparent px-4 py-3 text-sm outline-none',
        })}
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function Select({ label, children, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      <select
        {...props}
        className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none focus:bg-white focus:border-gray-900 transition"
      >
        {children}
      </select>
    </div>
  );
}

function Textarea({ label, error, children }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">
        {label}
      </label>
      {React.cloneElement(children, {
        className:
          'w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none focus:bg-white focus:border-gray-900 transition',
      })}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
