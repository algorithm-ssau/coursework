import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import clsx from 'clsx';

import { ReactComponent as DropIcon } from '../assets/drop.svg';

import colors from '../styles/colors';
import typography from '../styles/typography';

const StyledDropdown = styled.div`
  ${typography.title}

  position: relative;

  padding: 20px 64px 20px 20px;
  box-sizing: border-box;

  border-bottom: 2px solid ${colors.black};

  .Icon {
    display: block;

    width: 24px;
    height: 24px;

    position: absolute;

    top: 20px;
    right: 20px;
    bottom: 20px;
  }
`;

const Dropdown = ({ children, className }) => (
  <StyledDropdown className={clsx('Dropdown', className)}>
    <span>{children}</span>
    <DropIcon className="Icon" />
  </StyledDropdown>
);

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Dropdown.defaultProps = {
  children: 'Select',
  className: ''
};

export default Dropdown;
