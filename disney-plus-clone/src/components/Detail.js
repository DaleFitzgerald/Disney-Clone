import React, {useEffect, useState} from 'react'
import Styled from 'styled-components'
import { useParams } from "react-router-dom"
import db from "../firebase"
import { selectUserName } from "../features/user/userSlice"
import { useSelector } from "react-redux"
import { Redirect } from 'react-router-dom'
import ReactPlayer from "react-player/youtube"


function Detail() {

    const { id } = useParams();
    const [movie, setMovie] = useState();
    const userName = useSelector(selectUserName);
    const shadow = {
        boxShadow: "rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px"
    };

    // console.log(id);

    useEffect(() => {
        db.collection("movies")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setMovie(doc.data());
                } else {
                    // 
                }
            }
        )
    }, [])

    // console.log(movie);

    const ProtectedComponent = () => {
        if (!userName) {
            return <Redirect to="/login" />
        } else {
            return (
                <Container>
                    
                    {movie &&
                        <>
                            <Background>
                                <img src={movie.backgroundImg} />
                            </Background>
        
                            <Div>
                                <ImageTitle>
                                    <img src={movie.titleImg}/>
                                </ImageTitle>
        
                                <Controls>
        
                                    {/* <PlayButton>
                                        <img src="/images/play-icon-black.png"/>
                                        <span>Play</span>
                                    </PlayButton> */}
        
                                <a href="#trailer">
                                <TrailerButton>
                                        <img src="/images/play-icon-white.png"/>
                                        <span>Trailer</span>
                                    </TrailerButton>
                                    </a>
        
                                    <AddButton>
                                        <span>+</span>
                                    </AddButton>
        
                                    <GroupWatchButton>
                                        <img src="/images/group-icon.png"/>
                                    </GroupWatchButton>
        
                                </Controls>
        
                                <Subtitle>{movie.subTitle}</Subtitle>
                            <Description>{movie.description}</Description>
                            
                            
                            </Div>
                            
                            <TrailerDiv id="trailer">
                            <ReactPlayer url={movie.trailer} muted="true" playing="true" controls="true" style={{border: "6px solid rgba(249, 249, 249, 0.6)", borderRadius: "10px", shadow}}/>
                            </TrailerDiv>
                        
                        </>
                    }
        
                </Container>
            )
    }
    }

    return (
        <ProtectedComponent />
    );

}

export default Detail

const Container = Styled.div`
    min-height: calc(100vh-70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: -10px;
        left: 0;
        width: 100%;
        box-shadow: 0px 0 70px rgba(0, 0, 0, 0.9);
    }
    
    
`


const Background = Styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.7;
    
    img {
        height: 100vh;
        width: 100vw;
        object-fit: cover;
    }


`


const Div = Styled.div`
display: flex;
flex-direction: column;


`


const ImageTitle = Styled.div`
    height: 30vh;
    min-height: 170px;
    min-width: 200px;
    width: 35vw;
    position: relative;
    margin-top: 60px;

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }


`


const Controls = Styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;


`


const PlayButton = Styled.button`
    position: relative;
    border-radius: 4px;
    padding: 0px 24px;
    margin-right: 22px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        background-color: rgb(198, 198, 198);
    }


`


const TrailerButton = Styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);


`


const AddButton = Styled(TrailerButton)`
    position: relative;
    font-size: 30px;
    border-radius: 50%;
    height: 44px;
    width: 44px;
    padding: 0;
    margin-right: 16px;
    justify-content: center;
    letter-spacing: 0;
    border: 2px solid;
    background-color: rgba(0, 0, 0, 0.6);


`


const GroupWatchButton = Styled(AddButton)`
    position: relative;
    background-color: rgba(0, 0, 0, 0.9);


`


const Subtitle = Styled.p`
    position: relative;
    font-size: 13px;
    letter-spacing: 1.2px;


`


const Description = Styled.p`
    position: relative;
    letter-spacing: 1.1px;
    max-width: 760px;


`


const TrailerDiv = Styled.div`
position: relative;
margin 5rem;
display: flex;
justify-content: center;


`