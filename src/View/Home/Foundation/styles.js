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
            img {
                width: 30rem;
            }
        }
        div.col--2 {
            ${minQuery('lg')} {
                max-width: 32rem;
            }
            h1 {
                margin-top: 1em;
                margin-bottom: 1em;
                max-width: 17rem;
                line-height: 150%;
                font-size: 1.9rem!important;
            }
            p {
                font-size: 1rem;
                ${minQuery('lg')} {
                    max-width: 80%;
                }
                color: #313131;
                margin-bottom: 1.5em;
            }
        }
    }
    section.section--bottom {
        position: relative;
        padding-top: 5em;
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
            h1 {
                font-size: 2rem;
                ${maxQuery('sm')} {
                    text-align: left;
                }
            }
            p {
               font-size: 1rem;
                margin-top: 1em;
            }
        }
    }
`
