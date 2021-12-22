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
  lineClamp: (lineNo) => css`
    display: -webkit-box;
    -webkit-line-clamp: ${lineNo};
    -webkit-box-orient: vertical;
    overflow: hidden;
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
  hideScrollBar: css`
    &::-webkit-scrollbar {
      width: 0; /* Remove scrollbar space */
      background: transparent; /* Optional: just make scrollbar invisible */
    }
    /* Optional: show position indicator in red */
    &::-webkit-scrollbar-thumb {
      background: transparent;
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
