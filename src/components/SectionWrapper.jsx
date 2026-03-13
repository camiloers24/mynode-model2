import React from 'react'
import { Reveal } from './Reveal'

const SectionWrapper = ({ children, id, className = "", reveal = true }) => {
  return (
    <section 
      id={id} 
      className={`w-full py-24 md:py-40 border-t border-white/5 bg-black ${className}`}
    >
      
      <div className='max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-24 w-full'>
        
        {reveal ? (
          <Reveal>
            {children}
          </Reveal>
        ) : (
          children
        )}
      </div>
    </section>
  )
}

export default SectionWrapper