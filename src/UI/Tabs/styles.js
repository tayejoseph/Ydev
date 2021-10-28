import Styled from 'styled-components'
import { maxQuery } from '../../helpers'

export default Styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;
  nav {
    h3.nav--title {
      color: #050402;
      margin-bottom: 0.8em;
      font-size: 1.1rem;
      font-weight: 600;
    }
    a {
      display: block;
      font-size: 1.1rem;
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
        }
      }
    }
    
  }
        
`
