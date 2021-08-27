import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { maxQuery } from '../helpers'

export default createGlobalStyle`
    ${normalize};
    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
    }
      
    h1, h2, h3, h4, p {
      margin: 0px;
      padding: 0px;
    }
    html, body {
      font-family: ${({ theme }) => theme.fontFamily};
      color: ${({ theme }) => theme.textColor}!important; 
      background: ${({ theme }) => theme.bgColor};    
      font-size: 1rem;
      font-weight: 300;


      ${maxQuery('lg')} {
        font-size: 95%;
      }
      ${maxQuery('sm')} {
        font-size: 80%;
      }
    }
    
    html { 
      overflow-y: overlay;
      overflow-x: hidden;
      body {   
        &.disable--scroll {
          overflow: hidden;
        }
      }
      p {
        line-height: 140%;
      }
      hr {
        border: none;
        border-bottom: 1px solid #E6E6E6;
      }
      img {
        max-width: 100%;
        max-height: 100%;
      }
      div.app--content {
        width: 90%;
        padding-top: ${({ theme }) => theme.dimensions.navHeight};
        ${maxQuery('lg')} {
          padding-top: ${({ theme }) => theme.dimensions.navHeightMobile};
        }
        max-width: ${({ theme }) => theme.dimensions.maxWidth};
        margin: 0 auto;
      }
    }


    /* utilities */
    .u--typo__title {
      font-size: 3rem;
      line-height: 110%;
      color: #000000;
      font-weight: 800;
    }

    .u--typo__title2 {
      font-size: 1.9rem;
      color: #000000;
      font-weight: 700;
    }
    .centered--txt {
      text-align: center;
    }

    .u--color__primary {
      color: ${({ theme }) => theme.primary};
    }
    .u--badge--green {
        background: #D3F8EF;
        color: #FF6C00;
    }
      .u--badge--blue {
        background: #CCE7FF;
        color: #2E9BFF;
    }
      .u--badge--yello {
        color: #999400;
    }
`
