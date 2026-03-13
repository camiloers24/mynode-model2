import React from 'react'
import SectionWrapper from './SectionWrapper'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    /* Usamos reveal={false} para que el footer sea estático y no "baile" al final.
       Bajamos el padding a !py-12 para que sea una franja elegante. */
    <SectionWrapper id="footer" reveal={false} className="!py-12 border-t border-white/5 bg-black">
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Identidad simple */}
        <div className="flex items-center gap-6">
          <img src={logo} alt="MyNode" className="h-6 w-auto opacity-50" />
          <div className="h-4 w-px bg-white/10 hidden md:block"></div>
          <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">
            © 2026 MyNode. All Rights Reserved.
          </p>
        </div>

        {/* Links mínimos y Status */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <nav className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            <a href="https://mynodebtc.com/" className="hover:text-white transition-colors">Main Site</a>
            <a href="https://mynodebtc.com/support" className="hover:text-white transition-colors">Support</a>
          </nav>

          
        </div>

      </div>

    </SectionWrapper>
  )
}

export default Footer