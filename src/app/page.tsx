
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Footer } from '@/components/Footer'
import { GoodAfternoon } from '@/components/GoodAfternoon'
import { ModeFor } from '@/components/ModeFor'
import { SideBar } from '@/components/SideBar'

export default function Home() {
  return (
    <div className="h-screen flex flex-col  ">

      <div className="flex flex-1 ">

        <aside className="w-72 bg-zinc-950 p-6">
          <SideBar />

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
            <GoodAfternoon />
            <GoodAfternoon />
            <GoodAfternoon />
            <GoodAfternoon />
            <GoodAfternoon />
            <GoodAfternoon />
          </div>

          <h2 className='font-semibold text-2xl mt-10'> Mode for Arthur </h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <ModeFor/>
            <ModeFor/>
            <ModeFor/>
            <ModeFor/>
            <ModeFor/>
          </div>
        </main>

      </div>

      <Footer />
    </div>
  )
}
