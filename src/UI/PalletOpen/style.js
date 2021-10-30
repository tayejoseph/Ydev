import Styled from 'styled-components'

export default Styled.div`
    background: #FFFFFF;
    box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.04);
    &:not(:last-of-type) {
        margin-bottom: 2em;
    }
    header {
        display: flex;
        margin: 0px!important;
        padding: 0.5em 1em;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        font-size: 1rem;
        user-select: none;
        .icon {
            font-size: 1.6rem!important;
        }
    }
    div.detail--container {
        padding: 1em;
        font-size: 1rem;

    }
`
