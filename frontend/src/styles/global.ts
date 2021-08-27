import { createGlobalStyle, keyframes }from 'styled-components';

const FadeInAnimation = keyframes`

    from{ opacity: 0;}
    to{ opacity: 1;}
`;

export const GlobalStyle = createGlobalStyle`


/*
font-family: 'M PLUS Rounded 1c', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Sanchez', serif;
*/

:root{
        --white: #FFFFFF;
        --black: #000000;

        --gray20: #F9F9F9;
        --gray150: #E2E2E2;
        --gray200: #CDCDCD;
        --gray500: #7E7E7E;
        --gray700: #303030;
        --gray850: #2E2E2E;

        --green200: #90FAB2;
        --green250: #27FB6B;
        --green300: #14CC60;
        --green600: #036D19;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{

        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background-color: var(--gray20);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Open Sans', sans-serif;
        font-family: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }


    
.react-modal-overlay{
        background: rgba(0, 0, 0, 0.5) ;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    .react-modal-content {
        animation: ${FadeInAnimation} 0.3s;
        max-width: 700px;
        position: relative;
        border-radius: 0.24rem;
        outline: none;
    }

    .delete-modal-content {
        animation: ${FadeInAnimation} 0.3s;
        width: 494px;
        background: var(--white);
        position: relative;
        border-radius: 0.24rem;
        outline: none;
    }

`;