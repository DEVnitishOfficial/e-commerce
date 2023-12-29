import React from 'react'
import MainCarousel from '../../components/homeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/homeSectionCarousel/HomeSectionCarousel'

function HomePage() {
  return (
    <div>
        <MainCarousel />
        <div>
            <HomeSectionCarousel />
        </div>
    </div>
  )
}

export default HomePage