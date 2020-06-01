import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../group/Grid';
import Product from './Product';

const Catalog = ({ products }) => (
  <Grid>
    {
      products.map((product) => (
        <Product product={product} key={product.id} />
      ))
    }
  </Grid>
);

Catalog.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number
  }))
};

Catalog.defaultProps = {
  products: []
};

export default Catalog;
