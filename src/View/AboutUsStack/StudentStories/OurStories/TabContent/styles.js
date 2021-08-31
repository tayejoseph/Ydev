import Styled from 'styled-components'
import { maxQuery } from '../../../../../helpers'

export default Styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5em;
    ${maxQuery('lg')} {
        grid-template-columns: repeat(2, 1fr);
    }
    ${maxQuery('sm')} {
        grid-template-columns: 1fr;
    }
    div.grid--item {
        padding-bottom: 0.5em;
        div.img--container {
            margin-bottom: 0.5em;
            img {
                width: 100%;
                height: 100%;
            }
        }
        h3 {
            font-size: 1rem;
            font-weight: 600;
            ${({ theme }) => theme.mixins.lineClamp(1)};
        }
        h4 {
            font-size: 0.9rem;
            ${({ theme }) => theme.mixins.lineClamp(1)};

        }
        p {
            margin-top: 0.5em;
            font-size: 0.9rem;
            ${({ theme }) => theme.mixins.lineClamp(5)};
        }
    }
    `
