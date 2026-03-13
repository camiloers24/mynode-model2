import React from 'react'
import SectionWrapper from './SectionWrapper'

// 1. IMPORTS DE ASSETS (Mantengo tus rutas originales)
import PremiumSupport from '../assets/mentoring-stroke-rounded 3.svg';
import OneClickUpdates from '../assets/mouse-left-click-04-stroke-rounded 2.svg';
import FullBitcoinNode from '../assets/bitcoin-cpu-stroke-rounded 2.svg';
import IntuitiveUI from '../assets/browser-stroke-rounded 2.svg';
import LightningWallet from '../assets/bitcoin-wallet-stroke-rounded (1) 2.svg';

import BTCPayServer from '../assets/BTC Pay Server.png';
import Mempool from '../assets/Mempool.png';
import BitcoinExplorer from '../assets/Bitcoin_explorer.png';
import ElectrumServer from '../assets/Electrum_server.png';
import JoinMarket from '../assets/Joinmarket.png';
import WardenTerminal from '../assets/Warden_terminal.png';
import Specter from '../assets/Specter.png';
import PyBlock from '../assets/Pyblock.png';
import Datum from '../assets/Datum.png'

import LightningTerminal from '../assets/Lightning_terminal.png';
import RideTheLightning from '../assets/RTL.png';
import SphinxRelay from '../assets/Sphinx Relay.png';
import BalanceOfSatoshis from '../assets/Balance_satoshi.png';
import LNbits from '../assets/LNbits.png';
import LNDg from '../assets/Group.png';
import Thunderhub from '../assets/Thunderhub.png';
import LNDHub from '../assets/LND_hub.png';

import VPN from '../assets/Group 4.png';
import Tor from '../assets/Frame 5.png';
import OpendimeSupport from '../assets/Opendime.png';
import Tailscale from '../assets/Group 6.svg';

import BitcoinCLI from '../assets/binary-code-stroke-rounded 2.svg';
import LNChannelBackup from '../assets/LN_CHANNEL_BACKUP.png';

// 2. DATA LISTS (Aquí estaban los desaparecidos que causaron la explosión)
const coreList = [
  { img: PremiumSupport, text: 'Premium Support' },
  { img: OneClickUpdates, text: 'One-click Updates' },
  { img: FullBitcoinNode, text: 'Full Bitcoin Node' },
  { img: IntuitiveUI, text: 'Intuitive UI / Web Interface' },
  { img: LightningWallet, text: 'Lightning Wallet' },
]

const BTCAppsList = [
  { img: BTCPayServer, text: 'BTC Pay Server' },
  { img: Mempool, text: 'Mempool' },
  { img: BitcoinExplorer, text: 'Bitcoin Explorer' },
  { img: ElectrumServer, text: 'Electrum Server' },
  { img: JoinMarket, text: 'JoinMarket' },
  { img: WardenTerminal, text: 'Warden Terminal' },
  { img: Specter, text: 'Specter' },
  { img: PyBlock, text: 'PyBlock' },
  { img: Datum, text: 'Datum' },
]

const LightningAppsList = [
  { img: LightningTerminal, text: 'Lightning Terminal' },
  { img: RideTheLightning, text: 'Ride the Lightning' },
  { img: SphinxRelay, text: 'Sphinx Relay' },
  { img: BalanceOfSatoshis, text: 'Balance of Satoshis' },
  { img: LNbits, text: 'LNbits' },
  { img: LNDg, text: 'LNDg' },
  { img: Thunderhub, text: 'Thunderhub' },
  { img: LNDHub, text: 'LND Hub' },
]

const otherAppsList = [
  { img: VPN, text: 'VPN' },
  { img: Tor, text: 'Tor' },
  { img: OpendimeSupport, text: 'Opendime Support' },
  { img: Tailscale, text: 'Tailscale' },
]

const additionalFeaturesList = [
  { img: BitcoinCLI, text: 'Bitcoin CLI' },
  { img: LNChannelBackup, text: 'LN Channel Backup' },
]

// 3. HELPER COMPONENTS (Sincronizados con el Wrapper maestro)
const FeatureCard = ({ img, text }) => (
  <div className="p-4 flex items-center bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group min-h-[70px]">
    <div className='w-10 h-10 flex-shrink-0 mr-4 flex items-center justify-center'>
      <img className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-500' src={img} alt="" />
    </div>
    <p className='text-sm md:text-base font-semibold text-zinc-300 group-hover:text-white transition-colors leading-tight'>
      {text}
    </p>
  </div>
)

const CategoryBlock = ({ title, list }) => (
  <div className='mb-24 md:mb-32 last:mb-0'>
    <div className='mb-10'>
      {/* Línea naranja removida para un diseño más sobrio */}
      <h3 className='text-2xl md:text-3xl font-bold text-white tracking-tight'>
        {title}
      </h3>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {list.map((item, index) => (
        <FeatureCard key={index} img={item.img} text={item.text} />
      ))}
    </div>
  </div>
)

// 4. MAIN COMPONENT
const Features = () => {
  return (
    /* REFACTOR: Usamos SectionWrapper para consolidar la simetría lateral.
       Eliminamos el div 'max-w-7xl' manual.
    */
    <SectionWrapper id='features'>
      
      <div className='text-center mb-24 md:mb-32'>
        <h2 className='text-5xl md:text-7xl font-bold tracking-tight text-white mb-6'>
          Features
        </h2>
        <p className='text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto'>
          The most complete ecosystem for your Bitcoin journey.
        </p>
      </div>

      <CategoryBlock title="Core Features" list={coreList} />
      <CategoryBlock title="Bitcoin Apps" list={BTCAppsList} />
      <CategoryBlock title="Lightning Apps" list={LightningAppsList} />
      <CategoryBlock title="Other Apps" list={otherAppsList} />
      <CategoryBlock title="Additional Features" list={additionalFeaturesList} />

    </SectionWrapper>
  )
}

export default Features