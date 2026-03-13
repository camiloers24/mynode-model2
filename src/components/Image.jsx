import React from 'react'
import SectionWrapper from './SectionWrapper'
import source from '../assets/MyNode UI.png'

const Image = () => {
  return (
    <SectionWrapper id='ui-experience' className="!py-24 md:!py-40">
      <div className='relative group'>
        
        {/* Resplandor ambiental detrás de la ventana */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-orange-500/10 blur-[120px] rounded-full z-0 pointer-events-none transition-opacity duration-1000 group-hover:opacity-100 opacity-50"></div>

        {/* CONTENEDOR MAESTRO DE LA VENTANA (macOS Frame) */}
        <div className="relative z-10 max-w-6xl mx-auto overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.7)] bg-[#0A0A0A]">
          
          {/* BARRA DE TÍTULO (macOS Style) */}
          <div className="flex items-center justify-between px-5 py-4 bg-zinc-900/50 backdrop-blur-md border-b border-white/5">
            {/* Semáforo de Apple */}
            <div className="flex gap-2.5">
              <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
            </div>

            {/* URL / Título de ventana sutil */}
            <div className="hidden sm:flex items-center px-4 py-1.5 bg-black/40 border border-white/5 rounded-lg w-1/2 justify-center">
              <p className="text-[10px] text-zinc-500 font-medium tracking-wide">
                mynode.local
              </p>
            </div>

            {/* Espaciador para balancear el layout */}
            <div className="w-16"></div>
          </div>

          {/* LA IMAGEN (El UI de MyNode) */}
          <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              src={source}
              alt="MyNode User Interface"
              loading="lazy"
            />
          </div>
        </div>

        {/* Caption sutil abajo de la ventana */}
        <div className="mt-16 text-center">
          <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em] mb-3">
            Interface Experience
          </p>
          <h3 className="text-white text-2xl font-bold tracking-tight">
            Control your node like a pro.
          </h3>
        </div>

      </div>
    </SectionWrapper>
  )
}

export default Image