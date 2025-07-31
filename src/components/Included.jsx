import React from 'react'
import asset from '../assets/Exploded Specs.png'

import includes1 from '../assets/software-stroke-rounded 1.svg'
import includes2 from '../assets/customer-service-01-stroke-rounded (1) 1.svg'
import includes3 from '../assets/external-drive-stroke-rounded 1.svg'
import includes4 from '../assets/electric-plugs-stroke-rounded 1.svg'
import includes5 from '../assets/Ethernet.svg'
import includes6 from '../assets/zap-stroke-rounded (1) 1.svg'

const Included = () => {

  const includesList = [
    {
      img: includes1,
      text: 'MyNode Premium Software',
    },
    {
      img: includes2,
      text: '1 Year Premium Support',
    },
    {
      img: includes3,
      text: 'No need for external drive',
    },
    {
      img: includes4,
      text: 'Power Cord',
    },
    {
      img: includes5,
      text: 'Ethernet Cable',
    },
    {
      img: includes6,
      text: '14.8x Faster Initial Block',
    },

  ]


  return (
    <div id='included'>
      <h2 className='mb-20 text-6xl font-bold text-center'>Included</h2>
      {/* Content */}
      <div className='container mx-auto mb-8'>
        <img className='block mx-auto mb-12 w-full max-w-4xl'
          src={asset} alt="" loading='lazy' />

        <div className='grid sm:grid-cols-2 gap-y-6 sm:gap-x-8 md:gap-x-36 lg:gap-x-36 mb-24 px-6 sm:px-0 lg:px-32 xl:px-60 max-w-7xl mx-auto'>
          {includesList.map((element, index) => <div className='flex items-center'>
            <img className='me-4'
              src={element.img} alt="" />
            <p className='text-xl'>
              {element.text}</p></div>)}

        </div>
      </div>
    </div>
  )
}

export default Included