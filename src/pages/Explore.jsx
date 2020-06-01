import React from 'react';
import { withRouter } from 'react-router-dom';

import useSWR from 'swr';
import fetch from '../utils/fetch';

import Container from '../components/group/Container';
import Filter from '../components/catalog/Filter';
import Catalog from '../components/catalog/Catalog';
import Title from '../components/Title';

const Explore = () => {
  const { data: exploreProducts } = useSWR('/api/explore', fetch);

  return (
    <>
      <Container space>
        <Title space>Explore</Title>
        <Filter />
        <Catalog products={exploreProducts} />
      </Container>
    </>
  );
};

export default withRouter(Explore);
