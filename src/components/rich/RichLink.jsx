import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';

import { Link } from 'react-router-dom';

import colors from '../../styles/colors';
import typography from '../../styles/typography';

const StyledRichLink = styled.a`
  ${typography.title}

  display: block;
  position: relative;

  margin-bottom: 20px;

  flex-basis: calc(50% - 10px);
  flex-shrink: 0;
  overflow: hidden;

  text-align: center;
  line-height: 128px;
  white-space: nowrap;

  color: ${colors.white};
  background-color: ${colors.black};

  &:after {
    content: '';
    display: block;

    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;

    height: 20px;

    background-color: ${colors.peach};

    transform: translateY(100%);
    backface-visibility: hidden;
    will-change: transform;
    transition: transform 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  }

  &:hover {
    &:after {
      transform: translateY(0);
    }
  }

  ${(props) => props.theme && css`
    background-color: ${colors[props.theme]};
  `}
`;

const RichLink = ({ params, children, theme }) => (
  <StyledRichLink
    as={Link}
    to={{
      pathname: '/explore',
      state: params
    }}
    theme={theme}
  >
    {children}
  </StyledRichLink>
);

RichLink.propTypes = {
  params: PropTypes.shape({
    gender: PropTypes.string,
    barand: PropTypes.string,
    collection: PropTypes.string,
    color: PropTypes.string
  }).isRequired,
  theme: PropTypes.oneOf(Object.keys(colors)),
  children: PropTypes.node
};

RichLink.defaultProps = {
  children: null,
  theme: null
};

export default RichLink;
