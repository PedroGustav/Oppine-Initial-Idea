import styled from 'styled-components';



export const Container = styled.header`
    
    width: 100%;
    padding: 0rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white);


    strong{
        font-family: 'M PLUS Rounded 1c', sans-serif;
        font-weight: 500;
        color: var(--green600);
        font-weight: 400;
        font-size: 1.4rem;
        flex: 1;
        text-align: center;
    }

    
    .first-div{
        width: 187px;
        display: flex;
        align-items: center;
        img{
            max-height: 3.125rem;
            max-width: 8.5rem;
            margin-right: 0.9rem;
            cursor: pointer;   
        }
    }

    
    
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    max-width: 187px;

    .container{
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 50%;
        border: 1px solid var(--green600);
        background-color: var(--white) ;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .profile-photo{
        height: 95%;
        width: 95%;
        border-radius: 50%;
        position: absolute;
        left: 1px;
        object-fit: cover;
        
    }

    span{
        margin-top: 4px;
        display: flex;
        font-size: 0.9rem;
        font-family: 'Overpass', sans-serif;
        font-weight: 600;
        color: #3F3D56;
        align-content: flex-end;
        margin-left: 0.5rem;
        font-weight: 900;
    }

    button{
        width: 2.3rem;
        height: 2.3rem;
        margin-left: 0.8rem;
        background: var(--white);
        border: none;
        color: var(--gray500);
        box-shadow: 1px 1px 6px rgba(0,0,0,0.08);
        border-radius: 50%;
        transition: all 0.3s;
        
        &:hover{
            box-shadow: inset 1px 1px 6px rgba(0,0,0,0.05);
            color: #EE1515;
        }
    }

    .create{
        width: 2.3rem;
        height: 2.3rem;
        font-family:'Overpass', sans-serif;
        font-weight: bold;
        font-size: 1.125rem;
        color: var(--gray500);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.38rem;
        border: none;
        border-radius: 50%;
        box-shadow: 1px 1px 6px rgba(0,0,0,0.08);
        background-color: var(--white);
        transition: all 0.3s;

        &:hover{
            color: var(--green300);
            box-shadow: inset 1px 1px 6px rgba(0,0,0,0.05);
        }
        p{
            margin-top: 4px;
            margin-left: 0.2rem;
        }
    }
`;