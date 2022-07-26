import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function CameraController() {
  const { camera, gl } = useThree()

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement)

    controls.minDistance = 3
    controls.maxDistance = 7

    return () => controls.dispose()
  }, [camera, gl])

  return null
}
