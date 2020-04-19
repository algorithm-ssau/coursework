import React, { useMemo } from 'react';
import styled from 'styled-components/macro';

import colors from '../../../styles/colors';
import typography from '../../../styles/typography';

import { ReactComponent as MasterCardIcon } from '../../../assets/MasterCard.svg';
import { ReactComponent as VisaIcon } from '../../../assets/Visa.svg';
import { ReactComponent as MirIcon } from '../../../assets/Mir.svg';

import Grid from '../../group/Grid';

const StyledFooter = styled.footer`
  background-color: ${colors.peach};
`;

const FooterGrid = styled(Grid)`
  padding: 20px 0;
`;

const FooterSection = styled.section`
  flex-basis: calc(50% - 10px);
`;

const FooterCaption = styled.h6`
  ${typography.title}

  padding: 20px 0;
`;

const FooterInfo = styled.div`
  ${typography.text}

  padding-bottom: 20px;

  svg {
    display: inline-block;
    margin-right: 24px;
  }
`;

const Copyright = styled.div`
  ${typography.title}

  text-align: center;

  padding: 20px;

  color: ${colors.white};
  background-color: ${colors.black};
`;

const Footer = () => {
  const copyright = useMemo(() => `Sneaker Shop :: ${(new Date()).getFullYear()}`, []);

  return (
    <StyledFooter>
      <FooterGrid>
        <FooterSection>
          <FooterCaption>Prices and shipping cost</FooterCaption>
          <FooterInfo>
            All product prices include VAT. Shipping costs are not included
            and will be added during checkout. For detailed information on
            our international shipping costs please click here.
            All prices except calculated on daily exchange rate.
          </FooterInfo>
        </FooterSection>
        <FooterSection>
          <FooterCaption>Delivery time</FooterCaption>
          <FooterInfo>
            We usually deliver international orders within 2 to 5 business
            days from our main warehouse. If items have to shipped from
            a field warehouse first, delivery time will extend to 4 to
            6 business days.
          </FooterInfo>
        </FooterSection>
        <FooterSection>
          <FooterCaption>Payment methods</FooterCaption>
          <FooterInfo>
            <MasterCardIcon />
            <VisaIcon />
            <MirIcon />
          </FooterInfo>
        </FooterSection>
        <FooterSection>
          <FooterCaption>Safe shopping</FooterCaption>
          <FooterInfo as="ul">
            <li>✓ 14 day returns</li>
            <li>✓ Secure payment with SSL Encryption</li>
          </FooterInfo>
        </FooterSection>
        <FooterSection>
          <FooterCaption>Legal act</FooterCaption>
          <FooterInfo as="ul">
            <li>Terms and conditions</li>
            <li>Right of withdrawal</li>
            <li>Data privacy</li>
          </FooterInfo>
        </FooterSection>
        <FooterSection>
          <FooterCaption>Service</FooterCaption>
          <FooterInfo as="ul">
            <li>Shipping costs</li>
            <li>Help &amp; FAQ</li>
            <li>Contact us</li>
          </FooterInfo>
        </FooterSection>
      </FooterGrid>
      <Copyright>
        {copyright}
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;
