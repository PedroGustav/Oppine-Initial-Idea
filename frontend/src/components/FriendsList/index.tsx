import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { FiSearch } from 'react-icons/fi';



interface Follow{
    name: string;
    id_user: string;
    avatar:string | null;
    username: string;
}


export const FriendsList: React.FC =  () => {
    const[follows, setFollows] = useState<Follow[]>([]);

    const { user } = useAuth()
    useEffect(() => {
        api.get('/follow/friends')
        .then(response => setFollows(response.data));
    }, []);


    return(
        <Container>
            <div>
                <h1>Meus Amigos</h1>
                <FiSearch size={20} color={'#7E7E7E'}/>
            </div>

            <ul>
                {follows.length > 0 ? follows.map(follow => (
                    <li key={follow.id_user}>
                        <img src={`http://localhost:3333/files/${follow.avatar}`} alt='Foto de perfil'/>
                        <strong>{follow.name}</strong>
                    </li>
                ))
                
                : <p>Você não tem amigos :(</p>
            }
            </ul>
        </Container>
    );
}