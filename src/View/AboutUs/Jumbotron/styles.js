import Styled from 'styled-components'
import { minQuery } from '../../../helpers'

export default Styled.div`
    display: grid;
    grid-gap: 2em;
    ${minQuery('lg')} {
        grid-template-columns: 1fr 1fr;
        height: 30rem;
        grid-gap: 2em;
        align-items: center;
    }
    div.col--1 {
        * {
            max-width: 30rem;
        }
        h2 {
            color: #2E88DB;
            margin-bottom: 1.5em;
            font-size: 1rem;
        }
        p {
            font-size: 1.1rem;
            line-height: 180%;
            margin-top: 1em;
            color: #363535;
        }
    }
    div.col--2 {
        
    }
`
