import React, { useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import PlanetStatusCard from './PlanetStatusCard'

const PLANETS = [
  { id: 1, name: 'Andromeda', position: [-2, 1, 0], status: 'Colonized' },
  { id: 2, name: 'NebulaX', position: [2, -1, -3], status: 'Under Attack' },
  { id: 3, name: 'Vortexal', position: [0, 2, 2], status: 'Cracked' },
  { id: 4, name: 'Singularis', position: [3, 3, 1], status: 'Black Hole' },
  { id: 5, name: 'Cosmia', position: [-3, -2, 2], status: 'Colonized' }
]

function Planet({ data, onSelect }) {
  const ref = useRef()
  return (
    <mesh ref={ref} position={data.position} onClick={() => onSelect(data)}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#151515" emissive="#7f5af0" emissiveIntensity={0.8} />
    </mesh>
  )
}

export default function Galaxy3D() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="relative w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        {PLANETS.map(p => (
          <Planet key={p.id} data={p} onSelect={setSelected} />
        ))}
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
      {selected && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <PlanetStatusCard planet={selected} onClose={() => setSelected(null)} />
        </div>
      )}
    </div>
  )
}
