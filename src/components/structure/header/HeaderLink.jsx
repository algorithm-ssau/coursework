import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';

import { NavLink } from 'react-router-dom';
import HeaderNav from './HeaderNav';

const StyledHeaderLink = styled(HeaderNav)`
  ${(props) => props.expand && css`
    margin-left: auto;
  `}
`;

const HeaderLink = ({ to, children, expand }) => (
  <StyledHeaderLink
    as={NavLink}
    activeClassName="active"
    to={to}
    expand={expand ? 1 : 0}
    exact
  >
    {children}
  </StyledHeaderLink>
);

HeaderLink.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
  expand: PropTypes.bool,
  children: PropTypes.node
};

HeaderLink.defaultProps = {
  to: '/',
  expand: false,
  children: null
};

export default HeaderLink;
