import Styled from 'styled-components'

export default Styled.div`
    padding: 3em 0px;
    header {
        text-align: center;
        svg {
            font-size: 5rem;
        }
        h1 {
            margin-top: 0.5em;
            font-weight: 700;
            margin-bottom: 0.5em;
            color: #050402;
        }
        p {
            max-width: 50rem;
            margin: 0 auto;
        }
    }
    div.grid--container {
        margin: 3em auto;
        max-width: 55rem;
        width: 80%;
        div.podcast--item {
            display: grid;
            background: #FFFFFF;
            padding: 1em 0.5em;
            box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.04);
            grid-template-columns: auto auto;
            justify-content: space-between;
            h3 {
                font-weight: 600;

            }
            &:not(:last-of-type) {
                margin-bottom: 1em;
            }
            a {
                cursor: pointer;
                font-weight: 400;
                color: ${({ theme }) => theme.primary};
                &:hover, &:focus {
                    text-decoration: underline;
                    
                }
                img {
                    width: 5rem;
                }
            }
            &:first-of-type {
                img {
                    width: 8rem;
                }
            }
        }
    }
`
