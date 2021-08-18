import Styled from 'styled-components'
import { minQuery } from '../../helpers'

export default Styled.div`
    display: grid;
    grid-gap: 3em;
    padding: 2em 0px;
    ${minQuery('lg')} {
        grid-template-columns: 1fr 1fr;
    }
    div.col--1 {
        svg {
            font-size: 8rem;
            height: 3rem;
        }
        h1 {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 0.5em;
        }
        p {
            line-height: 187.1%;
            font-size: 1.2rem;
            letter-spacing: -0.04em;
            color: #606063;
            font-weight: 300;
            max-width: 30rem;
            margin-bottom: 1.2em;
        }
        div.btn--group {
            display: flex;
            grid-gap: 1.5em;
        }
    }
    div.col--2 {
        display: flex;
        justify-content: flex-end;

    }
`
