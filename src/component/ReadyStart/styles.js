import Styled from 'styled-components'

export default Styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3em 0px;
  padding-bottom: 3.5em;
  flex-direction: column;
  &:after {
    content: "";
    position: absolute;
    width: 100vw;
    left: 50%;
    top: 0px;
    height: 100%;
    transform: translateX(-50%);
    z-index: 1;
    background-color: #F2FCFF;
  }
  * {
    position: relative;
    z-index: 2;
  }
  svg {
    font-size: 6rem;
    height: 3rem;
  }
  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    text-align: center;
    margin: 0.7em 0px;
    margin-top: 0.5em;
    letter-spacing: -0.01em;
  }
  button {
    padding-right: 2.5em;
    padding-left: 2.5em;
  }
`
