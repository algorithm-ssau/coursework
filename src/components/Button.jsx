import styled, { css } from 'styled-components/macro';

import colors from '../styles/colors';
import typography from '../styles/typography';

const Button = styled.button`
  ${typography.title}

  display: inline-block;
  max-width: 100%;

  flex-shrink: 0;

  padding: 20px;
  box-sizing: border-box;

  color: ${colors.white};
  background-color: ${colors.black};

  ${(props) => props.fill && css`
    display: block;
    width: 100%;
  `}

  ${(props) => props.invert && css`
    color: ${colors.black};
    background-color: ${colors.white};
  `}
`;

export default Button;
