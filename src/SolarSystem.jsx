import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import Planet from './Planet'
import PlanetStatusCard from './components/PlanetStatusCard'

const planets = [
  { name: 'Mercury', radius: 0.3, distance: 6, color: '#a0a0a0' },
  { name: 'Venus', radius: 0.6, distance: 9, color: '#eec07d' },
  { name: 'Earth', radius: 0.65, distance: 12, color: '#4499ff' },
  { name: 'Mars', radius: 0.5, distance: 15, color: '#ff5533' },
  { name: 'Jupiter', radius: 1.5, distance: 20, color: '#d9a066' },
  { name: 'Saturn', radius: 1.3, distance: 25, color: '#e8c883', ring: true },
  { name: 'Uranus', radius: 1.0, distance: 30, color: '#70e0ff' },
  { name: 'Neptune', radius: 1.0, distance: 35, color: '#456cff' }
]

function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[5, 32, 32]} />
      <meshStandardMaterial emissive="#ffdd55" color="#ffdd55" emissiveIntensity={1.2} />
      <pointLight intensity={2} />
    </mesh>
  )
}

function OrbitRing({ distance }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[distance - 0.05, distance + 0.05, 64]} />
      <meshBasicMaterial color="#888" transparent opacity={0.3} side={2} />
    </mesh>
  )
}

export default function SolarSystem() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 20, 80], fov: 60 }}>
        <Stars radius={300} depth={80} count={10000} factor={4} fade />
        <ambientLight intensity={0.4} />
        <Sun />
        {planets.map((p) => (
          <React.Fragment key={p.name}>
            <OrbitRing distance={p.distance} />
            <Planet {...p} onPlanetClick={setSelected} />
          </React.Fragment>
        ))}
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
      {selected && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <PlanetStatusCard planet={{ name: selected }} onClose={() => setSelected(null)} />
        </div>
      )}
    </div>
  )
}
