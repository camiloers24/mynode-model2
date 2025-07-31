import React from 'react'

// Core Features
import PremiumSupport from '../assets/mentoring-stroke-rounded 3.svg';
import OneClickUpdates from '../assets/mouse-left-click-04-stroke-rounded 2.svg';
import FullBitcoinNode from '../assets/bitcoin-cpu-stroke-rounded 2.svg';
import IntuitiveUI from '../assets/browser-stroke-rounded 2.svg';
import LightningWallet from '../assets/bitcoin-wallet-stroke-rounded (1) 2.svg';

const coreList = [
  {
    img: PremiumSupport,
    text: 'Premium Support',
  },
  {
    img: OneClickUpdates,
    text: 'One-click Updates',
  },
  {
    img: FullBitcoinNode,
    text: 'Full Bitcoin Node',
  },
  {
    img: IntuitiveUI,
    text: 'Intuitive UI / Web Interface',
  },
  {
    img: LightningWallet,
    text: 'Lightning Wallet',
  },
]

// Bitcoin Apps
import BTCPayServer from '../assets/BTC Pay Server.png';
import Mempool from '../assets/Mempool.png';
import BitcoinExplorer from '../assets/Bitcoin_explorer.png';
import ElectrumServer from '../assets/Electrum_server.png';
import JoinMarket from '../assets/Joinmarket.png';
import WardenTerminal from '../assets/Warden_terminal.png';
import Specter from '../assets/Specter.png';
import PyBlock from '../assets/Pyblock.png';
import Datum from '../assets/Datum.png'

const BTCAppsList = [
  {
    img: BTCPayServer,
    text: 'BTC Pay Server',
  },
  {
    img: Mempool,
    text: 'Mempool',
  },
  {
    img: BitcoinExplorer,
    text: 'Bitcoin Explorer',
  },
  {
    img: ElectrumServer,
    text: 'Electrum Server',
  },
  {
    img: JoinMarket,
    text: 'JoinMarket',
  },
  {
    img: WardenTerminal,
    text: 'Warden Terminal',
  },
  {
    img: Specter,
    text: 'Specter',
  },
  {
    img: PyBlock,
    text: 'PyBlock',
  },
  {
    img: Datum,
    text: 'Datum',
  },
]

// Lightning Apps
import LightningTerminal from '../assets/Lightning_terminal.png';
import RideTheLightning from '../assets/RTL.png';
import SphinxRelay from '../assets/Sphinx Relay.png';
import BalanceOfSatoshis from '../assets/Balance_satoshi.png';
import LNbits from '../assets/LNbits.png';
import LNDg from '../assets/Group.png';
import Thunderhub from '../assets/Thunderhub.png';
import LNDHub from '../assets/LND_hub.png';

const LightningAppsList = [
  {
    img: LightningTerminal,
    text: 'Lightning Terminal',
  },
  {
    img: RideTheLightning,
    text: 'Ride the Lightning',
  },
  {
    img: SphinxRelay,
    text: 'Sphinx Relay',
  },
  {
    img: BalanceOfSatoshis,
    text: 'Balance of Satoshis',
  },
  {
    img: LNbits,
    text: 'LNbits',
  },
  {
    img: LNDg,
    text: 'LNDg',
  },
  {
    img: Thunderhub,
    text: 'Thunderhub',
  },
  {
    img: LNDHub,
    text: 'LND Hub',
  },  
]

// Other Apps
import VPN from '../assets/Group 4.png';
import Tor from '../assets/Frame 5.png';
import OpendimeSupport from '../assets/Opendime.png';
import Tailscale from '../assets/Group 6.svg';
const otherAppsList = [
  {
    img: VPN,
    text: 'VPN',
  },
  {
    img: Tor,
    text: 'Tor',
  },
  {
    img: OpendimeSupport,
    text: 'Opendime Support',
  },
  {
    img: Tailscale,
    text: 'Tailscale',
  },
]

// Additional Features
import BitcoinCLI from '../assets/binary-code-stroke-rounded 2.svg';
import LNChannelBackup from '../assets/LN_CHANNEL_BACKUP.png';
const additionalFeaturesList = [
  {
    img: BitcoinCLI,
    text: 'Bitcoin CLI',
  },
  {
    img: LNChannelBackup,
    text: 'LN Channel Backup',
  },
]


const gridComponent = ({ img, text }) => {
  return <div className="p-3 flex items-center bg-card-color border-2 border-card-border rounded-2xl text-lg lg:text-xl font-normal">
    <img className='me-6 w-10' src={img} alt="" />
    <p>{text}</p>
  </div>
}

const gridBlockComponent = ({ list }) => {
  return <div className="grid sm:grid-cols-2 gap-y-6 gap-x-6 mx-4 mb-20">
    {list.map((item) => gridComponent({ ...item }))}

  </div>
}

const Features = () => {
  return (
    <div>
      <h2 className='text-center text-6xl font-bold mb-12'>Features</h2>
      <div className="container max-w-xl mx-auto">
        <div className='mx-4 px-8 py-4 mb-10 bg-card-color border-2 border-card-border rounded-2xl text-3xl font-semibold'>
          <h3>Core Features</h3>
        </div>
        {gridBlockComponent({ list: coreList })}

        <div className='mx-4 px-8 py-4 mb-10 bg-card-color border-2 border-card-border rounded-2xl text-3xl font-semibold'>
          <h3>Bitcoin Apps</h3>
        </div>
        {gridBlockComponent({ list: BTCAppsList })}

        <div className='mx-4 px-8 py-4 mb-10 bg-card-color border-2 border-card-border rounded-2xl text-3xl font-semibold'>
          <h3>Lightning Apps</h3>
        </div>
        {gridBlockComponent({ list: LightningAppsList })}

        <div className='mx-4 px-8 py-4 mb-10 bg-card-color border-2 border-card-border rounded-2xl text-3xl font-semibold'>
          <h3>Other Apps</h3>
        </div>
        {gridBlockComponent({ list: otherAppsList })}
        <div className='mx-4 px-8 py-4 mb-10 bg-card-color border-2 border-card-border rounded-2xl text-3xl font-semibold'>
          <h3>Additional Features</h3>
        </div>
        {gridBlockComponent({ list: additionalFeaturesList })}



      </div>
    </div>
  )
}

export default Features