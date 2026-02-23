'use client'

import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Header = () => {
    const [navIsOpen, setNavIsOpen] = useState<boolean>(false)

    const handleNavToggle = () => {
        setNavIsOpen((prev) => !prev)
    }

  return (
      <header className='w-full py-4 fixed top-0 left-0 right-0 shadow' >
          <Navbar navIsOpen={navIsOpen} handleNavToggle={handleNavToggle} />
          <Sidebar navIsOpen={navIsOpen} />
    </header>
  )
}

export default Header