import Styled from 'styled-components'

export default Styled.div`
    padding: 3em 0px;
    position: relative;
     &:after {
        content: "";
        height: 100%;
        position: absolute;
        top: 0px;
        width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        background: #F6FDFF;
        z-index: 1;
    }
    * {
        position: relative;
        z-index: 2;
    }
    
`
