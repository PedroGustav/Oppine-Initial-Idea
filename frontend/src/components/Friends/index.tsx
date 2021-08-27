import React, { useState, useEffect } from 'react';
import { BiTrash } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { Container, Friend } from './styles';
import api from '../../services/api';

interface Follow{
    name: string;
    id_user: string;
    avatar:string | null;
    username: string;
}

export const Friends: React.FC = () => {
    const[follows, setFollows] = useState<Follow[]>([]);

    useEffect(() => {
        api.get('/follow/friends')
        .then(response => setFollows(response.data));
    }, []);

    return(
        <Container>
            {follows.length > 0 ? 
            follows.map( follow => (
            <Friend key={follow.id_user}> 
                <div>
                    { follow.avatar 
                    ? 
                    <img src={`http://localhost:3333/files/${follow.avatar}`} alt={follow.name} />
                    :
                    <FaUserCircle size={40} color={'#E6E6E6'}/>
                    }
                    <div className="profile-data">
                        <strong>{follow.name}</strong>
                        <p>{follow.username}</p>
                    </div>
                </div>

                <button> <BiTrash size={24}/> </button>
            </Friend>
            ))
            
            : <p>Você não tem nenhum amigo :(</p>
            }
        </Container>
    )

}