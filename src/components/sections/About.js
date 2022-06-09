import React from 'react';
import styled from 'styled-components';
import Carousel from '../Carousel';

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
/* color: ${props => props.theme.body}; */
display: flex;
justify-content: center;
align-items: center;
position: relative;


`

const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 54em){ 
  flex-direction: column;
}

`
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 74em){
  width: 50%;
  margin: 0rem 2rem;
}
@media (max-width: 64em){
  width: 35vw;
}
@media (max-width: 54em){
  width: 100%;
  margin: 2rem 0rem;
}
`

const Title = styled.h2`
  font-size: ${props => props.theme.fontxxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${props => props.theme.body};
  align-self: flex-start;
  margin: 0 auto;
  
@media (max-width: 74em){
  font-size: ${props => props.theme.fontxxl};
}
@media (max-width: 64em){
  font-size: ${props => props.theme.fontxl};
}
@media (max-width: 54em){
  text-align: center;
}  
`

const SubTitle = styled.p`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
color: ${(props) => props.theme.body};
font-weight: 400;
width: 80%;
align-self: flex-start;
margin: 1rem auto;

@media (max-width: 74em){
  font-size: ${props => props.theme.fontmd};
}
@media (max-width: 64em){
  font-size: ${props => props.theme.fontmd};
}
@media (max-width: 54em){
  text-align: center;
}  
`

function About() {
  
  return ( 
  <Section id="about">
    <Container>
      <Box><Carousel/></Box>
      <Box>
        <Title>
          Esses são nossos momentos
        </Title>
        <SubTitle>
          Meu amor , fiz esse quadro digital pra você poder ver quando voce quiser espero que goste Eu te Amo muito!
        </SubTitle>
        <SubTitle>
          Feliz dia dos namorados!
        </SubTitle>
      </Box>
    </Container>
  </Section>
  )
}

export default About;