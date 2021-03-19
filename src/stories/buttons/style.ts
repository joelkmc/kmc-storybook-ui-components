import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const buttonAnimation = keyframes`
  from {
    transform: translateX(0);
    opacity: 0;
  } to {
    transform: translateX(-100%);
    opacity: 1;
  }
`;

export const StyledButton = styled.button`
  overflow: hidden;

  &:not(.link):active {
    transform: scale(0.93);
    box-shadow: none;
    transition: all 0.2s ease;
  }

  &.loading {
    transition: all 0.2s ease;
    padding-left: 2.5rem;
    span {
      position: absolute;
      animation: ${buttonAnimation} 0.2s ease;
      animation-fill-mode: forwards;
    }
  }

  &:disabled {
    opacity: 0.65;
  }
`;
