import Styled from 'styled-components'
import { homeJumbotronPattern } from '../../../assets/svgImgs'

export default Styled.div`
    padding: 3em 0px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: column;
     &:after {
        content: "";
        height: 100%;
        top: 0px;
        width: 100vw;
        z-index: 1;
        left: 50%;
        transform: translateX(-50%);
        background-size: 100vw;
        position: absolute;
        background-image: url(${homeJumbotronPattern});
        background-repeat: no-repeat;
        background-position: bottom;
    }
    * {
        position: relative;
        z-index: 2;
    }
    div.title--container {
        margin-bottom: 4em;
        svg {
            top: 0.25em;
            left: -0.2em;
        }
        h1 {
            font-size: 3rem;
            font-weight: 700;
            max-width: 25rem;
            line-height: 150%;
            text-align: center;
        }
    }
    form {
        position: relative;
        width: 22rem;
        background: #fff;
        button {
            background: transparent;
            position: absolute;
            border: none;
            transform: translateY(-50%);
            top: 50%;
            z-index: 3;
            .icon {
                font-size: 1.5rem;
                color: black;
            }

        }
        input {
            width: 100%;
            border: none;
            font-size: 1.4rem;
            padding-left: 1.5em;
            padding-bottom: 0.5em;
            border: none;
            outline: none;
            background-color: #fff;
            font-weight: 300;
            border-bottom: 2px solid #051A26;
            &::placeholder {
                color: #737475;
            }
        }
    }

`
