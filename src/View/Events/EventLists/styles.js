import Styled from 'styled-components'
import { minQuery, maxQuery } from '../../../helpers'

export default Styled.div`
    padding-bottom: 8em;
    margin-top: 0.5em;
    div.event--item {
        border-bottom: 1.2855px solid #CCCCCC;
        header {
            display: grid;
            grid-gap: 1.5em;
            ${minQuery('lg')} {
                grid-template-columns: 10rem 1fr auto;
                grid-gap: 0px;
            }
            align-items: center;
            padding: 3em 0px;
            cursor: pointer;
            h3 {
                font-size: 1.2rem;
                &:first-of-type {
                    line-height: 145.7%;
                    letter-spacing: -0.03em;
                    color: #7C8FF7;
                    font-weight: 400;
                    font-size: 1.1rem;
                }
            }

            a {
                font-size: 1.1rem;
                color: #7C8FF7;
                font-weight: 400;
                &:hover {
                    text-decoration: underline;
                }
            }
            div.title--container {
                display: flex;
                ${maxQuery('<lg')} {
                    margin: 0.5em 0px;
                    margin-bottom: 1em;
                }
                h1 {
                    font-size: 1.7rem;
                    max-width: 32rem;
                    font-weight: 300;
                    line-height: 150%;
                    display: flex;
                }
                .icon {
                    margin-top: 0.4rem;
                    margin-left: 0.5em;
                    font-size: 1.8rem;
                    flex-shrink: 0px;
                    color: #6D82F6;
                    transition: all 0.2s;
                    &.active {
                        transform: rotate(90deg);
                    }
                }
            }
        }
        div.content--container {
            ${minQuery('lg')} {
                padding-left: 10rem;
            }
            margin-top: -2em;
            max-width: 42rem;
            padding-bottom: 3em;
            p {
                font-size: 1.1rem;
                line-height: 180%;
                letter-spacing: -0.03em;
                color: #212121;
                font-weight: 300;
                margin-bottom: 2em;
            }
            img {

            }
        }
    }

`
