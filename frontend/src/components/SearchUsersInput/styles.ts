import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: calc(35px + 0.1rem);
    background-color: #F9F9F9;
    align-items: center;
    padding: 0 0.8rem;
    border-radius: 20px;

    >svg{
        color: var(--green300);
    }

    input{
        border: none;
        background-color: transparent;
        outline: none;
        height: 100%;
        margin-left: 0.25rem;
        color: var(--gray);
    }
`;