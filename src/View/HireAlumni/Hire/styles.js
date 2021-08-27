import Styled from 'styled-components'
import { maxQuery } from '../../../helpers'

export default Styled.div`
    h1 {
        font-weight: 700;
        font-size: 2rem;
        line-height: 145%;
    }
    p {
        font-size: 1.1rem;
    }
    section.section--skills {
        header {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 3em 0px;
            h1 {
                margin-bottom: 0.6em; 
                font-size: 2rem;
            }
            p {
                color: #4B4956;
                font-size: 1rem;
            }
        }
        div.grid--container {
            display: grid;
            grid-gap: 2em;
            justify-content: center;
            align-items: center;
            padding-bottom: 3em;
            margin-top: 1em;
            grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
            div.grid--item {
                max-width: 20rem;
                display: flex;
                margin: auto;
                flex-direction: column;
                align-items: center;
                text-align: center;
                div.img--container {
                    width: 12rem;
                    height: 12rem;
                    border-radius: 50%;
                    margin-bottom: 0.8em;
                }
                h1 {
                    margin-top: 0.5em;
                    margin-bottom: 0.5em;
                    font-size: 1.4rem;
                    color: #1C1B1B;
                    font-weight: 600;
                    letter-spacing: -0.01em;
                }
                p {
                    letter-spacing: -0.02em;
                    color: #2C2B2C;
                    font-size: 1rem;
                    width: 90%;
                    margin-top: 0.6em;
                    margin: 0 auto;
                    line-height: 150%;
                }
            }
        }
    }
    section.section--process {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 2em; 
        padding-top: 4em;
        justify-content: center;
        h1 {
            font-size: 2rem;
            margin-bottom: 0.5em;
        }
        button {
            margin: 0 auto;
            margin-top: 2.65em;
        }
    }
    section.section--hireProcess {
        display: grid;
        grid-gap: 2em;
        padding-bottom: 3em;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        div.grid--item {
            width: 20rem;
            margin: 0px auto;
            margin-top: 3em;
            header {
                hgroup {
                    display: flex;
                    grid-gap: 2em;
                    h1 {
                        font-size: 1.8rem;
                        color: #A5A5A5;
                        font-weight: 500;
                    }
                    svg {
                        font-size: 3rem;
                    }
                }
                h1.hire--title {
                    font-size: 1.1rem;
                    line-height: 130%;
                    height: 3rem;
                    font-weight: 600;
                    margin-bottom: 0.8em;
                    margin-top: 1em;
                    ${maxQuery('sm')} {
                        margin-top: 2em;
                        margin-bottom: 1em;
                    }
                }
            }
            p {
                font-size: 0.9rem;
            }
        }

    }
    section.section--company {
        h1 {
            text-align: center;
            max-width: 30rem;
            margin: 0 auto;
        }

    }
    section.section--hiring {
        header {
            padding: 2em 0px;
            text-align: center;
            display: flex;
            margin: 0 auto;
            flex-direction: column;
            h1 {
                max-width: 30rem;
                font-size: 2rem;
                font-weight: 800;
                margin: 0 auto;
                margin-bottom: 0.5em;
            }
            p {
                font-size: 1rem;
            }
        }
        div.grid--container {
            display: grid;
            grid-gap: 3em;
            grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
            padding: 2em 0px;
            div.grid--item {
                max-width: 20rem;
                margin: auto;
                display: flex;
                background: #F2FCFF;
                padding: 1em;
                padding-bottom: 0px;
                flex-direction: column;
                text-align: center;
                div.img--container {
                    margin: 0 auto;
                    margin-bottom: 1em;
                    height: 5rem;
                    width: 5rem;
                    border-radius: 50%;
                }
                p {
                    font-size: 0.9rem;
                    line-height: 160%;
                    font-weight: 300;
                    margin-bottom: 1em;
                }
                h3 {
                    font-size: 1rem;
                }
                svg {
                    font-size: 6rem;
                    height: 3rem;
                }
            }
        }
    }

`
