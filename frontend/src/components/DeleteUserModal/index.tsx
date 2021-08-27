import React, { useCallback, useState } from 'react';
import { FiX } from 'react-icons/fi';
import  Modal  from 'react-modal';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { Container } from './styles';

interface deleteUserModalProps{
    isOpen: boolean;
}
export const DeleteUserModal: React.FC<deleteUserModalProps> = ({isOpen}) => {
    var { addToast } = useToast();
    const [email, setEmail] = useState('');
    const {closeDeleteUserModal, deleteUser} = useAuth();

    const handleDeleteUser = useCallback(() => {
            deleteUser(email);
            closeDeleteUserModal();
            setEmail('');
    }, [addToast, deleteUser, email]);
    return(
        

            <Modal
                isOpen={isOpen}
                onRequestClose={closeDeleteUserModal}
                overlayClassName='react-modal-overlay'
                className='delete-modal-content'
            >
                <Container>
                    <h1>Você tem certeza?</h1>
                    <div>
                        <p>
                            Digite seu e-mail e confirme sua escolha
                        </p>
                        <input 
                        type='text'
                        placeholder='e-mail'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="button" onClick={handleDeleteUser}>Confirmar</button>
                    <button type="button" className='delete-button' onClick={closeDeleteUserModal}><FiX size={24} color={'#7E7E7E'}/></button>
                </Container>
            </Modal>
    );
};