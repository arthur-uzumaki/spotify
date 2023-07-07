import { HomeIcon, Library, Search } from "lucide-react";

export function SideBar(){
  return(
    
    <>
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
    </>
  )
}