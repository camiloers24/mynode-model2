import React from 'react'
import Model from '../assets/model-two-revb.webp'
import SectionWrapper from './SectionWrapper'

const Banner = () => {
  return (
    // Amplio padding vertical para que respire como una landing premium
    <SectionWrapper 
      id='banner' 
      className="border-t-0 !pt-16 !pb-24 md:!pt-32 md:!pb-48"
    >
        
        {/* Layout de Grid balanceado */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          
          {/* Columna de la Imagen (Hardware) */}
          <div className='order-1 lg:order-2 flex justify-center'>
            <div className='relative w-full max-w-sm md:max-w-md lg:max-w-lg'>
              {/* Opcional: Un resplandor muy sutil detrás del producto */}
              <div className="absolute inset-0 bg-orange-500/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>
              <img 
                src={Model} 
                fetchpriority="high" 
                loading="eager" 
                decoding="async"
                alt="MyNode Model Two"
                className='relative z-10 w-full h-auto drop-shadow-2xl transition-transform duration-700 hover:scale-105'
              />
            </div>
          </div>

          {/* Columna de Contenido (Copy & CTA) */}
          <div className='order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left'>
            
            {/* Título Principal */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6">
              MODEL TWO
            </h1>
            
            {/* Descripción suave y legible */}
            <p className='text-lg sm:text-xl text-zinc-400 max-w-xl leading-relaxed mb-10'>
              The Model Two is the MyNode package but better! It includes the MyNode software, support, and our most powerful hardware.
            </p>
            
            {/* Bloque de Precio */}
            <div className="flex items-center gap-x-4 mb-10 text-3xl sm:text-4xl font-semibold tracking-tight">
              <span className='text-zinc-600 line-through decoration-2 decoration-orange-500'>
                $649
              </span>
              <span className='text-zinc-500 hidden sm:block'>|</span>
              <span className='text-white'>
                $499
              </span>
            </div>
            
            {/* CTA Button - Hace match con el Nav */}
            <a 
              href='https://mynodebtc.com/order/two' 
              className='inline-block px-12 py-4 text-lg font-semibold bg-orange-500 text-black rounded-full hover:bg-orange-400 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.3)]'
            >
              Order Now
            </a>

          </div>

        </div>
    </SectionWrapper>
  )
}

export default Banner