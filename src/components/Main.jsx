import '../App.css';
import React from 'react';
import styled from 'styled-components'



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
`;
const TestStylePerfil = styled.h1 `
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
const DividerSobreSUP = styled.div `

    display:flex;
    width: 100%;
    

    
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
const Div = styled.div `

    height:100%;
    
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
                <div className='SectionPerfil-Perfil'></div> 
                
            </div>
            <DivSection>
                <TestStylePerfil>
                    Gustavo Oliveira
                </TestStylePerfil>
            </DivSection>
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