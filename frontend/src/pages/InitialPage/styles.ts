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

const fadeIn = keyframes`

    from{opacity: 0;}
    to{opacity: 1;}
`;

const pullToLeft = keyframes`
    from{
        transform: translateX(15%);
        opacity: 0;
    }
    to{
        transform: translateX(0%);
        opacity: 1;
    }
`;

export const Main = styled.main`
    display: flex;
    
    width: 100%;
    margin: 0 auto;

    div{
        animation: ${fadeIn} 1s;
        padding-left: 4.75rem;
        padding-top: 7rem;
        width: auto;
        display: flex;
        flex-direction: column;


        h1{
            font-weight: 200;
            font-size: 4rem;
            line-height: 80px;
            color: var(--green600);
        }

        p{
            margin-top: 0.5rem;
            font-family: 'Open Sans', sans-serif;
            font-weight: 200;
            font-size: 1.5rem;
            align-self: flex-end;
            color: var(--green300);
        }

        a{
            margin-top: 2rem;
            width: 17rem;
            padding: 1rem  4.25rem;
            border: none;
            background-color: var(--green300);
            color: var(--white);
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
            font-size: 1.2rem;
            border-radius: 0.5rem;
            transition: filter 0.3s;
            text-decoration: none;
            
            &:hover{
                filter: brightness(1.1);
            }
        }
    }

    img{
        animation: ${pullToLeft} 1s;
        height: 560px;
    }
`;