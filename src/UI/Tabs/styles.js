import Styled from 'styled-components'
import { maxQuery } from '../../helpers'

export default Styled.div`
  display: grid;
  grid-template-columns: 12rem 1fr;
  ${maxQuery('md')} {
    grid-template-columns: 1fr;
  }
  grid-gap: 2em;
  nav.tab--nav {
    h3.nav--title {
      color: #050402;
      margin-bottom: 1em;
      font-size: 1.1rem;
      font-weight: 600;
    }
    div.nav--lists {
      ${maxQuery('md')} {
        display: flex;
        width: 90vw;
        overflow-x: auto;
        ${({ theme }) => theme.mixins.hideScrollBar};
      }
      div.tab--item {
        flex-shrink: 0;
      }
      button {
        display: block;
        background: transparent;
        border: none;
        flex-shrink: 0;
        width: fit-content;
        cursor: pointer;
        padding: 0px;
        font-size: 1.05rem;
        color: #5C7787;
        font-weight: 500;
        padding-left: 1em;
        margin-bottom: 1em;
        &.active {
          color: #051A26;
          position: relative;
          &:before {
            content: "";
            position: absolute;
            width: 0.25rem;
            background: #051A26;
            height: 80%;
            top: 50%;
            transform: translateY(-50%);
            left: 0px;
            ${maxQuery('md')} {
              
            }
          }
        }
      }
    }
    
  }
        
`
