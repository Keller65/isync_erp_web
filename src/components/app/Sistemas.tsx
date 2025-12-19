import Image from 'next/image';

const SYSTEMS = [
  { name: 'SAP Business One', src: '/assets/images/SAP-B1.png', color: 'from-blue-500' },
  { name: 'CONTPAQi', src: '/assets/images/contpaqi.png', color: 'from-orange-500' },
];

export default function Sistemas() {
  return (
    <section className='overflow-hidden relative h-[90dvh] py-24 w-full bg-slate-950'>
      <style jsx>{`
        @keyframes flow {
          0% { left: -10%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 110%; opacity: 0; }
        }
        .animate-flow {
          animation: flow 3s linear infinite;
        }
      `}</style>

      <div className="absolute py-24 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
      </div>

      <div className='max-w-5xl mx-auto px-6 relative gap-30 flex flex-col'>
        <div className='text-center'>
          <h2 className='text-5xl font-black text-white mb-4 tracking-[-0.3px]'>
            Ecosistema Conectado
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            iSync actúa como el puente inteligente que sincroniza tus datos en tiempo real con los ERPs más robustos.
          </p>
        </div>

        <div className='relative flex items-center justify-center'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]' />
          </div>

          <div className='relative shadow-[0_0_60px_-15px_rgba(59,130,246,0.6)] flex items-center justify-center size-30 rounded-3xl bg-[#1a3d59] p-6 border border-white/10'>
            <Image
              src="/iSync_logo_white.svg"
              alt="Logo iSync"
              width={120}
              height={120}
              className="w-full h-full"
            />
          </div>

          <div className='absolute w-full max-w-4xl flex justify-between items-center px-4'>
            {SYSTEMS.map((sys, i) => (
              <div key={i} className='relative flex items-center'>

                {i === 1 && (
                  <div className="hidden md:block relative w-24 h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mr-4">
                    <div className="absolute top-1/2 -translate-y-1/2 w-3 h-[3px] bg-orange-400 blur-[2px] animate-flow" style={{ animationDirection: 'reverse' }} />
                  </div>
                )}

                <div className='relative group'>
                  <div className={`absolute -inset-1 bg-gradient-to-r ${i === 0 ? 'from-blue-600 to-cyan-500' : 'from-orange-600 to-yellow-500'} rounded-2xl blur-2xl opacity-10 group-hover:opacity-30 transition duration-500`}></div>
                  <div className='relative w-[240px] h-[100px] bg-zinc-900/90 border border-white/10 rounded-2xl flex items-center justify-center p-8 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/20'>
                    <Image
                      src={sys.src}
                      alt={sys.name}
                      width={200}
                      height={90}
                      className='object-contain brightness-90 group-hover:brightness-110 transition-all'
                    />
                  </div>
                </div>

                {i === 0 && (
                  <div className="hidden md:block relative w-24 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent ml-4">
                    <div className="absolute top-1/2 -translate-y-1/2 w-3 h-[3px] bg-blue-400 blur-[2px] animate-flow" />
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}