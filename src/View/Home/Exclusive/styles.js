import Styled from 'styled-components'
import { exclusiveBgPattern } from '../../../assets/svgImgs'
import { maxQuery, minQuery } from '../../../helpers'

export default Styled.div`
    position: relative;
    padding: 3em 0px;
    padding-bottom: 5em;
    &::after {
        content: "";
        position: absolute;
        height: 100%;
        top: 0px;
        background-color: #F2FCFF;
        width: 100vw;
        left: 50%;
        z-index: 1;
        transform: translateX(-50%);
        background-imagem;: url(${exclusiveBgPattern});
        background-repeat: no-repeat;
        background-position: bottom right;
    }
    * {
        position: relative;
        z-index: 2;
    }
    header {
        text-align: center;
        max-width: 30rem;
        margin: 0 auto;
        h1 {
            font-size: 2rem;
        }
        p {
            font-size: 1rem;
            margin-top: 0.5em;
        }
    }
    div.grid--container {
        display: grid;
        ${minQuery('md')} {
            grid-template-columns: repeat(2, 1fr);
        }
        grid-gap: 2em;
        margin: 0 auto;
        margin-top: 3em;
        max-width: 80rem;
        div.grid--item {
            background: #FFFFFF;
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
                justify-content: space-between;
                h1 {
                    font-weight: 600;
                    font-size: 1.4rem;
                }
                svg {
                    margin-top: 0.5em;
                    font-size: 2.1rem;
                }
            }
            p {
                margin-top: 0.5em;
                width: 85%;
                font-size: 1rem;
                color: #2C2B2C;
            }
        }
    }
`
