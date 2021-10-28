import Styled from 'styled-components'
import { minQuery } from '../../../helpers'
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
        max-width: 25rem;
        p {
            &:first-of-type {
                display: flex;
                align-items: center;
                margin-bottom: 0.5em;
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
