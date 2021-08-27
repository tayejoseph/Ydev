import Styled from 'styled-components'

export default Styled.div`
    section.section--questions {
        padding: 3em 0px;
        padding-bottom: 5em;
        header.question--header {
            text-align: center;
            svg {
                font-size: 4rem;
            }
            h1 {
                font-size: 2rem;
                margin-top: 0.5em;
                font-weight: 700;
            }
            p {
                font-size: 1rem;
                margin-bottom: 4.5em;
                margin-top: -0.5em;
                a {
                    text-decoration: none; 
                    color: ${({ theme }) => theme.primary};
                    &:hover, &:focus, &:active {
                        text-decoration: underline;
                    }
                }
                svg {
                    transform: translateY(100%);
                    fill: black;
                    font-size: 3rem;
                }
            }
        }
    }
    section.section--ready {
        padding: 1em 0px;
        padding-bottom: 3em;
        text-align: center;
        position: relative;
        &:after {
            content: "";
            position: absolute;
            top: 0px;
            width: 100vw;
            height: 100%;
            left: 50%;
            transform: translateX(-50%);
            background: #F2FCFF;
            z-index: 1;
        }
        * {
            z-index: 2;
            position: relative;
        }
        svg {
            font-size: 6rem;
        }
        h1 {
            font-size: 2.5em;
            font-weight: 700;
            margin-top: -0.6em;
            margin-bottom: 0.9em;
        }
    }

`
