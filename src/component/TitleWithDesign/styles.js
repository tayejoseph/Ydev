import Styled from 'styled-components'
import { maxQuery } from '../../helpers'

export default Styled.div`
    position: relative;
    svg {
        position: absolute;
        top: -0.3em;
        font-size: 1.5rem;
        left: -0.8em;
        z-index: 1;
    }
    * {
        position: relative;
        z-index: 2;
    }
    h1 {
        font-size: 2.5rem!important;
        font-weight: 800!important;
        ${maxQuery('sm')} {
            font-size: 2rem!important;
        }
    }

`
