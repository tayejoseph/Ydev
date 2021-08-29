import Styled from 'styled-components'
import { minQuery } from '../../../helpers'

export default Styled.div`
    padding: 3em 0px;
    header {
        text-align: center;
        margin-bottom: 1.5em;
        svg {
            font-size: 5rem;
        }
        h1 {
            font-size: 2rem;
            margin-top: 0.5em;
            font-weight: 700;
            margin-bottom: 0.5em;
            color: #050402;
        }
        p {
            font-size: 1rem;
            max-width: 50rem;
            margin: 0 auto;
        }
    }
    div.grid--container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        grid-gap: 2.5em;
        ${minQuery('lg')} {
            grid-gap: 1em;
        }
        img {
            width: 387.63px;
            height: 343.15px;
        }
        div.grid--item {
            h1 {
                font-size: 1.1rem;
                margin-top: 0.2em;
                margin-bottom: 0.25em;
                font-weight: 600;
            }
            p {
                font-size: 0.9rem;
                color: #393839;
            }
        }
    }
    footer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 4em;
        a {
            color: #000;
            font-weight: 500;
            font-size: 0.9rem;
            cursor: pointer;
            padding: 0.6em 1.4em;
            background: #FFFFFF;
            border: 1.18081px solid #2298BB;
            border-radius: 7px;
        }
    }
`
