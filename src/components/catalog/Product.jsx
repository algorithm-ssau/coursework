import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { NavLink } from 'react-router-dom';
import ProductInfo from './ProductInfo';
import LazyImage from '../LazyImage';

import colors from '../../styles/colors';

const StyledProduct = styled.a`
  display: block;
  width: 288px;

  flex-shrink: 0;

  margin-bottom: 18px;

  color: ${colors.black};

  .Image {
    width: 288px;
    height: 288px;
  }
`;

const Product = ({ product }) => (
  <StyledProduct
    as={NavLink}
    activeClassName="active"
    to={`/explore/${product.id}`}
    exact
  >
    <LazyImage src={`/storage/thumbnail/${product.id}.jpg`} />
    <ProductInfo product={product} />
  </StyledProduct>
);

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number
  }).isRequired
};

const isSameProduct = (prevProps, nextProps) => prevProps.product && nextProps.product
    && prevProps.product.id === nextProps.product.id;

export default memo(Product, isSameProduct);
