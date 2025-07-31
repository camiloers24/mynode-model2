import React from 'react'

const ModelOneVTwo = () => {
  return (
    <div>
      <h2 className='px-4 text-5xl font-normal text-center mb-12'>
        <span className='relative me-4'>Model One
          <div className='hidden lg:flex absolute inset-x-0 h-3.5 flex justify-center'>
            <div className='bg-gradient-to-r from-mn-gray-gradient to-mn-gray-banner h-full w-24 rounded-md'></div>
          </div>
        </span>
        <span className='text-mn-orange font-black me-4'>VS</span>
        <span className='relative'>Model Two Rev B
          <div className='hidden lg:flex absolute inset-x-0 h-3.5 flex justify-center'>
            <div className='bg-gradient-to-r from-yellow-400 to-orange-400 h-full w-24 rounded-md'></div>
          </div>
        </span>        
      </h2>
      <div className='container mx-auto max-w-xl mb-20 px-2 md:px-8 text-xl'>
        <div className='px-4 py-4 bg-card-color rounded-2xl border-2 border-card-border mb-6'>
          <p className='mb-2 text-white font-bold'>CPU</p>
          {/* MODEL ONE */}          
          <div className='flex items-center mb-4'>
            <div className='bg-gradient-to-r from-mn-gray-gradient to-mn-gray-banner h-6 w-[15%] rounded-full'></div>
            <span className='ml-4 text-sm text-white whitespace-nowrap'>Raspberry Pi 4B Device</span>
          </div>

          {/* MODEL TWO           
          <div className='flex items-center mb-4'>
            <div className='relative bg-gradient-to-r from-blue-300 to-blue-500 h-6 w-[54%] rounded-full'>
              <span className='absolute left-3 top-1 text-sm text-white whitespace-nowrap'>4 Core Intel CPU (Up to 2.7GHz)</span>
            </div>
          </div>*/}

          {/* MODEL TWO REV B */}          
          <div className='flex items-center mb-4'>
            <div className='relative bg-gradient-to-r from-yellow-400 to-orange-400 h-6 w-[100%] rounded-full'>
              <span className='absolute left-3 top-1 text-sm text-black whitespace-nowrap'>Intel N100 CPU (Up to 3.4GHz)</span>
            </div>
          </div>

        </div>
        <div className='px-4 py-4 bg-card-color rounded-2xl border-2 border-card-border mb-6'>         
          <p className='mb-2 text-white font-bold'>RAM</p>
          {/* MODEL ONE */}
          <div className='flex items-center mb-4'>
            <div className='relative bg-gradient-to-r from-mn-gray-gradient to-mn-gray-banner h-6 w-[25%] rounded-full'>
              <span className='absolute left-3 top-1 text-sm text-white whitespace-nowrap'>4GB</span>
            </div>
          </div>

          {/* MODEL TWO           
          <div className='flex items-center mb-4'>
            <div className='relative bg-gradient-to-r from-blue-300 to-blue-500 h-6 w-[50%] rounded-full'>
              <span className='absolute left-3 top-1 text-sm text-white whitespace-nowrap'>8GB</span>
            </div>
          </div>*/}

          {/* MODEL TWO REV B */}          
          <div className='flex items-center mb-4'>
            <div className='relative bg-gradient-to-r from-yellow-400 to-orange-400 h-6 w-[100%] rounded-full'>
              <span className='absolute left-3 top-1 text-sm text-black whitespace-nowrap'>16GB</span>
            </div>
          </div>          
        </div>
        <div className='px-4 py-4 bg-card-color rounded-2xl border-2 border-card-border mb-6'>
          <p className='mb-2 text-white font-bold'>SSD</p>
          {/* MODEL ONE */}
          <div className='flex items-center mb-4'>
            <div className='relative bg-gradient-to-r from-mn-gray-gradient to-mn-gray-banner h-6 w-[50%] rounded-full'>
              <span className='absolute left-3 top-1 text-sm text-white whitespace-nowrap'>1 TB External SSD</span>
            </div>
          </div>

          {/* MODEL TWO 
          <p className='mb-2 text-white font-bold'>MODEL TWO</p>
          <div className='flex items-center mb-4'>
            <div className='relative bg-gradient-to-r from-blue-300 to-blue-500 h-6 w-[100%] rounded-full'>
              <span className='absolute left-3 top-1 text-sm text-white whitespace-nowrap'>2 TB Internal SSD</span>
            </div>
          </div>*/}

          {/* MODEL TWO REV B */}          
          <div className='flex items-center mb-4'>
            <div className='relative bg-gradient-to-r from-yellow-400 to-orange-400 h-6 w-[100%] rounded-full'>
              <span className='absolute left-3 top-1 text-sm text-black whitespace-nowrap'>2 TB NVMe SSD</span>
            </div>
          </div>  
        </div>
        <div className='px-4 py-4 bg-card-color rounded-2xl border-2 border-card-border mb-6'>
          <p className='mb-2 text-white font-bold'>SSD SPEED</p>
          {/* MODEL ONE */}          
          <div className='flex items-center mb-4'>
            <div className='bg-gradient-to-r from-mn-gray-gradient to-mn-gray-banner h-6 w-[16%] rounded-full'></div>
            <span className='ml-4 text-sm text-white whitespace-nowrap'>SSD Speed (220 MB/s Read - 220 MB/s Write)</span>            
          </div>

          {/* MODEL TWO 
          <p className='mb-2 text-white font-bold'>MODEL TWO</p>
          <div className='flex items-center mb-4'>
            <div className='bg-gradient-to-r from-blue-300 to-blue-500 h-6 w-[25%] rounded-full'></div>
            <span className='ml-4 text-sm text-white whitespace-nowrap'>SSD Speed (550 MB/s Read - 550 MB/s Write)</span>            
          </div>*/}

          {/* MODEL TWO REV B */}          
          <div className='flex items-center mb-4'>
            <div className='relative bg-gradient-to-r from-yellow-400 to-orange-400 h-6 w-[90%] rounded-full'>
              <span className='absolute left-3 top-1 text-sm text-black whitespace-nowrap'>SSD Speed (3500 MB/s Read - 3000 MB/s Write)</span>
            </div>
          </div> 
        </div>

      </div>
    </div>
  )
}

export default ModelOneVTwo

// background: linear-gradient(90deg, #4D4D4D 0%, #767676 100%);
