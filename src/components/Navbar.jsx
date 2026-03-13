import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper' // El componente maestro
import logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <>
      {/* Usamos el SectionWrapper como base.
        1. 'sticky top-0 z-50' para que flote.
        2. '!py-4' (con el signo !) para obligar a que el padding sea de Navbar y no de sección.
        3. 'bg-black/70 backdrop-blur-2xl' para el efecto cristal.
        4. 'border-t-0 border-b' porque solo queremos línea abajo.
      */}
      <SectionWrapper 
        id="navbar-container" 
        reveal={false}
        className="sticky top-0 z-50 !py-4 bg-black/70 backdrop-blur-2xl border-t-0 border-b border-white/5"
      >
        <nav className='flex justify-between items-center w-full'>
          
          <a href="https://mynodebtc.com/" className="relative z-50 flex-shrink-0">
            <img src={logo} alt="mynode logo" className="h-8 w-auto hover:opacity-80 transition-opacity" />
          </a>

          {/* Desktop Menu */}
          <div className='hidden sm:flex items-center gap-x-10'>
            <a 
              href="https://mynodebtc.com/download" 
              className='text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200'
            >
              Download
            </a>
            <a 
              href="https://mynodebtc.com/order/two" 
              className='px-6 py-2.5 text-sm font-semibold bg-orange-500 text-black rounded-full hover:bg-orange-400 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.2)]'
            >
              Order Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="sm:hidden p-2 cursor-pointer relative z-50"
            onClick={() => setActiveMenu(true)}
          >
            <FontAwesomeIcon icon={faBars} className='text-zinc-300 hover:text-white text-xl' />
          </button>

        </nav>
      </SectionWrapper>

      <MobileMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
    </>
  )
}

export default Navbar