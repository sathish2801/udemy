import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './CarouselFadeExample.module.scss';

const CarouselFadeExample = ({ slides }) => {
  return (
    <Carousel fade className={styles['custom-carousel']} interval={3000}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index} className={styles['custom-carousel-item']}>
          <img
            className={styles['custom-carousel-image']}
            src={slide.image}
            alt={slide.imageAlt}
          />
          <Carousel.Caption className={styles['custom-carousel-caption']}>
            <h3 className={styles['custom-caption-title']}>{slide.captionTitle}</h3>
            <p className={styles['custom-caption-text']}>{slide.captionText}</p>
            <p className={styles['custom-caption-additional']}>{slide.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselFadeExample;
