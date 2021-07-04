import styled, { css } from 'styled-components';
import { Tooltip } from '../Tooltip';

interface ContainerProps{
    isFocused: boolean;
    isErrored: boolean;
}


export const Container = styled.div<ContainerProps>`
    display: flex;
    position: relative;        
    max-width: inherit;
    border-bottom: 1px solid #73737333;
    transition: border 0.3s;

    button{
        z-index: -1;
        position: absolute;
        bottom: 5%;
        right: 3%;
        background: transparent;
        border: none;
        transition: all 0.3s;
        

        &:hover svg{
            filter: brightness(0.8);
        }

        svg{
            width: 20px;
            height: 20px;
            color: #73737333;
        }

        ${(props) => 
            props.isFocused && css` 
                z-index: 1;
            `
        }

        ${(props) =>
            props.isErrored && css`
                z-index: -1;
            `
        }
    }

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