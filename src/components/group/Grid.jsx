import styled from 'styled-components/macro';

import Container from './Container';

const Grid = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  align-items: flex-start;
`;

export default Grid;
