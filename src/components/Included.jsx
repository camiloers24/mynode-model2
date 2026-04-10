import React from 'react'
import SectionWrapper from './SectionWrapper' 

const Included = () => {

  const includesList = [
    { img: '/included/software.svg', text: 'MyNode Premium Software' },
    { img: '/included/support.svg', text: '1 Year Premium Support' },
    { img: '/included/external-drive.svg', text: 'No need for external drive' },
    { img: '/included/electric-plug.svg', text: 'Power Cord' },
    { img: '/included/ethernet.svg', text: 'Ethernet Cable' },
    { img: '/included/fast.svg', text: '14.8x Faster Initial Block' },
  ]

  return (
    /* DESIGN: py-40 para dar espacio premium. 
       BG: Gradiente sutil para dar profundidad sin verse gris.
    */
    <SectionWrapper id='included'>
        
        <h2 
          id="included-title" 
          className='mb-20 md:mb-32 text-4xl md:text-6xl font-bold text-center tracking-tight text-white leading-[1.1]'
        >
          What's Included
        </h2>
        
        {/* Hardware Showcase Image */}
        <div className='relative flex justify-center mb-24 md:mb-40'>
          
          {/* Brillo sutil centrado */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[400px] bg-zinc-500/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
          
          <img 
            className='relative z-10 block w-full max-w-4xl drop-shadow-2xl'
            src="/exploded-specs.webp" 
            alt="MyNode Model Two exploded hardware view" 
            loading='lazy' 
          />
        </div>

        {/* Feature Grid - Alineado al max-w-7xl del título */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          
          {includesList.map((element, index) => (
            <div 
              key={index} 
              className='flex items-center p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all duration-300 backdrop-blur-md group'
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white/5 rounded-full mr-5 border border-white/5">
                <img 
                  className='w-6 h-6 object-contain opacity-70 group-hover:opacity-100 transition-opacity' 
                  src={element.img} 
                  alt="" 
                />
              </div>
              
              <p className='text-lg font-medium text-zinc-300 leading-tight group-hover:text-white transition-colors'>
                {element.text}
              </p>
            </div>
          ))}

        </div>

    </SectionWrapper>
  )
}

export default Included