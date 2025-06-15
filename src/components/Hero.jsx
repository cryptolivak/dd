import React from 'react'

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center pointer-events-none">
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-neon drop-shadow-[0_2px_10px_#49eaff] mb-4">
        Launch. Raid. Destroy. Rebirth.
      </h1>
      <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
        Command tokenized planets on Solana.<br /> Outmaneuver, attack, and rebuild in the cosmic arena.
      </p>
      {/* Wallet button moved to global overlay */}
    </section>
  )
}
