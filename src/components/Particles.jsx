import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import 'particles.js/particles';

const gradientBG = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;
const StyledWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: #232741;
  position: absolute;
  background: linear-gradient(-45deg, #e0eee8, #f0f0f4, #e9f1f6, #fff);
  background-size: 400% 400%;
  animation: ${gradientBG} 15s ease infinite;
`;

export default function Particles() {
  useEffect(() => {
    setTimeout(() => {
      window.particlesJS.load('particles-bg', 'particles.config.json', function () {
        console.log('callback - particles.js config loaded');
      });
    }, 100);
  }, []);
  return <StyledWrapper id="particles-bg"></StyledWrapper>;
}
