import { MeFor3d } from "./MeFor3d"
import { OrthographicCamera, OrbitControls, Cylinder } from "@react-three/drei";

export const Experience = () =>{

    return (
        <>
        <OrbitControls enableZoom={false} />
       
         <ambientLight intensity={1} />
         
         <MeFor3d />
        
        
        </>
    )

}