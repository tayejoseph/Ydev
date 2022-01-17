import Styled from 'styled-components'
import { rem } from 'polished'

export default Styled.div`
    height: ${rem('543px')};
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    &:after {
        content: "";
        position: absolute;
        top: 0px;
        height: 100%;
        width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("https://res.cloudinary.com/djhh4kkml/image/upload/v1637179311/Ydev/HireAlumni_kutdln.png");
        z-index: 1;
    }
    * {
        position: relative;
        z-index: 2;
        max-width: 32rem;
    }
    h1 {
        color: #fff;
        font-weight: 800;
        font-size: 3rem;
        margin-bottom: 1em;
        
        span {
            color: rgb(151, 181, 226);
        }
    }
    p {
        color: #B7B2B2;
        font-size: 1.2rem;
        margin-bottom: 2em;
    }
    button {
        background: #fff;
        color: black;
        &:after {
              border: 0.4px solid #fff;
        }
    }
`
