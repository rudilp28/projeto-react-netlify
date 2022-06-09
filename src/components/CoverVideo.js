import React from 'react'
import GIF from '../assets/Home-Rudi.gif'
import styled from 'styled-components';

const VideoContainer = styled.div`
  width: 100%;

  img{
      width: 100%;
      height: auto;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
        <img src={GIF} alt="loading..." />
    </VideoContainer>
  )
}

export default CoverVideo