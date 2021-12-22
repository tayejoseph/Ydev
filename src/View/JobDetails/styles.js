import Styled from 'styled-components'
import { minQuery } from '../../helpers'

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
        text-align: center;
        padding: 3em 0px;
        h1 {
            margin-bottom: 1em;
        }
    }
    section.section--world {
        h1 {
            font-size: 1.7rem;
            margin-top: 1em;
            margin-bottom: 0.2em;
            font-weight: 800;
        }
        ul {
            margin: 0px;
            margin-left: 1.5em;
            padding: 0px;
        }
    }
    section.section--apply {
        display: grid;
        padding: 3em 0px;
        grid-gap: 3em;
        padding-bottom: 6em;
        ${minQuery('lg')} {
            grid-template-columns: 1fr 1fr;
            align-items: center;
            
        }
        div.col--1 {
            max-width: 34rem;
        }
        div.col--2 {
            text-align: center;
            ${minQuery('lg')} {
                padding-bottom: 3em;
            }
            svg {
                font-size: 20rem;
            }
        }
        h1 {
            font-size: 1.7rem;
            margin-top: 1em;
            margin-bottom: 1.5em;
            font-weight: 800;
        }
        label {
            span {
                color: #9A9A9A;
                margin-left: 0.5em;
            }
        }
        p.file-preview {
            margin-bottom: 1.5em;
            font-size: 1rem;
        }
        label#uploader {
            cursor: pointer;
            position: relative;
            display: flex;
            align-items: center;
            input {
                position: absolute;
                visibility: hidden;
                height: 0px;
                width: 0px;
            }
        }
        footer {
            p {
                font-size: 1.1rem;
                margin-bottom: 0.8em;
                a {
                    color: ${({ theme }) => theme.primary};
                    &:focus, &:active, &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`
