import React from 'react';
import { Request } from './Request';
import { Container } from './styles';


export const FriendsRequest: React.FC = () => {
    
    return(
        <Container>
            <h1>
                Solicitações de amizade(3)
            </h1>
            <Request/>
        </Container>
    );
}