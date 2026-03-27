import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import SectionWrapper from './SectionWrapper'

// 1. IMPORTS DE ASSETS
import PremiumSupport from '../assets/apps/premium-support.svg';
import OneClickUpdates from '../assets/apps/updates.svg';
import FullBitcoinNode from '../assets/apps/bitcoin-node.svg';
import IntuitiveUI from '../assets/apps/ui.svg';
import LightningWallet from '../assets/apps/lightning-wallet.svg';


import BitcoinExplorer from '../assets/apps/bitcoin-explorer.png';
import BTCPayServer from '../assets/apps/btc-pay-server.png';
import CKBunker from '../assets/apps/ckbunker.png';
import Caravan from '../assets/apps/caravan.png';
import Datum from '../assets/apps/datum.png';
import ElectrumServer from '../assets/apps/electrum.png';
import Jam from '../assets/apps/jam.png';
import JoinMarket from '../assets/apps/joinmarket.png';
import LNDHub from '../assets/apps/lnd_hub.png';
import LilyWallet from '../assets/apps/lily-wallet.png';
import Mempool from '../assets/apps/mempool.png';
import PublicPool from '../assets/apps/public-pool.png';
import PublicPoolUI from '../assets/apps/public-pool-ui.png';
import PyBlock from '../assets/apps/pyblock.png';
import Specter from '../assets/apps/specter.png';
import WardenTerminal from '../assets/apps/warden.png';


import AlbyHub from '../assets/apps/alby-hub.png';
import BalanceOfSatoshis from '../assets/apps/balance-satoshi.png';
import ChannelTools from '../assets/apps/channel-tools.png';
import LNDConnect from '../assets/apps/lndconnect.png';
import LNDManage from '../assets/apps/lnd-manage.png';
import LNDg from '../assets/apps/lndg.png';
import LNbits from '../assets/apps/lnbits.png';
import LightningTerminal from '../assets/apps/lightning-terminal.png';
import LndBoss from '../assets/apps/lnd-boss.png';
import Loop from '../assets/apps/loop.png';
import Pool from '../assets/apps/pool.png';
import RideTheLightning from '../assets/apps/rtl.png';
import Thunderhub from '../assets/apps/thunderhub.png';
import lntop from '../assets/apps/lntop.png';


import Astral from '../assets/apps/astral.png';
import Noscl from '../assets/apps/noscl.png';
import NostrRSRelay from '../assets/apps/nostr-rs-relay.png';
import SphinxRelay from '../assets/apps/sphinx-relay.png';


import VPN from '../assets/apps/vpn.png';
import Tor from '../assets/apps/tor.png';
import OpendimeSupport from '../assets/apps/opendime.png';
import Tailscale from '../assets/apps/tailscale.svg';
import Netdata from '../assets/apps/netdata.png';
import WeTTY from '../assets/apps/wetty.png';
import WebSSH from '../assets/apps/web-ssh.png';


import BitcoinCLI from '../assets/apps/bitcoin-cli.svg';
import LNChannelBackup from '../assets/apps/ln-backup.png';

// 2. DATA LISTS
const coreList = [
  { img: PremiumSupport, text: 'Premium Support' },
  { img: OneClickUpdates, text: 'One-click Updates' },
  { img: FullBitcoinNode, text: 'Full Bitcoin Node' },
  { img: IntuitiveUI, text: 'Intuitive UI / Web Interface' },
  { img: LightningWallet, text: 'Lightning Wallet' },
]

const BTCAppsList = [
  { img: BitcoinExplorer, text: 'BTC RPC Explorer' },
  { img: BTCPayServer, text: 'BTC Pay Server' },
  { img: CKBunker, text: 'CKBunker' },
  { img: Caravan, text: 'Caravan' },
  { img: Datum, text: 'Datum' },
  { img: ElectrumServer, text: 'Electrum Server' },
  { img: Jam, text: 'Jam' },
  { img: JoinMarket, text: 'JoinMarket' },
  { img: LNDHub, text: 'LND Hub' },
  { img: LilyWallet, text: 'Lily Wallet' },
  { img: Mempool, text: 'Mempool' },  
  { img: PublicPool, text: 'Public Pool' },
  { img: PublicPoolUI, text: 'Public Pool UI' },
  { img: PyBlock, text: 'PyBlock' },
  { img: Specter, text: 'Specter' },
  { img: WardenTerminal, text: 'Warden Terminal' },
  
]

