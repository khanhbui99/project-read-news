import { isArray } from 'lodash';
import React from 'react'
import Carousel from "react-multi-carousel";
import "./style.scss";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const CarouselRelease = ({
    data = []
}) => {


    return (
        <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            renderArrowsWhenDisabled={true}
        >
            {isArray(data) &&
                data.map((item, index) => {
                    return <div key={String(index)} className="carousel-items">
                        <div style={{ width: '100%', }} className="pr-2">
                            <img src={item.image || ''} alt="carousel items" />
                            <span className='pl-1 pr-1 text-justify line-clamp-4 f-14 mt-2 mb-3 '>
                                {item.title || ''}
                            </span>
                        </div>

                    </div>
                })}
        </Carousel>
    )
}

export default CarouselRelease;
