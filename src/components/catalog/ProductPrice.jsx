import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import typography from '../../styles/typography';

import ProductDiscount from './ProductDiscount';
import ProductStrike from './ProductStrike';

import format from '../../utils/price';

const StyledProductPrice = styled.strong`
  ${typography.text}

  font-weight: 500;
  margin-bottom: 20px;
`;

const ProductPrice = ({ price }) => (
  <StyledProductPrice>
    {
      price.min === price.max ? (
        format(price.min)
      ) : (
        <>
          <ProductStrike>
            {format(price.max)}
          </ProductStrike>
          <ProductDiscount>
            {format(price.min)}
          </ProductDiscount>
        </>
      )
    }
  </StyledProductPrice>
);

ProductPrice.propTypes = {
  price: PropTypes.shape({
    max: PropTypes.number,
    min: PropTypes.number
  }).isRequired
};

export default ProductPrice;
