import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface SignInProps{
    email: string;
    password: string;
}

interface AuthContextState{
    user: object;
    signIn: ({email, password}: SignInProps) => Promise<void>;
    signOut: () => void;
}

interface AuthState{
    token: string;
    user: object;   
}

const  authContext = createContext<AuthContextState>({} as AuthContextState);


export const AuthProvider: React.FC = ({children}) => {

    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@Oppine:token');
        const user = localStorage.getItem('@Oppine:user');

        if(token && user){
            return { token, user: JSON.parse(user)};
        }

        return {} as AuthState;

    });

    const signIn = useCallback(async({email, password}) => {
        const response = await api.post('/sessions', {email, password});
        
        const { token, user } = response.data;

        localStorage.setItem('@Oppine:token', token);
        localStorage.setItem('@Oppine:user', JSON.stringify(user));

        setData({token, user})
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('@Oppine:token');
        localStorage.removeItem('@Oppine:token');

        setData({} as AuthState);
    }, []);
    
    return(
        <authContext.Provider value={{user: data.user, signIn, signOut }}>
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