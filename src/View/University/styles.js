import Styled from 'styled-components'
import { CountryMaps, LeftL } from '../../assets/svgImgs'
import { minQuery, maxQuery } from '../../helpers'

export default Styled.div`
    h1 {
        font-weight: 900;
        font-size: 2rem;
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
        padding: 3em 0px;
        position: relative;
        ${minQuery('lg')} {
            grid-template-columns: 1fr 1fr;
            justify-content: space-between;
            align-items: center;
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
                background-image: url(${LeftL});
                background-position: left bottom;
                background-repeat: no-repeat;
            }
        }
        div.col--1 {
            max-width: 30rem;
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
            p {
                margin-bottom: 1.2em;
                line-height: 150%;
            }

        }
        div.col--2 {
            text-align: center;
            ${maxQuery('md')} {
                width: 30rem;
            }
            img {
                width: 25rem;
                max-width: 100%;
            }
        }
    }
    section.section--program {
        display: grid;
        grid-template-columns: 25rem 1fr;
        grid-gap: 3em;
        ${maxQuery('<lg')} {
            grid-template-columns: 1fr;
        }
        div.col--2 {
            display: flex;
            grid-gap: 1em;
            overflow-x: auto;
            width: 50vw;
            ${maxQuery('<lg')} {
                width: 90vw;
            }
            ${({ theme }) => theme.mixins.hideScrollBar};
            div.carousel--item {
                width: 17rem;
                flex-shrink: 0;
                background: linear-gradient(180deg, rgba(10, 33, 46, 0) 50.54%, #0A212E 100%), url(.png);
                border-radius: 15px 15px 0px 0px;
                div.img--container {
                    height: 10rem;
                    background-position: center center;
                    background-size: contain;
                    background-repeat: no-repeat;
                }
                div.content--container {
                    padding: 1em;
                    h2 {
                        color: #fff;
                        font-size: 1.2rem;
                        font-weight: 800;
                        margin: 0.5em 0px;
                    }
                    p {
                        font-size: 1rem;
                        color: #ECE8E8;
                        line-height: 140%;
                    }
                }
            }
        }
    }
    section.section--world {
        position: relative;
        padding: 3em 0px;
        text-align: center;
        header {
        padding: 2em 0px;
        &:after {
            content: "";
            position: absolute;
            top: 0px;
            height: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 100vw;
            background-image: url(${CountryMaps});
            background-position: center -5rem;
            z-index: 1;
        }
        }
        * {
            position: relative;
            z-index: 2;
        }
        header {
            max-width: 80%;
            margin: 0 auto;
        }
        div.grid--container {
            display: grid;
            grid-gap: 1.5em;
            ${maxQuery('md')} {
                grid-template-columns: 1fr;
            }
            ${minQuery('>mg')} {
                grid-template-columns: 1fr 1fr;
            }
            ${minQuery('xl')} {
                margin: 3em 0px;
                grid-gap: 1em;
                grid-template-columns: repeat(5, 1fr);
            }
            div.grid--item {
                background: rgba(246, 253, 255, 0.55);
                border: 1px solid rgba(131, 198, 242, 0.6);
                box-sizing: border-box;
                box-shadow: 0px 1px 1px #FFFFFF;
                border-radius: 6px;
                padding: 1em;
                padding-top: 2em;
                svg {
                    font-size: 4rem;
                }
                p {
                    font-size: 1rem;
                }
                h3 {
                    font-weight: 600;
                    margin-top: 0.25em;
                    line-height: 120%;
                    height: 4rem;
                    font-size: 1.2rem;
                }
            }
        }
    }
    section.section--program {
        position: relative;
        padding: 3em;
        &:after {
            content: "";
            position: absolute;
            background: #051A26;
            top: 0px;
            width: 100vw;
            left: 50%;
            transform: translateX(-50%);
            height: 100%;
            z-index: -1;
        }
        div.col--1 {
            h1 {
                font-weight: 800;
                font-size: 2rem;
                color: #FFFFFF;
            }
            p {
                letter-spacing: -0.02em;
                font-weight: 300;
                color: #ECECEC;
                font-size: 1.1rem;
            }
            button {
                background-color: #fff;
                color: #051A26;
                margin-top: 2em;
                border: 2px solid #fff;
                &:after {
                    border: 0.4px solid #fff;
                }
            }
        }
    }
    section.section--goodfit {
        padding: 2em 0px;
        padding-bottom: 4em;
        header {
            text-align: center;
            p {
                font-size: 1.2rem;
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
                        font-weight: 800;
                        font-size: 1.2rem;
                    }
                    svg {
                        font-size: 2.5rem;
                    }
                }
                p {
                    max-width: 90%;
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
                    font-size: 1.1rem;
                }
            }
        }
    }
    section.section--wantInfo {
        padding-bottom: 3em;
        margin-top: 7em;
        ${({ theme }) => theme.mixins.primaryBg};
        header {
            text-align: center;
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
    }

`
