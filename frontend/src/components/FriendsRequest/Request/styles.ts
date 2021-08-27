import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: var(--white);
    padding: 12px;
    border-radius: 8px;
    box-shadow: 3px 3px 7px 3px rgba(208, 203, 203, 0.06);
    display: flex;
    align-items: center;


    div:first-child{
        width: 40px;
        height: 40px;
        background-color: white;
        border-radius: 50%;
        margin-right: 8px;
        
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    
    }

    section{
        margin-right: 1rem;
        strong{
            font-size: 0.85rem;
            font-weight: 800;
            margin-bottom: 4px;
        }

        p{
            font-size: 0.75rem;
            color: var(--gray500);
        }

    }
    
    div{
        width: auto;

        button{
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            border: none;
            text-align: center;
            transition: all 0.3s;

            &:hover{
                filter: brightness(0.95);
            }
            & + button{
                margin-left: 0.5rem;
            }
        }

        .acept{
            background-color: #0BEB53;
            box-shadow: 1px 1px 6px rgba(0, 255, 0, 0.08);
        }

        .d-acept{
            background-color: #EE1515;
            box-shadow: 1px 1px 6px rgba(255, 0, 0, 0.08);
        }
    }


`;