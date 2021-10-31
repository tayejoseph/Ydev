import Styled from 'styled-components'
import { rgba } from 'polished'
import { maxQuery, minQuery } from '../../helpers'

export default Styled.div`
    position: fixed;
    height: ${({ theme }) => theme.dimensions.navHeight};
    display: flex;
    align-items: center;
    width: 100vw;
    background: #fff;
    z-index: 999;
    ${maxQuery('<lg')} {
        height: ${({ theme }) => theme.dimensions.navHeightMobile};
    }
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
            ${minQuery('>lg')} {
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
                    span {
                        border: 1px solid rgb(218, 218, 218);
                        margin-left: 0.5em;
                        flex-shrink: 0;
                        width: 1.2rem;
                        height: 1.2rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        svg {
                            font-size: 1.2rem;
                            transition: all 1s;
                            flex-shrink: 0;
                            margin: 0px;
                            margin-top: 0.1em;
                        }
                    }
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
                    svg {
                        transform: rotate(180deg);
                    }
                }
                div.menu--lists {
                    position: absolute;
                    width: 13rem;
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
                        font-weight: 500;
                        font-size: 1rem;
                        &.active, &:hover, &:focus {
                            color: ${({ theme }) => theme.primary};
                        }
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
    div.nav--desktop {
        ${maxQuery('<lg')} {
            display: none;
        }
    }
    div.nav--mobile {
        ${minQuery('<lg')} {
            display: none;
        }
        div.top--section {
            display: flex;
            align-items: center;
            z-index: 999;
            position: relative;
            position: relative;
            height: 100%;
            justify-content: space-between;
            flex: 1;
            a.brand--logo {
                padding-left: 2em;
                svg {
                }
            }
            button {
                cursor: pointer;
                background: transparent;
                border: none;
                .icon {
                    font-size: 2rem;
                }
            }
        }
        div.nav--cover {
            display: block;
            background: #fff;
            width: 100vw;
            left: 50%;
            padding-bottom: 4em;
            transform: translateX(-50%);
            position: fixed;
            z-index: ;
            transition: all 1s;
            top: ${({ theme }) => theme.dimensions.navHeightMobile};
            &:after {
                content: "";
                background: ${rgba('#000000', 0.1)};
                height: 100vh;
                position: absolute;
                top: 0px;
                width: 100vw;
                z-index: 0;
            }
            &.hide--menu {
                background: blue;
                transform: translate(-50%, -200%);
                opacity: 0;
            }
            nav {
                background: #fff;
                padding: 1em 5%;
                padding-bottom: 5em;
                padding-top: 2em;
                /* ${({ theme }) => theme.mixins.maxWidth}; */
                button.btn--link {
                    width: 100%;
                    display: flex;
                    border: none;
                    font-size: 1rem;
                    cursor: pointer;
                    background: transparent;
                    justify-content: space-between;
                    /* &:not(:last-of-type) { */
                        margin-bottom: 2em!important;
                    /* } */
                    svg {
                        font-size: 1.4rem;
                    }
                }
                div.menu--lists {
                    margin-bottom: 2.5em;
                    margin-top: -0.5em;
                    a {
                        display: block;
                        margin-bottom: 1em;
                        font-weight: 400;
                        font-size: 1rem;
                        &.active {
                            color: ${({ theme }) => theme.primary};
                        }
                    }
                }
                button.contact--btn {
                    margin-top: 5em;
                }
            }
        }
    }
`
