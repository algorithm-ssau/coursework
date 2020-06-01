import React from 'react';
import styled, { keyframes } from 'styled-components/macro';

import colors from '../styles/colors';

const LoadingMask = styled.div`
  position: fixed;

  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 1010;

  background-color: ${colors.white};
`;

const LoadingContainer = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 50%;
  transform: translate(-50%, -50%) rotateZ(45deg);
`;

const LoadingAnimation = keyframes`
  0%, 10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%, 75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%, 100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
`;

const LoadingCube = styled.div`
  float: left;
  width: 50%;
  height: 50%;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    animation: ${LoadingAnimation} 2.4s infinite linear both;
    transform-origin: 100% 100%;
  }

  &:nth-child(1) {
    transform: scale(1.1);

    &:before {
      animation-delay: 0s;
    }
  }

  &:nth-child(2) {
    transform: scale(1.1) rotateZ(90deg);

    &:before {
      animation-delay: 0.3s;
    }
  }

  &:nth-child(3) {
    transform: scale(1.1) rotateZ(270deg);

    &:before {
      animation-delay: 0.9s;
    }
  }

  &:nth-child(4) {
    transform: scale(1.1) rotateZ(180deg);

    &:before {
      animation-delay: 0.6s;
    }
  }
`;

const Loading = () => (
  <LoadingMask>
    <LoadingContainer>
      <LoadingCube />
      <LoadingCube />
      <LoadingCube />
      <LoadingCube />
    </LoadingContainer>
  </LoadingMask>
);

export default Loading;
