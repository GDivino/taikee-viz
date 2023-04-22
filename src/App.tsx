import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './tremor.css'
import AssetsFlow from './components/assetsFlow'
import AssetsByBank from './components/assetsByBank'
import NetMoneyCard from './components/netMoneyCard'
import TimeLeftCard from './components/timeLeftCard'
import Toggles from './components/dataRangeToggle'
import NetMoneyMonthly from './components/netMoneyMonthly'

function App() {
  const user = "ceej@taikee,co"

  return (
    <div className="App">
      <nav>
        <Toggles user={user}/>
      </nav>
      <div className="container-1">
        <TimeLeftCard user={user}/>
        <NetMoneyCard user={user}/>
      </div>
      <div className="container-2">
        <NetMoneyMonthly user={user}/>
        <AssetsByBank user={user}/>
        <AssetsFlow user={user}/>
      </div>
    </div>
  )
}

export default App
