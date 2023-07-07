import Image from 'next/image';
import album from '../assets/snop dog.jpg';


export function ModeFor() {
  return (
    <>
      <a href='' className='bg-white/5 p-2 flex flex-col gap-2 rounded-md hover:bg-white/10'>

        <Image src={album} alt='Capa da musica' width={120} height={120} quality={100} className='w-full' />
        <strong className='font-semibold '>Daily Mix 1</strong>
        <span className='text-sm text-zinc-400 '>Snoop Dogs in red and more</span>
      </a>
    </>
  )
}