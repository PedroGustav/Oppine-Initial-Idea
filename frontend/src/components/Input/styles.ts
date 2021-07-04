import styled, { css } from 'styled-components';
import {Tooltip} from '../Tooltip';
interface ContainerProps{
    isErrored: boolean;
    isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    max-width: inherit;
    border-bottom: 1px solid #73737333;
    transition: border 0.3s;


    ${(props) => 
        props.isErrored && css`
            border-bottom: 1px solid #DD3030;
        `
    }

    
    ${(props) => 
        props.isFocused && css`
            border-bottom: 1px solid var(--green300);
        `
    }

    input{
        width: 90%;
        padding: 0.5rem;
        background-color: transparent;
        border: none;
        
        font-family: 'Open Sans', sans-serif;
        font-weight: 200;
        outline: none;
        transition: border 0.3s;


    
    }

    
`;

export const Error = styled(Tooltip)`
    height: 20px;
    
`;