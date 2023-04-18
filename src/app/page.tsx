
import { ChevronLeft, ChevronRight, Home as HomeIcon, Library, Play, Search } from 'lucide-react'
import Image from 'next/image'

import album from '../assets/snop dog.jpg'

export default function Home() {
  return (
    <div className="h-screen flex flex-col  ">

      <div className="flex flex-1 ">

        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>

          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm  font-semibold text-zinc-00'>
              <HomeIcon />
              Home
            </a>

            <a href="" className='flex items-center gap-3 text-sm  font-semibold text-zinc-100'>
              <Search />
              Search
            </a>

            <a href="" className='flex items-center gap-3 text-sm  font-semibold text-zinc-100'>
              <Library />
              Your Library
            </a>

          </nav>

          <nav className='mt-6 pt border-t border-zinc-800 p-6 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hits Brasil</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Aniver Funk</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>M roundedy #1</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Top Brasil</a>
          </nav>

        </aside>

        <main className="flex-1 p-6">

          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-4'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-5'>
            <a className='bg-white/5 rounded group  flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src={album} alt='Capa da musica' width={100} height={100} />
              <strong>I Wanna Thank Me</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a className='bg-white/5 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src={album} alt='Capa da musica' width={100} height={100} />
              <strong>I Wanna Thank Me</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a className='bg-white/5 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src={album} alt='Capa da musica' width={100} height={100} />
              <strong>I Wanna Thank Me</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a className='bg-white/5 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src={album} alt='Capa da musica' width={100} height={100} />
              <strong>I Wanna Thank Me</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a className='bg-white/5 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src={album} alt='Capa da musica' width={100} height={100} />
              <strong>I Wanna Thank Me</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

            <a className='bg-white/5 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src={album} alt='Capa da musica' width={100} height={100} />
              <strong>I Wanna Thank Me</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>

          </div>

          <h2 className='font-semibold text-2xl mt-10'> Mode for Arthur </h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>

            <a href='' className='bg-white/5 p-2 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              
              <Image src={album} alt='Capa da musica' width={120} height={120} quality={100} className='w-full' />
                <strong className='font-semibold '>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400 '>Snoop Dogs in red and more</span>
            </a>

            <a href='' className='bg-white/5 p-2 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              
              <Image src={album} alt='Capa da musica' width={120} height={120} quality={100} className='w-full' />
                <strong className='font-semibold '>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400 '>Snoop Dogs in red and more</span>
            </a>

            <a href='' className='bg-white/5 p-2 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              
              <Image src={album} alt='Capa da musica' width={120} height={120} quality={100} className='w-full' />
                <strong className='font-semibold '>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400 '>Snoop Dogs in red and more</span>
            </a>

            <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              
              <Image src={album} alt='Capa da musica' width={120} height={120} quality={100} className='w-full' />
                <strong className='font-semibold '>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400 '>Snoop Dogs in red and more</span>
            </a>

            <a href='' className='bg-white/5 p-2 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              
              <Image src={album} alt='Capa da musica' width={120} height={120} quality={100} className='w-full' />
                <strong className='font-semibold '>Daily Mix 1</strong>
                <span className='text-sm text-zinc-400 '>Snoop Dogs in red and more</span>
            </a>

          </div>

        </main>

      </div>

      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 ">
        footer
      </footer>
    </div>
  )
}
