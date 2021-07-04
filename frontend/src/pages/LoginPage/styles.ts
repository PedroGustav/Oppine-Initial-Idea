import styled, { keyframes } from 'styled-components';

export const Header = styled.header`
    height: auto;

    div{
        width: calc(100% - 56px);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 0;

        a{
            font-family: 'M PLUS Rounded 1c', sans-serif;
            color: var(--green600);
            font-weight: 500;
            font-size: 1.3rem;
            display: flex;
            align-items: center;
            text-decoration: none;
            transition: filter 0.3s;

            &:hover{
                filter: brightness(1.5);
            }

            svg{
                margin-left: 0.75rem;
                width: 24px;
                height: 24px;
            }
        }
    }

`;


const appearenceForm = keyframes`
    from{
        opacity: 0;
        transform: translateY(-10%);
    }

    to{
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Main = styled.main`
    display: flex;
    width: 100%;
    justify-content: space-between;

    form{
        animation: ${appearenceForm} 1s;
        margin-top: 3.75rem;
        margin-left: 3.75rem;
        background-color: var(--white);
        padding: 3rem 2rem 2rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 2px 5px 20px rgba(0,0,0,0.03);
        border-radius: 0.6rem;
        height: 400px;

        h2{
            font-size: 1.35rem;
            font-family: 'Open Sans', sans-serif;
            font-weight: 400;
            color: var(--green600);
            margin-bottom: 3rem;
        }
        
        div{
            width: 100%;

            div{
                width: 20px;
            }
        }

         div + div{
            margin-top: 3rem;
        }

        > button{
            margin-top: 2.5rem;
            width: 100%;
        }

        a{
        
        width: 100%;
        font-family: 'Sanchez', sans-serif;
        font-size: 0.8rem;
        text-align: end;
        margin-top: 0.45rem;
        color: var(--green250);
        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.8);
        }
    }
    }

    img{
        width: 900px;
        z-index: -1;
    }
`;