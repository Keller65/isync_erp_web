import Head from 'next/head'
import Navbar from '@/components/app/Navbar'

function TerminosYCondiciones() {
  return (
    <>
      <Head>
        <title>Términos y Condiciones — iSync</title>
        <meta name="description" content="Términos y condiciones del servicio iSync" />
      </Head>
      <Navbar />

      <main className="min-h-screen dark:bg-gray-900 flex items-start justify-start py-12 px-0">
        <article className="w-6xl m-auto dark:bg-gray-800 text-gray-900 dark:text-gray-100 dark:ring-gray-800 p-6 sm:p-12">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold">Términos y Condiciones</h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">iSync — Última actualización 30/12/2025</p>
          </header>

          <section className="space-y-6 text-sm leading-relaxed">
            <p>
              Estos Términos y Condiciones describen las reglas y políticas de uso
              del servicio iSync. Al acceder o usar el servicio usted acepta estos
              términos.
            </p>

            <div>
              <h2 className="text-base font-medium">Servicios</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">iSync ofrece herramientas de sincronización y gestión de datos. Las características pueden variar según el plan y se describen en la información comercial correspondiente.</p>
            </div>

            <div>
              <h2 className="text-base font-medium">Cuentas y seguridad</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Debe mantener su información de registro actualizada y no compartir credenciales. Notifique inmediatamente cualquier uso no autorizado.</p>
            </div>

            <div>
              <h2 className="text-base font-medium">Suscripciones y pagos</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Los servicios de pago se facturan según el plan elegido. El usuario autoriza los cargos aplicables y es responsable de impuestos asociados.</p>
            </div>

            <div>
              <h2 className="text-base font-medium">Cancelación y reembolsos</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Puede cancelar su suscripción en cualquier momento. Las políticas de reembolso dependen del plan y se detallan en las condiciones específicas de compra.</p>
            </div>

            <div>
              <h2 className="text-base font-medium">Retención y eliminación de datos</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Conservamos sus datos mientras sea necesario para prestar el servicio o cumplir obligaciones legales. Puede solicitar la eliminación o exportación de sus datos siguiendo los procedimientos de privacidad.</p>
            </div>

            <div>
              <h2 className="text-base font-medium">Seguridad</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Implementamos medidas técnicas y organizativas razonables para proteger los datos, pero no garantizamos absoluta invulnerabilidad frente a ataques o fallas.</p>
            </div>

            <div>
              <h2 className="text-base font-medium">Soporte</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Ofrecemos soporte técnico a través de los canales indicados en la sección de contacto. Los tiempos y alcance del soporte dependen del plan contratado.</p>
            </div>

            <div>
              <h2 className="text-base font-medium">Enlaces y terceros</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Podemos incluir enlaces a servicios de terceros; iSync no controla ni se responsabiliza por sus contenidos o políticas.</p>
            </div>

            <div>
              <h2 className="text-base font-medium">Acuerdo de Licencia de Usuario Final (EULA)</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Este Acuerdo de Licencia de Usuario Final (&quot;EULA&quot;) es un acuerdo legal entre usted (ya sea un individuo o una entidad) y iSync con respecto al software iSync que lo acompaña o que usted ha descargado.
                Al instalar, copiar o usar el software iSync, usted acepta estar sujeto a los términos de este EULA.
                Si no está de acuerdo con los términos de este EULA, no instale, copie ni use el software.
              </p>
              <h3 className="text-base font-medium mt-4">1. Concesión de Licencia</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                iSync le otorga una licencia revocable, no exclusiva, intransferible y limitada para descargar, instalar y usar el software exclusivamente para sus fines personales y no comerciales estrictamente de acuerdo con los términos de este EULA.
              </p>
              <h3 className="text-base font-medium mt-4">2. Restricciones</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Usted acepta no, y no permitirá que otros, realicen las siguientes acciones:
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Licenciar, vender, alquilar, arrendar, asignar, distribuir, transmitir, alojar, subcontratar, divulgar o explotar comercialmente el software o poner el software a disposición de terceros.</li>
                  <li>Modificar, realizar trabajos derivados, desensamblar, descifrar, descompilar o aplicar ingeniería inversa a cualquier parte del software.</li>
                  <li>Eliminar, alterar u ocultar cualquier aviso de propiedad (incluido cualquier aviso de derechos de autor o marca registrada) de iSync o sus afiliados, socios, proveedores o licenciantes del software.</li>
                </ul>
              </p>
              <h3 className="text-base font-medium mt-4">3. Modificaciones al Software</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                iSync se reserva el derecho de modificar, suspender o descontinuar, temporal o permanentemente, el software o cualquier servicio al que se conecte, con o sin previo aviso y sin responsabilidad ante usted.
              </p>
              <h3 className="text-base font-medium mt-4">4. Rescisión</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Este EULA será efectivo a partir de la fecha de su primera descarga, instalación o uso del software y continuará en vigor hasta su terminación. Usted puede terminar este EULA dejando de usar el software.
                Este EULA terminará inmediatamente y sin previo aviso de iSync si usted no cumple con alguna disposición de este EULA.
                Tras la terminación, deberá eliminar todo el software de su dispositivo móvil y de escritorio.
              </p>
              <h3 className="text-base font-medium mt-4">5. Sin Garantía</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Usted reconoce y acepta expresamente que el uso del software es bajo su propio riesgo y que todo el riesgo en cuanto a la calidad, el rendimiento, la precisión y el esfuerzo satisfactorios recae en usted.
                En la medida máxima permitida por la ley aplicable, el software y los servicios se proporcionan &quot;tal cual&quot; y &quot;según disponibilidad&quot;, con todos los defectos y sin garantía de ningún tipo.
              </p>
            </div>

            <div>
              <h2 className="text-base font-medium">Modificaciones</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Podemos actualizar estos términos; publicaremos la versión vigente y, cuando proceda, notificaremos cambios relevantes.</p>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}

export default TerminosYCondiciones