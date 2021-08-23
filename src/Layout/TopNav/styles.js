import Styled from 'styled-components'

export default Styled.div`
    position: fixed;
    height: ${({ theme }) => theme.dimensions.navHeight};
    display: flex;
    align-items: center;
    width: 100vw;
    background: #fff;
    z-index: 9;
    div.content--container {
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
                
            }
        }
        nav {
            display: flex;
            grid-gap: 2em;
            align-items: center;
            div.menu--container {
                position: relative;
                button.menu--item {
                    color: #050402;
                    font-size: 0.9rem;
                    display: inline-flex;
                    align-items: center;
                    background: transparent;
                    border: none;
                    * {
                        pointer-events: none;
                    }
                    span {
                        border: 1px solid #DADADA;
                        margin-left: 0.5em;
                        border-radius: 50%;
                        svg {
                            display: flex;
                            transition: all 0.5s;
                            align-items: center;
                            justify-content: center;
                            font-size: 1rem;
                        }
                    }
                }
                div.menu--lists {
                    pointer-events: none;
                    top: 2em;
                    transition: all 0.25s;
                    opacity: 0;
                    z-index: -99;
                    position: absolute;
                    background: #fff;
                    z-index: 999;
                    border: 1px solid #DADADA;
                    border-radius: 6px;
                    min-width: 12rem;
                    padding: 0.5em 0px;
                    left: 50%;
                    transform: translateX(-50%);
                    transition: all 0.2s;
                    a {
                        color: #050402;
                        padding: 0.5em 1em;
                        display: block;
                        flex-shrink: 0;
                        font-weight: 400;
                        font-size: 0.9rem;
                        transition: all 0.25s;
                        &:hover, &:active, &:focus {
                            text-decoration: none;
                            color: ${({ theme }) => theme.primary};
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
                        pointer-events: auto;
                        z-index: 999;
                        top: 2em;
                    }
                }
            }
            button.contact--btn {
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
