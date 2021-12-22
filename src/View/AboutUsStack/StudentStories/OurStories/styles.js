import Styled from 'styled-components'
import { minQuery, maxQuery } from '../../../../helpers'

export default Styled.div`
    padding-bottom: 5em;
    header.stories--header {
        margin-bottom: 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ${maxQuery('md')} {
            flex-direction: column;
        }
        h1 {
            font-weight: bold;
            font-size: 1.8rem;
            margin-bottom: 0.5em;
            text-align: center;
        }
    }
    div.tab--container {
        div.tab--ui {
            ${minQuery('>lg')} {
                grid-template-columns: 13rem 1fr;
            }
        }
        div.grid--container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            ${maxQuery('md')} {
                grid-template-columns: repeat(2, 1fr);
            }
            ${maxQuery('sm')} {
                grid-template-columns: 1fr;
            }
            grid-gap: 1em;
            row-gap: 1.5em;
            img {
                margin-bottom: 1em;
            }
            header {
                height: 5rem;
                h2 {
                    font-size: 1.1rem;
                    font-weight: 600;
                }
                h3 {
                    font-size: 1rem;
                    margin-bottom: 0.5em;
                }
            }
            p.detail {
                height: 7rem;
                width: 100%;
                overflow: hidden;
                font-size: 1rem;
                ${({ theme }) => theme.mixins.lineClamp(5)};
            }
        }
    }

`
