import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ComputerModel, CameraController } from '../components'

export default function Scene() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <CameraController />
        <ambientLight />
        <ComputerModel />
        <directionalLight />
      </Suspense>
    </Canvas>
  )
}
