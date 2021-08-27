import styled, {keyframes} from 'styled-components';


const FadeInAnimation = keyframes`

    from{ opacity: 0;}
    to{ opacity: 1;}
`;

export const Container = styled.div`
    background-color: var(--white);
    padding: 1rem 1rem 1rem 1.5rem;
    border-radius: 8px;
    width: 700px;

    h1{
        font-size: 1.25rem;
        color: var(--green600);
        font-family: 'M PLUS Rounded 1c', sans-serif;
        font-weight: 500;
        margin-bottom: 1.5rem;
    }

    textarea{
        width: 100%;
        max-width: 100%;
        height: 128px;
        max-height: 128px;
        border: 1px solid #E6E6E6;
        border-radius: 8px;
        resize: none;
        padding-top: 1rem;
        padding-left: 1.25rem;
        font-size: 1rem;
        color: var(--gray700);
        outline: none;

        &::placeholder{
            font-size: 1rem;
            font-family: 'Open Sans' sans-serif;
            color: #7E7E7E;
        }
    }

    div{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 1.5rem;


        button{
            display: flex;
            align-items: center;
            justify-content: center;
            max-height: 2.5rem;
            width: 138px;

            & + button{
            margin-left: 0.5rem;
            }
        }
        

        .close-button{
            background-color: transparent;
            color: #EE1515;

            >svg{
                margin-right: 1rem;
            }
        }

    }


    .react-modal-content {
        animation: ${FadeInAnimation} 0.3s;
        width: 100%;
        max-width: 700px;

        position: relative;
        border-radius: 0.24rem;
        outline: none;
    }

`;