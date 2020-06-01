import styled from 'styled-components/macro';

import colors from '../../../styles/colors';
import typography from '../../../styles/typography';

const HeaderNav = styled.button`
  ${typography.title}

  display: block;
  position: relative;

  min-width: 0;
  flex-shrink: 0;

  white-space: nowrap;

  padding: 20px;

  color: ${colors.black};
  background-color: transparent;

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

  &.active {
    &:after {
      background-color: ${colors.sand};
    }
  }

  &:hover {
    &:after {
      background-color: ${colors.pink};
    }
  }
`;

export default HeaderNav;
