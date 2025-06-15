import React from 'react'
import Hero from './components/Hero'
import Leaderboard from './components/Leaderboard'
import RaidLog from './components/RaidLog'
import Galaxy3D from './components/Galaxy3D'

export default function App() {
  return (
    <div className="bg-galaxy min-h-screen flex flex-col font-techno">
      <Hero />
      <div className="mx-auto w-full max-w-7xl px-2 sm:px-4 md:px-8">
        <Leaderboard />
        <div className="flex flex-col md:flex-row gap-8 mt-10">
          <Galaxy3D />
          <RaidLog />
        </div>
      </div>
    </div>
  )
}
