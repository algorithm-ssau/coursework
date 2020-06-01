import React, { useMemo } from 'react';
import styled from 'styled-components/macro';
import { withRouter, useParams } from 'react-router-dom';

import useSWR from 'swr';
import fetch from '../utils/fetch';

import Container from '../components/group/Container';
import Title from '../components/Title';
import LazyImage from '../components/LazyImage';
import Loading from '../components/Loading';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import ProductPrice from '../components/catalog/ProductPrice';

const ProductStandalone = styled(Container)`
  .Image {
    width: 512px;
    height: 512px;

    flex-grow: 0;
    flex-shrink: 0;
  }
`;

const ProductStandaloneGrid = styled(Container)`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-start;
  align-items: stretch;
`;

const ProductStandaloneInfo = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 0;

  margin-left: 20px;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: stretch;
`;

const ProductStandaloneDescription = styled.div`
  margin-bottom: 10px;
`;

const ProductStandaloneOrder = styled.div`
  margin-top: auto;

  .Dropdown {
    margin-bottom: 20px;

    display: block;
    width: 100%;
  }
`;

const Product = () => {
  const { id } = useParams();
  const { data: product } = useSWR(() => `/api/product/${id}`, fetch);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tags = useMemo(() => product?.tags?.join(' / '), [product]);

  return product ? (
    <ProductStandalone space>
      <Title space>{product.title}</Title>
      <ProductStandaloneGrid nowrap>
        <LazyImage src={`/storage/full/${id}.jpg`} />
        <ProductStandaloneInfo>
          <Title>{tags}</Title>
          <ProductStandaloneDescription>{product.description}</ProductStandaloneDescription>
          <ProductPrice price={product.price} />
          <ProductStandaloneOrder>
            <Dropdown>Size</Dropdown>
            <Button fill>Add to card</Button>
          </ProductStandaloneOrder>
        </ProductStandaloneInfo>
      </ProductStandaloneGrid>
    </ProductStandalone>
  ) : <Loading />;
};

export default withRouter(Product);
