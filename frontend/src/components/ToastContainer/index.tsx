import React from 'react';
import { ToastMessage } from '../../hooks/toast';
import { Toast } from './Toast';
import { Container } from './styles';

interface ToastContainerProps{
    messages: ToastMessage[];
}
export const ToastContainer: React.FC<ToastContainerProps> = ({messages}) => {

   
    return(
        <Container>
            {messages.map(message => (
            <Toast message={message}/>
            ))}
        </Container>
    );
}