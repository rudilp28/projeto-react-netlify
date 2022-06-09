import React from 'react';
import styled from 'styled-components'
import CoverVideo from '../CoverVideo';
import TypeWriterText from '../TypeWriterText';


const Section = styled.div`
min-height: 100vh;
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};

`

const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 54em){
    flex-direction: column-reverse;
}
@media (max-width: 34em){
  min-height: 95vh;
}

`
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 54em){
  width: 100%;
}

`

function Home() {
  return (
      <>
       <Section>
           <Container>
               <Box><TypeWriterText /></Box>
               <Box> <CoverVideo /> </Box>
           </Container>
       </Section>
      </>
 
  
  )
}

export default Home;