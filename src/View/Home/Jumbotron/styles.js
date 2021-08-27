import Styled from 'styled-components'
import { minQuery, maxQuery } from '../../../helpers'
import { homeJumbotronPattern } from '../../../assets/svgImgs'

export default Styled.div`
    display: grid;
    grid-gap: 2em;
    position: relative;
    padding-bottom: 2em;
    padding: 3em 0px;
    ${minQuery('lg')} {
        grid-template-columns: 1fr 1fr;
    }
    
    &:after {
        content: "";
        height: 100%;
        top: 0px;
        width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        background-size: 100vw;
        position: absolute;
        background-image: url(${homeJumbotronPattern});
        background-repeat: no-repeat;
        background-position: bottom;
    }
    div.col--1 {
        ${minQuery('lg')} {
            max-width: 25rem;
        }
        ${maxQuery('<lg')} {
            * {
                max-width: 90%;
            }
        }
        p {
            font-size: 1rem;
            &:first-of-type {
                font-size: 0.9rem;
                display: flex;
                align-items: center;
                margin-bottom: 1.5em;
                svg {
                    margin-right: 0.2em;
                    margin-bottom: 0.1em;
                }
            }
            &:last-of-type {
                margin: 1.5em 0px;
                line-height: 140%;
            }
        }
        div.action--group {
            display: flex;
            grid-gap: 1em;
            button:last-of-type {
                text-decoration: underline;
                margin-left: 0.8em;
                background: transparent;
                border: none;
                cursor: pointer;
                font-size: 1rem;
            }
        }
        ${minQuery('lg')} {
            display: flex;
            flex-direction: column;
            margin-top: 3em;
        }
    }
    div.col--2 {
        display: flex;
        justify-content: center;
        img {
            width: 30rem;
        }
    }
`
