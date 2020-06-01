import React from 'react';
import { withRouter } from 'react-router-dom';
import useSWR from 'swr';
import fetch from '../utils/fetch';

import Banner from '../components/Banner';
import Container from '../components/group/Container';
import Rich from '../components/rich/Rich';
import Title from '../components/Title';
import Catalog from '../components/catalog/Catalog';

const Home = () => {
  const { data: newProducts } = useSWR('/api/new', fetch);
  const { data: relatedProducts } = useSWR('/api/related', fetch);

  return (
    <>
      <Banner
        to="/sale"
        image="/storage/promo.jpg"
      >
        Mid season sale :: up to 30% off
      </Banner>
      <Container>
        <Rich />
      </Container>
      <Container space>
        <Title>New</Title>
        <Catalog products={newProducts} />
      </Container>
      <Container space>
        <Title>Related</Title>
        <Catalog products={relatedProducts} />
      </Container>
    </>
  );
};

export default withRouter(Home);
