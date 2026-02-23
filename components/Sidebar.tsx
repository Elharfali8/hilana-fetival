import { navItems } from '@/utils/data';
import Link from 'next/link';
import React from 'react'

type SidebarProps = {
    navIsOpen: boolean;
}

const Sidebar = ({ navIsOpen }: SidebarProps) => {
  return (
      <aside 
        className={`fixed top-16 left-0 w-full h-screen bg-slate-100 z-50 transform transition-transform duration-500 ease-in-out ${
          navIsOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
          <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Menu</h2>
              <nav>
                  <ul className="space-y-4">
                      {navItems.map((item) => {
                          const { id, name, href } = item
                          
                          return (
                              <li key={id}>
                                  <Link href={href} className="block text-lg font-medium hover:text-[#00008B]">
                                    {name}
                                  </Link>
                              </li>
                          )
                     })}
                  </ul>
                  <div className='flex items-center justify-start mt-8'>
                      <Link href='/reserve' className='bg-[#00008B] text-white  py-2 px-12 rounded-md hover:bg-[#053b78] transition ease-in-out duration-150 text-lg font-semibold'>
                    Reserve
                  </Link>
                  </div>
              </nav>
          </div>
    </aside>
  )
}

export default Sidebar