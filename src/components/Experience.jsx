import { MeFor3d, Circle } from "./MeFor3d"
import { OrthographicCamera, OrbitControls, Cylinder } from "@react-three/drei";
import { SoftShadows } from "@react-three/drei"
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';


export const Experience = () =>{
    
   return (
        <>
    

    <ambientLight intensity={1.9} 
         castShadow/>
      
      <directionalLight
        
        position={[0, 0, 2]}
        intensity={1}
        castShadow
        shadow={{
          
          
        }}
      />


        <Circle/>
         <MeFor3d
           
         />
        
        </>
    )

}