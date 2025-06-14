import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import React from 'react'
import ConnectButton from './ConnectButton'

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex flex-col items-center justify-center text-center galaxy-bg">
      <AnimatedPlanets />
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-neon drop-shadow-[0_2px_10px_#49eaff] mb-4">
        Launch. Raid. Destroy. Rebirth.
      </h1>
      <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
        Command tokenized planets on Solana.<br /> Outmaneuver, attack, and rebuild in the cosmic arena.
      </p>
      <WalletModalProvider>
        <ConnectButton />
      </WalletModalProvider>
    </section>
  )
}

function AnimatedPlanets() {
  // Creates orbits with animated planets
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <div className="relative w-[350px] h-[350px] sm:w-[500px] sm:h-[500px]">
        {/* Orbit 1 */}
        <div className="absolute inset-0 rounded-full border border-neon opacity-30 animate-spin-slow" />
        {/* Planet 1 */}
        <div className="absolute left-1/2 top-1/2"
          style={{ transform: 'translate(-50%, -50%)' }}>
          <div className="absolute animate-orbit"
            style={{ transformOrigin: '-120px center' }}>
            <div className="w-8 h-8 rounded-full bg-planetGlow shadow-planet" />
          </div>
        </div>
        {/* Add more orbits/planets as desired */}
      </div>
    </div>
  )
}