import Styled from 'styled-components'
import { uniBg } from '../../assets/png'
import { OurMission } from '../../assets/svgImgs'
import { maxQuery, minQuery } from '../../helpers'

export default Styled.div`
    h1 {
        font-weight: 900;
        font-size: 1.8rem;
        margin: 0.5em 0px;
    }
    p {
        font-size: 1.15rem;
        line-height: 190%;
        letter-spacing: -0.02em;
        color: #434343;
    }
    section.section--jumbotron {
        min-height: 35rem;
        padding: 4em 0px;
        position: relative;
        display: flex;
        align-items: center;
        &:after {
            content: "";
            position: absolute;
            top: 0px;
            left: 50%;
            transform: translateX(-50%);
            width: 100vw;
            background-image: linear-gradient(90.09deg, #000000 40.14%, rgba(0, 0, 0, 0) 99.92%), url(${uniBg});
            background-size: cover;
            height: 100%;
            z-index: 1;
        }
        * {
            position: relative;
            z-index: 2;
        }
        h3 {
            color: #C2C2C2;
            text-align: left;
            display: flex;
            align-items: center;
            grid-gap: 1em;
            font-weight: 800;
        }
        h1 {
            font-weight: 800;
            color: #fff;
            margin-top: 0.5em;
            line-height: 100%;
            font-size: 3rem;
            text-align: left;
            max-width: 40rem;
            span {
                color: #97B5E2;
            }
        }
        p {
            color: #C4C4C4;
            font-size: 1.1rem;
            max-width: 50rem;
            margin: 1.5em 0px;
        }
        button {
            margin-top: 1em;
            background: #fff!important;
            color: #242626;
            &:after {
                border-color: #fff;
            }
        }
    }
    section.section--partner {
        padding: 3em 0px;
        header {
            text-align: center;
            p {
                width: 80%;
                margin: 0 auto;
            }
        }
        div.grid--container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            ${maxQuery('md')} {
                grid-template-columns: 1fr;
            }
            grid-gap: 2em;
            margin: 0 auto;
            margin-top: 3em;
            max-width: 80rem;
            div.grid--item {
                background: #F2FCFF;
                border: 1px solid #D0EAF9;
                box-sizing: border-box;
                border-radius: 15px;
                padding: 1.5em;
                padding-bottom: 3em;
                ${maxQuery('lg')} {
                    max-width: 30rem;
                    margin: 0 auto;
                }
                div.top--container {
                    display: flex;
                    /* align-items: center; */
                    justify-content: space-between;
                    h1 {
                        font-weight: 700;
                        font-size: 1.4rem;
                    }
                    svg {
                        margin-top: 0.5em;
                        font-size: 2rem;
                    }
                }
                p {
                    margin-top:0.5em;
                    max-width: 25rem;
                    font-size: 1.1rem;
                    color: #2C2B2C;
                }
            }
        }
    }

    section.section--admission {
        padding: 2em 0px;
        padding-bottom: 5em;
        header {
            text-align: center;
            margin: 0 auto;
            margin-bottom: 4em;
            width: 80%;
            p {
                margin: 1em 0px;
                font-size: 1.1rem;
            }
        }
        div.grid--container {
            display: grid;
            grid-gap: 1.5em;
            
            ${minQuery('md')} {
                row-gap: 2em;
                grid-template-columns: repeat(2, 1fr);
            }
            ${minQuery('lg')} {
                grid-template-columns: repeat(3, 1fr);
            }
            div.grid--item {
                hgroup {
                    div {
                        display: flex;
                        grid-gap: 2em;
                        margin-bottom: 1em;
                        h1 {
                            color: #A5A5A5;
                            font-weight: 800;
                        }
                        svg {
                            font-size: 4rem;
                        }
                    }
                    h1.title {
                        font-size: 1.3rem;
                        text-align: left;
                        font-weight: 800;
                        margin-bottom: 0.5em;
                    }
                }
                p {
                    font-size: 1.05rem;
                    line-height: 150%;
                }
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
                        font-weight: 800;
                    }
                    svg {
                        font-size: 3rem;
                    }
                }
                p {
                    padding-right: 2em;
                    font-size: 1.1rem;
                }
            }
        }
    }
    section.section--universities {
            padding-bottom: 5em;
            display: grid;
            ${minQuery('lg')} {
                grid-template-columns: 1fr 1fr;
            }
            div.col--1 {
                h1 {
                    margin-bottom: 1.5em;
                }
                footer {
                    div.footer--row {
                        display: flex;
                        grid-gap: 0.5em;
                        align-items: center;
                        margin-top: 3em;
                        p {
                            letter-spacing: -0.02em;
                            font-size: 1.1rem;
                            color: #7E7A7E;
                            a {
                                color: ${({ theme }) => theme.primary};
                                &:hover, &:focus {
                                    text-decoration: underline;
                                }
                            }
                        }
                    }
                    div.action--container {
                        margin-top: 2em;
                        display: flex;
                        grid-gap: 2em;
                    }
                }
            }
            div.col--2 {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                ${maxQuery('<lg')} {
                    display: none;
                }
                text-align: center;
                svg {
                    font-size: 30rem;
                }
            }
    }
`
