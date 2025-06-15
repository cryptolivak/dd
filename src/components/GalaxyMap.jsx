import React, { useState } from 'react'
import PlanetStatusCard from './PlanetStatusCard'

const planets = [
  { name: "Andromeda", x: 45, y: 30, status: "Colonized" },
  { name: "NebulaX", x: 70, y: 65, status: "Under Attack" },
  { name: "Vortexal", x: 30, y: 60, status: "Cracked" },
  { name: "Singularis", x: 80, y: 15, status: "Black Hole" },
]

export default function GalaxyMap() {
  const [hovered, setHovered] = useState(null)
  const [selected, setSelected] = useState(null)

  return (
    <section className="relative flex-1 min-w-[320px] max-w-xl mx-auto flex flex-col items-center justify-center">
      <h3 className="text-neon text-xl font-bold mb-3">Galaxy Map</h3>
      <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] bg-galaxy rounded-full shadow-planet border-4 border-neon/20">
        {/* Orbits */}
        <div className="absolute inset-0 rounded-full border border-neon/10" />
        <div className="absolute inset-4 rounded-full border border-neon/20" />
        <div className="absolute inset-8 rounded-full border border-neon/30" />
        {/* Planets */}
        {planets.map((p, i) => (
          <button
            key={p.name}
            type="button"
            style={{
              position: 'absolute',
              left: `${p.x}%`,
              top: `${p.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            className={`w-10 h-10 rounded-full shadow-planet border-2 border-neon focus:outline-none transition-all ${hovered === i ? 'scale-110 z-10' : ''}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(i)}
          >
            <span className="block w-full h-full bg-planetGlow" />
          </button>
        ))}
        {/* Planet tooltip */}
        {hovered !== null && (
          <div
            className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${planets[hovered].x}%`,
              top: `${planets[hovered].y}%`
            }}
          >
            <div className="bg-blackhole/90 text-neon px-4 py-2 rounded-lg shadow-lg border border-neon text-sm font-bold animate-pulse pointer-events-none">
              {planets[hovered].name} <span className="ml-2">{planets[hovered].status}</span>
            </div>
          </div>
        )}
        {/* Modal/Card */}
        {selected !== null && (
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <PlanetStatusCard planet={planets[selected]} onClose={() => setSelected(null)} />
          </div>
        )}
      </div>
    </section>
  )
}
