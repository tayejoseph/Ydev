import Styled from 'styled-components'
import { maxQuery } from '../../helpers'

export default Styled.div`
    h1 {
        text-align: center;
        max-width: 40rem;
        margin: 0 auto;
    }
    div.grid--container {
        display: grid;
        grid-gap: 2em;
        margin-bottom: 4em;
        margin-top: 3em;
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
