import React from 'react'
import source from '../assets/MyNode UI.png'

const Image = () => {
  return (
    <div className='container mx-auto mb-40'>
      <img className='block mx-auto' src={source} alt="" />
    </div>
  )
}

export default Image