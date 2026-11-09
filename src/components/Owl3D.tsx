import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

function OwlModel({ mouse }: { mouse: {x:number, y:number}}){
  const group = useRef<THREE.Group>(null)
  const eyes = useRef<THREE.Group>(null)
  useFrame((state)=>{
    if(!group.current) return
    const t = state.clock.elapsedTime
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouse.x * 0.5, 0.05)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -mouse.y * 0.25 + Math.sin(t*0.7)*0.05, 0.05)
    group.current.position.y = Math.sin(t*1.1)*0.08
    if(eyes.current){
      eyes.current.position.x = mouse.x * 0.12
      eyes.current.position.y = -mouse.y * 0.08
    }
  })
  return (
    <group ref={group}>
      {/* body */}
      <mesh position={[0, -0.35, 0]} scale={[1.05, 1.25, 0.95]}>
        <sphereGeometry args={[0.9, 32, 32]}/>
        <meshStandardMaterial color="#12372A" roughness={0.35} metalness={0.15} />
      </mesh>
      {/* chest cream */}
      <mesh position={[0, -0.25, 0.58]} scale={[0.85, 0.95, 0.5]}>
        <sphereGeometry args={[0.7, 32, 32]}/>
        <meshStandardMaterial color="#FDF8F0" roughness={0.6} />
      </mesh>
      {/* feather Vs */}
      {[0,1,2].map(i=> (
        <mesh key={i} position={[0, -0.15 - i*0.18, 0.92]} rotation={[0,0,0]}>
          <planeGeometry args={[0.45 - i*0.05, 0.02]}/>
          <meshStandardMaterial color="#12372A" transparent opacity={0.11} />
        </mesh>
      ))}
      {/* head */}
      <mesh position={[0, 0.65, 0]} scale={[1.15, 0.98, 1.0]}>
        <sphereGeometry args={[0.78, 32, 32]}/>
        <meshStandardMaterial color="#12372A" roughness={0.3} metalness={0.2} />
      </mesh>
      {/* face disc */}
      <mesh position={[0, 0.6, 0.62]} scale={[1, 0.92, 1]}>
        <sphereGeometry args={[0.62, 32, 32]}/>
        <meshStandardMaterial color="#FFFBF2" roughness={0.5} />
      </mesh>
      {/* gold ring */}
      <mesh position={[0, 0.6, 0.64]}>
        <ringGeometry args={[0.58, 0.62, 64]}/>
        <meshStandardMaterial color="#C9A86A" metalness={0.8} roughness={0.25} side={THREE.DoubleSide} />
      </mesh>
      {/* ears */}
      <mesh position={[-0.52, 1.18, 0.02]} rotation={[0,0,-0.3]}>
        <coneGeometry args={[0.18, 0.42, 16]}/>
        <meshStandardMaterial color="#12372A" />
      </mesh>
      <mesh position={[0.52, 1.18, 0.02]} rotation={[0,0,0.3]}>
        <coneGeometry args={[0.18, 0.42, 16]}/>
        <meshStandardMaterial color="#12372A" />
      </mesh>
      <mesh position={[-0.52, 1.18, 0.08]} rotation={[0,0,-0.3]}>
        <coneGeometry args={[0.09, 0.2, 16]}/>
        <meshStandardMaterial color="#C9A86A" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0.52, 1.18, 0.08]} rotation={[0,0,0.3]}>
        <coneGeometry args={[0.09, 0.2, 16]}/>
        <meshStandardMaterial color="#C9A86A" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* eyes group */}
      <group ref={eyes} position={[0,0.62,0.82]}>
        <mesh position={[-0.28, 0, 0]}>
          <sphereGeometry args={[0.24, 24, 24]}/>
          <meshStandardMaterial color="white" roughness={0.15} />
        </mesh>
        <mesh position={[0.28, 0, 0]}>
          <sphereGeometry args={[0.24, 24, 24]}/>
          <meshStandardMaterial color="white" roughness={0.15} />
        </mesh>
        {/* iris */}
        <mesh position={[-0.28, -0.02, 0.15]}>
          <sphereGeometry args={[0.13, 20, 20]}/>
          <meshStandardMaterial color="#0F2E22" roughness={0.2} />
        </mesh>
        <mesh position={[0.28, -0.02, 0.15]}>
          <sphereGeometry args={[0.13, 20, 20]}/>
          <meshStandardMaterial color="#0F2E22" roughness={0.2} />
        </mesh>
        {/* highlight */}
        <mesh position={[-0.24, 0.05, 0.22]}>
          <sphereGeometry args={[0.045, 12, 12]}/>
          <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0.32, 0.05, 0.22]}>
          <sphereGeometry args={[0.045, 12, 12]}/>
          <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.3} />
        </mesh>
        {/* gold outer */}
        <mesh position={[-0.28,0,0.02]}>
          <ringGeometry args={[0.22,0.24,32]}/>
          <meshStandardMaterial color="#C9A86A" metalness={0.8} roughness={0.2} side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[0.28,0,0.02]}>
          <ringGeometry args={[0.22,0.24,32]}/>
          <meshStandardMaterial color="#C9A86A" metalness={0.8} roughness={0.2} side={THREE.DoubleSide} />
        </mesh>
      </group>
      {/* beak */}
      <mesh position={[0, 0.32, 0.92]} rotation={[Math.PI,0,0]}>
        <coneGeometry args={[0.12, 0.28, 16]}/>
        <meshStandardMaterial color="#C9A86A" metalness={0.55} roughness={0.3} />
      </mesh>
      {/* beak line */}
      <mesh position={[0, 0.28, 0.94]}>
        <boxGeometry args={[0.015, 0.18, 0.015]}/>
        <meshStandardMaterial color="#8B7355" />
      </mesh>
      {/* wings */}
      <mesh position={[-0.82, -0.25, 0.05]} rotation={[0,0,0.15]} scale={[0.55, 1.1, 0.7]}>
        <sphereGeometry args={[0.42, 20, 20]}/>
        <meshStandardMaterial color="#0F2E22" roughness={0.45} />
      </mesh>
      <mesh position={[0.82, -0.25, 0.05]} rotation={[0,0,-0.15]} scale={[0.55, 1.1, 0.7]}>
        <sphereGeometry args={[0.42, 20, 20]}/>
        <meshStandardMaterial color="#0F2E22" roughness={0.45} />
      </mesh>
      {/* feet */}
      <mesh position={[-0.22, -1.05, 0.35]}>
        <sphereGeometry args={[0.13, 16, 16]}/>
        <meshStandardMaterial color="#C9A86A" metalness={0.6} roughness={0.35} />
      </mesh>
      <mesh position={[0.22, -1.05, 0.35]}>
        <sphereGeometry args={[0.13, 16, 16]}/>
        <meshStandardMaterial color="#C9A86A" metalness={0.6} roughness={0.35} />
      </mesh>
      {/* glow diamonds */}
      <mesh position={[0, 1.62, 0]} rotation={[0,0,Math.PI/4]}>
        <boxGeometry args={[0.14,0.14,0.02]}/>
        <meshStandardMaterial color="#C9A86A" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  )
}

export default function Owl3D({ mouse = {x:0,y:0}, compact=false }: { mouse?: {x:number,y:number}, compact?: boolean}){
  return (
    <Canvas camera={{ position: [0,0, compact? 2.8 : 3.6], fov: compact? 42 : 38 }} dpr={[1,1.8]} gl={{ antialias:true, alpha:true }} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[2,3,2]} intensity={1.2} />
      <directionalLight position={[-2,1,-2]} intensity={0.4} />
      <spotLight position={[0,3,3]} intensity={1.1} angle={0.5} penumbra={0.6} />
      <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.35}>
        <OwlModel mouse={mouse} />
      </Float>
      <Environment preset="studio" />
      <ContactShadows position={[0,-1.25,0]} opacity={0.22} scale={3.5} blur={2.2} far={4} />
    </Canvas>
  )
}
