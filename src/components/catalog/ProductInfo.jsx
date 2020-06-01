import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import ProductTitle from './ProductTitle';
import ProductPrice from './ProductPrice';

const StyledProductInfo = styled.div`
  padding: 20px 0;
`;

const ProductInfo = ({ product }) => (
  <StyledProductInfo>
    <ProductTitle>{product.title}</ProductTitle>
    <ProductPrice price={product.price} />
  </StyledProductInfo>
);

ProductInfo.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number
    })
  }).isRequired
};


export default ProductInfo;
