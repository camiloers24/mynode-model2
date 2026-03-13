import React from 'react'
import SectionWrapper from './SectionWrapper'

// 1. IMPORTS DE ASSETS (Mantengo tus rutas originales)
import PremiumSupport from '../assets/apps/premium-support.svg';
import OneClickUpdates from '../assets/apps/updates.svg';
import FullBitcoinNode from '../assets/apps/bitcoin-node.svg';
import IntuitiveUI from '../assets/apps/ui.svg';
import LightningWallet from '../assets/apps/lightning-wallet.svg';

import BTCPayServer from '../assets/apps/btc-pay-server.png';
import Mempool from '../assets/apps/mempool.png';
import BitcoinExplorer from '../assets/apps/bitcoin-explorer.png';
import ElectrumServer from '../assets/apps/electrum.png';
import JoinMarket from '../assets/apps/joinmarket.png';
import WardenTerminal from '../assets/apps/warden.png';
import Specter from '../assets/apps/specter.png';
import PyBlock from '../assets/apps/pyblock.png';
import Datum from '../assets/apps/datum.png'

import LightningTerminal from '../assets/apps/lightning-terminal.png';
import RideTheLightning from '../assets/apps/rtl.png';
import SphinxRelay from '../assets/apps/sphinx-relay.png';
import BalanceOfSatoshis from '../assets/apps/balance-satoshi.png';
import LNbits from '../assets/apps/lnbits.png';
import LNDg from '../assets/apps/lndg.png';
import Thunderhub from '../assets/apps/thunderhub.png';
import LNDHub from '../assets/apps/lnd_hub.png';

import VPN from '../assets/apps/vpn.png';
import Tor from '../assets/apps/tor.png';
import OpendimeSupport from '../assets/apps/opendime.png';
import Tailscale from '../assets/apps/tailscale.svg';

import BitcoinCLI from '../assets/apps/bitcoin-cli.svg';
import LNChannelBackup from '../assets/apps/ln-backup.png';

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