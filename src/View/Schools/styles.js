import Styled from 'styled-components'
import { minQuery, maxQuery } from '../../helpers'
import { CustomBox } from '../../assets/convertedSvgs'
import { moreLeftSection, moreRightSection } from '../../assets/svgImgs'

export default Styled.div`
    h1 {
        font-weight: 700;
    }
    p {
        font-size: 1rem;
        line-height: 150%;
    }
    section.section--jumbotron {
        display: grid;
        padding: 4em 0px;
        padding-bottom: 3em;
        color: #fff;
        ${({ theme }) => theme.mixins.primaryBg};
        &:after {
            background: linear-gradient(134.82deg, rgba(132, 147, 118, 0.35) 47.69%, rgba(58, 141, 188, 0.35) 64.87%), linear-gradient(139.52deg, rgba(224, 77, 77, 0.32) 23%, rgba(0, 0, 0, 0) 55.61%), #3A8DBC;
        }
        ${minQuery('lg')} {
            grid-template-columns: 1fr 5rem;
        }
        div.col--1 {
            max-width: 32rem;
            /* div.illustration--container {
                background: pink;
                width: 100vw;
                position: absolute;
                svg {
                    font-size: 5rem;
                }
            } */
            h1 {
                color: #fff;
                font-size: 2rem;
                margin-bottom: 0.7em;
            }
            p {
                font-size: 1.1rem;
                letter-spacing: -0.02em;
                color: #ECECEC;
            }
            ol {
                margin: 2em 0px;
                padding: 0px;
                list-style: none;
                li {
                    display: flex;
                    align-items: center; 
                    svg {
                        margin-right: 1em;
                        font-size: 1.2rem;
                    }
                    font-weight: 400;
                    font-size: 1.1rem;
                    margin-bottom: 0.5em;
                }
            }
            button {
                background-color: #fff;
                border-color: #fff;
                color: ${({ theme }) => theme.primary};
                &:after {
                    border-color: #fff;
                }
            }
        }

        div.col--2 {
            svg {
                font-size: 6rem;
            }
            ${maxQuery('<lg')} {
                display: none;
            }
        }
    }
    section.section--second {
        display: grid;
        grid-gap: 2em;
        padding: 4em 0px;
        ${minQuery('lg')} {
            grid-template-columns: 1fr 15rem;
        }
        h1 {
            margin-bottom: 1em;
            font-size: 1.5rem!important;
            line-height: 150%;
        }
        div.col--1 {
            max-width: 40rem;
            p {
                margin-bottom: 1em;
            }
        }
        div.col--2 {
            text-align: center;
            h1 {
                margin-bottom: 0.5em;
            }
        }
    }
    section.section--third {
        h1 {
            text-align: center;
            margin-bottom: 1.2em;
        }
        div.lists--container {
            div.list--item {
                background: #FFFFFF;
                padding: 1.5em 2em;
                margin-bottom: 2.5em;
                box-shadow: 0px 1px 24px rgba(0, 0, 0, 0.04);
                h2 {
                    font-weight: 700;
                    margin-bottom: 1em;
                    font-size: 1.1rem;
                }
                p {
                    letter-spacing: -0.02em;
                    color: #1D1C1C;
                }
            }
        }
    }
    section.section--forth {
        padding: 2em 0px;
        hgroup {
            display: flex;
            flex-direction: column;
            text-align: center;
            h1 {
                text-align: center;
                margin-bottom: 0.3em;
            }
            p {
                max-width: 40rem;
                margin: 0 auto;
            }
        }
        div.hours--container {
            display: grid;
            margin-top: 3em;
            background: #FFFFFF;
            border: 0.995885px solid #DDDDDD;
            ${minQuery('lg')} {
                grid-template-columns: repeat(3, 1fr);
            }
            div.hour--item {
                height: 6rem;
                display: flex;
                align-items: center;
                justify-content: center;
                h2 {
                    font-weight: 300;
                    font-size: 1.3rem;
                    white-space: pre-line;
                    text-align: center;
                    line-height: 110%;
                }
                &:nth-child(2) {
                    background: #000000;
                    h2 {
                        color: #fff;
                    }
                }
            }
        }
        div.timeline--grid {
            display: grid;
            grid-gap: 2em;
            margin-top: 3.5em;
            ${minQuery('md')} {
                grid-template-columns: repeat(2, 1fr);
            }
            ${minQuery('lg')} {
                grid-template-columns: repeat(3, 1fr);
            }
            div.timeline--item {
                margin: 0px auto;
                background: #FFFFFF;
                padding: 1.5em;
                width: 100%;
                border: 1.5px solid #D7D7D7;
                box-sizing: border-box;
                h2 {
                    font-size: 1.4rem;
                    text-transform: capitalize;
                    font-weight: 600;
                    margin-bottom: 1em;
                }
                h3 {
                    font-weight: 400;
                    font-size: 1.1rem;
                    margin-bottom: 0.3em;
                }

                ol {
                    list-style: none;
                    li {
                        border-bottom: 1px solid #F1F1F1;
                        color: #7A7979;
                        font-size: 1.05rem;
                        padding: 0.5em; 0px;
                    }
                }
            }
        }
    }
    section.section--admission {
    padding: 2em 0px;
    padding-bottom: 5em;
      hgroup {
          display: flex;
          flex-direction: column;
          text-align: center;
          justify-content: center;
          align-items: center;
      }  
      div.grid--container {
          display: grid;
          margin-top: 4em;
          grid-gap: 3em;
          ${minQuery('md')} {
              grid-template-columns: repeat(2, 1fr);
          }
          ${minQuery('lg')} {
              grid-template-columns: repeat(3, 1fr);
          }
          div.grid--item {
              header {
                  display: flex;
                  margin-bottom: 0.5em;
                  grid-gap: 3em;
                  h1 {
                      color: #A5A5A5;
                  }
                  svg {
                      font-size: 3rem;
                  }
              }
              h2 {
                  font-weight: 700;
                  font-size: 1.3rem;
                  margin-top: 1em;
                  line-height: 120%;
                  ${minQuery('md')} {
                      height: 3rem;
                  }
              }
            p {
                margin-top: 1em;
                font-size: 1rem;
            }
          }
      }
    }
    section.section--learnMore {
        padding: 3em 0px;
        padding-bottom: 4em;
        position: relative;
        &:after {
            content: "";
            height: 100%;
            width: 100vw;
            left: 50%;
            transform: translateX(-50%);
            position: absolute; 
            top: 0px;
            background: #F2FCFF;
            background-image: url(${moreLeftSection}), url(${moreRightSection});
            background-repeat: no-repeat;
            background-size: 70rem, 70rem;
            background-position: 0px 0px, 30vw 0px;
            z-index: 1;
        }
        * {
            position: relative;
            z-index: 2;
        }
        display: grid;
        grid-gap: 4em;
        ${minQuery('lg')} {
            grid-template-columns: 1fr 1fr;
        }
        div.col--1 {
            h1 {
                max-width: 32rem;
                font-size: 1.8rem;
                line-height: 120%;
                margin-bottom: 1.5em;
            }
            form {
                max-width: 30rem;
                footer {
                    p {
                        margin: 1em 0px;
                        letter-spacing: -0.02em;
                        color: #7E7A7E;
                        font-size: 1rem;
                        a {
                            color: ${({ theme }) => theme.primary};
                            &:hover, &:focus, &:active {
                                text-decoration: underline;
                            }
                        }
                    }
                    div.action--container {
                        display: flex;
                        grid-gap: 3em;
                    }
                }
            }
        }
        div.col--2 {
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
                font-size: 22rem;
            }
        }
    }
`
