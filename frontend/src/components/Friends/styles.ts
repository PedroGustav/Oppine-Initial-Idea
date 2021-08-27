import styled, {keyframes} from 'styled-components';

const fadeOutAndSlide = keyframes`

    from{
        opacity: 0.2;
        transform: translateX(-100px);

    }

    to{
        opacity: 1;
    }

`;

export const Container = styled.div`
    animation: ${fadeOutAndSlide} 1s;
    width: 500px;

    >p{
        color: var(--gray500);
        font-weight: 300;
        background-color: var(--white);
        padding: 1rem 2rem;
        border-radius: 8px;
        margin-top: 2rem;
        width: 100%;
        text-align: center;
        box-shadow: 3px 3px 9px 3px rgba(0,0,0,0.006);
        
    }
`;

export const Friend = styled.div`
    width: 100%;
    background-color: var(--white);
    border-radius: 8px;
    padding: 1rem 1rem;
    box-shadow: 3px 3px 9px 3px rgba(0,0,0,0.006);
    display: flex;
    justify-content: space-between;

    
    >div{
        display: flex;

        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }

        .profile-data{
            margin-left: 1rem;

            strong{
                font-size: 14px;
                font-weight: 700;
                color: #2F2E41;
            }

            p{
                font-size: 12px;
                font-weight: 400;
                color: #7E7E7E;
            }
        }
    }

    button{
        background: none;
        border: none;

        >svg{
            color: #E6E6E6;
            transition: color 0.3s;
            &:hover{
                color: #EE1515;
            }
        }
    }
`;