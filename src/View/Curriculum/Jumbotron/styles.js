import Styled from 'styled-components'
import { curriculumPattern } from '../../../assets/svgImgs'
import { minQuery, maxQuery } from '../../../helpers'

export default Styled.div`
    display: grid;
    grid-gap: 2em;
    position: relative;
    &:after {
        content: "";
        height: 100%;
        top: 0px;
        width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        background-size: 100vw;
        position: absolute;
        background-image: url(${curriculumPattern});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left bottom;
        z-index: 1;
    }
    * {
        position: relative;
        z-index: 2;
    }
    ${minQuery('md')} {
        grid-template-columns: 1fr 1fr;
        align-items: center;
        height: 25rem;
    }
    div.col--1 {
        h1 {
            font-size: 2.6rem!important;
        }
        p {
            margin-top: 2.25em;
            margin-bottom: 2em;
            max-width: 25rem;
            font-size: 1.1rem;
        }

    }
    div.col--2 {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        ${maxQuery('<lg')} {
            justify-content: center;
            margin-bottom: 4em;
            img {
                max-width: 18rem;
            }
        }
    }

`
