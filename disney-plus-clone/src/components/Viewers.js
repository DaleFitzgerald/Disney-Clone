import React from 'react'
import Styled from 'styled-components'

function Viewers() {
    return (
        <Container>
        <Wrap>
          <img src="/images/viewers-disney.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
          </video>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-pixar.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
          </video>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-marvel.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
          </video>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-starwars.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
          </video>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-national.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source
              src="/videos/1564676296-national-geographic.mp4"
              type="video/mp4"
            />
          </video>
        </Wrap>
        <Wrap>
          <img src="/images/viewers-star.png" alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source
              src="/videos/1608169994-brand-star.mp4"
              type="video/mp4"
            />
          </video>
        </Wrap>
      </Container>
    )
}

export default Viewers

const Container = Styled.div`
  margin-top: 2em;
  padding: 2em 0em 2em;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  
  @media only screen and (min-width: 425px) and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media only screen and (max-width: 425px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }


`


const Wrap = Styled.a`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
    object-fit: contain;
  }

    
    &:hover {
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      transform: scale(1.07);
      border-color: rgba(249, 249, 249, 0.8);
      
      video {
        opacity: 1;
        object-fit: fill;
      }
  }


`