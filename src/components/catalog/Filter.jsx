import React from 'react';
import styled from 'styled-components/macro';

import Dropdown from '../Dropdown';
import Container from '../group/Container';

const StyledFilter = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: stretch;

  margin-bottom: 20px;

  .Dropdown {
    width: 210px;
  }
`;

const Filter = () => (
  <StyledFilter>
    <Dropdown>Gender</Dropdown>
    <Dropdown>Brand</Dropdown>
    <Dropdown>Collection</Dropdown>
    <Dropdown>Color</Dropdown>
  </StyledFilter>
);

export default Filter;
