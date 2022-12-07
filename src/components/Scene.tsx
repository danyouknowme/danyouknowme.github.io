import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ComputerModel, CameraController } from '../components'

export default function Scene() {
  return (
    <Canvas style={{ width: '450px', height: '450px', margin: '0 auto' }}>
      <Suspense fallback={null}>
        <CameraController />
        <ambientLight />
        <ComputerModel />
        <directionalLight />
      </Suspense>
    </Canvas>
  )
}
