import React, {
  useEffect, useState, useRef, useMemo
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import clsx from 'clsx';

import colors from '../styles/colors';

const ImageDecorator = styled.div`
  position: absolute;
  z-index: 2;

  top: 0;
  left: 100%;

  width: 100%;
  height: 100%;

  transform: translateX(-100%);
  backface-visibility: hidden;
  will-change: transform;
  transition: transform 0.4s cubic-bezier(0.45, 0.05, 0.55, 0.95);

  background-color: ${colors.peach};
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;

  &.loaded ${ImageDecorator} {
    transform: translateX(0);
  }
`;

const FakeImage = styled.div`
  position: absolute;
  z-index: 1;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
`;

const LazyImage = ({ src }) => {
  const ref = useRef(null);
  const [source, updateSource] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (!ref.current) {
        observer.disconnect();
      }

      const el = entries[0];
      if (el && el.isIntersecting) {
        observer.disconnect();

        const image = new Image();
        image.onload = () => {
          requestAnimationFrame(() => {
            if (!ref.current) {
              return;
            }

            updateSource(src);
          });
        };
        image.src = src;
      }
    }, {});
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  const computedSource = useMemo(() => source && `url(${source})`, [source]);

  return (
    <ImageContainer className={clsx('Image', source && 'loaded')} ref={ref}>
      <ImageDecorator role="presentation" />
      <FakeImage style={{ backgroundImage: computedSource }} />
    </ImageContainer>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired
};

export default LazyImage;
