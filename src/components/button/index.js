import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

const getBackgroundColor = ({ theme, variant = 'primary' }) => {
  const variations = {
    primary: theme.primaryColor,
    secondary: theme.backgroundColor
  }
  return variations[variant];
}

const getTextColor = ({ theme, variant = 'primary' }) => {
  const variations = {
    primary:theme.accentTextColor,
    secondary: theme.primaryColor
  }
  return variations[variant];
}

const getFontSize = ({ size = 'regular' }) => {
  const variations = {
    large: '1.25rem',
    regular: '1rem',
    small: '0.7rem',
  }
  return variations[size];
}

const getButtonSize = ({ size = 'regular', fullwidth = false }) => {
  const width = fullwidth ? '100%' : 'auto';

  const variations = {
    large: {
      width,
      padding: '1.875rem 3rem'
    },
    regular: {
      width,
      padding: '1rem 2rem'
    },
    small: {
      width,
      padding: '0.5rem 1rem'
    },
  }

  return variations[size];
}

const getHoverStyles = ({ theme, variant = 'primary' }) => {
  return {
    'background-color': variant === 'primary' ? darken(0.1, theme.primaryColor) : theme.primaryColor,
    'color': theme.accentTextColor,
  }
}

const Button = styled.button`
  font-size: ${getFontSize};
  font-weight: 500;
  line-height: ${getFontSize};
  display: inline-block;
  color: ${getTextColor};
  border: ${({ theme }) => `2px solid ${theme.primaryColor}`};
  background-color: ${getBackgroundColor};
  border-radius: 3px;
  text-transform: capitalize;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  touch-action: manipulation;
  user-select: none;
  white-space: nowrap;
  ${getButtonSize};
  &:hover, &:active {
    ${getHoverStyles}
  }
  ${({ disabled }) => disabled && css`
    cursor: default!important;
    border: 1px solid #aaa;
    background-color: #ccc;
    &:hover, &:active {
      cursor: default!important;
      border: 1px solid #aaa;
      background-color: #ccc;
    }
  `}
`

export default Button;
