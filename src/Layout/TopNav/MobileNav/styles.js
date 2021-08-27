import Styled from 'styled-components'

export default Styled.div`
    position: fixed;
    height: ${({ theme }) => theme.dimensions.navHeightMobile};
    display: flex;
    align-items: center;
    width: 100vw;
    background: #fff;
    z-index: 9;
    div.top--nav {
        ${({ theme }) => theme.mixins.maxWidth};
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        * {
            position: relative;
            z-index: 999;
        }
        a.brand--logo {
            svg {
                transform: scale(5.5);
                margin-left: 2.5em;
            }
        }
        button {
            svg {
                font-size: 2rem;
            }
        }
    }
    nav {
        position: fixed;
        transform: translateX(-100%);
        pointer-events: none;
        width: 100vw;
        transition: all 0.5s;
        transition-timing-function: ease-in-out;
        opacity: 0;
        top: ${({ theme }) => theme.dimensions.navHeightMobile};
        background: rgba(3, 35, 46, 0.24);
        backdrop-filter: blur(0.8px);
        height: ${({ theme }) =>
          `calc(100vh - ${theme.dimensions.navHeightMobile})`};
        &.active--navigation {
            transform: translateX(0%);
            opacity: 1;
            pointer-events: auto;
        }
        div.navigation--container {
            padding: 1em 1.5em;
            background: #fff;
            overflow-y: auto;
            padding-bottom: 3em;
            max-height: ${({ theme }) =>
              `calc(100vh - ${theme.dimensions.navHeightMobile})`};
            div.menu--container {
                margin-bottom: 1.5em;
                button.menu--item {
                    display: flex;
                    justify-content: space-between;
                    border: none;
                    background: transparent;
                    padding: 0.5em 0px;
                    width: 100%;
                    font-size: 1rem;
                    span {
                        border: 1px solid #DADADA;
                        margin-left: 0.5em;
                        border-radius: 50%;
                        svg {
                            display: flex;
                            transition: all 0.5s;
                            align-items: center;
                            justify-content: center;
                            font-size: 1.2rem;
                        }
                    }
            
                }
                div.menu--lists {
                    visibility: hidden;
                    position: relative;
                    max-height: 0px;
                    pointer-events: none;
                    transition: visibility 0s 0.15s, opacity 2s linear;
                    z-index: -99;
                    a {
                        display: block;
                        padding: 0.5em 0px;
                        font-size: 0.9rem;
                        color: #050402;
                        &:not(:last-of-type) {
                            margin-bottom: 0.25em;
                        }
                    }
                }
            }
            div.menu--container {
                &.active--nav {
                    button {
                        svg {
                            transform: rotate(180deg);
                        }
                    }
                    div.menu--lists {
                        opacity: 1;
                        visibility: visible;
                        pointer-events: auto;
                        z-index: 999;
                        max-height: fit-content;
                    }
                }
            }
        }
    }
`
