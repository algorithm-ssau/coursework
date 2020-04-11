import styled, { css } from 'styled-components/macro';

import colors from '../styles/colors';

const HeaderButton = styled.button`
  display: block;
  position: relative;

  min-width: 0;
  flex-shrink: 0;

  font-size: 24px;
  line-height: 24px;
  font-weight: 600;

  white-space: nowrap;

  padding: 20px;

  color: ${colors.black};
  background-color: ${colors.white};

  &:after {
    content: '';
    display: block;
    position: absolute;

    z-index: -1;

    height: 2px;

    left: 20px;
    right: 20px;
    bottom: 18px;

    background-color: transparent;
    transition: background-color 0.3s ease;
  }

  ${(props) => props.active && css`
    &:after {
      background-color: ${colors.sand};
    }
  `}

  &:hover {
    &:after {
      background-color: ${colors.pink};
    }
  }
`;

export default HeaderButton;
