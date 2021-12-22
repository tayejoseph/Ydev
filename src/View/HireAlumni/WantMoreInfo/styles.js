import Styled from 'styled-components'

export default Styled.div`
    position: relative;
    padding: 2em 0px;
    padding-bottom: 5em;
    &:after {
        content: "";
        position: absolute;
        height: 100%;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        background: #FBFEFF;
        width: 100vw;
        z-index:1;
    }
    * {
        position: relative;
        z-index: 2;
    }
    header.component--header {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        margin-bottom: 4em;
        svg {
            font-size: 4rem;
        }
        h1 {
            font-size: 1.8rem;
            font-weight: 700;
            margin: 0.5em 0px;
        }
        p {
            font-size: 1rem;
            margin-top: 0.25em;
        }
        a {
            color: ${({ theme }) => theme.primary};
            text-decoration: none;
            font-weight: 400;
            &:hover, &:active {
                text-decoration: underline;
            }
        }
    }
`
