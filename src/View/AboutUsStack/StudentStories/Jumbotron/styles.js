import Styled from 'styled-components'
import { minQuery, maxQuery } from '../../../../helpers'

export default Styled.div`
    display: grid;
    grid-gap: 2em;
    ${minQuery('lg')} {
        grid-template-columns: 1fr 1fr;
        height: 30rem;
        grid-gap: 2em;
        align-items: center;
    }
    ${maxQuery('lg')} {
        padding-top: 6em;
    }
    div.col--1 {
        ${minQuery('>lg')} {
            * {
                max-width: 30rem;
            }
        }
        h2 {
            color: #2E88DB;
            margin-bottom: 1.5em;
            font-size: 1rem;
            font-weight: 600;
        }
        p {
            font-size: 1.1rem;
            line-height: 180%;
            margin-top: 1em;
            color: #363535;
        }
    }
    div.col--2 {
        ${maxQuery('>lg')} {
            text-align: center;
            img {
                max-width: 25rem;
            }
        }
        ${maxQuery('sm')} {
            img {
                width: 100%;
            }
        }
    }
`
