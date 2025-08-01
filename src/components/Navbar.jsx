import React, { useState } from 'react'

import logo from '../assets/logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <nav className="py-3 px-4 sticky top-0 z-50 transition-all duration-300 bg-mn-black/80 backdrop-blur-none sm:backdrop-blur-xl">    
      <div className='container flex justify-between items-center mx-auto'>
        <a href="https://mynodebtc.com/">
          <img src={logo} alt="logo" />
        </a>
        <div className='hidden sm:flex items-center gap-x-4'>
          <a href="https://mynodebtc.com/download" className='px-3 py-2 border-2 hover:border-mn-black hover:text-mn-black hover:bg-white rounded-lg transition-all'>
            Download
          </a>
          <a href="https://mynodebtc.com/order/two" className='px-3 py-2 bg-gradient-to-t from-mn-orange to-mn-orange-gradient hover:from-mn-black hover:to-mn-black text-mn-black hover:text-white border-2 hover:border-2 border-mn-black hover:border-mn-orange-gradient rounded-lg transition-all'>
            Order Now
          </a>
        </div>
        <FontAwesomeIcon icon={faBars} className='sm:hidden' onClick={() => { setActiveMenu(!activeMenu) }} />

        <div className={'absolute h-full bg-mn-black pt-4 inset-y-0 right-0 transition-all ' + (activeMenu ? '' : 'hidden ')}>
          <div className="bg-mn-black ps-4 pe-4 pb-4 flex flex-col gap-y-5 duration-300">

            <FontAwesomeIcon icon={faXmark} className='' onClick={() => { setActiveMenu(!activeMenu) }} />
            <a href="https://mynodebtc.com/download" className='px-3 py-2 border-2 hover:border-mn-black hover:text-mn-black hover:bg-white rounded-lg transition-all'>
              Download
            </a>
            <a href="https://mynodebtc.com/order/two" className='px-3 py-2 bg-gradient-to-t from-mn-orange to-mn-orange-gradient hover:from-mn-black hover:to-mn-black text-mn-black hover:text-white hover:border-2 hover:border-mn-orange-gradient rounded-lg transition-all'>
              Order Now
            </a>
          </div>

        </div>


      </div>
    </nav>
  )
}

export default Navbar