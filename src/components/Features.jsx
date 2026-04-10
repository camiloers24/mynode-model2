import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import SectionWrapper from './SectionWrapper'

// 2. DATA LISTS — paths served from /public/apps/, no Vite processing
const coreList = [
  { img: '/apps/premium-support.svg', text: 'Premium Support' },
  { img: '/apps/updates.svg', text: 'One-click Updates' },
  { img: '/apps/bitcoin-node.svg', text: 'Full Bitcoin Node' },
  { img: '/apps/ui.svg', text: 'Intuitive UI / Web Interface' },
  { img: '/apps/lightning-wallet.svg', text: 'Lightning Wallet' },
]

const BTCAppsList = [
  { img: '/apps/bitcoin-explorer.png', text: 'BTC RPC Explorer' },
  { img: '/apps/btc-pay-server.png', text: 'BTC Pay Server' },
  { img: '/apps/ckbunker.png', text: 'CKBunker' },
  { img: '/apps/caravan.png', text: 'Caravan' },
  { img: '/apps/datum.png', text: 'Datum' },
  { img: '/apps/electrum.png', text: 'Electrum Server' },
  { img: '/apps/jam.png', text: 'Jam' },
  { img: '/apps/joinmarket.png', text: 'JoinMarket' },
  { img: '/apps/lnd_hub.png', text: 'LND Hub' },
  { img: '/apps/lily-wallet.png', text: 'Lily Wallet' },
  { img: '/apps/mempool.png', text: 'Mempool' },
  { img: '/apps/public-pool.png', text: 'Public Pool' },
  { img: '/apps/public-pool-ui.png', text: 'Public Pool UI' },
  { img: '/apps/pyblock.png', text: 'PyBlock' },
  { img: '/apps/specter.png', text: 'Specter' },
  { img: '/apps/warden.png', text: 'Warden Terminal' },
]

const LightningAppsList = [
  { img: '/apps/alby-hub.png', text: 'Alby Hub' },
  { img: '/apps/balance-satoshi.png', text: 'Balance of Satoshis' },
  { img: '/apps/channel-tools.png', text: 'Channel Tools' },
  { img: '/apps/lndconnect.png', text: 'LNDConnect' },
  { img: '/apps/lnd-manage.png', text: 'LNDManage' },
  { img: '/apps/lndg.png', text: 'LNDg' },
  { img: '/apps/lnbits.png', text: 'LNbits' },
  { img: '/apps/lightning-terminal.png', text: 'Lightning Terminal' },
  { img: '/apps/lnd-boss.png', text: 'LndBoss' },
  { img: '/apps/loop.png', text: 'Loop' },
  { img: '/apps/pool.png', text: 'Pool' },
  { img: '/apps/rtl.png', text: 'Ride the Lightning' },
  { img: '/apps/thunderhub.png', text: 'Thunderhub' },
  { img: '/apps/lntop.png', text: 'lntop' },
]

const CommunicationList = [
  { img: '/apps/astral.png', text: 'Astral' },
  { img: '/apps/noscl.png', text: 'Noscl' },
  { img: '/apps/nostr-rs-relay.png', text: 'Nostr RS Relay' },
  { img: '/apps/sphinx-relay.png', text: 'Sphinx Relay' },
]

const otherAppsList = [
  { img: '/apps/vpn.png', text: 'VPN' },
  { img: '/apps/tor.png', text: 'Tor' },
  { img: '/apps/opendime.png', text: 'Opendime Support' },
  { img: '/apps/tailscale.svg', text: 'Tailscale' },
  { img: '/apps/netdata.png', text: 'Netdata' },
  { img: '/apps/wetty.png', text: 'WeTTY' },
  { img: '/apps/web-ssh.png', text: 'Web SSH' },
]

const additionalFeaturesList = [
  { img: '/apps/bitcoin-cli.svg', text: 'Bitcoin CLI' },
  { img: '/apps/ln-backup.png', text: 'LN Channel Backup' },
]

// 3. HELPER COMPONENTS
const FeatureCard = ({ img, text }) => (
  <div className="p-4 flex items-center bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 group min-h-[70px]">
    <div className='w-10 h-10 flex-shrink-0 mr-4 flex items-center justify-center'>
      <img className='w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100' src={img} alt="" loading="lazy" />
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
        <h3 className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
          isOpen
          ? 'text-white'
          : 'text-zinc-300 group-hover:text-white'
        }`}>
          {title}
        </h3>

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
