import Styled from 'styled-components'
import { maxQuery } from '../../../helpers'

export default Styled.div`    
        display: grid;
        position: relative;
        grid-template-columns: 25rem 1fr;
        /* align-items: center; */
        grid-gap: 3em;
        padding: 3em 0px;
        &:after {
            content: "";
            position: absolute;
            width: 100vw;
            left: 50%;
            transform: translateX(-50%);
            height: 100%;
            background: #051A26;
            z-index: -1;
        }
        ${maxQuery('<lg')} {
            grid-template-columns: 1fr;
        }
        div.col--1 {
            h1 {
                color: #fff;
                font-weight: 800;
                font-size: 1.8rem;
            }
            p {
                color: #ECECEC;
                margin: 1.5em 0px;
            }
            button {
                background-color: #fff;
                color: #051A26;
                &:after {
                    border: 0.4px solid #fff;
                }
            }
            div.action--container {
                margin-top: 3em;
                display: flex;
                grid-gap: 1em;
                button {
                    background: #fff;
                    border-radius: 50%;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    border: none;
                    height: 2.5rem;
                    width: 2.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .icon {
                        font-size: 1.8rem;
                        stroke-width: 1rem;
                    }
                }
            }
        }
        div.col--2 {
            display: flex;
            grid-gap: 1em;
            overflow-x: auto;
            width: 50vw;
            ${maxQuery('<lg')} {
                width: 90vw;
            }
            ${({ theme }) => theme.mixins.hideScrollBar};
            div.carousel--item {
                width: 17rem;
                background: #0A212E;
                border-radius: 15px;
                flex-shrink: 0;
                div.img--container {
                    background: linear-gradient(180deg, rgba(10, 33, 46, 0) 50.54%, #0A212E 100%), url(.png);
                    border-radius: 15px 15px 0px 0px;
                    height: 10rem;
                    background-position: center center;
                    background-size: contain;
                    background-repeat: no-repeat;
                }
                div.content--container {
                    padding: 1em;
                    h2 {
                        color: #fff;
                        font-size: 1.2rem;
                        font-weight: 800;
                        margin: 0.5em 0px;
                    }
                    p {
                        font-size: 1rem;
                        color: #ECE8E8;
                        line-height: 140%;
                    }
                }
            }
        }
`
