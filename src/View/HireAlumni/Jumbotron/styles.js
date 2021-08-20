import Styled from 'styled-components'
import { HireJumbotron } from '../../../assets/svgImgs'
import { rem } from 'polished'

export default Styled.div`
    height: ${rem('843px')};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 3em;
    flex-direction: column;
    &:after {
        content: "";
        position: absolute;
        top: 0px;
        height: 100%;
        width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(${HireJumbotron});
        z-index: 1;
    }
    * {
        position: relative;
        z-index: 2;
        max-width: 32rem;
    }
    h1 {
        color: #fff;
        font-size: 3rem;
        margin-bottom: 1em;
    }
    p {
        color: #B7B2B2;
        font-size: 1.2rem;
        margin-bottom: 2em;
    }
`
