
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Me3dT(props) {
  const { nodes, materials } = useGLTF('./models/3DMODELME.glb')
  return (
    <group {...props} dispose={null} position={[0, -0.34, 0]} >
      <mesh geometry={nodes.Mesh_0.geometry} material={materials.Material_0} scale={1.911} />
    </group>
  )
}

useGLTF.preload('./models/me.glb')
