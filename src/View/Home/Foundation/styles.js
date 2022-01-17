import Styled from 'styled-components'
import { minQuery } from '../../../helpers'

export default Styled.div`
    section.section--top {
        display: grid;
        grid-gap: 2em;
        padding-top: 4.5em;
        ${minQuery('lg')} {
            grid-template-columns: 1fr 1fr;
            grid-gap: 3em;
            align-items: center;
            img {
                width: 30rem;
            }
        }
        div.col--2 {
            max-width: 32rem;
            h1 {
                margin-bottom: 0.7em;
                max-width: 16rem;
                line-height: 120%;
            }
            p {
                margin-bottom: 1.5em;
            }
        }
    }
`
