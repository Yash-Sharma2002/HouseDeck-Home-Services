import React from 'react'
import { TopCarouselData } from '../../constants/data'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from '@mui/material';


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
        partialVisibilityGutter: 300
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        partialVisibilityGutter: 200
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        // partialVisibilityGutter: 100
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};


function Content({ padding, margin }) {
    return (
        <div style={{
            background: '#6e2d5c',
            padding: padding, overflow: "hidden"
        }}>
            <Carousel
                draggable={true}
                responsive={responsive}
                partialVisible={true}
                swipeable={false}
                autoPlay={false}
            >
                {TopCarouselData.map(data =>
                    <div style={{

                        marginRight: margin
                    }}>
                        <img style={{
                            width: '100%',
                            borderRadius: 10
                        }} src={data.url} alt="b" />
                    </div>
                )}
            </Carousel>
        </div>
    )
}
export default function TopSecondCarousel() {

    const xlMax = useMediaQuery('(max-width:2000px)');
    const xlMin = useMediaQuery('(min-width:900px)');
    const mdMax = useMediaQuery('(max-width:900px)');
    const mdMin = useMediaQuery('(min-width:360px)');
    const sm = useMediaQuery('(max-width:360px)');
    return (

        <>
            {xlMax && xlMin && (
                <Content padding={'50px 70px'} margin={'20px'} />
            )}
            {!(xlMax && xlMin) && mdMax && mdMin && (
                <Content padding={'30px 50px'} margin={'15px'} />
            )}
            {sm && (
                <Content padding={'20px 10px'} margin={'0px'} />
            )}
        </>
    )
}
