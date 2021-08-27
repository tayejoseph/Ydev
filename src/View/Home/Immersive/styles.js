import Styled from 'styled-components'
import { minQuery, maxQuery } from '../../../helpers'

export default Styled.div`
    position: relative;
    padding: 5em 0px;
    &::after {
        content: "";
        position: absolute;
        height: 100%;
        top: 0px;
        width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        background: #051A26;
        z-index: 1;
    }
    * {
        position: relative;
        z-index: 2;
    }
    display: grid;
    grid-gap: 2em;
    ${minQuery('lg')} {
        align-items: center;
        grid-template-columns: 25rem 1fr;
    }
    letter-spacing: -0.02em;
    color: #ECECEC;
    div.col--1 {
        h1 {
            max-width: 20rem;
            color: #FFFFFF;
            line-height: 100%;
            font-weight: 700;
            font-size: 2rem;
            line-height: 125%;
            margin-bottom: 0.5em;
        }
        p {
            max-width: 22rem;
            font-size: 1rem;
            margin-bottom: 3.5em;
            font-size: 0.9rem;
            line-height: 140%;
            color: #ECECEC;
        }
        button.curriculum--btn {
             background: #fff;
             color: #050402;
             border-color: #fff;
             &:after {
                 border-color: #fff;
             }
        }
        div.action--container {
            display: flex;
            margin-top: 2em;
            grid-gap: 0.5em;
            button {
                .icon {
                    font-size: 2.5rem;
                    color: #fff;
                }
            }
        }
    }
    div.col--2 {
        display: flex;
        grid-gap: 2em;
        width: 57vw;
        ${maxQuery('lg')} {
            width: 95vw;
        }
        overflow-x: auto;
        ${({ theme }) => theme.mixins.hideScollbarHorizontal};
        scroll-behavior: smooth;
        div.pallet--item {
            width: 18rem;
            flex-shrink: 0;
            padding: 1.5em;
            background: #0A212E;
            border-radius: 15px;
            &:last-of-type {
                margin-right: 2em;
            }
            div.img--container {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 10rem;
                margin-bottom: 1em;
                background-size: contain;
                background-repeat: no-repeat;
            }
            h2 {
                letter-spacing: -0.01em;
                color: #FFFFFF;
                font-weight: 700;
                margin-bottom: 0.5em;
                font-size: 1.2rem;
            }
            p {
                font-size: 0.85rem;
                letter-spacing: -0.02em;
                color: #ECE8E8;
            }
        }
    }
`
