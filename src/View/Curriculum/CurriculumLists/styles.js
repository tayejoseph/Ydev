import Styled from 'styled-components'
import { minQuery, maxQuery } from '../../../helpers'
import {
  curriculumSection1Pattern,
  curriculumSection2Pattern,
} from '../../../assets/svgImgs'

export default Styled.div`
    padding-top: 4em;
    header.title--header {
        h1 {
            font-size: 2.1rem!important;
            letter-spacing: -0.01em;
            color: #1C1B1B;
            font-weight: 900!important;
        }
        margin-bottom: 4em;
    }
    section {
        display: grid;
        grid-gap: 5em;
        grid-template-columns: 20rem 1fr;
        ${minQuery('lg')} {
            grid-gap: 8em;
        }
        ${maxQuery('md')} {
            grid-template-columns: 1fr;
            grid-gap: 1em;
        }
        margin-bottom: 4em;
        div.col--1 {
            ${minQuery('md')} {
                max-width: 20rem;
            }
            header {
                display: flex;
                grid-gap: 1.5em;
                margin-bottom: 1em;
                h1 {
                    font-size: 1.9rem;
                    font-weight: 900;
                }
                div {
                    h2 {
                        font-size: 1.2rem;
                        letter-spacing: -0.02em;
                        font-weight: 800;
                        color: #2C2B2C;d
                        margin-bottom: 0.15em;
                    }
                    button {
                        display: flex;
                        align-items: center;
                        font-weight: 800;
                        font-size: 1rem;
                        color: ${({ theme }) => theme.primary};
                        .icon {
                            font-size: 2rem;
                            margin-left: -0.1em;
                        }
                    }
                }
            }
            p {
                font-size: 1.08rem;
                color: #3A383A;
            }
            img {
                margin-top: 1.5em;
            }
        }
        div.col--2 {
            div {
                display: flex;
                grid-gap: 3em;
                align-items: center;
                /* grid-template-columns: 8rem auto; */
                margin-bottom: 2em;
                h1 {
                    font-size: 2.8rem;
                    width: 5rem;
                    color: #2C2B2C;
                    font-weight: 900;
                }
                p {
                    max-width: 12rem;
                    font-size: 1.08rem;
                }
            }
        }
    }
    section.section--1 {
        position: relative;
        &:after {
            content: "";
            position: absolute;
            height: 100%;
            top: 0px;
            width: 100vw;
            left: 50%;
            background-repeat: no-repeat;
            background-image: url(${curriculumSection1Pattern});
            transform: translateX(-50%);
            z-index: 1;
        }
        * {
            position: relative;
            z-index: 2;
        }
    }
    section.section--2 {
        position: relative;
        &:after {
            content: "";
            position: absolute;
            height: 100%;
            top: 0px;
            width: 100vw;
            left: 50%;
            background-repeat: no-repeat;
            background-image: url(${curriculumSection2Pattern});
            transform: translateX(-50%);
            background-position: right bottom;
            z-index: 1;
        }
        * {
            position: relative;
            z-index: 2;
        }
    }

`
