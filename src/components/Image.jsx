import React from 'react'
import source from '../assets/MyNode UI.png'

const Image = () => {
  return (
    <div className='container mx-auto mb-40'>
      <img
        className="block mx-auto w-full max-w-[90%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px]"
        src={source}
        alt=""
      />
    </div>
  )
}

export default Image