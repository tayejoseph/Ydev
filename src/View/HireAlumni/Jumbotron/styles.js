import Styled from 'styled-components'
import { HireJumbotron } from '../../../assets/svgImgs'
import { rem } from 'polished'

export default Styled.div`
    height: ${rem('843px')};
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
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
        max-width: 31.5rem;
    }
    h1 {
        color: #fff;
        font-size: 3rem;
        line-height: 120%;
        margin-bottom: 1em;
        font-weight: 900;
        span {
            color: #97B5E2;
        }
    }
    p {
        color: #B7B2B2;
        max-width: 35rem;
        font-size: 1.2rem;
        line-height: 150%;
        margin-bottom: 2em;
    }
    button {
        background: #fff;
        color: #4A4A4A;
        font-weight: 800;
        &:after {
          border: 0.4px solid #fff;
        }
    }
`
