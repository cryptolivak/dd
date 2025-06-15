import React from 'react'
import Hero from './components/Hero'
import Leaderboard from './components/Leaderboard'
import RaidLog from './components/RaidLog'
import Galaxy3D from './components/Galaxy3D'
import ConnectButton from './components/ConnectButton'

export default function App() {
  return (
    <div className="bg-galaxy min-h-screen font-techno relative">
      <Galaxy3D />
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center flex-col text-center p-4">
        <Hero />
      </div>
      <div className="absolute top-4 right-4 z-20 pointer-events-auto">
        <ConnectButton />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-2 sm:px-4 md:px-8 mt-10">
        <Leaderboard />
        <div className="flex flex-col md:flex-row gap-8 mt-10">
          <RaidLog />
        </div>
      </div>
    </div>
  )
}
