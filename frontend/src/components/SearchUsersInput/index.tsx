import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Container } from './styles';
export const SearchUsersInput: React.FC = () => {

    return(
        <Container>
            <FiSearch size={18}/>
            <input type="text" placeholder='Encontre amigos no Oppine'/>
        </Container>
        )
}