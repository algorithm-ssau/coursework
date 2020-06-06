import styled from 'styled-components/macro';

import typography from '../../styles/typography';

const ProductTitle = styled.strong`
  ${typography.title}

  display: -moz-box;
  display: -webkit-box;
  display: box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;

  height: 48px;
  margin-bottom: 20px;
`;

export default ProductTitle;
