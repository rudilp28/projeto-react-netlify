import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ReactComponent as MenuToggle } from '../assets/heart-svg.svg';

import { Pagination , Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../assets/IMG1.jpg'
import img2 from '../assets/IMG2.jpg'
import img3 from '../assets/IMG3.jpg'
import img4 from '../assets/IMG4.jpg'
import img5 from '../assets/IMG5.jpg'
import img6 from '../assets/IMG6.jpg'
import img7 from '../assets/IMG7.jpg'
import img8 from '../assets/IMG8.jpg'
import img9 from '../assets/IMG9.jpg'
import img10 from '../assets/IMG10.jpg'

const Container = styled.div`
width: 25vw;
height: 70vh;

img {
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: relative;
}

.swiper{
    width: 100%;
    height: 100%;
}

.swiper-slide{
   background-color: ${props => props.theme.body };

   /* display: flex;
   justify-content: center;
   align-items: center; */
}

@media (max-width: 74em){
  width: 35vw;
  height: 70vh;
}
@media (max-width: 64em){
  width: 35vw;
  height: 45vh;
}
@media (max-width: 54em){
  width: 40vw;
  height: 50vh;
}
@media (max-width: 44em){
  width: 50vw;
  height: 50vh;
}

@media (max-width: 34em){
  width: 55vw;
  height: 35vh;

  .swiper-pagination{
    bottom: 0px!important;
  }
  img {
    width: 85%;
  }
}
@media (max-width: 24em){
  width: 55vw;
  height: 45vh;

  .swiper-pagination{
    bottom: 0px!important;
  }
}
`

const TextPhoto = styled.p`
    width: 100%;
    top: 0px;
    position: absolute;
    text-align: center;
    transition: .3s opacity;
    transform: translate3d(0,0,0);
    z-index: 10;
    margin: 5px auto;
`

const Carousel = () => {

  return (
    <Container> 
    <Swiper
    autoplay={{
        delay: 2000,
        disableOnInteraction: false
    }}
    pagination={{
        type:'fraction'
    }}
    effect={"cards"}
    grabCursor={true}
    modules={[Pagination , Navigation, Autoplay, EffectCards]}
    className="mySwiper"
  >
    <SwiperSlide> <img src={img1} alt="img-nossa" / > <TextPhoto>minha escolha <MenuToggle style={{ width: '20px', height: '15px' }} /></TextPhoto></SwiperSlide>
    <SwiperSlide> <img src={img2} alt="img-nossa" / > <TextPhoto>love uuuu<MenuToggle style={{ width: '20px', height: '15px' }} /></TextPhoto></SwiperSlide>
    <SwiperSlide> <img src={img3} alt="img-nossa" / > <TextPhoto>Momentos<MenuToggle style={{ width: '20px', height: '15px' }} /></TextPhoto></SwiperSlide>
    <SwiperSlide> <img src={img4} alt="img-nossa" / > <TextPhoto>Rede com você<MenuToggle style={{ width: '20px', height: '15px' }} /></TextPhoto></SwiperSlide>
    <SwiperSlide> <img src={img5} alt="img-nossa" / > <TextPhoto>Eu,você e Rodolfo<MenuToggle style={{ width: '20px', height: '15px' }} /></TextPhoto></SwiperSlide>
    <SwiperSlide> <img src={img6} alt="img-nossa" / > <TextPhoto>Praia<MenuToggle style={{ width: '20px', height: '15px' }} /></TextPhoto></SwiperSlide>
    <SwiperSlide> <img src={img7} alt="img-nossa" / > <TextPhoto>Caras e bocas <MenuToggle style={{ width: '20px', height: '15px' }} /></TextPhoto></SwiperSlide>
    <SwiperSlide> <img src={img8} alt="img-nossa" / > <TextPhoto>parque Vila Lobos<MenuToggle style={{ width: '20px', height: '15px' }} /></TextPhoto></SwiperSlide>
    <SwiperSlide> <img src={img9} alt="img-nossa" / > <TextPhoto>Melhor pôr do sol <MenuToggle style={{ width: '20px', height: '15px' }} /></TextPhoto></SwiperSlide>
    <SwiperSlide> <img src={img10} alt="img-nossa" / ><TextPhoto>Te amo mil milhoes<MenuToggle style={{ width: '20px', height: '15px' }} /></TextPhoto></SwiperSlide>
  </Swiper>
  </Container>
  )
}

export default Carousel