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
        height: 38.8rem;
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

    form{
        margin-top: 3.75rem;
        padding: 2rem 2rem 0 2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2.75rem;
        background-color: var(--white);
        font-weight: 400;
        font-size: 1.25rem;
        box-shadow: 2px 5px 20px rgba(0,0,0,0.03);
        
        div{
            margin-bottom: 0.5rem;
            
            label{
                color: var(--green600);
                display: block;
                margin-bottom: 1.25rem;
                
                a{
                    color: var(--green300);
                    text-decoration: underline;
                }
            }

            & + div{
                margin-bottom: 2rem;
            }

            div button{
                bottom: 5px;
            }

            input[type='text']{
                width: 12rem;
            }

            input[type='password']{
                width: 12rem;
            }
        }
    }
`;

export const ButtonSubmitDiv = styled.div`
    display: flex;
    flex-direction: column;
    grid-column-start: 1;
    grid-column-end: 3;

    div{
        display: flex;
        

        
        label{
            margin-left: 0.25rem;
            font-size: 0.7rem;
            font-family: 'Sanchez', sans-serif;
            color: var(--gray500);
        }

    }
    button{
        width: 100%;
    }

`;

export const LastDiv = styled.div`
    margin-top: 3rem;
`;