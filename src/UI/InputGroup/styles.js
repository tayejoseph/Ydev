import styled from 'styled-components'
import { rem } from 'polished'

export default styled.div.attrs({
  className: 'input--group',
})`
  width: 100%;
  margin-bottom: 1.5em;
  input:not([type='checkbox']),
  select,
  textarea {
    height: ${rem('48px')};
    width: 100%;
    background: transparent;
    border-radius: 4px;
    background: #ffffff;
    border: 1.02424px solid #e2e2e2;
    box-sizing: border-box;
    border-radius: 6.14546px;
    letter-spacing: 0.14px;
    padding: 0 1em;
    font-size: ${rem('14px')};
    font-weight: 400;
    color: #595f62;
    &:active,
    &:focus {
      outline: none;
      border: 1.4px solid ${({ theme }) => theme.primary};
    }
    &:invalid:not([value='']) {
      color: #222222;
      border: 1.5px solid #ff5e5e;
    }
  }

  input::placeholder {
    color: #595f62;
    font-size: ${rem('14px')};
    letter-spacing: 0.14px;
    font-weight: 300;
  }
  label {
    display: flex;
    align-items: center;
    font-weight: 300;
    letter-spacing: -0.02em;
    color: #2c2b2c;
    font-size: 1rem;
    display: flex;
    font-weight: 400;
    align-items: center;
    line-height: ${rem('20px')};
    margin-bottom: 0.5em;
    &.required--label {
      &:after {
        content: '*';
        display: block;
        margin-left: 0.25em;
        letter-spacing: -0.02em;
        color: #f15b2a;
      }
    }
  }
  textarea {
    height: ${rem('108px')};
    padding: 1em;
    resize: none;
    &:invalid:not([value='']) {
      color: #222222;
      border: 1.5px solid #ff5e5e;
    }
  }
  p.error-msg {
    text-align: left;
    margin: 0px;
    margin-top: 0.5em;
    font-size: ${rem('13px')};
    letter-spacing: ${rem('0.13px')};
    color: #ff5e5e;
    opacity: 1;
  }
`
