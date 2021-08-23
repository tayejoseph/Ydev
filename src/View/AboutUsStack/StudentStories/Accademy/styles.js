import Styled from 'styled-components'
import { academyPattern } from '../../../../assets/svgImgs'
import { maxQuery } from '../../../../helpers'

export default Styled.div`
    padding-top: 5.5em;
    position: relative;
    &:after {
        content: "";
        height: 100%;
        top: 0px;
        width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        background-repeat: no-repeat;
        background-size: 30rem;
        background-position: left -2em;;
        background-image: url(${academyPattern});
        z-index: 1;
    }
    * {
        z-index: 2;
        position: relative;
    }
    h1 {
        max-width: 40rem;
        font-size: 2rem;
        font-weight: 600;
        line-height: 130%;
    }

    div.grid--container {
        display: grid;
        grid-gap: 2em;
        margin-bottom: 4em;
        margin-top: 3em;
        div {
            height: 4rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
                font-size: 12rem;
            }
        }
        grid-template-columns: repeat(4, 1fr);
        ${maxQuery('md')} {
            grid-template-columns: repeat(3, 1fr);
        }
    }
`
