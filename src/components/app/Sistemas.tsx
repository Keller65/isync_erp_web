import Image from 'next/image';

export default function Sistemas() {
  return (
    <section className='h-fit w-full bg-white p-6 flex flex-col items-center justify-center'>
      <h2 className='text-4xl font-bold text-center text-gray-800 mb-8'>Sistemas Compatibles</h2>

      <div className='flex gap-10 items-center justify-center flex-wrap'>
        <div className="w-[340px] h-[200px] bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/images/SAP-B1.png"
            alt="Screenshot 1"
            width={300}
            height={200}
          />
        </div>

        <div className="w-[340px] h-[200px] bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/images/contpaqi.png"
            alt="Screenshot 1"
            width={300}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}