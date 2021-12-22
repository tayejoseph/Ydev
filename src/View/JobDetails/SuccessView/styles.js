import Styled from 'styled-components'

export default Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 50vh;
    position: relative;
    &:after {
        content: "";
        position: absolute;
        top: 0px;
        width: 100vw;
        left: -50%;
        height: 100%;
    }
    h2 {
        font-size: 1.1rem;
        font-weight: 700;
    }
    p {
        margin: 1.5em 0px;
    }


`
