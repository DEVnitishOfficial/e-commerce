import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../homeSectionCard/HomeSectionCard';
const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4 },
    };

    const items = [1,1,1,1,1].map((item) =><HomeSectionCard />)
  return (
    <div className='relative px-4 lg-px-8 '>
        <div className='relative p-5'>
        <AliceCarousel
         responsive={responsive}
        items={items}
        disableButtonsControls
        infinite
    />
        </div>
         
    </div>
  )
}

export default HomeSectionCarousel