import { navItems } from '@/utils/data'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

type NavbarProps = {
    navIsOpen: boolean;
    handleNavToggle: () => void;
}

const Navbar = ({ navIsOpen, handleNavToggle }: NavbarProps) => {
  return (
      <nav className='container mx-auto px-4 lg:py-2 z-99'>
          <div className='flex items-center justify-between'>
              <Link href='/' className='text-2xl font-bold main-title'>
                Hilana Festival
              </Link>
              <ul className='hidden lg:flex items-center gap-x-4'> 
                  {navItems.map((item) => {
                      const { id, name, href } = item
                      return (
                        <li key={id}>
                          <Link href={href} className='text-lg font-medium transition ease-in-out duration-150 hover:text-[#00008B]'>
                            {name}
                          </Link>
                        </li>
                      )
                  })}
              </ul>

              <div className='hidden lg:block'>
                  <Link href='/reserve' className='bg-[#00008B] text-white px-8 py-2 rounded-md hover:bg-[#053b78] transition ease-in-out duration-150 text-lg font-semibold'>
                    Reserve
                  </Link>
              </div>

              <div className='grid lg:hidden place-items-center'>
                  <button type='button' className='text-[#171717] cursor-pointer' onClick={handleNavToggle}>
                      {
                          navIsOpen ? <X size={26} /> : <Menu size={26} />
                      }
                  </button>
              </div>

            </div>
    </nav>
  )
}

export default Navbar