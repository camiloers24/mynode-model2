import React, { useEffect } from 'react'
import SectionWrapper from './SectionWrapper'
import logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const MobileMenu = ({ activeMenu, setActiveMenu }) => {

  useEffect(() => {
    if (activeMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [activeMenu])

  return (
    <div className={`fixed inset-0 z-[100] sm:hidden bg-zinc-950/95 backdrop-blur-3xl transition-opacity duration-300 ease-in-out ${activeMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      
      {/* Header - Usamos el Wrapper con !py-4 para alineación con el Navbar */}
      <SectionWrapper className="border-t-0 !py-4 bg-transparent">
        <div className="flex justify-between items-center w-full">
          <a href="https://mynodebtc.com/" className="flex-shrink-0">
            <img src={logo} alt="logo" className="h-8 w-auto" />
          </a>
          
          <button 
            className="p-1 cursor-pointer"
            onClick={() => setActiveMenu(false)}
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faXmark} className='text-zinc-300 hover:text-white text-2xl' />
          </button>
        </div>
      </SectionWrapper>
      
      {/* iOS Style List Menu - Usamos el Wrapper con !py-0 para alinear los links */}
      <SectionWrapper className="border-t-0 !py-0 bg-transparent">
        <div className="flex flex-col h-[calc(100vh-80px)] overflow-y-auto overscroll-contain">
          <div className="flex flex-col">
            <a 
              href="https://mynodebtc.com/download" 
              className='w-full py-5 text-2xl font-medium text-zinc-200 hover:text-white border-b border-white/10 transition-colors duration-200'
              onClick={() => setActiveMenu(false)}
            >
              Download
            </a>
            <a 
              href="https://mynodebtc.com/order/two" 
              className='w-full py-5 text-2xl font-medium text-orange-500 hover:text-orange-400 transition-colors duration-200'
              onClick={() => setActiveMenu(false)}
            >
              Order Now
            </a>
          </div>
        </div>
      </SectionWrapper>

    </div>
  )
}

export default MobileMenu