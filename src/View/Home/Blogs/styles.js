import Styled from 'styled-components'
import { maxQuery } from '../../../helpers'

export default Styled.div`
    padding: 3em 0px;
    header {
        text-align: center;
        margin-bottom: 3em;
        svg {
            font-size: 5rem;
        }
        h1 {
            margin-top: 0.25em;
            font-weight: 700;
            margin-bottom: 0.25em;
            color: #050402;
        }
        p {
            max-width: 50rem;
            margin: 0 auto;
        }
    }
    div.grid--container {
        display: grid;
        margin-top: 1.5em;
        grid-template-columns: repeat(3, 1fr);
        ${maxQuery('md')} {
            grid-template-columns: repeat(2, 1fr)
        }
        ${maxQuery('sm')} {
            grid-template-columns: 1fr;
            grid-gap: 2em;
        }
        grid-gap: 1em;
        div.img--container {
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 1em;
            img {
                width: 100%;
                height: 100%;
            }
        }
        div.grid--item {
            h1 {
                margin-top: 0.2em;
                margin-bottom: 0.25em;
                font-weight: 700;
                font-size: 1.2rem;
                line-height: 130%;
                font-size: 800;
                margin-bottom: 0.5em;
            }
            p {
                color: #393839;
                ${({ theme }) => theme.mixins.lineClamp(2)};
                font-size: 1.1rem;
                margin-bottom: 1.5em;
            }
        }
    }
    footer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 4em;
    }
`
