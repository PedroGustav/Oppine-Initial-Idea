import Modal from 'react-modal';
import { Container } from './styles';
import { Button } from '../Button';
import { FiX } from 'react-icons/fi';
import { useCallback, useState } from 'react';
import { usePosts } from '../../hooks/post';
import { useToast } from '../../hooks/toast';
interface NewPostModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
    onClickClose: () => void;
}

export const NewPostModal: React.FC<NewPostModalProps> = ({isOpen, onRequestClose}) => {

    const [ description, setDescription ] = useState('');

    const { createPost, CloseModal } = usePosts();
    const { addToast } = useToast();

    const handleCreateNewPost = useCallback(() => {
        const data = new FormData();
        data.append('description', description);
        console.log(data.values);
        
        createPost(data);
        setDescription('');
        CloseModal();
        addToast({
            type: 'success',
            title: 'Publicado com sucesso!'
        });
        
    }, [description, CloseModal, addToast, createPost]);
    return(
        
        
            <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
            >
                <Container>
                    <h1>Nova Publicação</h1>
                    <textarea 
                        placeholder="o que você está pensando?"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <div>
                        <Button onClick={onRequestClose} className='close-button'><FiX size={24} color={'#EE1515'}/>Cancelar</Button>
                        <Button onClick={handleCreateNewPost}>Publicar</Button>
                    </div>    
                </Container>
                
            </Modal>    
        
        
    )
}