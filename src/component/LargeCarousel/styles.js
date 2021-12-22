import Styled from 'styled-components'

export default Styled.div`
    position: relative;
    height:22rem;
    div.action--container {
        position: absolute;
        width: 100vw;
        z-index: 99;
        display: flex;
        align-items: center;
        left: 50%;
        background: transparent;
        justify-content: space-between;
        padding: 0px 10vw;
        top: 8rem;
        transform: translateX(-50%);
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: none;
            height: 3rem;
            width: 3rem;
            cursor: pointer;
            .icon {
                font-size: 2rem;
            }
        }
    }
    div.carousel--row {
        display: flex;
        grid-gap: 3em;
        align-items: center;
        width: 100vw;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        overflow-x: auto;
        margin-top: 3em;
        padding: 0px 10em;
        ${({ theme }) => theme.mixins.hideScrollBar};
        img {
            transition: all 0.5s;
        }
        div.active--container {
                margin-right: 0.5em;
                border-radius: 10px;
                overflow: hidden;
            img {
                transform: scale(1.2);
            }
        }
        div.img--container {
            width: 30rem;
            flex-basis: 30rem;
            flex-shrink: 0;
            overflow: hidden;
            max-width: 80vw;
            img {
                border-radius: 10px;
                overflow: hidden;
                /* object-fit: cover; */
                /* width: 100%; */
            }
        }
    }
`
