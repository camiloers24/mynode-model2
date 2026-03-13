import React from 'react'
import SectionWrapper from './SectionWrapper'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    /* Mantenemos reveal={false} para evitar saltos al final del scroll */
    <SectionWrapper id="footer" reveal={false} className="!py-12 border-t border-white/5 bg-black">
      
      {/* Contenedor principal: 
          Mobile: apilado vertical (flex-col) y centrado.
          Desktop: en línea (flex-row) y distribuido.
      */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        
        {/* Identidad: Logo + Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <img 
            src={logo} 
            alt="MyNode" 
            className="h-7 w-auto opacity-80" // Logo original
          />
          
          {/* Separador: Solo visible en desktop */}
          <div className="h-4 w-px bg-white/10 hidden md:block"></div>
          
          <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em] text-center">
            © 2026 MyNode. All Rights Reserved.
          </p>
        </div>

        {/* Navegación y Enlaces */}
        <nav className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          <a href="https://mynodebtc.com/" className="hover:text-white transition-colors">
            Main Site
          </a>
          <a href="https://mynodebtc.com/support" className="hover:text-white transition-colors">
            Support
          </a>
        </nav>

      </div>

    </SectionWrapper>
  )
}

export default Footer