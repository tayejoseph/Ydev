import Styled from 'styled-components'
import { maxQuery, minQuery } from '../../../helpers'

export default Styled.div`
    div.modal--container {
        display: grid;
        position: relative;
        grid-gap: 1.5em;
        padding: 3em 0px;            
        background: linear-gradient(134.82deg, rgba(132, 147, 118, 0.35) 47.69%, rgba(58, 141, 188, 0.35) 64.87%), linear-gradient(139.52deg, rgba(224, 77, 77, 0.32) 23%, rgba(0, 0, 0, 0) 55.61%), #3A8DBC;
    }
    div.modal-row {
        padding: 0px 3em;
        div.col-1 {
            flex: 1;
            height: 100%;
            div.header-row {
                display: grid;
                grid-gap: 1em;
                justify-content: space-between;
                ${minQuery('lg')} {
                    grid-template-columns: auto auto;
                }
            }
            h1 {
                color: #fff;
                font-size: 2.3rem;
                font-weight: 800;
            }
            p {
                margin: 1em 0px;
                color: #ECECEC;
            }
            ol {
                margin: 0px;
                padding: 0px;
                margin-bottom: 2em;
                list-style: none;
                li {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    grid-gap: 1em;
                    svg {
                        font-size: 1.3rem;
                    }
                    &:not(:last-of-type) {
                        margin-bottom: 0.6em;
                    }
                }
            }
            div.btn-group {
                display: grid;
                grid-gap: 1.5em;
                margin-top: 1em;
                justify-content: space-between;
                width: 100%;
                ${minQuery('lg')} {
                    grid-template-columns: 1fr 1fr;
                }
            }
            button {
                background-color: #fff;
                border-color: #fff;
                color: #548A9D!important;
                &:after {
                    border-color: #fff;
                }
            }
        }
        div.col--2 {
            text-align: right;
            ${maxQuery('lg')} {
                display: none;
            }
            svg {
                font-size: 8rem;
            }
        }
    }
`
