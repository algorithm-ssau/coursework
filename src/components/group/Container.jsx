import styled, { css } from 'styled-components/macro';

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  position: relative;

  ${(props) => (props.space ? css`
    margin-bottom: 128px;
  ` : '')}
`;

export default Container;
