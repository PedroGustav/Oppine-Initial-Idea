import React, { createContext, useCallback, useContext, useState } from 'react';
import { ToastContainer } from '../components/ToastContainer';
import { uuid } from 'uuidv4';
interface ToastContextData{
    addToast(message: Omit<ToastMessage, 'id'>): void;
    removeToast(id: string): void;
}

export interface ToastMessage{
    id: string;
    type?: 'success' | 'info' | 'error';
    title: string;
    description?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);


//Aqui onde ficam todas as funções disponíveis no contexto
export const ToastProvider: React.FC = ({children}) => { 
    const [ messages, setMessages ] = useState<ToastMessage[]>([]);


    const addToast = useCallback(({title, type, description}: Omit< ToastMessage, 'id'>) => {
        const id = uuid();
        
        const toast = {
            id,
            type,
            title,
            description
        };

        setMessages((oldMessages) => [...oldMessages, toast]);
    }, []);

    const removeToast = useCallback((id: string) => {
        setMessages( state => state.filter(message => message.id !== id));
    }, []);
    
    return(
        <ToastContext.Provider value={{ addToast, removeToast}}>
            <ToastContainer messages={messages}/>
            {children}
        </ToastContext.Provider>
    );
}

export function useToast(): ToastContextData{
    const context = useContext(ToastContext);

    if(!context){
        throw new Error('O useToast só pode ser utilizado com o ToastProvider.');
    }

    return context;
}