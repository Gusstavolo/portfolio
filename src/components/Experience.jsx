import { MeFor3d, Circle } from "./MeFor3d"
import { OrthographicCamera, OrbitControls, Cylinder } from "@react-three/drei";
import { SoftShadows } from "@react-three/drei"
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';


export const Experience = () =>{
    const orbitControlsRef = useRef();

    const handleCameraChange = () => {
      const { current: orbitControls } = orbitControlsRef;
      const { current: camera } = orbitControls.camera;
  
      // Define os limites da câmera
      const minDistance = 2; // Distância mínima da câmera ao ponto de foco
      const maxDistance = 10; // Distância máxima da câmera ao ponto de foco
      const maxPolarAngle = Math.PI / 2; // Ângulo polar máximo (evita que a câmera passe por baixo da cena)
  
      // Verifica se a distância da câmera ao ponto de foco ultrapassou os limites
      if (camera.position.length() < minDistance) {
        camera.position.setLength(minDistance);
      } else if (camera.position.length() > maxDistance) {
        camera.position.setLength(maxDistance);
      }
  
      // Verifica se o ângulo polar ultrapassou o limite máximo
      if (camera.position.y < 0) {
        camera.position.y = 0;
        camera.lookAt(0, 0, 0);
      } else if (camera.position.y > maxPolarAngle) {
        camera.position.y = maxPolarAngle;
        camera.lookAt(0, 0, 0);
      }
    };
   return (
        <>
    

    <ambientLight intensity={2.2} 
         castShadow/>
    <OrbitControls 
    enableZoom={false} enablePan={false} enableRotate={true} autoRotate 
    autoRotateSpeed={0.05} makeDefault 
    minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}
    minAzimuthAngle={-Math.PI / 6}
  maxAzimuthAngle={Math.PI / 6}
   />

      <directionalLight
        
        position={[0, 0, 2]}
        intensity={1}
        castShadow
        shadow={{
          
          
        }}
        
      />


        
         <MeFor3d
         />
        
        </>
    )

}