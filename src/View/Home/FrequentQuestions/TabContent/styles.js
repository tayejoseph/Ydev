import Styled from 'styled-components'

export default Styled.div`
    div {
        background: #FFFFFF;
        margin-bottom: 1.5em;
        box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.04);
        header {
            display: flex;
            cursor: pointer;
            justify-content: space-between;
            align-items: center;
            padding: 1.5em 2em;
            h3 {
                font-size: 1.1rem;
                max-width: 80%;
            }
            button {
                .icon {
                    font-size: 1.5rem;
                }
            }
        }
        p.content--container {
            padding: 1.5em 2em;
            padding-top: 0.5em;
            font-weight: 300;
            font-size: 1rem;
            line-height: 150%;
        }
    }
`
