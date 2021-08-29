import Styled from 'styled-components'

export default Styled.div`
    position: relative;
    div.carousel--action__container {
        button {
            position: absolute;
            top: 35%;
            z-index: 1;
            background: #fff;
            padding: 0.5em;
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            filter: drop-shadow(0px 5.36842px 12.0789px rgba(0, 0, 0, 0.12));
            .icon {
                color: #302E2E;
                font-size: 4rem;
                stroke-width: 0.3em;
            }
            &.left--btn {
                transform: translateX(-50%);
            }
            &.right--btn {
                right: 0px;
            }
        }
    }
    div.carousel--grid__container {
        display: flex;
        position: relative;
        width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        padding-top: 4em;
        overflow-y: hidden;
        ${({ theme }) => theme.mixins.hideScollbarHorizontal};
        overflow-x: hidden;
    }
`

export const CarouselItemContainer = Styled.div`
    &:first-of-type {
        margin-left: ${(props) => props.gutterSize};
    }
    margin-right: 4em;
    border-radius: 15px;
    flex-shrink: 0;
    transition: all 0.5s;
    &.active--section {
        transform: scale(1.1); 
    }
`
