import React from 'react';
import { ToastMessage, useToast } from '../../hooks/toast';
import { Toast } from './Toast';
import { Container } from './styles';
import { animated, config, useTransition } from 'react-spring';

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