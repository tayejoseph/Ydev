import Styled from 'styled-components'

export default Styled.div`
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3em 0px;
        h1 {
            font-size: 2rem;
        }
    }
    div.content--container {
        padding-bottom: 3em;
        h1 {
            font-weight: 700;
            font-size: 1.6rem;
            margin-top: 1em;
            margin-bottom: 0.2em;
        }
        p {
            font-size: 1.1rem;
            line-height: 155%;
            letter-spacing: -0.02em;
            color: #2C2B2C;
        }
        ul {
            padding-left: 1.5em;
            li {
                letter-spacing: -0.02em;
                line-height: 180%;
            }
        }
    }
    div.reach--container {
        position: relative;
        &:after {
            content: "";
            position: absolute;
            background: #F6FDFF;
            height: 100%;
            top: 0px;
            width: 100vw;
            left: 50%;
            z-index: 1;
            transform: translateX(-50%);
        }
        * {
            position: relative;
            z-index: 2;
        }
    }
`
