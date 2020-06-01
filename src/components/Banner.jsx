import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';

import colors from '../styles/colors';
import typography from '../styles/typography';

const StyledBanner = styled.a`
  display: block;

  background-color: ${colors.peach};

  .Image {
    height: 72vh;
    max-height: 532px;
  }
`;

const BannerContainer = styled.h2`
  ${typography.title}

  display: block;

  text-align: center;

  padding: 20px;

  color: ${colors.white};
  background-color: ${colors.sand};
`;

const Banner = ({ to, image, children }) => (
  <StyledBanner as={Link} to={to}>
    <LazyImage src={image} />
    <BannerContainer>{children}</BannerContainer>
  </StyledBanner>
);

Banner.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
  image: PropTypes.string.isRequired,
  children: PropTypes.node
};

Banner.defaultProps = {
  to: '/',
  children: null
};

export default Banner;
