import { Play } from "lucide-react";
import Image from 'next/image';
import album from '../assets/snop dog.jpg';

export function GoodAfternoon() {

  return (

    < >
      <a className='bg-white/5 rounded group  flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
        <Image src={album} alt='Capa da musica' width={100} height={100} />
        <strong>I Wanna Thank Me</strong>
        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
          <Play />
        </button>
      </a>
    </>


  )
}