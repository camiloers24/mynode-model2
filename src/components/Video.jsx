import React from 'react'

const Video = () => {
  return (
    <div className='container mx-auto flex justify-center mb-40'>
      <div className='aspect-video w-full px-4 lg:w-8/12 rounded-3xl overflow-hidden'>
        <iframe className='object-cover rounded-2xl h-full w-full' width="" height="" src="https://www.youtube.com/embed/22SmxolU0Uk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default Video