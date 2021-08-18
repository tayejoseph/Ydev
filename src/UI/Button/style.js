import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export default styled.button`
  &:disabled {
    cursor: no-drop;
  }
  cursor: pointer;
  outline: none;
  ${(props) => css`
    padding: 0.6em 1.8em;
    font-size: 0.9rem;
    border-radius: 3px;
    font-weight: 600;
    user-select: none;
    width: ${props.full ? '100%' : 'fit-content'};
    display: ${props.full ? 'block' : 'inline-block'};
    ${
      props.primary &&
      css`
        border: 2px solid ${props.theme.secondary};
        background-color: ${({ theme }) => theme.secondary};
        color: #fff;
        z-index: 3;
        border-radius: 7px;
        position: relative;
        &:after {
          content: '';
          position: absolute;
          height: 100%;
          border-radius: 7px;
          top: 20%;
          left: 10%;
          width: 96%;
          background: pink;
          background: transparent;
          z-index: -2;
          border: 0.4px solid ${props.theme.secondary};
        }
        &:hover,
        &:focus {
          background: ${({ theme }) => theme.primary};
          border-color: ${({ theme }) => theme.primary};
          color: #fff;
          outline: none;
          &:after {
            border: 0.4px solid ${props.theme.primary};
          }
        }
        &:disabled {
          background: ${({ theme }) => theme.disabled}!important;
          border-color: ${({ theme }) => theme.disabled}!important;
          color: #fff !important;
        }
      `
    }
    ${
      props.secondary &&
      css`
        border: 1px solid !important;
        border-color: ${({ theme }) => theme.secondary};
        background-color: transparent !important;
        color: ${props.theme.secondary};
        &:hover,
        &:focus {
          background: transparent !important;
          border-color: ${({ theme }) =>
            lighten(0.1, theme.secondary)}!important;
          color: ${({ theme }) => lighten(0.1, theme.secondary)}!important;
        }
        &:disabled {
          background: transparent !important;
          color: ${props.theme.disabled}!important;
        }
      `
    }
    ${
      props.tertiary &&
      css`
        background-color: transparent;
        border-color: transparent;
        color: ${({ theme }) => theme.secondary};
        &:hover,
        &:focus {
          border-color: transparent !important;
          background-color: transparent !important;
          color: ${({ theme }) => theme.secondary}!important;
        }
      `
    }
    ${
      props.plain &&
      css`
        background-color: transparent;
        border-color: transparent;
        color: #000000;
        padding: 0px;
        &:hover,
        &:focus {
          color: #000000;
          border-color: transparent !important;
          background-color: transparent !important;
        }
      `
    }
    ${
      props.icon &&
      css`
        padding: 0px;
        background: transparent;
        border: none;
        .icon {
          font-size: 1.2em;
          margin: 0px;
          padding: 0px;
        }
        &:hover,
        &:focus {
          background: transparent;
          border: none;
          outline: none;
        }
        &:disabled {
          background: transparent;
          border: none;
          color: #fff;
          outline: none;
        }
      `
    }
    &.icon--btn__hover {
        &:hover,
        &:focus {
          color: #fff;
          background-color: ${({ theme }) => lighten(0.1, theme.primary)};
        }
    }

       
    /* iconRight */
    ${
      props.iconRight &&
      css`
        display: flex;
        align-items: center;
        .icon {
          margin-right: 0.3em;
          font-size: 1.2em;
        }
      `
    }

  /* IconLeft */
    ${
      props.iconLeft &&
      css`
        display: flex;
        align-items: center;
        .icon {
          margin-left: 0.3em;
          font-size: 1.2em;
        }
      `
    }

     &.btn--money {
        padding: 0.2em 0.3em;
        background: #E2FFEC;
        .icon {
            color: #47C479;
        }
    }
    &.btn--edit {
        padding: 0.2em 0.3em;
        background: #E2EDFF;
        border: 1px solid #E2EDFF;
        .icon {
            color: #4187FF;
        }
    }
    &.btn--delete {
        padding: 0.2em 0.3em;
        background: #FFE9E9;
        color: #FF5E5E;
        border: 1px solid #FFE9E9;
        .icon {
            color: #FF5E5E;
        }
    }
    &.btn--copy {
        padding: 0.2em 0.3em;
        background: #F9F6FB;
        color: #855AAF;
        border: 1px solid #F9F6FB;
        .icon {
            color: #855AAF;
        }
    }
  /* notification */
  &.notification--badge {
    position: relative;
    &:after {
      content: "";
      top: -2px;
      right: 0%;
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #FF5E5E;
      border: 1.6px solid #fff;

    }
  }
    `}
`
