// src/components/CarouselSlider.tsx

import React from 'react';
import Slider from 'react-slick';
import styled, { keyframes } from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CarouselWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #E9F5ED;

  .slick-slide {
    padding: 0 10px;
    animation: ${slideIn} 0.5s ease-in-out;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    z-index: 1;
  }

  .slick-slide img,
  .slick-slide video {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border: 2px solid #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 5px 0;
    transition: transform 0.3s ease;
  }

  .slick-slide:hover {
    transform: scale(1.05);
    z-index: 2;
    border-radius: 10%;
  }

  .slick-slide:hover img,
  .slick-slide:hover video {
    transform: scale(1.1);
    border-radius: 10%;
  }

  .slide-description {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px;
    transform: translateY(100%);
    transition: transform 0.3s ease;
    z-index: 3;
  }

  .slick-slide:hover .slide-description {
    transform: translateY(0);
  }

  .slick-prev:before,
  .slick-next:before {
    color: #000;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin: 10px 0;
  color: #000;
  background-color: #E9F5ED;
  padding: 10px;
  margin-top: 5px;
`;



const CarouselSlider: React.FC<{
  items: any[],
  title: string,
  type: 'image' | 'video'
}> = ({ items, title, type }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <CarouselWrapper>
        <Slider {...settings} arrows={false}>
          {items.map((item, index) => (
            <div key={index}>
              {type === 'image' ? (
                <img src={item.src} alt={item.alt} />
              ) : (
                <video src={item.src} title={item.title} autoPlay muted loop />
              )}
              <div className="slide-description">{item.description}</div>
            </div>
          ))}
        </Slider>
      </CarouselWrapper>
    </>
  );
};

export default CarouselSlider;
