import React from 'react';
import styled from 'styled-components/macro';

import { Link } from 'react-router-dom';
import HeaderNav from './HeaderNav';
import { ReactComponent as Logo } from '../../../assets/logo.svg';

const StyledHeaderNav = styled(HeaderNav)`
  padding-left: 84px;

  &:after {
    left: 84px;
  }

  svg {
    position: absolute;

    left: 0;
    top: 0;

    width: 64px;
    height: 64px;

    pointer-events: none;
  }
`;

const HeaderLogo = () => (
  <StyledHeaderNav
    as={Link}
    to="/"
  >
    <Logo />
    Sneaker
  </StyledHeaderNav>
);

export default HeaderLogo;
