import Image from 'next/image'
import { BlurFade } from "@/components/ui/blur-fade"

function MainScreen() {
  return (
    <main className="h-[100vh] flex flex-col gap-4 items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

      <div className="gap-4 mb-[300px] flex flex-col items-center justify-center">
        <section className="flex flex-col gap-1 items-center justify-center">
          <BlurFade delay={0.25} inView>
            <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Más agilidad, menos errores, <br /> todo sincronizado.
            </h2>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <span className="text-xl tracking-tighter text-center text-pretty sm:text-3xl xl:text-xl/none">
              Optimiza tu negocio en Honduras con nuestra app móvil
            </span>
          </BlurFade>
        </section>

        <div className="flex gap-4 mt-4">
          <button className="bg-[#1A3D59] text-white px-6 py-2 rounded-full cursor-pointer hover:bg-gray-800 transition">
            Comenzar
          </button>

          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full cursor-pointer hover:bg-gray-300">
            Solicitar Demo
          </button>
        </div>
      </div>

      <picture className="absolute bottom-[-420px] overflow-hidden flex">
        <Image
          src="/assets/images/iphone_home.png"
          alt="iSync ERP Mobile App"
          width={400}
          height={700}
          priority
          quality={100}
        />

        <Image
          src="/assets/images/iphone_locations.png"
          alt="iSync ERP Mobile App"
          width={400}
          height={700}
          priority
          quality={100}
        />
      </picture>
    </main>
  )
}

export default MainScreen