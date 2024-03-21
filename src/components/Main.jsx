import { PerspectiveCamera } from '@react-three/drei'
import '../App.css';
import React, { useRef } from 'react';
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { Experience } from './Experience';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';

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
  background-image: linear-gradient(#272829, #313233,#1d1e1f);
  transition: 0.7s;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.521);

  
  border-radius: 20px;
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
    
   border-top-left-radius: 10px;
   border-bottom-left-radius: 10px;
    background-image: linear-gradient(#080808, #202122,#080808);
    
`;
const DividerSobreText = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 80%;  
   
   border-radius: 30px;
    
 
    
`;
const Divglass = styled.div `
   
    position: relative;
    width: 380px;
    height: auto;
    top: 10%;
    left: 5%;
`;
const DivglassTop = styled(Divglass)`

    top: 10%;
    left: 53%;

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
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.521);
backdrop-filter: blur( 5.5px );
-webkit-backdrop-filter: blur( 5.5px );
border-radius: 2px;

`;
const TestglassTop = styled(Testglass)`
    position:absolute;
    top: 50px;
    left: 10%;
    border-left: none;
    border-right: 1px solid black;
`;
const TxtSobre = styled.h1 `

 font-family: "Staatliches", sans-serif;
  font-weight: 10;
  text-align: justify;
  font-style: normal;
 
  color: #FFF6F6;
  font-size: 2.2rem;
  padding:20px;
`;

const ProjeTxt = styled.h1 `
display: flex;
justify-content:center;
 font-family: "Staatliches", sans-serif;
  font-weight: 600;
  text-align: justify;
  font-style: normal;
 
  color: #000000;
  font-size: 2.2rem;
  
  background: rgba( 255, 255, 255, 0 );
  box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.521);
backdrop-filter: blur( 5.5px );
-webkit-backdrop-filter: blur( 5.5px );
border-radius: 20px;
padding: 15px;
`;
const DivSectionColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  
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

function FadeInElement({ children }) {
    const { ref, inView } = useInView({
        threshold: 0, // Detecta quando pelo menos uma parte do elemento está visível
        root: null, // Usa o viewport como a área de visibilidade
        rootMargin: '0px' // Sem margem adicional
      });
    console.log('Ref:', ref);
  console.log('Elemento visível:', inView);
    return (
      <CSSTransition
        in={inView}
        timeout={1000}
        classNames="fade-in"
        unmountOnExit
      >
        <div ref={ref} className="fade-in-element">
          {children}
        </div>
      </CSSTransition>
    );
  }

  const DivSecProjects = styled.div`
 display: flex;
  justify-content: center;
  margin-top:30px;
  width: 100%;
  height: auto;
  background-image: linear-gradient(#272829, #313233,#1d1e1f);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.521);
  border-radius: 20px;
  
`;
 const SecImgProjects = styled.div`
  width: 50%;

`;
const ImgProjects = styled.div`
  width:100%;
  height:150px;
  border-radius:20px;
`;
const SecTxtProjects = styled.div`
  width:50%;
 
`;

const SecProjects = () => {
  const list = [
    "./imgs/chgif.gif",
  ]
  const a = 'url(./imgs/chgif.gif)'

  
  return (
    <> 
    <DivSecProjects>
      <SecImgProjects>
        <ImgProjects className='imgA'  />
        
      </SecImgProjects>
      <SecTxtProjects>
          
        </SecTxtProjects>
    </DivSecProjects>
    <DivSecProjects>
      <SecImgProjects>
        <ImgProjects className='imgB'  />
        
      </SecImgProjects>
      <SecTxtProjects>
          
        </SecTxtProjects>
    </DivSecProjects>
    </>
  )
}






function Main(){
    
        const [isVisible, setIsVisible] = useState(false);
        const { ref, inView } = useInView();
     
        // Função para carregar conteúdo adicional
        const loadContent = () => {
          // Simulação de carregamento de conteúdo
          setTimeout(() => {
            setIsVisible(true);
          }, 500); // Tempo de simulação: 2 segundos
        };
      
        // Carregar o conteúdo quando o elemento estiver visível na viewport
        if (inView && !isVisible) {
          loadContent();
        }
      
      
    return(
        <>
        <div className='MainPage'>
           <DivglassTop>
                 <TestglassTop>
                                
                           <DivSection>                      
                                 <a href='https://github.com/Gusstavolo' className='IconGithub'></a>
                                 <a href='https://www.linkedin.com/in/gusstavolo' className='IconLike'></a>
                          </DivSection>
                               
                    </TestglassTop>
              </DivglassTop>
            <div className='SectionPerfil'> 
            
                <div className='SectionPerfil-Perfil' ref={ref}>
                {isVisible ? (
                       
                            <Canvas shadowMap async
                            >
                            
                            <PerspectiveCamera makeDefault fov={65} near={0.5} far={100} position={[0, 0, 0.78]} />

                            <Experience />
                           </Canvas>
                            ) : (<div>
                                {/* Indicador de carregamento */}
                                Carregando...
                              </div>
                            )}

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
            
            
            <Divider />
            <DivSection >
             
            <DivSectionSobre>

                <DividerSobre>
                    <Sobre></Sobre>
                </DividerSobre>
                <DividerSobreText>
                   <TxtSobre>
                   Estudante de Engenharia de Software dedicado ao aprendizado contínuo e ao aprimoramento de habilidades em desenvolvimento de software.
                   atualmente focado em tecnologias front-end.
                   </TxtSobre>
                </DividerSobreText>
                
            </DivSectionSobre>
            
            </DivSection>
            
            <Divider />
           
                <DivSectionColumn  >
                    <ProjeTxt>Projetos</ProjeTxt>
                    <SecProjects></SecProjects>
                   

                </DivSectionColumn>
            
        </div>
      
        </>
    )
    
}


export default Main;