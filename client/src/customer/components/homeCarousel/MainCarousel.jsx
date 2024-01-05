import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './mainCarouseData';

const items = mainCarouselData.map((item) => <img role='presentation' className='cursor-pointer h-[30vh] w-full lg:h-[60vh] lg:w-full' src={item.image} alt='crouseImage' />)

const MainCarousel = () => (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
);

export default MainCarousel