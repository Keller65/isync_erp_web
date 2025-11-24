import { Poppins } from 'next/font/google'
import Image from 'next/image'

const PoppinsFont = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

function Grid() {
  return (
    <section className='p-6 w-full flex flex-col items-center justify-center h-fit'>
      <div className='flex flex-col lg:w-[680px] gap-4 w-full'>
        <div className='w-full lg:w-[680px] h-auto lg:h-[460px] rounded-4xl bg-gray-100 p-6 overflow-hidden'>
          <div className='flex flex-col gap-2'>
            <h4 style={PoppinsFont.style} className='font-bold text-2xl lg:text-3xl tracking-[-1.6px]'>Sincronizacion Instantanea</h4>
            <h4 style={PoppinsFont.style} className='font-normal text-sm lg:text-[15px] tracking-[-0.3px]'>
              Información sincronizada en tiempo real entre todos tus dispositivos: siempre tendrás acceso a los datos más recientes, estés donde estés.
            </h4>
          </div>

          <Image
            src='/assets/images/cobros-module.png'
            alt='Grid'
            width={648}
            height={276}
            className='mt-6 rounded-2xl w-full lg:w-[90%] m-auto'
          />
        </div>

        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='w-full lg:w-1/2 bg-gray-100 rounded-4xl h-auto lg:h-[600px] overflow-hidden p-6'>
            <div className='flex flex-col gap-2'>
              <h4 style={PoppinsFont.style} className='font-bold text-2xl lg:text-3xl tracking-[-1.6px]'>Modulos Personalizables</h4>
              <h4 style={PoppinsFont.style} className='font-normal text-sm lg:text-[15px] tracking-[-0.3px]'>
                Personaliza y adapta los módulos según tus necesidades específicas para optimizar tu flujo de trabajo y productividad.
              </h4>
            </div>

            <Image
              src='/assets/images/analitycs-module.png'
              alt='Grid'
              width={648}
              height={276}
              className='mt-6 rounded-2xl w-full m-auto'
            />
          </div>

          <div className='w-full lg:w-1/2 bg-gray-100 rounded-4xl h-auto lg:h-[600px] overflow-hidden p-6'>
            <div className='flex flex-col gap-2'>
              <h4 style={PoppinsFont.style} className='font-bold text-2xl lg:text-3xl tracking-[-1.6px]'>Tienda Online</h4>
              <h4 style={PoppinsFont.style} className='font-normal text-sm lg:text-[15px] tracking-[-0.3px]'>
                Gestiona tu tienda en línea de manera eficiente con nuestro módulo dedicado, diseñado para facilitar las ventas y el inventario.
              </h4>
            </div>

            <Image
              src='/assets/images/shop-module.png'
              alt='Grid'
              width={648}
              height={276}
              className='mt-6 rounded-2xl w-full m-auto'
            />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Grid