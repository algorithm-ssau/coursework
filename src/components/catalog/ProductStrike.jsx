import styled from 'styled-components/macro';

import colors from '../../styles/colors';

const ProdcutDiscount = styled.span`
  position: relative;

  &:after {
    content: '';
    display: block;

    position: absolute;
    top: 50%;
    left: 0;
    right: 0;

    height: 2px;

    background-color: ${colors.pink};
  }
`;

export default ProdcutDiscount;
