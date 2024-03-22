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
    top: -370px;
    left: 4%;
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
  display:flex;
  width:50%;
  height:auto;
 
`;
const TxttoP = styled.h2`
position: absolute;
font-family: "Staatliches", sans-serif;
  font-weight: 200;
  text-align: justify;
  font-style: normal;
 
  color: #fcfcfc;
  padding: 13px;
  font-size: 1.2rem;
  `;
  const TxttopB = styled(TxttoP)`
  position: absolute;
  padding: 0;
  font-size: 1rem;
  padding-top: 3px;
  padding-left: 14px;
  `;

  const ButtonsPdiv = styled.div `
  display: flex;
  position:relative;
  left:80px;
  gap:5px;
  
  `;
  const ButtonDeploy = styled.div`
    position:relative;
    width: 70px;
    height: 25px;
    border-radius: 10px;
    top: 80%;
    background-color: #111111;
    cursor: pointer;
    
  
  `;
   const Picon = styled.div`
   position:relative;
   width: 35px;
   height: 35px;
   border-radius: 10px;
  left: 30%;
  top: 5%;
 
 `;
 const DividerTextProj = styled.div `
  width:20px;
  margin-top:20px;
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
          <TxttoP>Projeto para o challenge alura
            <DividerTextProj />
         
            Codificador simples
          </TxttoP>
          
           
       
          <ButtonsPdiv>
            <ButtonDeploy onClick={() => window.location.href = "https://challenge-alura-blond.vercel.app/" }><TxttopB>Deploy</TxttopB></ButtonDeploy>
            <ButtonDeploy onClick={() => window.location.href = "https://github.com/Gusstavolo/ChallengeAlura" }><TxttopB>GitHub</TxttopB></ButtonDeploy>
            <Picon className='IconJs' />
          </ButtonsPdiv>
        </SecTxtProjects>
    </DivSecProjects>
    <DivSecProjects>
      <SecImgProjects>
        <ImgProjects className='imgB'  />
        
      </SecImgProjects>
        <SecTxtProjects>
        <TxttoP>proteto gamePerceptron
          <DividerTextProj />
          conceitos de redes neurais perceptron
        </TxttoP>

          <ButtonsPdiv>
            <ButtonDeploy onClick={() => window.location.href = "https://iaprojectgame.vercel.app/" }><TxttopB>Deploy</TxttopB></ButtonDeploy>
            <ButtonDeploy onClick={() => window.location.href = "https://github.com/Gusstavolo/iaprojectgame" }><TxttopB>GitHub</TxttopB></ButtonDeploy>
            <Picon className='IconJs' />
          </ButtonsPdiv>
        </SecTxtProjects>
    </DivSecProjects>

    <DivSecProjects>
      <SecImgProjects>
        <ImgProjects className='imgC'  />
        
      </SecImgProjects>
        <SecTxtProjects>
         <TxttoP>Game usando unity</TxttoP>
            <ButtonsPdiv>
            <ButtonDeploy ><TxttopB>Deploy</TxttopB></ButtonDeploy>
            <ButtonDeploy ><TxttopB>GitHub</TxttopB></ButtonDeploy>
              <Picon className='IconCs' />
            </ButtonsPdiv>
          
        </SecTxtProjects>
        
    </DivSecProjects>
    <DivSecProjects>
      <SecImgProjects>
        <ImgProjects className='imgD'  />
        
      </SecImgProjects>
        <SecTxtProjects>
         <TxttoP>BlackJack em python</TxttoP>
            <ButtonsPdiv>
            <ButtonDeploy onClick={() => window.location.href = "https://codesandbox.io/p/devbox/amazing-dream-gp7xzl?file=%2Fmain.py%3A455%2C26&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clu1e4qsq0006356iejzdp90m%2522%252C%2522sizes%2522%253A%255B61.24343257443083%252C38.75656742556917%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clu1e4qsp0002356i3ml2hn83%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clu1e4qsp0004356i84tv58nj%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clu1e4qsp0005356if1a3xx4z%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clu1e4qsp0002356i3ml2hn83%2522%253A%257B%2522id%2522%253A%2522clu1e4qsp0002356i3ml2hn83%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clu1e5nyx003n356i60pm2rl6%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A455%252C%2522startColumn%2522%253A26%252C%2522endLineNumber%2522%253A455%252C%2522endColumn%2522%253A26%257D%255D%252C%2522filepath%2522%253A%2522%252Fmain.py%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clu1e5nyx003n356i60pm2rl6%2522%257D%252C%2522clu1e4qsp0005356if1a3xx4z%2522%253A%257B%2522id%2522%253A%2522clu1e4qsp0005356if1a3xx4z%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clu1e4qsp0003356iq7eayyjy%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clu1e4qsp0003356iq7eayyjy%2522%257D%252C%2522clu1e4qsp0004356i84tv58nj%2522%253A%257B%2522id%2522%253A%2522clu1e4qsp0004356i84tv58nj%2522%252C%2522tabs%2522%253A%255B%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D" } ><TxttopB>Deploy</TxttopB></ButtonDeploy>
            <ButtonDeploy onClick={() => window.location.href = "https://github.com/IFSERTAOPE-FLO/projeto-final-alp2021-blackjack-21"}><TxttopB>GitHub</TxttopB></ButtonDeploy>
            
              <Picon className='Iconpython' />
            </ButtonsPdiv>
          
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
          setIsVisible(true);
          setTimeout(() => {
            
          }, 1000); // Tempo de simulação: 2 segundos
        };
      
        // Carregar o conteúdo quando o elemento estiver visível na viewport
        if (inView && !isVisible) {
          loadContent();
        }
      
      
    return(
        <>
        <div className='MainPage'>
           
            <div className='SectionPerfil'> 
            
                <div className='SectionPerfil-Perfil' ref={ref}>
                
                       
                            <Canvas shadowMap async
                            >
                            
                            <PerspectiveCamera makeDefault fov={65} near={0.5} far={100} position={[0, 0, 0.78]} />

                            <Experience />
                           </Canvas>
                          

                    </div> 
                    

            </div>
            <DivglassTop>
                 <TestglassTop>
                                
                           <DivSection>                      
                                 <div onClick={() => window.location.href = "https://github.com/Gusstavolo"} className='IconGithub'></div>
                                 <div onClick={() => window.location.href = "https://www.linkedin.com/in/gusstavolo"}  className='IconLike'></div>
                          </DivSection>
                               
                    </TestglassTop>
              </DivglassTop>
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