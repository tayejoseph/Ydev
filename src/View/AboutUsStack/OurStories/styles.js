import Styled from 'styled-components'
import { rem } from 'polished'
import { OurMission } from '../../../assets/svgImgs'
import { maxQuery, minQuery } from '../../../helpers'

export default Styled.div`
    h1 {
        font-weight: 700;
        font-size: 1.9rem;
        text-align: center;
        margin: 0.5em 0px;
    }
    p {
        font-size: 1rem;
        line-height: 190%;
        letter-spacing: -0.02em;
        color: #434343;
    }
    section.section--jumbotron {
        position: relative;
        height: ${rem('654px')};
        display: flex;
        align-items: center;
        &:after {
            content: "";
            position: absolute;
            top: 0px;
            left: 50%;
            transform: translateX(-50%);
            width: 100vw;
            background-image: 
            linear-gradient(90.09deg, #000000 40.14%, rgba(0, 0, 0, 0) 99.92%),
             url(${OurMission});
             background-size: 100vw;
             background-repeat: no-repeat;
            height: 100%;
            z-index: 1;
        }
        * {
            position: relative;
            z-index: 2;
        }
        h3 {
            font-weight: 400;
            font-size: 1rem;
            text-transform: uppercase;
            color: #AFAFAF;
            text-align: left;
        }
        h1 {
            font-weight: 700;
            color: #fff;
            margin-top: 0.5em;
            line-height: 100%;
            line-height: 120%;
            font-size: 2.9rem;
            text-align: left;
            max-width: 34rem;
            ${maxQuery('<lg')} {
                max-width: 90%;
            }
            padding-bottom: 27%;
            span {
                color: #97B5E2;
            }
        }
    }
    section.section--mission {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 2em 0px;
        p {
            max-width: 25rem;
            line-height: 160%;
            margin-top: 1.2em;
        }
    }
    section.section--ourStory {
        padding-bottom: 3em;
        p {
            margin-bottom: 2em;
            span {
                display: block;
                font-weight: 500;
                margin-top: 1em;
                color: ${({ theme }) => theme.primary};
            }
        }
        img {
            width: 100%; 
        }
    }
    section.section--values {
        position: relative;
        padding: 2em 0px;
        &:after {
            content: "";
            position: absolute;
            height: 100%;
            background-color: #F2FCFF;
            top: 0px;
            width: 100vw;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1;
        }
        * {
            position: relative;
            z-index: 2;
        }
        hgroup {
            text-align: center;
        }
        div.grid--container {
            display: grid;
            padding-bottom: 1em;
            margin-top: 3em;
            grid-gap: 2.5em;
            grid-template-columns: repeat(2, 1fr);
            ${maxQuery('md')} {
                grid-template-columns: 1fr;
            }
            div.grid--item {
                background: #FFFFFF;
                border: 2px solid #BADDF0;
                box-sizing: border-box;
                border-radius: 15px;
                padding: 1em;
                padding-bottom: 1.5em;
                min-height: 15rem;
                ${maxQuery('md')} {
                    max-width: 30rem;
                    margin: 0 auto;
                }
                header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1em;
                    h2 {
                        font-size: 1.3rem;
                        font-weight: 700;
                    }
                    svg {
                        font-size: 3rem;
                    }
                }
                p {
                    padding-right: 2em;
                    font-size: 1rem;
                }
            }
        }
    }
    section.section--sponsors {
        padding-top: 3em;
        padding-bottom: 0.5em;
        h1 {
            max-width: 30rem;
            line-height: 150%;
            margin: 0 auto;
        }
    }
    section.section--executive {
        max-width: 60rem;
        margin: 0 auto;
        h1 {
            margin-bottom: 1.5em;
        }
        div.grid--container {
            display: grid;
            grid-gap: 4em;
            ${minQuery('md')} {
                grid-template-columns: repeat(2, 1fr);
            }
            margin-bottom: 7em;
            div.grid--item {
                div.img--container {
                    height: 12rem;
                    width: 12rem;
                    border-radius: 50%;
                    margin-bottom: 1.25em;
                }
                p {
                    max-width: 90%;
                    margin-top: 0.5em;
                }
                h1 {
                    text-align: left;
                    font-size: 1.1rem;
                    margin-bottom: 0.5em;
                }
                svg {
                    font-size: 1.25rem;
                    margin-bottom: 0.35em;
                }
            }
        }

    }
`
