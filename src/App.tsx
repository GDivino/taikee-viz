import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './tremor.css'
import AssetsFlow from './components/assetsFlow'
import AssetsByBank from './components/assetsByBank'
import NetMoneyCard from './components/netMoneyCard'
import TimeLeftCard from './components/timeLeftCard'

function App() {
  const user = "micaangelicagonz@gmail,com"

  return (
    <div className="App">
      <div className="container-1">
        <NetMoneyCard user={user}/>
        <TimeLeftCard user={user}/>
      </div>
      <div className="container-2">
        <AssetsByBank user={user}/>
        <AssetsFlow user={user}/>
      </div>
    </div>
  )
}

export default App
