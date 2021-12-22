import Styled from 'styled-components'

export default Styled.div`
    div.modal--container {
        width: 40rem;
    }
    h2.modal--title {
        font-size: 1.2rem!important;
    }
    form {
        padding: 2em 2em;
        padding-bottom: 0px;
    }
    header.component--header {
        svg {
            font-size: 6rem;
        }
    }
    footer {
        margin-bottom: 1.5em;
        h3 {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 1em;
        }
        label {
            display: flex;
            cursor: pointer;
            align-items: center;
            grid-gap: 1em;
            font-size: 1rem;
            &:not(:last-of-type) {
                margin-bottom: 0.5em;
            }
        }
    }
`
