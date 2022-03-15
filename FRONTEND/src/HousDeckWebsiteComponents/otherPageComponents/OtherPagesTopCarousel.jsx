import React from 'react'
import { OtherPageTopCarouselData } from '../../constants/data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from '@mui/material';


const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


export default function OtherPagesTopCarousel() {
  return (
    <div>
        <Carousel
            draggable={true}
            responsive={responsive}
            // partialVisible={true}
            swipeable={true}
            autoPlay={true}
        >
            {OtherPageTopCarouselData.map(data =>
                <div key={data.url} style={{
                    marginRight:'10px'
                }}>
                    <img key={data.url} style={{
                        width: '440px',
                        borderRadius:10,
                    }} src={data.url} alt="Poster" />
                </div>
            )}
        </Carousel>
    </div>
  )
}
