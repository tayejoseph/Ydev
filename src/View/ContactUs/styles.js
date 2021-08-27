import Styled from 'styled-components'
import {
  contactSection,
  contactUsBg1,
  contactUsBg2,
} from '../../assets/svgImgs'
import { minQuery, maxQuery } from '../../helpers'

export default Styled.div`
    display: grid;
    padding: 3em 0px;
    ${minQuery('lg')} {
        grid-template-columns: 1fr 20rem;
        grid-gap: 4em;
    }
    position: relative;
    ${minQuery('lg')} {
        &:after {
            content: "";
            position: absolute;
            height: 100%;
            top: 0px;
            width: 100vw;
            left: 50%;
            transform: translateX(-50%);
            background-image: url(${contactUsBg1}), url(${contactUsBg2});
            background-repeat: no-repeat;
            background-position: left top, right calc(100% - 1em);
            z-index: 1;
        }
        * {
            position: relative;
            z-index: 2;
        }
    }
    div.col--1 {
        padding-top: 1.5em;
        header {
            p {
                margin: 2em 0px;
                font-size: 1rem;
                color: #75737D;
                max-width: 30rem;
            }
        }
        form {
            max-width: 30rem;
            label {
                font-weight: 500;
                font-size: 0.9rem;
            }
            input {
                background: #EFEFEF;
                border-color: #EFEFEF;
            }
            div.item--row {
                display: grid;
                ${minQuery('lg')} {
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 1.5em;
                }
            }
            footer {
                max-width: 30rem;
                p {
                    letter-spacing: -0.02em;
                    color: #7E7A7E;
                    font-size: 1rem;
                    margin-bottom: 1em;
                    a {
                        color: ${({ theme }) => theme.primary};
                        &:hover, &:active, &:focus {
                            text-decoration: underline;
                            outline: none;
                        }
                    }
                }
            }
        }
        section.section--footer {
            margin-top: 3em;
            padding-bottom: 6em;
            h1 {
                font-weight: 700;
                font-size: 1.2rem;
            }
            div.grid--container {
                margin-top: 1.5em;
                display: grid;
                grid-gap: 1.5em;
                ${minQuery('md')} {
                    grid-template-columns: 1fr 1fr;
                }
                div.grid--item {
                    &:nth-child(2) {
                        div:not(:last-of-type) {
                            margin-bottom: 0.5em;
                        }
                        ${minQuery('md')} {
                            grid-row: -1 / 3;
                            grid-column: 2;
                        }
                    }
                    h2 {
                        font-weight: 500;
                        font-size: 1rem;
                    }
                    h3 {
                        color: #333333;
                        font-weight: 300;
                        color: #767676;
                        font-size: 0.95rem;
                    }
                    p {
                        font-size: 0.95rem;
                        color: #333333;
                        a {
                            color: ${({ theme }) => theme.primary};
                              &:hover, &:focus {
                                  text-decoration: underline;
                                  outline: none;
                              }                        
                    }
                }
            }
        }
    }
    div.col--2 {
        /* ${maxQuery('<lg')} {
            display: none
        } */
        /* background-image: url(${contactSection}); */
        background-color: pink;
        /* flex: 1; */
        /* width: 20rem;
        height: 300rem; */
    }
    div.col--2 {
        background: blue!important;
        height: 400px;
        width: 200px;
    }
`
