import { Header } from "../../components/Header";
import { MyPosts } from "../../components/MyPosts";
import { Friends } from '../../components/Friends';
import { Profile, ProfileContainer, Container, Content } from './styles';
import { FaUserCircle } from 'react-icons/fa';
import { useAuth } from "../../hooks/auth";
import { useCallback, useState } from "react";
import { format, parseISO } from "date-fns";
import { DeleteUserModal } from "../../components/DeleteUserModal";


export const MyProfile: React.FC = () => {
    const { user, deleteUserModalIsOpen, openDeleteUserModal } = useAuth();
    const [ elementInSide, setElementInSide ] = useState<JSX.Element>(<MyPosts/>);
    
    const handleSelectFriendsList = useCallback(() => {
        setElementInSide(<Friends/>);
    }, []);
    
    const handleSelectMyPosts = useCallback(() => {

        setElementInSide(<MyPosts/>)
    }, []);

    const formatedDate = useCallback((date: string) => {
        return format(parseISO(date), "dd'/'MM'/'yyyy");

    }, []);

    return(
        <>
            <Header title="Meu Perfil"/>
                <Profile>
                    <ProfileContainer>
                        <div className="profile-photo">{
                            user.avatar 
                            ? 
                            <img src={`http://localhost:3333/files/${user.avatar}`} alt={user.name} />
                            : 
                            <FaUserCircle size={240} color={'#E6E6E6'}/>
                        }
                        </div>
                        <div className="profile-data">
                            <strong>{user.name}</strong>
                            <p>{user.username}</p>
                            <span>Entrou em {formatedDate(user.created_at)}</span>
                        </div>
                    </ProfileContainer>
                    <button onClick={openDeleteUserModal}>Apagar conta</button>
                </Profile>


            <Container>
                <Content>
                    <div className="buttons">
                        <button onClick={handleSelectMyPosts}>Minhas Publicações</button>
                        <button onClick={handleSelectFriendsList}>Lista de amigos</button>
                    </div>
                    {elementInSide}
                    <DeleteUserModal isOpen={deleteUserModalIsOpen}/>
                </Content>
            </Container>
        </>
    );
}