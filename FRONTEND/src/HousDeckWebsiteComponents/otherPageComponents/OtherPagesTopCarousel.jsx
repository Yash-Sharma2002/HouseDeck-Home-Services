import React from 'react'
import { OtherPageTopCarouselData } from '../../constants/data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";





export default function OtherPagesTopCarousel() {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1500 },
      items: 1.4,
      // partialVisibilityGutter:120
    },
    desktopMINI: {
      breakpoint: { max: 1500, min: 1400 },
      items: 1.2,
      // partialVisibilityGutter: 
    },
    desktopSMINI: {
      breakpoint: { max: 1400, min: 1300 },
      items: 1.1,
      // partialVisibilityGutter: 
    },
    desktopSDMINI: {
      breakpoint: { max: 1300, min: 1250 },
      items: 1.04,
      // partialVisibilityGutter: 
    },
    desktopSPMINI: {
      breakpoint: { max: 1250, min: 800 },
      items: 1,
      // partialVisibilityGutter: 
    },
    tablet: {
      breakpoint: { max: 800, min: 700 },
      items: 1,
      partialVisibilityGutter: 180
    },
    tabletSMINI: {
      breakpoint: { max: 700, min: 600 },
      items: 1,
      partialVisibilityGutter: 120
    },
    tabletMINI: {
      breakpoint: { max:600, min: 464 },
      items: 1,
      partialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // partialVisibilityGutter: 0
    }
  };

  return (
    <Carousel
      draggable={true}
      responsive={responsive}
      partialVisible={true}
      swipeable={true}
      autoPlay={false}
    >
      {OtherPageTopCarouselData.map(data =>
        <div key={data.url} style={{
          marginRight: '10px'
        }}>
          <img style={{
            maxWidth: '400px',
            borderRadius: 10,border:'1px solid #e5e5e5' ,
            boxShadow:''
          }} src={data.url} alt="Poster" />
        </div>
      )}
    </Carousel>
  )
}
