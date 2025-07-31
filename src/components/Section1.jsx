import React from 'react'

import background from '../assets/Bitcoin Background.png'

const Section1 = () => {
  return (
    <div className='relative'>
      <div className='py-40 px-6 text-5xl xl:text-6xl font-bold text-center'>
        <h2>Run Bitcoin, Lightning, and more!</h2>
        <div className='hidden lg:flex justify-center absolute w-full h-full left-0 top-0 -z-10 rounded-full overflow-hidden'>
          <img src={background} alt="" className='rounded-xl' />
        </div>

      </div>
    </div>
  )
}

export default Section1