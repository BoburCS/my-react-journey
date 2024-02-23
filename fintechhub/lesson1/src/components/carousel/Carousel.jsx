import React, { useState } from 'react';
import "./Carousel.css";

function Carousel () 
{
    const carouselImages = 
    [
        "/src/assets/images/carousel/bg-swiper1.jpg",
        "/src/assets/images/carousel/bg-swiper2.jpg",
        "/src/assets/images/carousel/bg-swiper3.jpg",
        "/src/assets/images/carousel/bg-swiper4.jpg",
        "/src/assets/images/carousel/bg-swiper5.jpg",
    ];

    const [current, setCurrent] = useState(0);

    function carouselSwiper (event) 
    {
        let newCurrent = current;
        if (event.target.className === "btn-right") newCurrent = (current + 1) % carouselImages.length;
        else if (event.target.className === "btn-left") 
        {
            if (current === 0) newCurrent = carouselImages.length - 1;
            else newCurrent--;
        }
        setCurrent(newCurrent);
    }

    return (
        <div className="carousel">
            <button className="btn-left" onClick={carouselSwiper}> &lt; </button>
            <img src={carouselImages[current]} alt="Carousel Image" />
            <button className="btn-right" onClick={carouselSwiper}> &gt; </button>
        </div>
    );
}

export default Carousel;