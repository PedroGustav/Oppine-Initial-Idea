import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';
import { useHistory } from 'react-router';
import { useToast } from './toast';

interface SignInProps{
    email: string;
    password: string;
}

export interface User{
    id: string;
    name: string;
    avatar?: string;
    username: string;
    created_at: string;
    email: string;
}
interface AuthContextState{
    user: User;
    signIn: ({email, password}: SignInProps) => Promise<void>;
    signOut: () => void;
    updateUser: (user: User) => void;
    deleteUser: (email: string) => void;
    deleteUserModalIsOpen: boolean;
    openDeleteUserModal: () => void;
    closeDeleteUserModal: () => void;
}

interface AuthState{
    token: string;
    user: User;
}

const  authContext = createContext<AuthContextState>({} as AuthContextState);


export const AuthProvider: React.FC = ({children}) => {
    const { addToast } = useToast();
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@Oppine:token');
        const user = localStorage.getItem('@Oppine:user');
        if(token && user){
            
            api.defaults.headers.authorization = `Bearer ${token}`
            return { token, user: JSON.parse(user)};

        }


        return {} as AuthState;

    });

    const [ deleteUserModalIsOpen, setDeletesUserModalIsOpen ] = useState(false);

    const history = useHistory();

    const signIn = useCallback(async({email, password}) => {
        const response = await api.post('/sessions', {email, password});
        console.log(response.data.user);
        const { token, user } = response.data;
        

        localStorage.setItem('@Oppine:token', token);
        localStorage.setItem('@Oppine:user', JSON.stringify(user));

        api.defaults.headers.authorization = `Bearer ${token}`
        
        setData({token, user});

        

    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('@Oppine:token');
        localStorage.removeItem('@Oppine:user');

        setData({} as AuthState);
    }, []);
    
    const updateUser = useCallback((user: User) => {

        localStorage.setItem('@Oppine:user', JSON.stringify(user));

        setData({
            token: data.token,
            user,
        })


    }, [setData, data.token]);
 
    const deleteUser = useCallback((email: string) => {
        if(email === data.user.email){
                api.delete('/user');

                signOut();

                history.push('/login');

                addToast({
                    type: 'success',
                    title: 'Deleção de conta concluída',
                    description: ':('
                })
            
        }else{
            addToast({
                type: 'error',
                title: 'E-mail incorreto',
                description: 'Esse não é o seu e-mail!'
            })
        }
    }, []); 

    const openDeleteUserModal = useCallback(() => {
        setDeletesUserModalIsOpen(true);
    }, []);

    const closeDeleteUserModal = useCallback(() => {
        setDeletesUserModalIsOpen(false);
    }, []);

    return(
        <authContext.Provider value={{user: data.user, signIn, signOut, updateUser, deleteUser, openDeleteUserModal, closeDeleteUserModal, deleteUserModalIsOpen }}>
            {children}
        </authContext.Provider>
    );
}

export function useAuth(): AuthContextState {
    const context = useContext(authContext);

    if(!context){
        throw new Error('useAuth só pode ser usado juntamente com o AuthProvider.');
    }

    return context;
}