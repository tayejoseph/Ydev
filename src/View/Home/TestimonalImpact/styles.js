import Styled from 'styled-components'
import { minQuery } from '../../../helpers'

export default Styled.div`
    padding: 3em 0px;
    section.section--testimonials {
        position: relative;
        header {
            text-align: center;
            margin-bottom: 2em;
            p {
                margin: 1em 0px;
            }
            svg {
                font-size: 5rem;
            }
        }
            div.action--container {
                width: 80vw;
                position: absolute;
                top: 50%;
                z-index: 44;
                height: 3rem;
                button {
                &.action--btn {
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    cursor: pointer;
                    height: 3rem;
                    position: absolute;
                    z-index: 99;
                    width: 3rem;
                    background: #fff;
                    filter: drop-shadow(0px 5.36842px 12.0789px rgba(0, 0, 0, 0.12));
                    transform: matrix(-1, 0, 0, 1, 0, 0);
                    svg {
                        font-size: 2rem;
                        stroke-width: 1rem;
                    }
                }
                &.action--right {
                    transform: translateX(60vw);
                }

            }
        }
        div.testimonial--container {
            display: flex;
            grid-gap: 2em;
            padding-top: 2em;
            overflow-x: auto;
            width: 80vw;
            height: 40rem;
            position: relative;
            ${({ theme }) => theme.mixins.hideScrollBar};
     
            div.test--item {
                background: #F2FCFF;
                box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
                border-radius: 15px;
                width: 20rem;
                padding: 1.5em;
                display: flex;
                height: 30rem;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                flex-shrink: 0;
                text-align: center;
                &:nth-child(odd) {
                    background: #051A26;
                    border-radius: 15px;
                    * {
                        color: #FFFFFF;
                    }
                }
                &:last-of-type {

                }
                img {
                    margin-bottom: 1.5em;
                }
                h3 {
                    font-size: 1rem;
                    font-weight: 400;
                }
                p.text-description {
                    font-size: 0.95rem;
                }
                footer {
                    div.logo--container {
                        height: 3rem;
                        position: relative;
                        svg {
                            position: absolute;
                            left: 50%;
                            transform: translateX(-50%);
                            top: -0.3em;
                            font-size: 10rem;
                        }
                    }
                }

                &:nth-child(6) {
                    svg {
                        font-size: 7rem!important;
                        top: -0.2em!important;
                    }
                }
                &:nth-child(7) {
                    svg {
                        font-size: 6rem!important;
                        top: -0.2em!important;
                    }
                }
            }
        }
    }
    section.section--impacts {
        header {
            text-align: center;
            svg {
                font-size: 5rem;
            }
            p {
                max-width: 30rem;
                margin: 1em auto;
            }
        }
        div.pallet--container {
            display: grid;
            margin-top: 3em;
            padding-bottom: 3em;
            flex-wrap: wrap;
            ${minQuery('sm')} {
                grid-template-columns: repeat(2, 1fr);
            }
            ${minQuery('md')} {
                grid-template-columns: repeat(3, 1fr);
            }
            ${minQuery('lg')} {
                grid-template-columns: repeat(4, 1fr);
            }
            div.pallet--item {
                white-space: pre;
                text-align: center;
                height: 6rem;
                border: 1px solid #DDDDDD;
                display: flex;
                align-items: center;
                justify-content: center;
                p {
                    line-height: 110%;
                    font-size: 1.2rem;
                    ::first-line {
                        font-weight: 600;
                    }
                }
            }
        }
    }
`
