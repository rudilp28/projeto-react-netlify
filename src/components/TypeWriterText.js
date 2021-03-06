import React from 'react'
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import mySound from '../assets/music.mp3';
import { ReactComponent as Pause } from '../assets/pause-button.svg';
import { Howl } from 'howler'

const Title = styled.h2`
  font-size: ${props => props.theme.fontxxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${props => props.theme.text};
  align-self: flex-start;

  span{
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive;
  }
  .text-1{
    color: blue;
  }
  .text-2{
    color: orange;
  }
  .text-3{
    color: red;
  }
  @media (max-width: 74em){
    font-size: ${props => props.theme.fontxxl};
  }
  @media (max-width: 64em){
    font-size: ${props => props.theme.fontxl};
  }
  @media (max-width: 54em){
    font-size: ${props => props.theme.fontxxl};
    width: 100%;
    text-align: center;
  }
`;

const SubTitle = styled.h3`
font-size: ${props => props.theme.fontlg};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight: 600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;

@media (max-width: 54em){
    font-size: ${props => props.theme.fontlg};
    width: 100%;
    text-align: center;
}
`

const ArrowButton =  styled.button`
display: inline-block;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
outline: none;
border: none;

font-size: ${props => props.theme.fontsm};
padding: 0.8rem 2.5rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;

&:hover{
    transform: scale(0.9);
}

&::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2 ease;
}
&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}

@media (max-width: 54em){
    width: 100%;
}
`

const PauseButton =  styled.button`
display: inline-block;
background-color: ${props => props.theme.buttonpause};
color: ${props => props.theme.body};
outline: none;
border: none;

font-size: ${props => props.theme.fontsm};
margin-left: 10px;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;

&:hover{
    transform: scale(0.9);
}

&::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2 ease;
}
&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}

@media (max-width: 54em){
    width: 100%;
}
@media (max-width: 34em){
    width: 40px;
    height: 40px;
}
`

  
const ButtonContainer = styled.div`
  width: 80%;
  align-self: baseline;
  align-items: center;
  justify-content: flex-start;
  display: flex;
  @media (max-width: 54em){
    align-self: center;
  } 
`

const TypeWriterText = () => {

  const scrollTo =  (id) => {
    let element = document.getElementById(id);
  
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    })
  }

    const sound =  new Howl({
        src:[mySound],
        html5: true,
        preload: true,
    })
    

  return (
   <>
   <SubTitle>
    Bem vinda ao quadro digital!
    </SubTitle>
    <Title>
      aqui voc?? poder?? ver 
      <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
        onInit={(typewriter) => {
          typewriter.typeString(`<span class="text-1"> Momentos!</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-2"> Lugares!</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-3">Sobre n??s</span>`)
            .pauseFor(2000)
            .deleteAll()
            .start()
        }}
      />
    </Title>
    <SubTitle>
    Arrasta pra baixo para saber mais!
  </SubTitle>
  <ButtonContainer className='aqui'>
    <ArrowButton onClick={() => {scrollTo('about') ; sound.play() }}>prosseguir</ArrowButton>
    <PauseButton onClick={() => sound.pause() }><Pause style={{ width: '30px', height: '35px' }} /></PauseButton>
  </ButtonContainer>
  </>
  )
}

export default TypeWriterText