import React from 'react'
import { OtherPageTopCarouselData } from '../../constants/data';
import Carousel from "react-multi-carousel";
import Box from '@mui/material/Box'
import "react-multi-carousel/lib/styles.css";


export default function Carousel2() {

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
    <Box sx={{boxShadow:2}}>
    <Carousel
      draggable={true}
      responsive={responsive}
      partialVisible={true}
      swipeable={true}
      autoPlay={true}
    >
      {OtherPageTopCarouselData.map(data =>
        <Box key={data.url} sx={{
          marginRight: '10px',
            border:'5px solid #ffd416',
            // boxShadow:2,
        }}>
          <img style={{
            maxWidth: '400px',
            borderRadius: 10,
          }} src={data.url} alt="Poster" />
        </Box>
      )}
    </Carousel>
    </Box>
  )
}
