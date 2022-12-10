import { useFrame, useLoader } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import type { Mesh } from 'three'

export default function ComputerModel() {
  const gltf = useLoader(GLTFLoader, '/model/scene.gltf')
  const ref = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return

    const a = clock.getElapsedTime()
    ref.current.rotation.x = 0.5
    ref.current.rotation.y = -a / 2.2
  })

  useEffect(() => {
    gltf.scene.scale.set(1.8, 1.8, 1.8)
    gltf.scene.position.set(0, -1.85, 0)
  }, [gltf])

  return (
    <mesh ref={ref}>
      <primitive object={gltf.scene} />
    </mesh>
  )
}
