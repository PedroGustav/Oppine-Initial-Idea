import styled, {keyframes} from 'styled-components';

const loader = keyframes`

    from{
        left: 40%;
    }
    to{
        left: 40%;
        transform: rotate(360deg);
    }
`;

const fadeOutAndSlide = keyframes`

    from{
        opacity: 0.2;
        transform: translateX(100px);

    }

    to{
        opacity: 1;
    }

`;


export const Container = styled.div`
    animation: ${fadeOutAndSlide} 1s;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    background-color: transparent;
    position: relative;
    
    >div:first-child{
        margin-top: 1.25rem;
    }
`;

export const Post = styled.div`
    width: 500px;
    
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    background-color: var(--white);
    border-radius: 8px;
    padding: 1rem 1rem;
    box-shadow: 3px 3px 9px 3px rgba(0,0,0,0.006);
    
    .profile{
        display: flex;
        width: 100%;
        align-items: center;
        img{
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            margin-right: 0.5rem;
            object-fit: cover;
        }

        div{
            strong{
                color: #2F2E41;
                font-size: 0.925rem;
            }

            p{
                font-size: 0.75rem;
                font-weight: normal;
                color: #7E7E7E;
            }
        }

    }
    .delete-button{
        background: none;
        border: 0;
        position: absolute;
        right: 20px;
        top: 20px;
        transition: color 2s;

        >svg{
            color: #E6E6E6;
            transition: color 0.3s;
            &:hover{
                color: #EE1515;
            }
        }
    }

    .post{
        margin-top: 1.4rem;
        margin-bottom: 1rem;

        .text{
            display: block;
            margin-bottom: 0.8rem;
            font-size: 0.875rem;
            font-weight: 600;
            color: #2F2E41;
        }
    }

    .buttons{
        width: 100%;
        display: flex;
        margin-bottom: 0;
        button{
            border: none;
            font-family: 'M PLUS Rounded 1c', sans-serif;
            font-weight: 500;
            font-size: 1rem;
            background-color: transparent;
            align-items: center;
            display: flex;

            & + button{
                margin-left: 5rem;
            }

            >svg{
                margin-left: 0.75rem;
            }
        
        }

        .agree{
            color: #14CC60;

            
        }

        .disagree{
            color: #EE1515;
        }
    }
`;


export const PostImage = styled.img`
    width: 500px;
    height: 500px;
    margin-left: -1rem;
`;
export const Loading = styled.div`
    animation: ${loader} 1.5s  infinite;
    border: 6px solid #e6e6e6;
    border-radius: 50%;
    border-top-color: var(--green600);
    width: 50px;
    height: 50px;
    position: absolute;
    top: 100%;
    left: 40%;
`;

