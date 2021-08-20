import Styled from 'styled-components'

export default Styled.div`
    position: fixed;
    height: ${({ theme }) => theme.dimensions.navHeight};
    display: flex;
    align-items: center;
    width: 100vw;
    background: #fff;
    z-index: 4;
    div.content--container {
        ${({ theme }) => theme.mixins.maxWidth};
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a.brand--logo {
            svg {
                transform: scale(5.5);
                
            }
        }
        nav {
            display: flex;
            grid-gap: 2em;
            align-items: center;
            a {
                text-decoration: none; 
                color: #050402;
                font-size: 0.9rem;
            }
            button {
                display: flex;
                align-items: center;
                .icon {
                    margin-left: 0.5em;
                    font-size: 0.9rem;
                }
            }
        }
    }
`
