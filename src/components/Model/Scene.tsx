import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import CameraController from './CameraController'
import ComputerModel from './ComputerModel'
import styled from 'styled-components'

const CanvasContainer = styled.div`
  width: 450px;
  height: 450px;
  margin: 0 auto;

  @media (max-width: 425px) {
    width: 350px;
    height: 350px;
  }
`

export default function Scene() {
  return (
    <CanvasContainer>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <CameraController />
          <ambientLight />
          <ComputerModel />
          <directionalLight />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  )
}
