import React from 'react';
import { withRouter } from 'react-router-dom';

import useSWR from 'swr';
import fetch from '../utils/fetch';

import Container from '../components/group/Container';
import Catalog from '../components/catalog/Catalog';
import Title from '../components/Title';

const Sale = () => {
  const { data: saleProducts } = useSWR('/api/sale', fetch);

  return (
    <>
      <Container space>
        <Title space>Sale</Title>
        <Catalog products={saleProducts} />
      </Container>
    </>
  );
};

export default withRouter(Sale);
