import React from 'react'

const ModelOneVTwo = () => {
  return (
    <div>
      <h2 className="px-4 text-5xl font-normal text-center mb-12">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <span className="relative mb-1 lg:mb-0 lg:mr-4">
            Model One
            <div className="hidden lg:flex absolute inset-x-0 h-3.5 justify-center">
              <div className="bg-gradient-to-r from-mn-gray-gradient to-mn-gray-banner h-full w-24 rounded-md"></div>
            </div>
          </span>
          <span className="text-mn-orange font-black lg:mx-4">VS</span>
          <span className="relative mt-2 lg:mt-0">
            Model Two Rev B
            <div className="hidden lg:flex absolute inset-x-0 h-3.5 justify-center">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-full w-24 rounded-md"></div>
            </div>
          </span>
        </div>
      </h2>
      <div className='container mx-auto max-w-xl mb-20 px-2 md:px-8 text-xl'>
        <div className='px-4 py-4 bg-card-color rounded-2xl border-2 border-card-border mb-6'>
          <p className='mb-2 text-white font-bold'>CPU</p>
          {/* MODEL ONE */}          
        <div className='flex items-center mb-4 group'>
          <div className='w-[15%] h-6 bg-gradient-to-r from-mn-gray-gradient to-mn-gray-banner rounded-full group-hover:brightness-150 transition-all duration-300 animate-grow'></div>
          <span className='ml-4 text-sm text-white whitespace-nowrap'>Raspberry Pi 4B Device</span>
        </div>

          {/* MODEL TWO           
          <div className='flex items-center mb-4'>
            <div className='relative bg-gradient-to-r from-blue-300 to-blue-500 h-6 w-[54%] rounded-full'>
              <span className='absolute left-3 top-1 text-sm text-white whitespace-nowrap'>4 Core Intel CPU (Up to 2.7GHz)</span>
            </div>
          </div>*/}

          {/* MODEL TWO REV B */}          
          <div className="relative h-6 rounded-full overflow-hidden group" style={{ width: '100%' }}>
            <div className="h-full w-full bg-gradient-to-r from-yellow-400 to-orange-400 animate-grow group-hover:brightness-50 transition-all duration-300"></div>
            <span className="absolute left-3 top-1 text-sm text-black group-hover:text-white transition-colors duration-300 whitespace-nowrap">
              Intel N100 CPU (Up to 3.4GHz)
            </span>
          </div>
        </div>
        <div className='px-4 py-4 bg-card-color rounded-2xl border-2 border-card-border mb-6'>         
          <p className='mb-2 text-white font-bold'>RAM</p>
          {/* MODEL ONE */}
          <div className='flex items-center mb-4 group'>
            <div className='relative h-6 rounded-full overflow-hidden group' style={{ width: '25%' }}>
              <div className='h-full w-full bg-gradient-to-r from-mn-gray-gradient to-mn-gray-banner animate-grow group-hover:brightness-150 transition-all duration-300'></div>
              <span className='absolute left-3 top-1 text-sm text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap'>
                4GB
              </span>
            </div>
          </div>

          {/* MODEL TWO           
          <div className='flex items-center mb-4'>
            <div className='relative bg-gradient-to-r from-blue-300 to-blue-500 h-6 w-[50%] rounded-full'>
              <span className='absolute left-3 top-1 text-sm text-white whitespace-nowrap'>8GB</span>
            </div>
          </div>*/}

          {/* MODEL TWO REV B */}          
          <div className="relative h-6 rounded-full overflow-hidden group" style={{ width: '100%' }}>
            <div className="h-full w-full bg-gradient-to-r from-yellow-400 to-orange-400 animate-grow group-hover:brightness-50 transition-all duration-300"></div>
            <span className="absolute left-3 top-1 text-sm text-black group-hover:text-white transition-colors duration-300 whitespace-nowrap">
              16GB
            </span>
          </div>              
        </div>
        <div className='px-4 py-4 bg-card-color rounded-2xl border-2 border-card-border mb-6'>
          <p className='mb-2 text-white font-bold'>SSD</p>
          {/* MODEL ONE */}
          <div className='flex items-center mb-4 group'>
            <div
              className='relative h-6 rounded-full overflow-hidden group'
              style={{ width: '50%' }}
            >
              <div className='h-full w-full bg-gradient-to-r from-mn-gray-gradient to-mn-gray-banner animate-grow group-hover:brightness-150 transition-all duration-300'></div>
              <span className='absolute left-3 top-1 text-sm text-white group-hover:text-black transition-colors duration-300 whitespace-nowrap'>
                1 TB External SSD
              </span>
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
          <div className="relative h-6 rounded-full overflow-hidden group" style={{ width: '100%' }}>
            <div className="h-full w-full bg-gradient-to-r from-yellow-400 to-orange-400 animate-grow group-hover:brightness-50 transition-all duration-300"></div>
            <span className="absolute left-3 top-1 text-sm text-black group-hover:text-white transition-colors duration-300 whitespace-nowrap">
              2 TB NVMe SSD
            </span>
          </div>   
        </div>
        <div className='px-4 py-4 bg-card-color rounded-2xl border-2 border-card-border mb-6'>
          <p className='mb-2 text-white font-bold'>SSD SPEED</p>
          {/* MODEL ONE */}          
          <div className='flex items-center mb-4 group'>
          <div className='bg-gradient-to-r from-mn-gray-gradient to-mn-gray-banner h-6 w-[16%] rounded-full group-hover:brightness-150 transition-all duration-300 animate-grow'></div>
          <span className='ml-4 text-sm text-white whitespace-nowrap'>
            SSD Speed (220 MB/s Read - 220 MB/s Write)
          </span>
        </div>

          {/* MODEL TWO 
          <p className='mb-2 text-white font-bold'>MODEL TWO</p>
          <div className='flex items-center mb-4'>
            <div className='bg-gradient-to-r from-blue-300 to-blue-500 h-6 w-[25%] rounded-full'></div>
            <span className='ml-4 text-sm text-white whitespace-nowrap'>SSD Speed (550 MB/s Read - 550 MB/s Write)</span>            
          </div>*/}

          {/* MODEL TWO REV B */}          
          <div className="relative h-6 rounded-full overflow-hidden group" style={{ width: '90%' }}>
            <div
              className="h-full w-full bg-gradient-to-r from-yellow-400 to-orange-400 animate-grow group-hover:brightness-50 transition-all duration-300"
            ></div>
            <span className="absolute left-3 top-1 text-sm text-black group-hover:text-white transition-colors duration-300 whitespace-nowrap">
              SSD Speed (3500 MB/s Read - 3000 MB/s Write)
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ModelOneVTwo

// background: linear-gradient(90deg, #4D4D4D 0%, #767676 100%);
