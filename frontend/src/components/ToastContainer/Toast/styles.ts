import styled ,{css, keyframes} from 'styled-components';

interface ContainerProps{
    type?: 'success' | 'info' | 'error';
    hasDescription: boolean;
}

const toastTypeVariations = {
    info: css`
        background: #FAFAFF;
        border-bottom: 3px solid #3F3FFF;
    `,
    success: css`
        background: #FAFFFA;
        border-bottom: 3px solid #3FCF3F;
    `,
    error: css`
        background: #FFFAFA;
        border-bottom: 3px solid #FF3F3F;
    `
}

const fadeInAnimation = keyframes`
    0%{
        transform: translateX(100%)
    }
    40%{
        transform: translateX(0);
    }
`;

export const Container = styled.div<ContainerProps>`
    animation: ${fadeInAnimation} 2.5s;
    animation-iteration-count: 2;
    animation-direction: alternate;
    filter: opacity(0.9);
    display: flex;
    position: relative;
    width: 360px;
    padding: 16px 30px 14px 16px;
    border-radius: 2px;
    border-bottom: 3px solid #3F3FFF;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
    background-color: #FAFAFF;
    transition: filter 0.3s;

    &:hover{
        filter: none;
    }
    
    ${(props) => toastTypeVariations[props.type] }
    > svg{
        margin: 4px 12px 0 0;
        color: var(--gray850);
    }

    & + div{
        margin-top: 8px;
    }
    div{
        flex: 1;

        strong{
            font-weight: 600;
            font-family: 'Open Sans';
            color: var(--gray850);
        }

        p{
            font-size: 14px;
            font-weight: 300;
            line-height: 20px;
        }
    }

    button{
        position: absolute;
        right: 12px;
        top: 18px;
        background: transparent;
        border: 0;
        color: inherit;
    }

    ${(props) => !props.hasDescription && css`
        display: flex;
        align-items: center;
        
        >svg{
            margin-top: 0;
        }
    `}
`;