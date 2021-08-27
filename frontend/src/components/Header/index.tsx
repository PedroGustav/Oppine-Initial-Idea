import React, { useCallback } from 'react';
import { Container, Profile } from './styles';
import { FiPlus, FiPower } from 'react-icons/fi';
import Logo2 from '../../assets/Logo2.svg';
import { useAuth } from '../../hooks/auth';
import { useHistory } from 'react-router';
import { SearchUsersInput } from '../SearchUsersInput';

interface HeaderProps{
    title: string;
    onClickOpenNewPostModal?: () => void;
}


export const Header: React.FC<HeaderProps> = ({title, onClickOpenNewPostModal}) => {

    const {user, signOut} = useAuth();
    const history = useHistory();


    const handleLogoff = useCallback(() => {
        signOut();

        history.push('/login');
        
    },[history, signOut])

    const handleAlterToDashboard = useCallback(() => {

        history.push('/dashboard');

    }, [history]);

    const handleAlterToMyProfile = useCallback(() => {

        history.push('/profile');

    }, [history]);

    return(
        <Container>
            <div className="first-div">
                <img src={Logo2} alt="Oppine" onClick={handleAlterToDashboard} />
                <SearchUsersInput/>
            </div>
            <strong>{title}</strong>
            <Profile>
                <div className='container' onClick={handleAlterToMyProfile}>
                    <img src={`http://localhost:3333/files/${user.avatar}` } alt={user.name} className='profile-photo' onClick={handleAlterToMyProfile}/>
                </div>
                <span onClick={handleAlterToMyProfile}>{user.name.split(' ')[0]}</span>
                <button className='create' onClick={onClickOpenNewPostModal}><FiPlus size={22}/></button>
                <button type='button' onClick={handleLogoff}><FiPower size={20} /></button>
            </Profile>

        </Container>
    );
}