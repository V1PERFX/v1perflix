/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';
import { KeyboardArrowLeft } from '@styled-icons/material-twotone/KeyboardArrowLeft';
import { KeyboardArrowRight } from '@styled-icons/material-twotone/KeyboardArrowRight';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    transform: initial;
    &:before {
      font-size: 60px;
    }
  }
  
  .slick-prev {
    top: 0;
    left: 0;
    height: 197px;
    transition: background linear 200ms;
    &:hover {
      background: rgba(0,0,0,0.6);
      border-top-left-radius: 7px;
      border-bottom-left-radius: 7px;
    }
  }
  .slick-next {
    top: 0;
    right: 0;
    height: 197px;
    transition: background linear 200ms; 
    &:hover {
      background: rgba(0,0,0,0.6);
    }
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

export const ArrowLeft = styled(KeyboardArrowLeft)`
  color: var(--white);
  &:hover {
    color: var(--white)
  }
`;

export const ArrowRight = styled(KeyboardArrowRight)`
  color: var(--white);
  &:hover {
    color: var(--white)
  }
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      arrows: true,
      infinite: true,
      speed: 400,
      centerMode: false,
      variableWidth: true,
      nextArrow: <ArrowRight />,
      prevArrow: <ArrowLeft />
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 