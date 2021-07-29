import React, {useEffect} from 'react'
import Styled from 'styled-components'
import { auth, provider } from "../firebase"
import {setUserLogin} from "../features/user/userSlice"
import { useDispatch} from "react-redux"
import { useHistory } from "react-router-dom"

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    // const userName = useSelector(selectUserName);
    // const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history.push("/");
            }
        })
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                let user = result.user
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history.push("/");
        })
    }



    return (
        <Container>
            <CTA>
                <CTALogoOne>
                    <img src="/images/cta-logo-one.svg"/>
                </CTALogoOne>
                
                <SignUp onClick={signIn}>GET ALL THERE</SignUp>
                
                <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and the Disney bundle will increase by £1.</Description>
                
                <CTALogoTwo>
                    <img src="/images/cta-logo-two.png"/>
                </CTALogoTwo>
            </CTA>
        </Container>
    )
}

export default Login

const Container = Styled.main`
    position: relative;
    height: 100vh;
    display: flex;
    align-items: top;
    justify-content: flex-start;
    
        &:before {
            background-position: top;
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url("/images/login-background.jpg");
            position: fixed;
            content: "";
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            opacity: 0.7;
        }


`


const CTA = Styled.div`
    max-width: 37.5rem;
    padding: 5rem 2.5rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;


`


const CTALogoOne = Styled.div`
        max-width: 37.5rem;
        
        img {
            width: 100%;
            object-fit: contain;    
        }

        
`


const CTALogoTwo = Styled.div`
        max-width: 37.5rem;
        
        img {
            width: 100%;
            object-fit: contain;
        }


`


const SignUp = Styled.button`
    text-align: center;
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 1.2rem 0rem;
    color: #f9f9f9;
    border-radius: 0.25rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 0.1rem;
    margin: 0.5rem 0rem 0.8rem 0rem;
    border-style: none;

        &:hover {
            background: #0483ee;
        }


`


const Description = Styled.p`
    font-size: 0.8rem;
    letter-spacing: 0.05rem;
    text-align: center;
    line-height: 1.5;


`