import React from 'react';
import { withRouter } from 'react-router-dom';

import Container from '../components/group/Container';
import Promo from '../components/promo/Promo';
import PromoContent from '../components/promo/PromoContent';

const About = () => (
  <>
    <Container>
      <Promo>
        <div>
          We are your
          {' '}
          <b>footwear</b>
          {' '}
          specialists and
          {' '}
          <b>lifestyle</b>
          {' '}
          experts.
        </div>
        <div>
          We deliver latest
          {' '}
          <b>fashion</b>
          {' '}
          to your doorstep.
        </div>
      </Promo>
      <PromoContent>
        Sneaker is a global retail experience founded in 2020 by Anton Petrov,
        Alex Ugarin and Vadim Tarasov who turned a sneaker collection into a global retail company.
      </PromoContent>
      <br />
      <PromoContent>
        The avid collectors, who both were working in the sports and lifestyle categories in Samara,
        saw a hole in the Russia retail market–specifically one for sneaker consumers that had niche
        tastes. In the early &apos;20s, there was no alternative to the big retail chains dominating
        Samara, and after a trip to St. Petersburg that yielded both inspiration and the acquisition
        of some exclusive products that Samara had yet to see, Sneaker was born.
      </PromoContent>
    </Container>
    <Container space>
      <Promo>
        <div>
          When it comes to retailers,
          {' '}
          <strong>Sneaker</strong>
          {' '}
          is
          {' '}
          <b>king</b>
          {' '}
          of the colab. – Big Bro
        </div>
      </Promo>
      <PromoContent>
        Sneaker first opened its doors on March 24th, 2020 in Samara with the launch of
        the website on May 2020. Mother nature to us is important thus our vision is to spread our
        mindset and our innovative fashion with the rest of the world.
      </PromoContent>
    </Container>
  </>
);

export default withRouter(About);
