import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from 'next/image';

import album from '../assets/snop dog.jpg';
export function Footer(){

  return(
    <footer className="bg-zinc-800 border-t border-zinc-700  px-6 py-4 flex items-center justify-between">
    <div className='flex item-center gap-3'>
      <Image src={album} alt='Capa da musica' width={40} height={40} quality={100} className='w-full' />
      <div className='flex flex-col '>
        <strong className='font-normal'> P.I.M.P. </strong>
        <span className='text-xs text-zinc-400'> 50 Cent e Snoop Dogg </span>
      </div>
    </div>

    <div className='flex flex-col item-center gap-2'>
      <div className='flex items-center gap-6 '>
        <Shuffle size={20} className='text-zinc-200' />
        <SkipBack size={20} className='text-zinc-200' />
        <div className='flex items-center'>
          <button className='w-10 h-10 flex items-center justify-center pl-1 S  rounded-full bg-white text-black ml-auto  '>
            <Play />
          </button>
        </div>
        <SkipForward size={20} className='text-zinc-200' />
        <Repeat size={20} className='text-zinc-200' />
      </div>
      <div className='flex items-center gap-2'>
        <span className='text-xs text-zinc-400'>0:31</span>
        <div className='h-1 rounded-full w-96 bg-zinc-600'>

          <div className='h-1 rounded-full bg-zinc-200 w-40'></div>
        </div>
        <span className='text-xs text-zinc-400'>4:58</span>
      </div>
    </div>
    <div className='flex items-center gap-4'>
      <Mic2 size={20} />
      <LayoutList size={20} />
      <Laptop2 size={20} />
      <div className='flex items-center gap-2'>
        <Volume />
        <div className='h-1 rounded-full w-24 bg-zinc-600 '>
        <div className='h-1 rounded-full bg-zinc-200 w-5'></div>
          </div> 

      </div>
      <Maximize2 size={20} />


    </div>
  </footer>
  )
}