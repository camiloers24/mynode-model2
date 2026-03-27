import React from 'react'
import SectionWrapper from './SectionWrapper'

const ModelOneVTwo = () => {
  // Ajustamos los anchos para que sean proporcionales y no todos lleguen al 100%
  const specs = [
    {
      label: "CPU",
      m1: { text: "Raspberry Pi 4B Device", width: "12%" },
      m2: { text: "Intel N100 (Up to 3.4GHz)", width: "85%" }
    },
    {
      label: "RAM",
      m1: { text: "4GB", width: "20%" },
      m2: { text: "16GB", width: "80%" }
    },
    {
      label: "SSD STORAGE",
      m1: { text: "1 TB External SSD", width: "35%" },
      m2: { text: "2 TB NVMe SSD", width: "70%" }
    },
    {
      label: "SSD SPEED",
      m1: { text: "220 MB/s", width: "6%" },
      m2: { text: "3500 MB/s Read", width: "90%" }
    }
  ]

return (
    <SectionWrapper id='compare'>      
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-32">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 flex flex-col md:flex-row items-center justify-center">
            <span>Model One</span>
            <span className="text-zinc-600 my-2 md:my-0 md:mx-4 font-light italic text-2xl md:text-5xl uppercase md:normal-case">vs</span>
            <span>Model Two</span>
          </h2>
          <p className="text-zinc-500 text-base md:text-xl max-w-xl mx-auto">
            Massive performance gains across every metric.
          </p>
        </div>

        <div className='flex flex-col gap-6'>
          {specs.map((spec, index) => (
            <div 
              key={index} 
              /* HOVER EFFECT:
                 - group: permite que los hijos reaccionen.
                 - hover:bg-zinc-800/40: aclara ligeramente el fondo.
                 - hover:border-white/20: resalta el borde.
                 - hover:scale-[1.01]: un crecimiento casi imperceptible pero elegante.
              */
              className='group p-6 md:p-10 rounded-3xl bg-zinc-900/40 border border-white/10 md:backdrop-blur-md transition-all duration-500 ease-out hover:bg-zinc-800/40 hover:border-white/20 hover:scale-[1.005] hover:shadow-2xl hover:shadow-black'
            >
              {/* Título de la especificación: Reacciona al hover del padre */}
              <h3 className='text-base md:text-lg font-black uppercase tracking-[0.15em] text-zinc-400 mb-6 group-hover:text-zinc-200 transition-colors duration-500'>
                {spec.label}
              </h3>

              {/* MODEL ONE */}
              <div className='mb-10'>
                <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-end mb-3 gap-1'>
                  <span className='text-xs font-bold text-zinc-500'>Model One</span>
                  <span className='text-[10px] sm:text-xs text-zinc-500'>{spec.m1.text}</span>
                </div>
                <div className='h-1.5 w-full bg-white/5 rounded-full overflow-hidden'>
                  <div 
                    className='h-full bg-zinc-700 rounded-full transition-all duration-1000 ease-out will-change-[width]' 
                    style={{ width: spec.m1.width }}
                  ></div>
                </div>
              </div>

              {/* MODEL TWO */}
              <div className='w-full'>
                <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-end mb-3 gap-1'>
                  <span className='text-sm font-bold text-white'>Model Two</span>
                  <span className='text-xs sm:text-sm font-bold text-orange-500 group-hover:text-orange-400 transition-colors duration-500'>{spec.m2.text}</span>
                </div>
                <div className='h-3 w-full bg-white/5 rounded-full overflow-hidden'>
                  <div 
                    /* Sombra dinámica en hover: El brillo de la barra naranja aumenta */
                    className='h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.3)] group-hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transition-all duration-1000 ease-out will-change-[width]' 
                    style={{ width: spec.m2.width }}
                  ></div>
                </div>
              </div>

            </div>
          ))}
        </div>
    </SectionWrapper>
  )
}

export default ModelOneVTwo