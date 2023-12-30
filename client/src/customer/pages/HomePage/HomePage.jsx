import React from 'react'
import MainCarousel from '../../components/homeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/homeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/mens_kurta'


function HomePage() {
  return (
    <div>
        <MainCarousel />
        <div className='space-y-5 py-10 px-1'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's kurta"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's shirt"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's shoes"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's jacket"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's saree"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's lengha"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's gaun"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's bridal saree"}/>
            
        </div>
    </div>
  )
}

export default HomePage