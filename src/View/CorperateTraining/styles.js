import Styled from 'styled-components'
import {
  communityMap,
  digitalWorkforce,
  whyChooseDev,
} from '../../assets/svgImgs'
import { lighten } from 'polished'
import { minQuery, maxQuery } from '../../helpers'

export default Styled.div`
    h1 {
        font-weight: 900;
        font-size: 2rem;
        margin: 0.5em 0px;
    }
    p {
        font-size: 1.2rem;
        line-height: 150%;
        letter-spacing: -0.02em;
        color: #434343;
    }
    section.section--jumbotron {
        padding-top: 4em;
        ${maxQuery('<lg')} {
            padding-top: 2em;
        }
        * {
            position: relative;
            z-index: 5;
        }
        div.section--row {
            display: grid;
            grid-gap: 3em;
            align-items: center;
            ${minQuery('lg')}{
                grid-template-columns: 1fr 1fr;
            }
            h1 {
                font-size: 2.6rem;
                font-weight: 800;
                max-width: 30rem;
            }
            p {
                color: #6C6969;
                /* font-size: 1.05rem; */
            }
            div.col--2 {
                max-width: 25rem;
                ${minQuery('lg')} {
                    justify-self: flex-end;
                }
                div.row {
                    display: flex;
                     color: #000000;
                     margin-top: 0.5em;
                     grid-gap: 1.5em;
                    button {
                        text-decoration: underline;
                        color: #000000;
                        background: transparent;
                        border: none;
                        cursor: pointer;
                        font-size: 1.1rem;
                    }
                     p {
                        display: flex;
                        color: #000000;
                        font-weight: 400;
                        align-items: center;
                    }
                }
            }
        }
        div.img--container {
            margin-top: 2em;
        }
    }
    section.section--help {
        padding-top: 2em;
        padding-bottom: 3em;
        h1 {
            text-align: center;
            margin-bottom: 1.5em;
        }
        div.grid--container {
            display: grid;
            grid-gap: 2em;
            text-align: center;
            grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
            div.img--container {
                width: 10rem;
                height: 10rem;
                margin: 0 auto;
                border-radius: 50%;
            }
            h2 {
                font-weight: 700;
                margin-top: 1em;
                margin-bottom: 0.25em;
                color: #1C1B1B;
                font-size: 1.5rem;
            }
            p {
                letter-spacing: -0.02em;
                color: #1D1C1C;
                font-size: 1.1rem;
                line-height: 140%;
                max-width: 24rem;
                margin: 0 auto;
            }
        }
    }
    section.section--choose {
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
        padding: 1.5em 0px;
        padding-bottom: 0px;
        ${maxQuery('<lg')} {
            padding-bottom: 4em;
        }
        ${minQuery('lg')} {
            &:after {
                content: "";
                position: absolute;
                top: 0px;
                height: 100%;
                width: 100vw;
                left: 50%;
                transform: translateX(-50%);
                background: #F2FCFF;
                z-index: 1;
            }
            &:before {
                content: "";
                position: absolute;
                top: 0px;
                height: 100%;
                width: 100vw;
                left: 50%;
                transform: translateX(-50%);
                background: #F2FCFF;
                z-index: 2;
                background-repeat: no-repeat;
                background-image: url(${whyChooseDev});
            }
        }
        * {
            position: relative;
            z-index: 3;
        }
    }
    section.section--patterns {
        position: relative;
        padding-bottom: 3em;

         &:after {
            content: "";
            position: absolute;
            top: 0px;
            height: 100%;
            width: 100vw;
            left: 50%;
            transform: translateX(-50%);
            background: #F2FCFF;
            background-image: url(${communityMap});
            background-repeat: no-repeat;
            background-size: 35rem;
            z-index: 1;
        }
        * {
            position: relative;
            z-index: 2;
        }
    }
    section.section--workforce {
        display: grid;
        padding: 5em 0px;
        grid-gap: 2em;
        ${minQuery('lg')} {
            grid-template-columns: 1fr 1fr;
            align-items: center;
            grid-gap: 8em;
        }
        div.col--1 {
            div.img--container {
                max-width: 32rem;
                width: 100%;
                height: 20rem;
                border-radius: 20px;
                background-image: url(${digitalWorkforce});
            }
        }
        div.col--2 {
            * {
                max-width: 30rem;
            }
            h1 {
                line-height: 120%;
            }
            p {
                max-width: 25rem;
                margin-bottom: 2em;
                font-size: 1.05rem;
                line-height: 125%;
                margin-top: 1em;
                color: #313131;
            }
        }
    }
    section.section--ready {
        padding-bottom: 5em;
        h1 {
            font-size: 1.8em;
            margin-bottom: 1.2em;
        }
        div.section--row {
            display: grid;
            grid-gap: 2rem;
            ${minQuery('lg')} {
                grid-template-columns: 1fr 1fr;
            }
            div.col--1 {
                form {
                    max-width: 40rem;
                    footer {
                        p {
                            margin-top: -0.5em;
                            margin-bottom: 1em;
                            font-size: 1rem;
                            letter-spacing: -0.02em;
                            color: #7E7A7E;
                            a {
                                color: ${({ theme }) => theme.primary};
                                &:hover, &:active, &:focus {
                                    text-decoration: underline;
                                    outline: none;
                                    color: ${({ theme }) =>
                                      lighten(0.1, theme.primary)};
                                }
                            }
                        }
                    }
                }

            }
            div.col--2 {
                ${maxQuery('<lg')} {
                    display: none;
                }
                justify-self: center;
                ${minQuery('lg')} {
                    padding-top: 3em;
                    justify-self: flex-end;
                }
                svg {
                    font-size: 23rem;
                }
            }
        }
    }
`
