
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MeFor3d(props) {
  const { nodes, materials } = useGLTF('./models/3DMODELME.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.001']} position={[0, 0.32, -0.268]} rotation={[Math.PI / 2, 0, 0]} scale={0.376} />
      <mesh geometry={nodes.Cube002.geometry} material={materials.Material} position={[-0.303, 0.197, 0.09]} rotation={[0.345, -0.184, 0.047]} scale={0.041} />
      <mesh geometry={nodes.Mesh_0.geometry} material={materials.Material_0} scale={1.911} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.005']} position={[0.294, 0.345, -0.192]} rotation={[2.702, 0.673, -2.875]} scale={0.039} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.007']} position={[-0.26, 0.23, 0.09]} rotation={[0.345, -0.184, 0.047]} scale={0.023} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.008']} position={[0.333, 0.3, -0.192]} rotation={[2.702, 0.673, -2.875]} scale={0.024} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.009']} position={[-0.248, 0.462, -0.194]} rotation={[2.782, -0.332, 3.001]} scale={0.041} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['Material.010']} position={[-0.284, 0.495, -0.171]} rotation={[2.782, -0.332, 3.001]} scale={0.023} />
    </group>
  )
}

useGLTF.preload('./models/3DMODELME.glb')
