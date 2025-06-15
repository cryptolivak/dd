import React, { useState, useEffect } from 'react'

const planets = ['Andromeda', 'NebulaX', 'Vortexal', 'Singularis']
const demoLog = [
  { id: 1, from: 'NebulaX', to: 'Andromeda', type: 'attack', time: 'just now' },
  { id: 2, from: 'Vortexal', to: 'NebulaX', type: 'raid', time: '1m ago' },
  { id: 3, from: 'Andromeda', to: 'Singularis', type: 'attack', time: '2m ago' },
]

export default function RaidLog() {
  const [log, setLog] = useState(demoLog)
  const [explosion, setExplosion] = useState(null)

  // Simulate incoming raids every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const from = planets[Math.floor(Math.random() * planets.length)]
      let to = from
      while (to === from) {
        to = planets[Math.floor(Math.random() * planets.length)]
      }
      setLog((prev) => [
        {
          id: prev[0].id + 1,
          from,
          to,
          type: 'attack',
          time: new Date().toLocaleTimeString()
        },
        ...prev.slice(0, 19)
      ])
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Demo: animate explosion on new log
  useEffect(() => {
    if (log.length && explosion !== log[0].id) {
      setExplosion(log[0].id)
      setTimeout(() => setExplosion(null), 750)
    }
  }, [log])

  return (
    <section className="flex-1 min-w-[320px] max-w-md mx-auto bg-blackhole/80 rounded-lg p-4 glow">
      <h3 className="text-neon text-xl font-bold mb-3">Raid Log</h3>
      <ul className="space-y-3">
        {log.map((entry, i) => (
          <li key={entry.id} className="flex items-center gap-3">
            <span className="relative w-8 h-8 flex items-center justify-center">
              <ExplosionIcon animate={explosion === entry.id} />
            </span>
            <span>
              <span className="font-bold text-neon">{entry.from}</span>
              <span className="mx-1 text-white/60">→</span>
              <span className="font-bold">{entry.to}</span>
              <span className="ml-2 text-sm text-gray-400">{entry.time}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function ExplosionIcon({ animate }) {
  return (
    <svg width="32" height="32" className={animate ? "animate-explosion" : ""} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" fill="#ff3864" opacity={animate ? "0.8" : "0.4"} />
      <circle cx="16" cy="16" r="6" fill="#fff" opacity={animate ? "1" : "0.7"} />
    </svg>
  )
}
