import styled from 'styled-components';

export const Header = styled.header`
    padding-top: 1.6rem;

    div{

        max-width: calc(100% - 34px);
        margin: 0 auto;
        display: flex;
        align-items: center;

        a{
            text-decoration: none;
            color: var(--green600);
            font-family: 'M PLUS Rounded 1c', sans-serif;
            font-size: 1.25rem;
            font-weight: 400;
            display: flex;
            align-items: center;
            svg{
                height: 24px;
                width: 24px;
                margin-right: 0.75rem;
            }
        }

        img{
            height: 3.125rem;
            margin-left: 28rem;
        }
    }

`;

export const Main = styled.main`
    display: flex;
    position: relative;
    align-items: end;

    img{
        left: -3.5rem;
        width: 50rem;
        height: 38.6rem;
        position: absolute;
        z-index: -1;
    }
`;

export const FormSection = styled.section`
    flex: 1;
    margin-left: 50%;   
    margin-right: 9rem;
    margin-top: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h2{
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 1.3rem;
        text-align: center;
        color: var(--green600);
    }
`;

export const UpdateUserNameAndAvatarDiv = styled.div`

    margin-top: 3.75rem;
    margin-right: 8rem;
    padding: 2rem 2rem 2rem 2rem;
    background-color: white;
    display: flex;
    position: relative;
    border-radius: 8px;

    >label{
        z-index: 10;
        color: var(--green600);
        font-size: 1.2  rem;
        margin-bottom: 1rem;
        margin-left: 0.25rem;
        transition: filter 0.2s;
        position: relative;
        width: 230px;
        height: 230px;
        border: 1px solid #036D19AA;
        padding: 10px;
        border-radius: 50%;

        svg{
            width: 225px;
            height: 225px;
            border-radius: 50%;
            position: absolute;
            left: 1.5px;
            top: 1.5px;
        }
        img{
            width: 225px;
            height: 225px;
            border-radius: 50%;
            position: absolute;
            left: 1.5px;
            top: 1.5px;
            object-fit: cover;
        }

        &:hover{
        filter: brightness(0.95);
        }

        &::after{
            content: 'ESCOLHA UMA FOTO';
            
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            background-color: #FAFAFAAA;
            width: 226px;
            height: 226px;
            border-radius: 50%;
            left: 0.8px;
            top: 0.5px;
            filter: opacity(0);
            transition: filter 0.2s;
        }

        &:hover::after{
            filter: opacity(1);
        }
    }
    
    >input{
        display: none;
    }

    form{
        background-color: var(--white);
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 213px;
        position: relative;

        div{
            margin-left: 0.5rem;
        }
        label{
            color: var(--green600);
            margin-left: 0.8rem;
            margin-bottom: 0.5rem;
        }
        button{
            position: absolute;
            bottom: 0;
            right: 0;
            width: 10rem;
            height: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;