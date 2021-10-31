import Styled from 'styled-components'
import { maxQuery } from '../../helpers'

export default Styled.div`
    padding: 4em 0px;
    padding-top: 6em;
    header {
        text-align: center;
        h1 {
            text-align: center;
            max-width: 40rem;
            margin: 0 auto;
        }
        p {
            font-size: 1.2rem;
            width: 80%;
            max-width: 50rem;
            margin: 0 auto;
            margin-top: 1em;
            line-height: 140%;
        }
    }
    div.grid--container {
        display: grid;
        grid-gap: 2em;
        margin-bottom: 3em;
        margin-top: 4em;
        div {
            height: 4rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
                font-size: 12rem;
                &:hover {
                    fill: #F8F9FB;
                }
            }
        }
        grid-template-columns: repeat(4, 1fr);
        ${maxQuery('md')} {
            grid-template-columns: repeat(3, 1fr);
        }
    }
`
