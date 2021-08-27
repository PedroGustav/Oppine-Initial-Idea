import styled from 'styled-components';



export const Container = styled.div`
    background-color: var(--background);
    width: 494px;
    padding: 0.5rem 1.5rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    position: relative;

    h1{
        width: 100%;
        font-weight: 700;
        font-size: 1.5rem;
        color: #EE1515;
        text-align: center;
    }

    div{
        p{
            font-size: 0.95rem;
            font-weight: 600;
            margin-top: 1rem;
            color: #2F2E41;
        }

        input{
            margin-top: 0.25rem;
            padding: 0.5rem;
            border: 0;
            outline: 0;
            border-bottom: 1px solid #7E7E7E;
            transition: border-bottom-color 0.3s;
            &:focus{
                border-bottom-color: var(--green200);
            }
        }
    }

    button{
        margin-top: 0.8rem;
        width: 153px;
        align-self: flex-end;
        padding: 0.75rem 1rem;
        border: none;
        border-radius: 8px;
        color: var(--white);
        background-color: #F63636;
        font-weight: 700;
        font-size: 1rem;
        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.95);
        }
    }

    .delete-button{
        position: absolute;
        top: 0;
        padding: 0;
        width: 24px;
        right: 16px;
        background-color: transparent;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.8);
        }
    }
`;