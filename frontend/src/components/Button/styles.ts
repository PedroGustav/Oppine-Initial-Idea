import styled from 'styled-components';


export const ButtonStyled = styled.button`
    color: var(--white);
    border: none;
    background-color: var(--green300);
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    transition: filter 0.3s;

    &:hover{
        filter: brightness(1.1);
    }

`;