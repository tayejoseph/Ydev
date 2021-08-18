import Styled from 'styled-components'
import { exclusiveBgPattern } from '../../../assets/svgImgs'

export default Styled.div`
    position: relative;
    padding: 3em 0px;
    padding-bottom: 5em;
    &::after {
        content: "";
        position: absolute;
        height: 100%;
        top: 0px;
        background-color: #D0EAF9;
        width: 100vw;
        left: 50%;
        z-index: 1;
        transform: translateX(-50%);
        background-image: url(${exclusiveBgPattern});
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
        p {
            font-size: 1rem;
            margin-top: 0.5em;
        }
    }
    div.grid--container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        grid-gap: 2em;
        margin-top: 3em;
        div.grid--item {
            background: #FFFFFF;
            border: 1px solid #D0EAF9;
            box-sizing: border-box;
            border-radius: 15px;
            padding: 1.5em;
            padding-bottom: 3em;
            div.top--container {
                display: flex;
                /* align-items: center; */
                justify-content: space-between;
                h1 {
                    font-weight: 700;
                    font-size: 1.5rem;
                }
                svg {
                    margin-top: 0.5em;
                    font-size: 2rem;
                }
            }
            p {
                margin-top:0.5em;
                max-width: 25rem;
                font-size: 1rem;
                color: #2C2B2C;
            }
        }
    }
`
