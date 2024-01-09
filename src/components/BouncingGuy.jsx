import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(-30px);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const BouncingImage = styled.img`
  animation: ${bounceAnimation} 2s infinite;
  width: 40%;
  position: fixed;
  bottom: -10px;
  margin-bottom: -20px;

  @media (max-width: 768px) {
    width: 450px;
    left: -46px;
  }
`;

const BouncingGuy = ({ src, alt }) => {
  return <BouncingImage src={src} alt={alt} />;
};

export default BouncingGuy;