import Styled from 'styled-components'
import { minQuery, maxQuery } from '../../../../helpers'

export default Styled.div`
    padding: 2em 0px;
    padding-bottom: 5em;
    header {
        display: grid;
        grid-gap: 1.5em;
        margin-bottom: 1.5em;
        ${minQuery('lg')} {
            align-items: center;
            grid-template-columns: 1fr auto;
        }
        h1 {
            font-weight: bold;
            font-size: 1.8rem;
            margin-bottom: 0.5em;
            ${maxQuery('<lg')} {
                text-align: center;
            }
        }

        div.menu--container {
            position: relative;
            ${maxQuery('<lg')} {
                display: none;
            }
            button.menu--item {
                color: #050402;
                font-size: 1.2rem;
                font-weight: 600;
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
                        font-size: 1.1rem;
                    }
                }
                &:hover, &:active, &:focus {
                    outline: none;
                    color:${({ theme }) => theme.primary};
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
                button {
                    color: #050402;
                    padding: 0.5em 1em;
                    display: block;
                    width: 100%;
                    background: transparent;
                    border: none;
                    flex-shrink: 0;
                    font-weight: 400;
                    font-size: 1.1rem;
                    &:not(:last-of-type) {
                        border-bottom: 1px solid #DADADA;
                    }
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
        
    }
    div.tab--container {
    }

`
