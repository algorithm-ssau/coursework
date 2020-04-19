import React, { useCallback } from 'react';
import styled from 'styled-components/macro';

import colors from '../../../styles/colors';

import HeaderLogo from './HeaderLogo';
import HeaderLink from './HeaderLink';
import HeaderNav from './HeaderNav';

import Container from '../../group/Container';

const FakeHeader = styled.div`
  width: 100%;
  height: 64px;

  flex-shrink: 0;
`;

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 1100;

  background-color: ${colors.white};
`;

const StyledHeader = styled(Container)`
  display: flex;
  flex-direction: row;
`;

const Header = () => {
  const openCart = useCallback(() => {
    // TODO
  }, []);

  return (
    <FakeHeader>
      <FixedHeader>
        <StyledHeader as="nav">
          <HeaderLogo />
          <HeaderLink to="/sale">Sale</HeaderLink>
          <HeaderLink to="/explore">Explore</HeaderLink>
          <HeaderLink to="/about" expand>About</HeaderLink>
          <HeaderNav onClick={openCart}>Cart</HeaderNav>
        </StyledHeader>
      </FixedHeader>
    </FakeHeader>
  );
};

export default Header;
