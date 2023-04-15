import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import TotalAssets from '../components/totalAssets'
import AssetsFlow from '../components/assetsFlow'

function App() {

  return (
    <div className="App">
      <TotalAssets />
      <AssetsFlow />
    </div>
  )
}

export default App
