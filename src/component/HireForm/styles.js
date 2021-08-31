import Styled from 'styled-components'

export default Styled.div`
    div.modal--container {
        width: 40rem;
        form {
            padding: 1.5em 2em;
            /* max-width: 90%; */
            max-height: 60vh;
            overflow-y: auto;
            ${({ theme }) => theme.mixins.scrollbar};
            margin: 0 auto;
            div.select--container {
                h3 {
                    font-size: 1rem;
                    margin-bottom: 0.8em;
                }
                label {
                    input {
                        margin-right: 1em;
                    }
                }
            }
            footer {
                div.select--container {
                    label {
                        font-size: 0.9rem;
                    }
                }
            }
        }
    }
`
