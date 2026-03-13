import React from 'react'
import SectionWrapper from './SectionWrapper'

const Section1 = () => {
  return (
    <SectionWrapper id='run-more' className='relative !py-32 md:!py-48'>
      
      {/* Background Effect: Solo el gradiente radial para dar profundidad al negro */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_#111_0%,_black_70%)] opacity-50'></div>
      </div>
      {/* Clean Typography */}
      <div className='relative z-10 px-6 text-center max-w-4xl mx-auto'>
        <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight'>
          Run Bitcoin, Lightning, <br className="hidden sm:block" /> 
          <span className="text-zinc-500">and more!</span>
        </h2>
      </div>

    </SectionWrapper>
  )
}

export default Section1