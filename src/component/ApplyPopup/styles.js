import Styled from 'styled-components'

export default Styled.div`
    div.modal--container {
        width: 40rem;
        div.apply--container {
            max-width: 90%;
            margin: 0 auto;
            header {
               display: flex;
               margin-top: 3em;
               align-items: center;
               /* justify-content: center; */
               margin-bottom: 1em;
               svg {
                   font-size: 8rem;
                   height: 3rem;
               }
           }
           form {
               padding: 1.5em 0px;
               padding-bottom: 2em;
               div.phoneNo--container {
                   input {
                   padding-left: 4em;
                   }
               }
               div.select--container {
                   h3 {
                       font-size: 1rem;
                       margin-bottom: 0.8em;
                   }
                   label {
                       input {
                           margin-right: 1em;
                       }
                   }
               }
               footer {
                   padding-bottom: 1.5em;
                   display: flex;
                   /* justify-content: center; */
                   margin-top: 2em;
               }
           }
        }
    }
`
