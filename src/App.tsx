import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import AssetsFlow from './components/assetsFlow'
import AssetsByBank from './components/assetsByBank'
import NetMoneyCard from './components/netMoneyCard'
import TimeLeftCard from './components/timeLeftCard'

function App() {

  return (
    <div className="App">
      <AssetsByBank />
      <AssetsFlow />
      <NetMoneyCard />
      <TimeLeftCard />
    </div>
  )
}

export default App
