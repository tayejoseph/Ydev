import Styled from 'styled-components'
import {
  CountryMaps,
  Sphere,
  LeftL,
  Lgrid,
  SquareBlock,
} from '../../assets/svgImgs'
import { minQuery, maxQuery } from '../../helpers'

export default Styled.div`
    h1 {
        font-weight: 700;
        font-size: 1.7rem;
        margin: 0.5em 0px;
    }
    p {
        font-size: 1.1rem;
        line-height: 190%;
        letter-spacing: -0.02em;
        color: #434343;
    }
    section.section--jumbotron {
        display: grid;
        grid-gap: 3em;
        position: relative;
        ${minQuery('lg')} {
            grid-template-columns: 1fr 1fr;
            /* align-items: center; */
            height: 35rem;
            &:after {
                content: "";
                position: absolute;
                top: 0px;
                height: 100%;
                width: 100vw;
                left: 50%;
                transform: translateX(-50%);
                background-image: url(${LeftL});
                background-position: left bottom;
                background-repeat: no-repeat;
            }
        }
        div.col--1 {
            padding-top: 4em;
            h2 {
                display: flex;
                align-items: center;
                font-weight: 300;
                font-size: 1rem;
                margin-bottom: 2em;
                svg {
                    font-size: 1.5rem;
                    margin-right: 0.25em;
                }
            }

        }
        div.col--2 {
            ${maxQuery('lg')} {
                text-align: center;
            }
            img {
                width: 100%;
                max-width: 30rem;
            }
        }
        div.action--group {
            display: flex;
            margin-top: 1.5em;
            grid-gap: 0.5em;
            button {
                &:last-of-type {
                    text-decoration: underline;
                }
            }
        }
    }
    section.section--world {
        position: relative;
        padding: 4em 0px;
        padding-top: 5em;
        &:after {
            content: "";
            position: absolute;
            top: 0px;
            height: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 100vw;
            background-image: url(${CountryMaps});
            background-position: center -2rem;
            z-index: 1;
        }
        * {
            position: relative;
            z-index: 2;
        }
        div.grid--container {
            display: grid;
            grid-template-columns: 15rem 1fr 15rem;
            ${maxQuery('md')} {
                grid-template-columns: 1fr 1fr;
            }
            text-align: center;
            background: #FFFFFF;
            max-width: 50rem;
            width: 100%;
            margin: 0px auto;
            ${minQuery('lg')} {
                border: 0.804938px solid #DDDDDD;
            }
            div.grid--item {
                display: flex;
                padding: 1em 1.5em;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                p {
                    line-height: 140%;
                    color: #2D2A2A;
                }
                &:nth-child(2) {
                    border-right: 0.804938px solid #DDDDDD;
                    border-left: 0.804938px solid #DDDDDD;
                }
                ${maxQuery('lg')} {
                    border: 0.804938px solid #DDDDDD;
                }
            }
        }
    }
    section.section--goodfit {
        ${({ theme }) => theme.mixins.primaryBg};
        padding: 2em 0px;
        padding-bottom: 4em;
        header {
            text-align: center;
            p {
                font-size: 1.05rem;
            }
        }
        div.grid--container {
            display: grid;
            grid-gap: 2.5em;
            margin-top: 3em;
            grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
            ${minQuery('lg')} {
                max-width: 100rem;
                grid-template-columns: repeat(2, 1fr);
            }
            div.grid--item {
                padding: 1em;
                background: #FDFFFF;
                border: 1px solid #D0EAF9;
                border-radius: 15px;
                min-height: 15rem;
                header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1em;
                    justify-content: space-between;
                    h2 {
                        font-weight: 600;
                        font-size: 1.1rem;
                    }
                    svg {
                        font-size: 2.5rem;
                    }
                }
                p {
                    max-width: 85%;
                    font-size: 1rem;
                }
            }
        }
        div.btn--container {
            margin-top: 4em;
            text-align: center;
        }
    }
    section.section--whatFor {
        display: grid;
        grid-gap: 2em;
        padding: 3em 0px;
        padding-bottom: 0px;
        ${minQuery('lg')} { 
            grid-template-columns: 25rem 1fr;
        }
        div.col--1 {
            h1 {
                max-width: 15rem;
                font-size: 2.2rem;
                line-height: 120%;
            }
            p {
                max-width: 85%;
            }
            div.action--container {
                display: flex;
                grid-gap: 1em;
                margin-top: 2em;
                button {
                    background: #0A212E;
                    transform: matrix(-1, 0, 0, 1, 0, 0);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 3rem;
                    width: 3rem;
                    filter: drop-shadow(0px 5.76829px 12.9786px rgba(0, 0, 0, 0.12));
                    .icon {
                        color: #FFFFFF;
                        font-size: 2.4rem;
                        transform: matrix(1, 0, 0, -1, 0, 0);
                    }
                }
            }

        }
    }
    section.section--join {
        display: grid;
        grid-gap: 3em;
        padding-top: 3em;
        padding-bottom: 8em;
        ${minQuery('lg')} {
            position: relative;
            &:after {
                content: "";
                position: absolute;
                height: 100%;
                width: 100vw;
                top: 0px;
                left: 50%;
                transform: translateX(-50%);
                background-image: url(${Sphere}), url(${Lgrid}), url(${SquareBlock});
                background-repeat: no-repeat, no-repeat no-repeat;
                background-position: left top, right 5em, bottom left;
                z-index: 1;
            }
            * {
                position: relative;
                z-index: 2;
            }
        }
        ${minQuery('lg')} {
            grid-template-columns: 1fr 1fr;
            align-items: center;
        }
        div.col--1 {
            h1 {
                margin-bottom: 1em;
            }
            max-width: 40rem;

        }
        div.col--2 {
            text-align: center;
            ${minQuery('lg')} {
                text-align: right;
            }
            svg {
                font-size: 30rem;
            }
        }
    }
    
    section.section--wantInfo {
        padding-bottom: 3em;
        margin-top: 7em;
        ${({ theme }) => theme.mixins.primaryBg};
        header.wantInfo--header {
            text-align: center;
            margin-bottom: 3em;
            svg {
                font-size: 5rem;
                transform: translateY(-50%);
            }
            h1 {
                margin-top: -1em;
            }
            p {
                a {
                    color: ${({ theme }) => theme.primary};
                    &:hover, &:focus, &:active {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
    section.section--picture {
        padding: 3.5em 0px;
        header {
            text-align: center;
            svg {
                font-size: 5rem;
            }
            * {
                max-width: 30rem;
                margin: 0 auto;
            }
            h1 {
                line-height: 120%;
                margin-bottom: 0.25em;
            }
            p {
                font-size: 1.1rem;
            }
        }
        div.carousel--img__container {
            border-radius: 50%;
            margin: 0 auto;
            margin-bottom: 1.5em;
                img {
                    width: 33vw;
                }
        }
    }

`
