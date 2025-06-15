import React from 'react'

export default function PlanetStatusCard({ planet, onClose }) {
  return (
    <div className="bg-blackhole/95 border-2 border-neon rounded-xl p-6 min-w-[240px] max-w-[90vw] shadow-neon flex flex-col items-center relative">
      <button
        className="absolute top-2 right-2 text-neon text-2xl"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <div className="w-12 h-12 rounded-full bg-planetGlow shadow-planet mb-3" />
      <h4 className="text-xl font-bold mb-1">{planet.name}</h4>
      <span className="text-neon mb-2">{planet.status}</span>
      <div className="flex gap-3 mt-3">
        <button className="px-4 py-1 rounded glow bg-cracked text-white font-bold hover:scale-105 transition">
          Attack
        </button>
        <button className="px-4 py-1 rounded glow bg-neon text-black font-bold hover:scale-105 transition">
          View
        </button>
        <button className="px-4 py-1 rounded glow bg-blackhole text-neon border border-neon font-bold hover:scale-105 transition">
          Rebirth
        </button>
      </div>
    </div>
  )
}
