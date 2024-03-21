import { Me3dT} from "./MeFor3d"
import { OrthographicCamera, OrbitControls, Cylinder } from "@react-three/drei";
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect } from "react";



export const Experience = () =>{
  const orbitControlsRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);
  const initialPosition = [0, 0, 0]; // Posição inicial da câmera
  const [resetCamera, setResetCamera] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setTimeout(() => {
        setResetCamera(true); // Ativa o reset da câmera
      }, 1000); // Tempo de transição suave em milissegundos
      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  useEffect(() => {
    if (resetCamera) {
      orbitControlsRef.current.reset(); // Reseta a posição da câmera
      setResetCamera(false); // Desativa o reset da câmera
    }
  }, [resetCamera]);
   return (
        <>
    
    <pointLight 
      position={[0.33, 0, 0]}
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
    
    <ambientLight intensity={0.2} 
         castShadow/>
        
    <OrbitControls 
ref={orbitControlsRef}
        autoRotate={autoRotate}
        enableRotate={!isHovered}
        enableDamping
        dampingFactor={0.1}
        target={[0, 0, 0]} // Alvo da câmera
        {...(isHovered ? { enablePan: false, enableZoom: false } : {})} // Desabilita pan e zoom quando hover
        initialPosition={initialPosition} // Define a posição inicial da câmera
      // Define a posição da câmera
    enableZoom={false} enablePan={false}  makeDefault 
    minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}
    minAzimuthAngle={-Math.PI / 8}
     maxAzimuthAngle={Math.PI / 8}
   />
      
     <Me3dT 
    onPointerOver={() => {
      setIsHovered(true);
      setAutoRotate(true);
    }}
    onPointerOut={() => {
      setIsHovered(false);
      setAutoRotate(false);

    }}
     />
      
        
        </>
    )

}