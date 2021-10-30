import Styled from 'styled-components'

export default Styled.div`
    position: fixed;
    height: ${({ theme }) => theme.dimensions.navHeight};
    display: flex;
    align-items: center;
    width: 100vw;
    background: #fff;
    z-index: 4;
    div.content--container {
        ${({ theme }) => theme.mixins.maxWidth};
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        * {
            position: relative;
            z-index: 10;
        }
        a.brand--logo {
            svg {
                transform: scale(5.5);
                
            }
        }
        nav {
            display: flex;
            grid-gap: 2em;
            align-items: center;
            div.menu--container {
                position: relative;
                button {
                    display: flex;
                    align-items: center;
                    grid-gap: 0.25em;
                    border: none;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 500;
                    background: transparent;
                    svg {
                        font-size: 1.2rem;
                        transition: all 1s;
                        flex-shrink: 0;
                    }
                    /* &:hover, &:focus {
                        color: ${({ theme }) => theme.primary};
                        svg {
                            transform: rotate(180deg);
                        }
                    } */
                }
                &.active--menu {
                    &:after {
                        content: "";
                        position: fixed;
                        background: transparent;
                        top: 0px;
                        left: 0px;
                        width: 100vw;
                        height: 100vh;
                    }
                }
                div.menu--lists {
                    position: absolute;
                    width: 12rem;
                    transform: translateX(-50%);
                    left: 50%;
                    border-radius: 4px;
                    top: 2em;
                    padding: 0.5em 1em;
                    background: #fff;
                    box-shadow: 0px 0px 2px #00000029;
                    a {
                        padding: 0.5em;
                        display: block;
                        font-weight: 400;
                        font-size: 0.9rem;
                        &:hover, &:focus {
                            color: ${({ theme }) => theme.primary};
                        }
                    }
                }
            }
            a {
                text-decoration: none; 
                color: #050402;
                font-size: 0.9rem;
            }
            button {
                display: flex;
                align-items: center;
                .icon {
                    margin-left: 0.5em;
                    font-size: 0.9rem;
                }
            }
        }
    }
`
