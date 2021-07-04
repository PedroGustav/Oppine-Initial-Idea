import React from 'react';
import { Container } from './styles';

interface TooltipProps{
    title:string;
    clasName?:string;
}

export const Tooltip: React.FC<TooltipProps>  = ({title, clasName, children}) =>{

    return(
        <Container>
            <span>{title}</span>
            {children}
        </Container>
    );
} 