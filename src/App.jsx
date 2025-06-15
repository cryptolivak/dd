import React from 'react'
import SolarSystem from './SolarSystem'
import OverlayHUD from './OverlayHUD'

export default function App() {
  return (
    <div className="bg-galaxy min-h-screen font-techno relative">
      <SolarSystem />
      <OverlayHUD />
    </div>
  )
}
