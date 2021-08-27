import styled, {keyframes} from 'styled-components';
import backgroundImg from '../../assets/Background.png';
const fadeIn = keyframes`

    from{
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`;
export const Container = styled.div`
    animation: ${fadeIn} 1s;
    max-width: 100%;
    height: calc(100vh - 50px);
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    background-image: url(${backgroundImg});
    >div:first-child{
        margin-right: 8rem;
    }

`;

export const RightSection  = styled.section`
    
    width: 300px;
    background-color: rgba(247, 247, 247, 0.98);
    display: flex;
    flex-direction: column;
    align-items: center;
`;