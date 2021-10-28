import Styled from 'styled-components'
import { minQuery } from '../../../helpers'

export default Styled.div`
    display: grid;
    grid-gap: 1.5em;
    grid-template-columns: 1fr;
    ${minQuery('lg')} {
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
    div.col--1 {
        h1 {
            max-width: 20rem;
            margin-bottom: 0.5em;
        }
        p {
            max-width: 26em;
            letter-spacing: -0.02em;
            color: #363535;
            line-height: 180%;
            font-size: 1.2rem;
        }
    }
    div.col--2 {
        svg {
            font-size: 25rem;
        }
        display: flex;
        justify-content: center;
    }

`
