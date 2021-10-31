import Styled from 'styled-components'
import { Confetti } from '../../assets/png'
import { minQuery, maxQuery } from '../../helpers'

export default Styled.div`
    section.section--jumbotron {
        display: grid;
        position: relative;
        grid-gap: 1.5em;
        padding: 3em 0px;
        &:after {
            content: "";
            width: 100vw;
            left: 50%;
            transform: translateX(-50%);
            height: 100%;
            top: 0px;
            position: absolute;
            z-index: 1;
            background: linear-gradient(134.82deg, rgba(132, 147, 118, 0.35) 47.69%, rgba(58, 141, 188, 0.35) 64.87%), linear-gradient(139.52deg, rgba(224, 77, 77, 0.32) 23%, rgba(0, 0, 0, 0) 55.61%), #3A8DBC;
        }
        * {
            position: relative;
            z-index: 2;
        }
        ${minQuery('lg')} {
            grid-template-columns: 1fr 0.5fr;
        }
        div.col--1 {
            h1 {
                color: #fff;
                font-size: 2.3rem;
                font-weight: 800;
            }
            p {
                margin: 1em 0px;
                color: #ECECEC;
            }
            ol {
                margin: 0px;
                padding: 0px;
                margin-bottom: 2em;
                list-style: none;
                li {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    grid-gap: 1em;
                    svg {
                        font-size: 1.3rem;
                    }
                    &:not(:last-of-type) {
                        margin-bottom: 0.6em;
                    }
                }
            }
            button {
                background-color: #fff;
                border-color: #fff;
                color: #548A9D;
                &:after {
                    border-color: #fff;
                }
            }
        }
        div.col--2 {
            text-align: right;
            ${maxQuery('md')} {
                display: none;
            }
            svg {
                font-size: 8rem;
            }
        }
    }
    section.section--timeline {
        display: grid;
        padding: 3em 0px;
        grid-gap: 1.5em;
        ${minQuery('lg')} {
            grid-template-columns: 1fr 0.5fr;
        }
        div.col--1 {
            div.title--container {
                h1 {
                    margin-bottom: 1em;
                    font-size: 1.5rem!important;
                }
            }
            div.detail--container {
                font-size: 1.1rem;
            }
        }
        div.col--2 {
            text-align: center;
            h1 {
                font-size: 1.5rem;
                font-weight: 800;
                margin-bottom: 0.5em;
            }
        }
    }
    section.section--why {
        padding: 2em 0px;
        h1 {
            text-align: center;
            margin-bottom: 1em;
        }
        div.detail--item {
            &:not(:last-of-type) {
                margin-bottom: 2em;
            }
            padding: 1em;
            background: #FFFFFF;
            box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.04);
            h2 {
                font-size: 1.1rem;
                font-weight: 700;
                margin-bottom: 0.5em;
            }
            p {
                font-size: 1.1rem;
            }
        }
    }
    section.section--training {
        padding: 2em 0px;
        header.training--header {
            text-align: center;
            margin: 0 auto;
            margin-bottom: 4em;
            width: 80%;
            p {
                margin: 1em 0px;
                font-size: 1.1rem;
            }
        }
        div.lists--container {
            display: grid;
            grid-gap: 1.5em;
            ${minQuery('md')} {
                grid-template-columns: repeat(2, 1fr);
            }
            ${minQuery('lg')} {
                grid-template-columns: repeat(3, 1fr);
            }
            div.list--item {
                border: 0.995885px solid rgb(221, 221, 221);
                padding: 1.3em 1em;
                header {
                    margin-bottom: 1em;
                    height: 5rem;
                    h2 {
                        font-size: 1.1rem;
                        line-height: 110%;
                        &:first-of-type {
                            font-size: 1.4rem;
                            margin-bottom: 0.5em;
                        }

                    }

                }
                ol {
                    margin: 0px;
                    padding: 0px;
                    list-style: none;
                    li {
                        font-size: 1rem;
                        display: flex;
                        grid-gap: 0.5em;
                        &:not(:last-of-type) {
                            margin-bottom: 0.5em;
                                border-bottom: 1
px
 solid rgb(241, 241, 241);
 padding-bottom: 0.5em;

                        }
                    }
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
                        font-weight: 700;
                        margin-bottom: 0.5em;
                    }
                }
                p {
                    font-size: 1.05rem;
                }
            }
        }
    }
    section.section--learnMore {
        position: relative;
        padding: 3em 0px;
        padding-bottom: 4em;
        display: grid;
        &:before {
            content: "";
            position: absolute;
            height: 100%;
            left: 50%;
            top: 0px;
            width: 100vw;
            transform: translateX(-50%);
            background: #F2FCFF;
            background-image: url(${Confetti});
            background-repeat: no-repeat;
            background-size: 100vw;
            z-index: -1;
        }
        ${minQuery('lg')} {
            grid-template-columns: 1fr 1fr;
        }
        div.col--1 {
            h1 {
                font-size: 1.8rem;
                line-height: 115%;
                font-weight: 800;
                margin-bottom: 1em;
            }
            form {
                footer {
                    div.footer--row {
                        display: flex;
                        grid-gap: 0.5em;
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

        }
        div.col--2 {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            text-align: center;
            svg {
                font-size: 18rem;
            }
            ${maxQuery('<lg')} {
                display: none;
            }
        }
    }
`
