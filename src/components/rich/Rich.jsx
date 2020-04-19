import React from 'react';
import styled from 'styled-components/macro';

import Grid from '../group/Grid';
import RichLink from './RichLink';

const RichGrid = styled(Grid)`
  margin: 64px 0 44px 0;
`;

const Rich = () => (
  <RichGrid>
    <RichLink params={{ gender: 'men' }}>Men</RichLink>
    <RichLink params={{ gender: 'women' }}>Women</RichLink>
    <RichLink theme="sand" params={{ collection: 'premium' }}>Premium</RichLink>
    <RichLink theme="pink" params={{ collection: 'cross' }}>Cross</RichLink>
  </RichGrid>
);

export default Rich;
