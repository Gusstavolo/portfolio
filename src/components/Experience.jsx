import { MeFor3d, Circle } from "./MeFor3d"
import { OrthographicCamera, OrbitControls, Cylinder } from "@react-three/drei";
import { SoftShadows } from "@react-three/drei"
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

export const Experience = () =>{
    const circleRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (circleRef.current && isHovered) {
      // Se o mouse estiver sobre o objeto, atualize a posição ao longo do eixo X
      circleRef.current.position.x += 0.01; // Altere conforme necessário
    }
  });
    return (
        <>
    
       
    <ambientLight intensity={1.9} 
         castShadow
         
       />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />

       <directionalLight
        
        position={[0, 0, 2]}
        intensity={1}
        castShadow
        shadow={{
          
          
        }}
      />
        <Circle ref={circleRef}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)} />
         <MeFor3d position={[0, 0, 0]}/>
        
        
        </>
    )

}