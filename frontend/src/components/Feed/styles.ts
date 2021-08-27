import styled, { keyframes } from 'styled-components';

// const apperanceNewPost = keyframes`
//      from{
//         opacity: 0;
//         transform: translateY(-10%);
//     }

//     to{
//         opacity: 1;
//         transform: translateY(0);
//     }
// ` 
const loader = keyframes`

    from{
        left: 40%;
    }
    to{
        left: 40%;
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
    width: 524px;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    background-color: rgba(247, 247, 247, 0.98);
    
    >div:first-child{
        margin-top: 1.25rem;
    }
`;

export const Post = styled.div`
    margin: 0 auto;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--white);
    border-radius: 8px;
    padding: 1rem 1rem;
    box-shadow: 3px 3px 9px 3px rgba(0,0,0,0.04);
    
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