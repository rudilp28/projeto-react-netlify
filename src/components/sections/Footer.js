import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
min-height: 10vh;
width: 100%;
background-color: ${props => props.theme.body};
/* color: ${props => props.theme.body}; */
display: flex;
justify-content: center;
align-items: center;
position: relative;


`

function Recordation() {
  return <Section>Created By: Rudi</Section>;
}

export default Recordation;