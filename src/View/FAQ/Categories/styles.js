import Styled from 'styled-components'

export default Styled.div`
    padding: 3em 0px;
    position: relative;
     &:after {
        content: "";
        height: 100%;
        position: absolute;
        top: 0px;
        width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        background: #F6FDFF;
        z-index: 1;
    }
    * {
        position: relative;
        z-index: 2;
    }
    div.nav--container {
        h2 {
            font-weight: 600;
            font-size: 1.3rem;
            margin-bottom: 0.5em;
        }
        nav {
            a {
                text-decoration: none; 
                display: block;
                width: fit-content;
                padding: 0.3em 0px;
                color: #5C7787;
                font-weight: 300;
                font-size: 1rem;
                &:not(:last-of-type) {
                    margin-bottom: 0.25em;
                }
                &:active {
                    color: ${({ theme }) => theme.primary};
                }
            }
        }
    }
    div.content--container {

    }
    
`
