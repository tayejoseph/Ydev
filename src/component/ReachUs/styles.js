import Styled, { css } from 'styled-components'
import { minQuery, maxQuery } from '../../helpers'

export default Styled.div`
    display: grid;
    grid-gap: 2em;
    padding: 2em 0px;
    ${minQuery('lg')} {
        grid-template-columns: 1fr 1fr;
        height: 30rem;
        align-items: center;
        padding-left: 10rem;
    }
    ${(props) =>
      props.withBackDrop === true &&
      css`
        position: relative;
        &:after {
          content: '';
          position: absolute;
          width: 100vw;
          left: 50%;
          top: 0px;
          height: 100%;
          transform: translateX(-50%);
          z-index: 1;
          background: #f6fdff;
        }
        * {
          z-index: 2;
          position: relative;
        }
      `}
    div.col--1 {
      display: flex;
      flex-direction: column;
      ${minQuery('lg')} {
        align-items: flex-end;
      }
      div.content--container {
        svg {
            font-size: 8rem;
            height: 3rem;
        }
        h1 {
            font-size: 1.9rem;
            font-weight: 700;
            margin-bottom: 0.5em;
        }
        p {
            line-height: 187.1%;
            font-size: 1.1rem;
            letter-spacing: -0.04em;
            color: #606063;
            font-weight: 300;
            max-width: 30rem;
            margin-bottom: 1.2em;
        }
        div.btn--group {
            display: flex;
            grid-gap: 2em;
            button:last-of-type {
              background: #fff!important;
            }
        }
      }
    }
    div.col--2 {
        display: flex;
        justify-content: center;
        ${minQuery('lg')} {
          justify-content: flex-end;
        }
        ${maxQuery('lg')} {
          img {
            max-width: 20rem;
          }
        }
    }
`
