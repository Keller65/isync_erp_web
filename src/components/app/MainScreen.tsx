import Image from 'next/image'
import { BlurFade } from "@/components/ui/blur-fade"

function MainScreen() {
  return (
    <main className="h-[100vh] flex flex-col gap-4 items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

      <div className="gap-4 mb-[300px] flex flex-col items-center justify-center">
        <div className='size-[46px] flex items-center justify-center rounded-xl bg-[#1a3d59]'>
          <Image
            src="/iSync_logo_white.svg"
            alt="Logo iSync"
            width={36}
            height={36}
            className="w-9 h-9"
          />
        </div>

        <section className="flex flex-col gap-4 items-center justify-center">
          <BlurFade delay={0.25} inView>
            <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Más agilidad, menos errores, <br /> todo sincronizado.
            </h2>
          </BlurFade>
          <BlurFade className='text-center' delay={0.25 * 2} inView>
            <span className="text-md text-gray-400 tracking-tighter text-center sm:text-3xl xl:text-xl/none">
              Optimiza tu negocio en Honduras con nuestra app móvil
            </span>
          </BlurFade>
        </section>
      </div>

      <picture className="absolute bottom-[-420px] overflow-hidden flex">
        <Image
          src="/assets/images/iphone_home.png"
          alt="iSync Mobile App"
          width={380}
          height={700}
          priority
          quality={100}
        />

        <Image
          src="/assets/images/iphone_locations.png"
          alt="iSync Mobile App"
          width={380}
          height={700}
          priority
          quality={100}
        />
      </picture>
    </main>
  )
}

export default MainScreen