import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { useField } from '@unform/core';

import { Container, Error } from './styles';
import { FiAlertCircle } from "react-icons/fi";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
}

export const Input: React.FC<InputProps> = ({name, ...rest}) => {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, error, registerField } = useField(name);
    const [ isFocused, setIsFocused ] = useState(false);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path:'value',
        })
    }, [fieldName, registerField]);
    
    return(
        <Container isErrored={!!error} isFocused={isFocused}>
            <input 
                ref ={inputRef} 
                defaultValue={defaultValue}
                onFocus={() => setIsFocused(true)}
                onBlur={ () => setIsFocused(false)}
                {...rest}  
                />
            {error &&
            <Error title={error}>
                <FiAlertCircle color={'#DD3030'} size={20}/>
            
            </Error>}
        </Container>
    );
}