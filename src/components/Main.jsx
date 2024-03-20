import { PerspectiveCamera } from '@react-three/drei'
import '../App.css';
import React from 'react';
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { Experience } from './Experience';
import { OrthographicCamera, OrbitControls, Cylinder } from "@react-three/drei";

const DivSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  
`;
const DivSectionSobre = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  background-image: linear-gradient(#272829, #313233);
  transition: 0.7s;
    &:hover {
        transform: rotateX(10deg) rotateY(10deg);
  }
`;
const TestStylePerfil = styled.h1 `
 position: relative;
left: -20px;
 font-family: "Staatliches", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #000000;
  font-size: 3rem;
  
`;
const TestStylePerfilSobre = styled.h1 `

 font-family: "Staatliches", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #FFF6F6;
  font-size: 3.1rem;
`;

const Divider = styled.div `
    
    width: 80%;
    height: 2px;
    
    border-radius: 20px;
    margin-bottom: 50px;
    
`;

const DividerSobre = styled.div `
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    width: 20%;  
    background-image: linear-gradient(#080808, #202122,#080808);
    
`;
const DividerSobreText = styled.div `
    display:flex;
    flex-direction:column;
    width: 80%;  
 
    
`;
const Divglass = styled.div `
   
    position: relative;
    width: 380px;
    height: auto;
    top: 10%;
    left: 5%;
`;
const Testglass = styled.div `
display: flex;
 
 justify-content: center;
 align-items: center;
  top: 20%;
  left: 50%;
  width: 400px;
  transform: translate3d(-50%, -50%, 0);
  border-left: 1px solid black;
  padding-left: 40px;
  user-select: none;
  background: rgba( 255, 255, 255, 0 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 5.5px );
-webkit-backdrop-filter: blur( 5.5px );
border-radius: 2px;

`;



const Sobre =() =>{
    return(
        
       <>
            <TestStylePerfilSobre>
                        s
            </TestStylePerfilSobre>
            <TestStylePerfilSobre>
                        o
            </TestStylePerfilSobre>
            <TestStylePerfilSobre>
                        b
            </TestStylePerfilSobre>
            <TestStylePerfilSobre>
                        r
            </TestStylePerfilSobre>
            <TestStylePerfilSobre>
                        e
            </TestStylePerfilSobre>
        </>
       
        
    )
}
function Main(){
    return(
        <>
        <div className='MainPage'>
            <div className='SectionPerfil'> 
                <div className='SectionPerfil-Perfil'>
                       
                            <Canvas shadowMap
                            >
                             <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={0.05} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />

                            <PerspectiveCamera makeDefault
                            fov={65}
                            near={0.5}
                            far={100}
                            position={[0, 0, 0.78]}
                            />
                            
                            
                            
                            
                            <Experience />
                           </Canvas>
                          

                    </div> 
            </div>
            <Divglass>
                           <Testglass>
                                <DivSection>
                                    <TestStylePerfil>
                                        Gustavo Oliveira
                                    </TestStylePerfil>
                                </DivSection>
                           </Testglass>
            </Divglass>
            <DivSection>
                <div className='IconGithub'></div>
            </DivSection>
            <Divider />
            <DivSection>
            <DivSectionSobre>

                <DividerSobre>
                    <Sobre></Sobre>
                </DividerSobre>
                <DividerSobreText>

                </DividerSobreText>
                
            </DivSectionSobre>
            
            </DivSection>
            



        </div>
      
        </>
    )
    
}
export default Main;