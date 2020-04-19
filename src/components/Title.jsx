import styled from 'styled-components/macro';

import colors from '../styles/colors';
import typography from '../styles/typography';

const Title = styled.h1`
  ${typography.title}

  color: ${colors.black};

  padding-bottom: 20px;
`;

export default Title;
