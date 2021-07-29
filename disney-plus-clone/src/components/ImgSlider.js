import React from 'react'
import Styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'

function ImgSlider() {

    let settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (

        <Carousel {...settings}>

            <Wrap>
                <Link to={"detail/NQ62Qq3ZeIni63OKMczr"}>
                    <img src="/images/loki-badging.png" alt="slider" />
                </Link>
            </Wrap>

            <Wrap>
                <Link to={"detail/pccZeuJRAZNkHcNXrukc"}>
                    <img src="/images/wotw-badge.jpg" alt="slider" />
                </Link>
            </Wrap>

            <Wrap>
                <Link to={"detail/CYpzYU8tFhnbtGtmDZTQ"}>
                    <img src="/images/monsters-inc-badge.jpg" alt="slider" />
                </Link>
            </Wrap>

            <Wrap>
                <Link to={"detail/ouFCdanwWwfes94fmIr0"}>
                    <img src="/images/mandalorian-badge.jpg" alt="slider" />
                </Link>
            </Wrap>
            
            <Wrap>
                <Link to={`/detail/4j66hiTeJ3pvoMZg98y4`}>
                    <img src="/images/black-widow-badge.jpg" alt="slider" />
                </Link>
            </Wrap>

        </Carousel>
    )
}

export default ImgSlider

const Carousel = Styled(Slider)`
    padding-top: 1.5rem;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
    }


`


const Wrap = Styled.div`
    cursor: pointer;

    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }


`