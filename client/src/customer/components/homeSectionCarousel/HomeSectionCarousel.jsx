import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../homeSectionCard/homeSectionCard'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
const HomeSectionCarousel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  console.log('activeindex', activeIndex)
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 }
  }
  const slidePrev = () => setActiveIndex(activeIndex - 1)
  const slideNext = () => setActiveIndex(activeIndex + 1)

  const syncActiveIndex = ({item}) => setActiveIndex(item)
  

  const items = data
    .slice(0, 10)
    .map(item => <HomeSectionCard product={item} />)
  return (
    <div className='relative px-4 lg:px-4 border'>
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className='relative p-5 px-10 '>
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {activeIndex !== items.length - 5 && (
          <button
            onClick={slideNext}
            variant='contained'
            className='absolute top-32 right-[0rem] rotate-180 bg-gray-300  hover:bg-blue-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer'
          >
            <KeyboardArrowLeftIcon className='mx-2 my-5 rounded-md font-bold text-white text-4xl' />
          </button>
        )}
        {activeIndex !== 0 && (
          <button
            onClick={slidePrev}
            variant='contained'
            className='absolute top-32 left-[0rem] bg-gray-300 hover:bg-blue-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer'
          >
            <KeyboardArrowLeftIcon className='mx-2 my-5 rounded-md font-bold text-white text-4xl' />
          </button>
        )}
      </div>
    </div>
  )
}

export default HomeSectionCarousel
