import styled, { css, keyframes } from 'styled-components';
import { transparentize } from 'polished';

const loaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  ${({ size = 80 }) => css`
    display: inline-block;
    width: ${size}px;
    height: ${size}px;
    &:after {
      content: " ";
      display: block;
      width: ${size}px;
      height: ${size}px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid ${({ theme }) => theme.primaryColor};
      border-color: ${({ theme }) => theme.primaryColor} transparent ${({ theme }) => theme.primaryColor} transparent;
      animation: ${loaderAnimation} 1.2s linear infinite;
    }
  `}
  }
`;

export const Backdrop = styled.div`
  width: 100%;
  text-align: center;
  background: ${({ theme }) => transparentize(0.2, theme.accentBackgroundColor)};
  height: 100%;
  display: block;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  padding: 17em 0;
`;

export default Loader;
