import Styled from 'styled-components'
import { minQuery, maxQuery } from '../../helpers'

export default Styled.div`
    ${({ theme }) => theme.mixins.maxWidth};
    position: relative;
    padding-top: 5em;
    padding-bottom: 2em;
    color: #C7C7C7;
    &:after {
        content: "";
        position: absolute;
        background: #051A26;
        height: 100%;
        top: 0px;
        width: 100vw;
        z-index: 1;
        left: 50%;
        transform: translateX(-50%);
    } 
    * {
        position: relative;
        z-index: 2;
    }
    div.grid--container {
        display: grid;
        grid-gap: 3em;
        justify-content: space-between;
        ${minQuery('xl')} {
            grid-template-columns: 20rem auto auto auto;
        }
        ${maxQuery('xl')} {
            grid-template-columns: 1fr 1fr;
        }
        ${maxQuery('md')} {
            grid-template-columns: 1fr;
        }
        div.grid--item {
            &:first-of-type {
                min-width: 15rem;
            }
            &:nth-child(3) {
                min-width: 15rem;
            }
            header {
                svg {
                    font-size: 8rem;
                    height: 4rem;
                    margin-top: -0.1em;
                }
            }
            p {
                font-size: 0.9rem;
            }
            h2 {
                font-size: 1.1rem;
                color: #fff;
                font-weight: 500;
                margin-bottom: 1em;
            }
            div.socials {
                margin-top: 1.5em;
                p {
                    font-size: 1rem;
                    color: #fff;
                    font-weight: 500;
                }
                div.social--row {
                    display: flex;
                    align-items: center;
                    grid-gap: 1em;
                    margin-top: 0.3em;
                    svg {
                        font-size: 1.3rem;
                    }
                }
            }
            nav {
                a {
                    display: block;
                    flex-shrink: 0;
                    text-decoration: none; 
                    width: fit-content;
                    &:not(:last-of-type) {
                        margin-bottom: 0.5em;
                    }
                    color: #C7C7C7;
                    font-size: 0.9rem;
                    &:hover, &:active, &:focus {
                        outline: none;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
    footer {
        border-top: 1px solid #B4B4B4;
        margin-top: 4em;
        padding-top: 1.5em;
        display: grid;
        grid-gap: 1.5em;
        p {
            color: #F4F4F4;
            max-width: 35rem;
            font-size: 0.9rem;
        }
        ${minQuery('lg')} {
            align-items: flex-start;
            grid-template-columns: 1fr auto;
            justify-content: space-between;
        }
        nav {
            grid-gap: 3em;
            display: flex;
            align-items: center;
            a {
                font-size: 0.9rem;
                color: #808080;
                text-decoration: none; 
                &:hover, &:active, &:focus {
                    text-decoration: underline;
                    outline: none;
                }
            }
        }
    }

`
