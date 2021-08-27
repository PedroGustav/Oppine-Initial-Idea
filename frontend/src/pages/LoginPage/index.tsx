import { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInuput';
import { Button } from '../../components/Button';
import { Form } from '@unform/web';
import { Header, Main } from './styles';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../hooks/auth';

import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';


import People1Img from '../../assets/People1.svg';
import LogoImg from '../../assets/Logo.svg';
import { useToast } from '../../hooks/toast';

interface LoginData{
    email: string;
    password: string;
}

export function LoginPage(){
    const formRef = useRef<FormHandles>(null);
    const { signIn } = useAuth();
    const { addToast } = useToast();
    localStorage.removeItem('@Oppine:token');
    localStorage.removeItem('@Oppine:user');
    
    const handleSubmit = useCallback(async (datas: LoginData) => {
        
        formRef.current?.setErrors({});

        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .required('O e-mail é obrigatório.')
                    .email('Digite um e-mail válido.'),
                password: Yup.string()
                    .required('Digite uma senha.'),
            })

            await schema.validate(datas, {
                abortEarly: false
            });

            await signIn({
                email: datas.email,
                password: datas.password
            });
                
            
            
        } catch (err) {
            if (err instanceof Yup.ValidationError){
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);

            }else{
                addToast({
                    type: 'error',
                    title: 'Erro na autenticação',
                    description: 'Ocorreu um erro ao fazer login. Cheque suas credenciais.',
                });    
            }
            
        }
    },[signIn, addToast])


    return(
        <>
            <Header>
                <div>
                    <img src={LogoImg} alt="Oppine" />
                    <Link to={'/'}>
                        Voltar para tela incial
                    </Link>
                </div>
            </Header>

            
            <Main>
               <Form onSubmit={handleSubmit} ref={formRef}>
                    <h2>Que prazer ver você de novo!</h2>
                    <Input name='email' placeholder='E-mail:'/>
                    <PasswordInput name='password' haveRecuperation='true' placeholder='Senha:'/>
                    <Link to={''}>Esqueci minha senha</Link>
                    <Button type='submit' >Fazer Login</Button>
               </Form>
                <img src={People1Img} alt="Man on computer" />
            </Main>
        </>
    )
}


