import Styled from 'styled-components'
import { lighten } from 'polished'

export default Styled.div`
    form {
        width: 100%;
        max-width: 40rem;
        footer {
            p {
                margin-top: -0.5em;
                margin-bottom: 1em;
                font-size: 1rem;
                letter-spacing: -0.02em;
                color: #7E7A7E;
                a {
                    color: ${({ theme }) => theme.primary};
                    &:hover, &:active, &:focus {
                        text-decoration: underline;
                        outline: none;
                        color: ${({ theme }) => lighten(0.1, theme.primary)};
                    }
                }
            }
        }
    }
`
