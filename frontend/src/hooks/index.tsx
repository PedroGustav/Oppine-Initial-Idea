import React from 'react';

import { AuthProvider } from './auth';
import { PostProvider } from './post';
import { ToastProvider } from './toast';


export const AppProvider: React.FC = ({children}) => {
    return(
        <ToastProvider>
            <AuthProvider>
                <PostProvider>
                    {children}
                </PostProvider>
            </AuthProvider>
        </ToastProvider>
    );
};