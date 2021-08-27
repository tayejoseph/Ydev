import Styled from 'styled-components'
import { maxQuery, minQuery } from '../../helpers'

export default Styled.div`
display: grid;
${minQuery('lg')} {
  grid-template-columns: 15rem 1fr;
}
grid-gap: 1.2em;
nav {
  h3.title--txt {
    margin-bottom: 1em;
    font-size: 1.1rem;
    font-weight: 600;
    
  }
  div.navigation--container {
    display: flex;
    flex-direction: column;
    ${maxQuery('<lg')} {
      flex-direction: row;
      width: 90vw;
      grid-gap: 2em;
      align-items: center;
      padding: 1em 0px;
      ${({ theme }) => theme.mixins.hideScollbarHorizontal};
    }
    button {
      background: transparent;
      border: none;
      color: #5C7787;
      opacity: 0.8;
      cursor: pointer;
      flex-shrink: 0;
      letter-spacing: -0.02em;
      padding: 0.25em 1em;
      font-size: 1rem;
      margin-bottom: 0.8em;
      display: flex;
      align-items: center;
      ${maxQuery('<lg')} {
        display: inline-flex;
        padding: 0px;
        margin: 0px;
      }
      &.active--tab, &:hover, &:focus {
        color: #051A26;
        outline: none;
        position: relative;
        font-weight: 500;
        ${minQuery('lg')} {
          &:after {
            content: "";
            position: absolute;
            width: 3px;
            background-color: #234151;
            left: 0px;
            height: 80%;
          }
        }
      }
    }
  }
}

div.tab--content {
}
  
        
`