const LightningAppsList = [
  { img: AlbyHub, text: 'Alby Hub' },
  { img: BalanceOfSatoshis, text: 'Balance of Satoshis' },
  { img: ChannelTools, text: 'Channel Tools' },
  { img: LNDConnect, text: 'LNDConnect' },
  { img: LNDManage, text: 'LNDManage' },
  { img: LNDg, text: 'LNDg' },
  { img: LNbits, text: 'LNbits' },  
  { img: LightningTerminal, text: 'Lightning Terminal' },
  { img: LndBoss, text: 'LndBoss' },
  { img: Loop, text: 'Loop' },
  { img: Pool, text: 'Pool' },
  { img: RideTheLightning, text: 'Ride the Lightning' },
  { img: Thunderhub, text: 'Thunderhub' },
  { img: lntop, text: 'lntop' },  
]

const CommunicationList = [
  { img: Astral, text: 'Astral' },
  { img: Noscl, text: 'Noscl' },
  { img: NostrRSRelay, text: 'Nostr RS Relay' },
  { img: SphinxRelay, text: 'Sphinx Relay' },
]

const otherAppsList = [
  { img: VPN, text: 'VPN' },
  { img: Tor, text: 'Tor' },
  { img: OpendimeSupport, text: 'Opendime Support' },
  { img: Tailscale, text: 'Tailscale' },
  { img: Netdata, text: 'Netdata' },
  { img: WeTTY, text: 'WeTTY' },
  { img: WebSSH, text: 'Web SSH' },
]

const additionalFeaturesList = [
  { img: BitcoinCLI, text: 'Bitcoin CLI' },
  { img: LNChannelBackup, text: 'LN Channel Backup' },
]

// 3. HELPER COMPONENTS
const FeatureCard = ({ img, text }) => (
  <div className="p-4 flex items-center bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 group min-h-[70px]">
    <div className='w-10 h-10 flex-shrink-0 mr-4 flex items-center justify-center'>
      <img className='w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100' src={img} alt="" />
    </div>
    <p className='text-sm md:text-base font-medium text-zinc-400 group-hover:text-zinc-100 transition-colors leading-tight'>
      {text}
    </p>
  </div>
)

const CategoryBlock = ({ title, list, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className='mb-2 border-b border-white/5 last:border-none'>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center justify-between w-full py-8 text-left group outline-none'
      >
        {/* Título: Ahora en zinc-300 (gris claro) que pasa a blanco en hover o activo */}
        <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
          isOpen 
          ? 'text-white' 
          : 'text-zinc-300 group-hover:text-white'
        }`}>
          {title}
        </h3>

        {/* Icono: También lo aclaramos un poco para que haga juego */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`${
            isOpen 
            ? 'text-white' 
            : 'text-zinc-400 group-hover:text-zinc-200'
          }`}
        >
          <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 pt-2 pb-12">
              {list.map((item, index) => (
                <FeatureCard key={index} img={item.img} text={item.text} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// 4. MAIN COMPONENT
const Features = () => {
  return (    
    <SectionWrapper id='features' className="!pb-12 md:!pb-20">
      
      <div className='text-center mb-16 md:mb-24'>
        <h2 className='text-5xl md:text-7xl font-bold tracking-tight text-white mb-6'>
          Features
        </h2>
        <p className='text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto'>
          The most complete ecosystem for your Bitcoin journey.
        </p>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/5">
        <CategoryBlock title="Core Features" list={coreList} defaultOpen={true} />
        <CategoryBlock title="Bitcoin Apps" list={BTCAppsList} defaultOpen={true} />
        <CategoryBlock title="Lightning Apps" list={LightningAppsList} defaultOpen={true} />
        <CategoryBlock title="Communication" list={CommunicationList} defaultOpen={true} />
        <CategoryBlock title="Other Apps" list={otherAppsList} defaultOpen={true} />
        <CategoryBlock title="Additional Features" list={additionalFeaturesList} defaultOpen={true} />
      </div>

    </SectionWrapper>
  )
}

export default Features