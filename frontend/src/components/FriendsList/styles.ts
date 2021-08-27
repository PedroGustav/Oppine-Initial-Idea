import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`

    from{
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`;

export const Container = styled.div`
    min-width: 16.9rem;
    margin-top: 1.25rem;
    padding: 12px;
    border-radius: 8px;
    background-color: var(--white);
    overflow-y: auto;
    animation: ${fadeIn} 1s;
    scroll-behavior: smooth;
    display: flex;
    position: relative;
    flex-direction: column;
    box-shadow: 3px 3px 9px 3px rgba(0,0,0,0.006);
    
    div{
        display: flex;
        justify-content: space-between;
    }

    h1{
        color: var(--green600);
        font-family: 'Open Sans', sans-serif;
        font-size: 1.25rem;
        font-weight: bold;
    }

    .my-profile{
        margin-top: 1.25rem;
        margin-left: 0.5rem;
        width: 80%;
        display: flex;
        align-items: center;
        padding-bottom: 1.25rem;
        border-bottom: 1px solid #e4e4e433;
        img{
            margin-right: 0.5rem;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            object-fit: cover;
        }

        strong{
            font-size: 1rem;
            color: #2F2E41;
            font-weight: 800;
        }
    }

    ul{
        display: flex;
        flex-direction: column;
        margin-top: 1.5rem;
        padding-bottom: 1rem ;
        width: 80%;
        li{
            display: flex;
            align-items: center;
            img{
                width: 35px;
                height: 35px;
                border-radius: 50%;
                margin-right: 1rem;
            }

            & + li{
                margin-top: 1.25rem;
            }
            
        }
        
        strong{
            font-weight: 700;
            font-size: 0.9rem;
        }

        p{
            color: var(--gray200);
            align-self: center;
            font-weight: 200;
        }
    }


    /* Estilizando Scrollbar */

    ::-webkit-scrollbar{
        
        width: 0.5rem;
        background-color: #F4F4F4;
        border-radius: 8px 8px 8px 8px;
 
    }

    ::-webkit-scrollbar-thumb{
        background-color: #eaeaea;
        border-radius: 8px 8px 8px 8px;
        transition: all 2s;

        &:hover{
            background-color: #dfdfdf;
        }
    }
`;