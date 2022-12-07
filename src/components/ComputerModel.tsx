import { useFrame, useLoader } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import type { Mesh } from 'three'

export default function Model() {
  const gltf = useLoader(GLTFLoader, '/model/scene.gltf')
  const ref = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (!ref.current) return

    const a = clock.getElapsedTime()
    ref.current.rotation.y = -a / 1.8
  })

  useEffect(() => {
    gltf.scene.scale.set(2, 2, 2)
    gltf.scene.position.set(0, -2.5, 0)
  }, [gltf])

  return (
    <mesh ref={ref}>
      <primitive object={gltf.scene} />
    </mesh>
  )
}
