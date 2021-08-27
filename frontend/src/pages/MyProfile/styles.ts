import styled from 'styled-components';



export const Profile = styled.div`
    background-color: #E4E4E433;
    height: 260px;
    position: relative;

    button{
        position: absolute;
        right: 2rem;
        top: calc(260px - 1.3rem);
        margin-right: 2rem;
        padding: 0.75rem 1.5rem;
        background-color: #F63636;
        border: 0;
        border-radius: 8px;
        color: var(--white);
        font-weight: 700;
        transition: filter 0.3s;

        &:hover{
            filter: brightness(1.3);
        }
    }
`;

export const ProfileContainer = styled.div`
    width: calc(100vw - 4rem);
    margin: 0 auto;

    display: flex;
    align-items: center;

    .profile-photo{
        margin-top: 8.125rem;
        width: 15rem;
        height: 15rem;
        background-color: transparent;
        border: 1px solid var(--green200);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        img{
            width: 14.5rem;
            height: 14.5rem;
            border-radius: 50%;
            object-fit: cover;
        }
    }

    .profile-data{
        margin-top: 12rem;
        margin-left: 1rem;
        strong{
            font-weight: 700;
            font-size: 2.1rem;
        }

        p{
            font-size: 1rem;
            font-weight: 200;
            color: #7E7E7E;
        }

        span{
            display: block;
            margin-top: 2rem;
            font-size: 0.95rem;
            color: #14CC60;
            font-weight: 600;
        }
    }
`;

export const Container = styled.div`
    margin-top: 10rem;
    width: 100%;
    height: 50rem;
`;

export const Content = styled.div`
    max-width: 45.75rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .buttons{
        width: 100%;
        display: flex;
        margin-bottom: 1.5rem;

        button{
            flex: 1;
            font-family: 'Open Sans', sans-serif;
            font-weight: 600;
            color: var(--green600);
            font-size: 1.25rem;
            background: transparent;
            border: none;
        }

    }
`;
