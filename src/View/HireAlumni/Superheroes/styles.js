import Styled from 'styled-components'

export default Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: pink;
    padding: 4em 0px;
    padding-top: 2em;
    position: relative;
    &:after {
        content: "";
        position: absolute;
        width: 100vw;
        left: 50%;
        top: 0px;
        position: absolute;
        transform: translateX(-50%);
        height: 100%;
        background: #F2FCFF;
        z-index: 1;
    }
    * {
        position: relative;
        z-index: 2;
    }
    svg {
        font-size: 7rem;
        height: 2rem;
    }
    h1 {
        font-size: 2rem;
        margin: 1em 0px;
    }
    p {
        font-size: 1rem;
        margin-bottom: 1.5em;
    }
`
