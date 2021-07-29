/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'
import { selectMovies } from "../features/movie/movieSlice"
import {useSelector} from "react-redux"

function Movies() {

    const movies = useSelector(selectMovies);

    // console.log("this is movies", movies);

    return (
        <Container>

            <h4>New to Disney+</h4>
            <Content>
                {movies && movies.map((movie) => (
                    <Wrap key={movie.id}>
                        <Link to={`/detail/${movie.id}`}>
                            <img src={movie.cardImg}/>
                        </Link>
                </Wrap>
                ))
                }
            </Content>

        </Container>
    )
}

export default Movies

const Container = Styled.div`
    position: relative;

    h4 {
        font-size: 1.5rem;
        letter-spacing: 1.5px;
    }


`


const Content = Styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    cursor: pointer;
    padding: 30px 0px;

    @media only screen and (min-width: 425px) and (max-width: 768px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media only screen and (max-width: 425px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));

    }


`


const Wrap = Styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }


`