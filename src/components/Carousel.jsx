import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { slide1, slide2, slide3, slide4, slide5 } from '../assets';
import { slides } from '../constants';

const carousel = () => {
    return (
        <Carousel fade>
            {slides.map((slide) => (
                <Carousel.Item interval={5000}>
                    <img 
                        className='d-block w-100' 
                        style={{
                            height: '70vh',
                            objectFit:'cover'
                        }} 
                        src={slide.id}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default carousel