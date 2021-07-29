import React, {useEffect} from 'react'
import { auth, provider} from "../firebase"
import Styled from 'styled-components'
import { selectUserName, setUserLogin, setSignOut } from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"

function Footer() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
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

    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(setSignOut())
                history.push("/login")
            });
    }

    return (
        <Container>

            <Logo src="/images/logo.svg" />

            {!userName ? (
                <>
                    <FooterLinks>
                        
                        {/* <Link to="/">
                            <HomeButton>
                                <span>HOME</span>
                            </HomeButton>
                        </Link> */}

                        <LogInButton onClick={signIn}>
                            <span>LOGIN</span>
                        </LogInButton>

                    </FooterLinks>
        
                    <Copyright>© Disney+ | Website Clone built by Dale Fitzgerald.</Copyright>
                
                </>
            ) :
                <>
                    <FooterLinks>
                        
                        <Link to="/">
                            <HomeButton>
                                <span>HOME</span>
                            </HomeButton>
                        </Link>
                        
                        <a href="#top">
                        <TopButton>
                            <span>BACK TO TOP</span>
                        </TopButton>
                        </a>

                        <LogOutButton onClick={signOut}>
                            <span>LOG OUT</span>
                        </LogOutButton>

                    </FooterLinks>
            
                    <Copyright>© Disney+ | Website Clone built by Dale Fitzgerald.</Copyright>
                </>
            }


        </Container>
    )
}

export default Footer

const Container = Styled.footer`
    position: relative;
    height: 150px;
    background: #090b13;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-between;
    align-items: center;
    padding: 0 2rem;
    overflow-x: hidden;
    margin-top: 100px;


`


const Logo = Styled.img`
    width: 80px;
    z-index: 10;
    margin-top: 10px;


`


const HomeButton = Styled.button`
    display: flex;
    align-items: center;
    padding: 10px 1rem;
    letter-spacing: 1.5px;
    cursor: pointer;
    text-decoration: none;
    color: #f9f9f9;
    border-style: none;
    background: none;

    &:link {
        text-decoration: none;
        color: #f9f9f9;
    }

    &:visited {
        text-decoration: none;
        color: #f9f9f9;
    }

    img {
        height: 20px;
        padding: 4px;
    }

    span {
    font-size: 0.8rem;
    letter-spacing: 1.42px;
    position: relative;

        &:after {
            content: "";
            height: 2px;
            background: rgb(7,25,79);
            background: -moz-linear-gradient(101deg, rgba(7,25,79,1) 21%, rgba(2,163,206,1) 70%, rgba(255,255,255,1) 100%);
            background: -webkit-linear-gradient(101deg, rgba(7,25,79,1) 21%, rgba(2,163,206,1) 70%, rgba(255,255,255,1) 100%);
            background: linear-gradient(101deg, rgba(7,25,79,1) 21%, rgba(2,163,206,1) 70%, rgba(255,255,255,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#07194f",endColorstr="#ffffff",GradientType=1);
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }

        &:hover {
            span:after {
                opacity: 1;
                transform: scaleX(1);
        }
    }


`


const TopButton = Styled(HomeButton)`


`


const LogOutButton = Styled(HomeButton)`


`


const LogInButton = Styled(HomeButton)`
`


const Copyright = Styled.p`
    font-size: 12px;


`


const FooterLinks = Styled.div`
    display: flex;
    flex-direction: row;


`