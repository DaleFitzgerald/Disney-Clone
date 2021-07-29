import React, { useEffect } from 'react'
import Styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import db from "../firebase"
import { selectUserName } from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { setMovies } from "../features/movie/movieSlice"
import  { Redirect } from 'react-router-dom'

function Home() {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);


    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            dispatch(setMovies(tempMovies));
        })
    }, [])

    const ProtectedComponent = () => {
        if (!userName) {
            return <Redirect to="/login" />
        } else {
            return (
                <Container>
                    <ImgSlider />
                    <Viewers />
                    <Movies />
                </Container>
        )
    }
    }

    return (
        <ProtectedComponent />
    );
}

export default Home

const Container = Styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

        &:before {
            background: url("/images/home-background.png") center center /
            cover no-repeat fixed;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }


`
