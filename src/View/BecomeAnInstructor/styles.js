import Styled from 'styled-components'
import { CountryMaps, LeftL } from '../../assets/svgImgs'
import { minQuery, maxQuery } from '../../helpers'

export default Styled.div`
    h1 {
        font-weight: 600;
        font-size: 1.7rem;
        margin: 0.5em 0px;
    }
    p {
        font-size: 1rem;
        line-height: 190%;
        letter-spacing: -0.02em;
        color: #434343;
    }
    section.section--jumbotron {
        display: grid;
        grid-gap: 3em;
        position: relative;
        ${maxQuery('<lg')} {
            padding: 4em 0px;
        }
        ${minQuery('lg')} {
            grid-template-columns: 1fr 1fr;
            align-items: center;
            height: 30rem;
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
            ${minQuery('>lg')} {
                max-width: 25rem;
            }
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
            div.action--group {
                margin-top: 2em;
            }

        }
        div.col--2 {
            ${maxQuery('lg')} {
                text-align: center
            }
            img {
                width: 100%;
                max-width: 30rem;
            }
        }
    }
    section.section--world {
        position: relative;
        padding: 3em 0px;
        text-align: center;
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
        /* div.grid--container {
            display: grid;
            grid-template-columns: 15rem 1fr 15rem;
            text-align: center;
            background: #FFFFFF;
            max-width: 50rem;
            width: 100%;
            margin: 0px auto;
            border: 0.804938px solid #DDDDDD;
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
            }
        } */
    }
    section.section--goodfit {
        padding: 2em 0px;
        padding-bottom: 4em;
        header {
            text-align: center;
            p {
                font-size: 1rem;
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
                background: #F2FCFF;
                border: 1px solid #D0EAF9;
                border-radius: 15px;
                min-height: 15rem;
                header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 1em;
                    justify-content: space-between;
                    h2 {
                        font-weight: 700;
                        font-size: 1.2rem;
                    }
                    svg {
                        font-size: 2.5rem;
                    }
                }
                p {
                    max-width: 90%;
                    font-size: 0.95rem;
                }
            }
        }
        div.btn--container {
            margin-top: 4em;
            text-align: center;
        }
    }
    section.section--whatFor {
        header {
            text-align: center;
            h1 {
                margin-bottom: 0.25em;
            }
        }
        div.content--container {
            margin-top: 3em;
            div.job--item {
                display: flex;
                justify-content: space-between;
                background: #FFFFFF;
                padding: 1em;
                max-width: 50rem;
                margin: 0 auto;
                margin-bottom: 1.5em;
                box-shadow: 0px 1px 24px rgba(5, 26, 38, 0.04);
                p {
                    font-weight: 600;
                    span {
                        color: #888888;
                        margin-left: 0.5em;
                        font-weight: 300;
                    }
                }
                button {
                    font-size: 1rem;
                    font-weight: 600;
                }
            }
        }
    }
    section.section--wantInfo {
        padding-bottom: 3em;
        margin-top: 7em;
        ${({ theme }) => theme.mixins.primaryBg};
        header.wantInfo--header {
            text-align: center;
            margin-bottom: 4em;
            svg {
                font-size: 5rem;
                transform: translateY(-50%);
            }
            h1 {
                margin-top: -1em;
            }
            p {
                position: relative;
                a {
                    color: ${({ theme }) => theme.primary};
                    &:hover, &:focus, &:active {
                        text-decoration: underline;
                    }
                }
                svg {
                    font-size: 1.8rem;
                    position: absolute;
                    top: 160%;
                }
            }
        }
    }
    section.section--picture {
        padding: 3.5em 0px;
        header {
            text-align: center;
            svg {
                font-size: 4.5rem;
            }
            * {
                max-width: 30rem;
                margin: 0 auto;
            }
            h1 {
                line-height: 130%;
                margin-top: 1em;
                margin-bottom: 0.4em;
            }
            p {
                font-size: 1rem;
            }
        }
    }

`
