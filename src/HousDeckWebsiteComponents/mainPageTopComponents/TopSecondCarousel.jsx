import React from 'react'
// import TopCarousel from ''
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function TopSecondCarousel() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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
    return (
        <div style={{
            // width:"100%",
            background:'#6e2d5c',
            // height:'100px',
            padding:"50px 100px",overflow:"hidden"
        }}>
            <Carousel responsive={responsive} >
                <div style={{
                    pading:'20px',
            backgroundImage:'url(../services/top_carousel_main_image.webp)',
            backgroundPosition:'50%',
            backgroundSize:'cover'}}>
                </div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>;
        </div>
    )
}
