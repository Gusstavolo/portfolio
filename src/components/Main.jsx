import '../App.css';
import React from 'react';
import styled from 'styled-components'



const DivSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
`;
const TestStylePerfil = styled.h1 `
font-size: 2rem;
color: black;
`;

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
            



        </div>
      
        </>
    )
    
}
export default Main;