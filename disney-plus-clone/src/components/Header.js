/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react'
import { auth, provider } from "../firebase"
import Styled from 'styled-components'
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"

function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

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
        <Nav id="top">

            
            <Logo src="/images/logo.svg" />

            {!userName ? (<LoginContainer>
                <Login onClick={signIn}>login</Login>
            </LoginContainer>) :
                
                <>
                    
                    <NavMenu>

                        <Link to="/">
                            <img src="/images/home-icon.svg" alt="icon" />
                            <span>HOME</span>
                        </Link>
                        
                        <Link id="disallowed">
                            <img src="/images/search-icon.svg" alt="icon" />
                            <span>SEARCH</span>
                        </Link>
                        <Link id="disallowed">
                            <img src="/images/watchlist-icon.svg" alt="icon" />
                            <span>WATCHLIST</span>
                        </Link>
                        <Link id="disallowed">
                            <img src="/images/original-icon.svg" alt="icon" />
                            <span>ORIGINALS</span>
                        </Link>
                        <Link id="disallowed">
                            <img src="/images/movie-icon.svg" alt="icon" />
                            <span>MOVIES</span>
                        </Link>
                        <Link id="disallowed">
                            <img src="/images/series-icon.svg" alt="icon" />
                            <span>SERIES</span>
                        </Link>

                    </NavMenu>
                    
                    <Profile>{userName}</Profile>
                    <UserImg onClick={signOut} src={userPhoto}/>
                </>
            }


        </Nav>
    )
}

export default Header

const Nav = Styled.nav`
    position: relative;
    height: 4.5rem;
    background: #090b13;
    display: flex;
    align-content: space-between;
    align-items: center;
    padding: 0 2rem;
    overflow-x: hidden;
    z-index: 100;


`


const Logo = Styled.img`
    max-height: 100%;
    padding: 0.9rem;
    display: block;
    z-index: 10;


`


const NavMenu = Styled.div`
    position: relative;
    display: flex;
    flex: 1;
    padding-left: 1.5rem;
    align-items: center;
    z-index: 10;

    a {
        display: flex;
        align-items: center;
        padding: 0 1rem;
        cursor: pointer;
        text-decoration: none;
        color: #f9f9f9;

        &#disallowed {
            cursor: not-allowed;
        }

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
            font-size: 1rem;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: rgb(7,25,79);
                background: -moz-linear-gradient(101deg, rgba(7,25,79,1) 21%, rgba(2,163,206,1) 70%, rgba(255,255,255,1) 100%);
                background: -webkit-linear-gradient(101deg, rgba(7,25,79,1) 21%, rgba(2,163,206,1) 70%, rgba(255,255,255,1) 100%);
                background: linear-gradient(101deg, rgba(7,25,79,1) 21%, rgba(2,163,206,1) 70%, rgba(255,255,255,1) 100%);
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#07194f",endColorstr="#ffffff",GradientType=1);            position: absolute;
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

        @media (max-width: 768px) {
            display: none;
          }
    }


`


const UserImg = Styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 0px white;
    transition: box-shadow 200ms linear;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    z-index: 10;

        &:hover {
            transform: scale(1.1);
            box-shadow: 0px 0px 0px 2px white;
        }


`


const Profile = Styled.span`
    position: relative;
    padding-right: 10px;
    cursor: default;


`


const LoginContainer = Styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;


`


const Login = Styled.div`
    position: relative;
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 2px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 250ms ease 0s;
    cursor: pointer;

        &:hover {
            background-color: #f9f9f9;
            color: #000;
            border-color: transparent;
            
        }


`