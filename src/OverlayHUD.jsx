import React from 'react'
import ConnectButton from './components/ConnectButton'
import Hero from './components/Hero'
import Leaderboard from './components/Leaderboard'

export default function OverlayHUD() {
  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4 z-10">
      <div className="flex justify-between items-start w-full">
        <h1 className="text-neon text-2xl font-bold pointer-events-auto">planetwars.fun</h1>
        <div className="pointer-events-auto">
          <ConnectButton />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Hero />
      </div>
      <div className="pointer-events-auto max-w-md">
        <Leaderboard />
      </div>
    </div>
  )
}
