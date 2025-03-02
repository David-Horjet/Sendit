"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type { Mesh } from "three"
import { Environment, useTexture } from "@react-three/drei"

function Coin({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null)
  const texture = useTexture(
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usdc-1R6wJkZ28i8rbv82O5GgQPhsEbHrEy.png",
  )

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.PI / 2 // Align the coin face-up
    }
  }, [])

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.5 // Rotate around the vertical axis
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <cylinderGeometry args={[1.5, 1.5, 0.2, 32]} />
      <meshStandardMaterial map={texture} metalness={0.9} roughness={0.1} envMapIntensity={2} />
    </mesh>
  )
}

export default function Coins3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Coin position={[-4, 2, 0]} />
        <Coin position={[4, -2, -2]} />
        <Coin position={[0, 3, -1]} />
        <Coin position={[-2, -3, -3]} />
        <Coin position={[3, 1, -2]} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  )
}

