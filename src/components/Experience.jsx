import { Me3dT} from "./MeFor3d"
import { OrthographicCamera, OrbitControls, Cylinder } from "@react-three/drei";
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect } from "react";



export const Experience = () =>{
  const mesh = useRef()
  const [hovered, setHovered] = useState(false)
  const initialRotation = [0, 0, 0]
  const targetRotation = hovered ? [0, Math.PI / 2, 0] : initialRotation

  const handlePointerOver = () => {
    setHovered(true)
   
  }

  const handlePointerOut = () => {
    setHovered(false)
   
  }

  function Test(){
    mesh.current.rotation.x = targetRotation
      mesh.current.rotation.y = 0
      mesh.current.rotation.z = 0
  }
  useFrame(() => {
    if (mesh.current ) {
      
      mesh.current.rotation.x = mesh.rotation.x
      mesh.current.rotation.y = 0
      mesh.current.rotation.z = 0

   
    }
  })
   return (
        <>
    
    <pointLight 
      position={[0.33, 0, 0.2]}
     intensity={0.05}
     castShadow
     color="white"
    />
      <pointLight 
     position={[-0.33, 0, 0]}
     intensity={0.18}
     castShadow
     color="red"
    
    />
    
    <ambientLight intensity={0.3} 
         castShadow/>
        
    <OrbitControls 
    enableZoom={false} enablePan={false} enableRotate={false} makeDefault 
    minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}
    minAzimuthAngle={-Math.PI / 6}
   maxAzimuthAngle={Math.PI / 6}
   />
      
     <Me3dT 
     ref={mesh}
     onPointerOver={handlePointerOver}
     onPointerOut={handlePointerOut}
     
     rotation={hovered ? [0,Math.PI / 2 * 0.2,0] : [0,0,0]}
     />
      
        
        </>
    )

}