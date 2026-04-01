import React from 'react'
import SectionWrapper from './SectionWrapper'
import Hero3D from './Hero3D'

const Banner = () => {
  return (
    <SectionWrapper 
      id='banner' 
      // Mantenemos los paddings optimizados para que el slogan se vea en Desktop
      className="border-t-0 !pt-2 !pb-12 md:!pt-16 md:!pb-16 lg:!pt-16 lg:!pb-12"
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center'>
          
        {/* Modelo 3D — arriba en mobile, derecha en desktop */}
        <div className='order-1 lg:order-2'>
          <div className='relative w-full'>
            <div className="absolute inset-0 bg-orange-500/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>
            <Hero3D />
          </div>
        </div>

        {/* Copy — abajo en mobile, izquierda en desktop */}
        <div className='order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left px-2'>
          
          {/* TÍTULO: Aumentado a text-6xl en mobile para recuperar la fuerza visual */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none mb-4 lg:mb-6">
            MODEL TWO
          </h1>
          
          {/* PÁRRAFO: Aumentado a text-lg en mobile */}
          <p className='text-lg sm:text-xl text-zinc-400 max-w-xl leading-relaxed mb-6 lg:mb-10'>
            The Model Two is the MyNode package but better! It includes the MyNode software, support, and our most powerful hardware.
          </p>
          
          {/* PRECIO: Aumentado a text-3xl en mobile */}
          <div className="flex items-center gap-x-4 mb-6 lg:mb-10 text-3xl sm:text-4xl font-semibold tracking-tight">
            <span className='relative inline-block text-zinc-600'>
              $649
              <span className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                <span className='w-[110%] h-[6px] bg-orange-500 -rotate-[12deg] rounded-full' />
              </span>
            </span>
            <span className='text-zinc-500 hidden sm:block'>|</span>
            <span className='text-white'>$499</span>
          </div>
          
          {/* BOTÓN: Aumentado a text-lg en mobile */}
          <a 
            href='https://mynodebtc.com/order/two' 
            className='inline-block px-10 py-3 lg:px-12 lg:py-4 text-lg lg:text-xl font-semibold bg-orange-500 text-black rounded-full hover:bg-orange-400 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.3)]'
          >
            Order Now
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Banner