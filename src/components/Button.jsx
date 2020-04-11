import styled, { css } from 'styled-components/macro';

import colors from '../styles/colors';

const Button = styled.button`
  display: inline-block;
  max-width: 100%;

  flex-shrink: 0;

  font-size: 24px;
  line-height: 24px;
  font-weight: 600;

  padding: 20px;

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
