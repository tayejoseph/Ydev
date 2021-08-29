import Styled from 'styled-components'

export default Styled.div`
    section.section--testimonials {
        padding: 3em 0px;
        header {
            text-align: center;
            svg {
                font-size: 5rem;
                margin-bottom: 0.2em;
            }
            h1 {
                margin-bottom: 0.5em;
            }
            p {
                font-size: 1rem;
            }
        }
        div.action--container {
            position: relative;
            button {
                position: absolute;
                top: 12rem;
                z-index: 4;
                background: #fff;
                padding: 0.5em;
                border-radius: 50%;
                width: 3rem;
                height: 3rem;
                display: flex;
                align-items: center;
                justify-content: center;
                filter: drop-shadow(0px 5.36842px 12.0789px rgba(0, 0, 0, 0.12));
                .icon {
                    color: #302E2E;
                    font-size: 4rem;
                    stroke-width: 0.3em;
                }
                &.left--btn {
                    transform: translateX(-50%);
                }
                &.right--btn {
                    right: 0px;
                }
            }
        }
        div.grid--container {
            display: flex;
            position: relative;
            grid-gap: 3em;
            width: 82vw;
            /* background: pink; */
            overflow-x: auto;
            margin-top: 3em;
            ${({ theme }) => theme.mixins.hideScollbarHorizontal};
            div.grid--item {
                border-radius: 15px;
                background: #051A26;
                display: flex;
                padding: 1.5em 2em;
                flex-shrink: 0;
                height: fit-content;
                width: 20rem;
                flex-direction: column;
                text-align: center;
                div.img--container {
                    width: 6rem;
                    height: 6rem;
                    border-radius: 50%;
                    margin: 0 auto;
                    margin-bottom: 1.5em;
                }
                p {
                    color: #FFFFFF;
                    font-size: 0.85rem;
                    line-height: 160%;
                }
                h3 {
                    color: #FFFFFF;
                    font-size: 1rem;
                    font-weight: 500;
                    max-width: 90%;
                    margin: 0 auto;
                    margin-top: 0.9em;
                }
                svg {
                    margin: 0 auto;
                    margin-top: 0.25em;
                    font-size: 5rem;
                }
                 &:nth-child(even) {
                    background: #F2FCFF;
                    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
                    p, h3 {
                        color: #050402;
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
                margin-bottom: 0.25em;
            }
            p {
                font-size: 1rem;
                max-width: 25rem;
                margin: 0 auto;
                margin-top: 1em;
            }
        }
        div.grid--container {
            border-radius: 7px;
            display: grid;
            margin: 3em 0px;
            margin-bottom: 4em;
            grid-template-columns: repeat(4, 1fr);
            div.grid--item {
                border: 0.5px solid #DDDDDD;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                height: 8rem;
                cursor: pointer;
                position: relative;
                &.span--item {
                    grid-row: 1/3;
                    /* height: 15rem; */
                }
                svg {
                    font-size: 2.5rem;
                    position: absolute;
                    top: 0.5em;
                    left: 0.5em;
                }
                h2 {
                    font-size: 1.2rem;
                    font-weight: 300;
                    line-height: 130%;
                    color: #2D2A2A;
                }
                &:hover {
                    background: #051A26;
                    border: 0.5px solid #051A26;
                    h2 {
                        color: #FFFFFF;
                    }
                }
            }
        }
    }
`
