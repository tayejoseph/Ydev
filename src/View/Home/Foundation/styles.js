import Styled from 'styled-components'
import { outStudentPattern } from '../../../assets/svgImgs'
import { minQuery, maxQuery } from '../../../helpers'

export default Styled.div`
    section.section--top {
        display: grid;
        grid-gap: 2em;
        padding-top: 4.5em;
        ${minQuery('lg')} {
            grid-template-columns: 1fr 1fr;
            grid-gap: 3em;
            align-items: center;
            img {
                width: 30rem;
            }
        }
        div.col--2 {
            max-width: 32rem;
            h1 {
                margin-bottom: 0.7em;
                max-width: 16rem;
                line-height: 120%;
            }
            p {
                font-size: 1rem;
                margin-bottom: 1.5em;
            }
        }
    }
    section.section--bottom {
        position: relative;
        padding-top: 3.5em;
        padding-bottom: 5em;
        &::after {
            position: absolute;
            top: 0px;
            content: "";
            width: 100vw;
            left: 50%;
            transform: translateX(-50%);
            height: 100%;
            z-index: 1;
            background-image: url(${outStudentPattern});
            background-size: contain;
            background-repeat: no-repeat;
        }
        * {
            position: relative;
            z-index: 3;
        }
        header {
            text-align: center;
            p {
                font-size: 1rem;
                margin-top: 1.5em;
            }
        }
        div.grid--container {
            display: grid;
            grid-gap: 2em;
            margin-top: 4.5em;
            div {
                height: 4rem;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                svg {
                    font-size: 10rem;
                }
            }
            grid-template-columns: repeat(4, 1fr);
            ${maxQuery('md')} {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    }
`
