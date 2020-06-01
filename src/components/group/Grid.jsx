import styled, { css } from 'styled-components/macro';

import Container from './Container';

const Grid = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  align-items: flex-start;

  flex-wrap: ${(props) => (props.nowrap ? css`nowrap` : css`wrap`)};
`;

export default Grid;
