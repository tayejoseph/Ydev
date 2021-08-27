import Styled from 'styled-components'
import { minQuery } from '../../../helpers'

export default Styled.div`
    position: relative;
    padding: 3em 0px;
    padding-bottom: 5em;
    h1 {
        font-weight: 900;
        font-size: 1.8rem;
        margin: 0.5em 0px;
    }
    p {
        font-size: 1.15rem;
        letter-spacing: -0.02em;
        color: #434343;
    }
    &:after {
        content: "";
        position: absolute;
        height: 100%;
        top: 0px;
        width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        background: #F2FCFF;
        z-index: 1;
    }
    * {
        position: relative;
        z-index: 2;
    }
    header {
        text-align: center;
        svg {
            font-size: 5rem;
        }
        h1 {
            margin: 0px;
            margin-bottom: 0.5em;
        }
        p {
            font-size: 1rem;
            max-width: 30rem;
            margin: 0 auto;
        }
        button {
            margin-top: 2em;
        }
    }
    div.grid--container {
        display: grid;
        grid-gap: 2em;
        margin-top: 4em;
        grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
        div.grid--header {
            div {
                display: flex;
                grid-gap: 2.5em;
                svg {
                    font-size: 3rem;
                }
                h2 {
                    color: #A5A5A5;
                    font-weight: 600;
                    font-size: 1.5rem;
                }
            }
            h1 {
                margin-top: 0.8em;
                font-size: 1.4rem;
                ${minQuery('md')} {
                    height: 4rem;
                }
                font-weight: 700;
                line-height: 120%;
                color: #292828;
            }
        }
        p {
            color: #555255;
            font-size: 0.92rem;
        }
    }
`
