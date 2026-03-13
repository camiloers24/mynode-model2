import React from 'react'
import SectionWrapper from './SectionWrapper' 

const Video = () => {
  return (    
    <SectionWrapper id='showcase'>
      
      <div className='relative group'>
        
        {/* Ambient Glow - Centrado y reaccionando al hover del grupo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-white/[0.05] blur-[120px] rounded-full z-0 pointer-events-none group-hover:bg-orange-500/[0.05] transition-colors duration-1000"></div>
        
        <div className='relative z-10 aspect-video w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 transition-transform duration-700 group-hover:scale-[1.01]'>
          <iframe 
            className='h-full w-full' 
            src="https://www.youtube.com/embed/22SmxolU0Uk" 
            title="MyNode Model Two Showcase" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>

      </div>

      {/* Caption alineado y sutil */}
      <div className="mt-12 text-center">
        <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em]">
          Product Showcase
        </p>
      </div>

    </SectionWrapper>
  )
}

export default Video