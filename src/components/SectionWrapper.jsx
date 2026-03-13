import React from 'react'
import { Reveal } from './Reveal'

const SectionWrapper = ({ children, id, className = "", reveal = true }) => {
  return (
    <section 
      id={id} 
      className={`w-full py-24 md:py-40 border-t border-white/5 bg-black overflow-hidden ${className}`}
    >
      <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full'>
        {/* Si reveal es true, animamos. Si no, renderizamos el contenido crudo. */}
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