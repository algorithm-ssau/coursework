import styled from 'styled-components/macro';

import colors from '../../styles/colors';
import typography from '../../styles/typography';

const Promo = styled.h2`
  ${typography.title}

  padding: 128px 0;
  text-align: center;
  color: ${colors.black};

  b {
    color: ${colors.sand};
  }

  strong {
    color: ${colors.pink};
  }
`;

export default Promo;
