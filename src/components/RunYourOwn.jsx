import React from 'react'
import SectionWrapper from './SectionWrapper'

import Decentralization from '../assets/features/decentralization.svg';
import Security from '../assets/features/security.svg';
import Privacy from '../assets/features/privacy.svg';
import Independence from '../assets/features/independence.svg';
import NetworkStrength from '../assets/features/network.svg';
import FinancialSovereignty from '../assets/features/sovereignty.svg';

const GridItem = ({ img, title, paragraph }) => (
  <div className='flex flex-col p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.06] transition-all duration-500 group'>
    <img 
      className='w-14 h-14 mb-8 object-contain group-hover:scale-110 transition-transform duration-500' 
      src={img} 
      alt="" 
    />
    
    <h3 className='text-2xl font-bold mb-4 text-white tracking-tight'>{title}</h3>
    <p className='text-zinc-400 text-lg leading-relaxed font-normal'>{paragraph}</p>
  </div>
)

const gridList = [
  {
    img: Decentralization,
    title: 'Decentralization',
    paragraph: 'Bitcoin nodes distribute the network across the globe, reducing the risk of central points of failure.'
  },
  {
    img: Security,
    title: 'Security',
    paragraph: 'Nodes verify transactions independently, ensuring that no fraudulent transactions can compromise the blockchain.'
  },
  {
    img: Privacy,
    title: 'Privacy',
    paragraph: 'Running a node enhances your privacy by allowing you to verify transactions without relying on third parties.'
  },
  {
    img: Independence,
    title: 'Independence',
    paragraph: 'By running your own node, you don’t need to trust others. You can independently verify the entire blockchain.'
  },
  {
    img: NetworkStrength,
    title: 'Network Strength',
    paragraph: 'Each node added to the network makes Bitcoin more resilient and robust.'
  },
  {
    img: FinancialSovereignty,
    title: 'Financial Sovereignty',
    paragraph: 'Take control of your financial future by participating in the Bitcoin network on your own terms.'
  },
]

const RunYourOwn = () => {
  return (
    /* REFACTOR: Reemplazamos <section> y el div max-w-7xl manual por el Wrapper */
    <SectionWrapper id='benefits'>
      
      <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 md:mb-32 tracking-tight text-white'>
        Run your own Bitcoin node
      </h2>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
        {gridList.map((item, index) => (
          <GridItem key={index} {...item} />
        ))}
      </div>

    </SectionWrapper>
  )
}

export default RunYourOwn