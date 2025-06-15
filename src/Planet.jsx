import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'

export default function Planet({ name, radius, distance, color, ring, onPlanetClick }) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const speed = 0.2 / distance

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed
    ref.current.position.x = Math.cos(t) * distance
    ref.current.position.z = Math.sin(t) * distance
    ref.current.rotation.y += 0.01
  })

  return (
    <group>
      <mesh
        ref={ref}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => onPlanetClick(name)}
      >
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={hovered ? 0.8 : 0.4} />
        {ring && (
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[radius * 1.4, radius * 2, 64]} />
            <meshStandardMaterial color={color} emissive={color} transparent opacity={0.6} side={2} />
          </mesh>
        )}
      </mesh>
      {hovered && (
        <Text position={[ref.current?.position.x || 0, radius + 1.2, ref.current?.position.z || 0]} fontSize={radius * 0.8} color="#fff" anchorX="center" anchorY="middle">
          {name}
        </Text>
      )}
    </group>
  )
}
