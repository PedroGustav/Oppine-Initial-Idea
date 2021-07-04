import { InputHTMLAttributes, useState, useEffect, useRef } from 'react';
import { FiAlertCircle, FiEye, FiEyeOff } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container, Error } from './styles'; 

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    haveRecuperation: 'true' | 'false' ; 
}


export const PasswordInput: React.FC<PasswordInputProps> = ({ name, haveRecuperation,...rest }: PasswordInputProps) => {
    const [ isVisible, setIsVisible ] = useState(false);
    const [ isFocused, setIsFocused ] = useState(false);
    const type = isVisible ? 'text' : 'password';
    const inputRef = useRef(null);
    const { fieldName, defaultValue, error, registerField } = useField(name);


    
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path:'value',
        })
    }, [fieldName, registerField]);
    
    return(

        <Container isFocused={isFocused} isErrored={!!error}>
        <button  type="button" onClick={() => setIsVisible(!isVisible)}>{isVisible ?  <FiEyeOff color={'#14CC60'}   /> : <FiEye />}</button>
        <input
            defaultValue={defaultValue}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)} 
            {...rest} 
            type={type} 
            ref={inputRef}
        />
            {error && 
            <Error title={error}>
                <FiAlertCircle color={'#DD3030'} size={20}/>    
            </Error>}
        
        </Container>
    );
}