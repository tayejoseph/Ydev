import { css } from 'styled-components'

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
  maxWidth: css`
    width: 90%;
    max-width: ${({ theme }) => theme.dimensions.maxWidth};
    margin: 0 auto;
  `,

  primaryBg: css`
    position: relative;
    &:after {
      content: '';
      position: absolute;
      top: 0px;
      height: 100%;
      width: 100vw;
      left: 50%;
      transform: translateX(-50%);
      background-color: #f2fcff;
      z-index: 1;
    }
    * {
      position: relative;
      z-index: 2;
    }
  `,
  scrollbar: css`
    & {
      overflow-y: overlay;
      scrollbar-width: thin;
      scrollbar-color: #eaeaea;
      margin-right: 0.3em;
      margin-top: 0.5em;
      margin-bottom: 0.5em;
    }
    &::-webkit-scrollbar {
      width: 8px;
      height: 80%;
      border-radius: 40px;
    }
    &::-webkit-scrollbar-track {
      background: #eaeaea;
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: #c4c4c4;
      border-radius: 40px;
      background: transparent;
    }
    &:hover {
      &::-webkit-scrollbar-track {
        background: #eaeaea;
      }
      &::-webkit-scrollbar-thumb {
        background: #c4c4c4;
        border-radius: 40px;
      }
    }
  `,
}

export default mixins
