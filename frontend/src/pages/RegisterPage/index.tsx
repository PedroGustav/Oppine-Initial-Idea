import * as Yup from 'yup';
import { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInuput';
import { Button } from '../../components/Button';
import { FiArrowLeft } from 'react-icons/fi';
import getValidationErrors from '../../utils/getValidationErrors';
import { FormSection, Header, Main, ButtonSubmitDiv, LastDiv } from './styles';

import LogoImg from '../../assets/Logo.svg';
import People2Img from '../../assets/People2.svg';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';

interface RegisterData{
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export function RegisterPage(){
    const formRef = useRef<FormHandles>(null);
    const { signIn } = useAuth();
    const { addToast } = useToast();
    const history = useHistory();

    
    const handleSubmit = useCallback( async(data: RegisterData) => {
        
        formRef.current?.setErrors({});
        //Processo de validação de dados, utilizando yup.
        try{
            const schema = Yup.object().shape({
                name: Yup.string().required('Digite um nome válido'),
                email: Yup.string()
                    .required('O E-mail é obrigatório.')
                    .email('Digite um e-mail válido.'),
                password: Yup.string()
                    .min(6, 'Sua senha deve conter, no mínimo, 6 dígitos.')
                    .required('Digite uma senha'),
                password_confirmation: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
                    .required('A confirmação de senha é necessária')
                    
            })

            await schema.validate(data, {
                abortEarly: false
            });
            
            await api.post('/user', {
                name: data.name,
                email: data.email,
                password: data.password
            });

            await signIn({
                email: data.email,
                password: data.password,
            })
            

            history.push('/register-');



        }catch(err){
            if(err instanceof Yup.ValidationError){
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
            }
            
            else{
                addToast({
                    type: 'error',
                    title: 'Problema no cadastro.',
                    description: 'Aconteceu um problema ao se cadastrar, tente novamente.'
                })
            }
            
        }
    }, [addToast, history, signIn]);


    return(
        <>
            <Header>
                <div >
                    <Link to={'/login'}>
                        <FiArrowLeft/>  Fazer Login 
                    </Link>
                    <img src={LogoImg} alt="Oppine"/>
                </div>
            </Header>

            <Main>
                <img src={People2Img} alt="Girl and cellphone" />
                <FormSection>
                    <h2>Será um prazer te-lô conosco. Preencha os campos <br />
                    abaixo para concluir seu cadastro:</h2>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Nome Completo:</label>
                            <Input name="name" placeholder="Nome"/>
                        </div>
                        <div>
                            <label htmlFor="email">E-mail:</label>
                            <Input name="email" placeholder="exemplo@exemplo.com"/>
                        </div>
                        <div>
                            <label htmlFor="password">Senha:</label>
                            <PasswordInput haveRecuperation='false' name="password" placeholder="Defina uma senha:"/>
                        </div>
                        <LastDiv>
                            <PasswordInput name='password_confirmation' placeholder="Confirme sua senha:" haveRecuperation='false' ></PasswordInput>
                        </LastDiv>
                        <ButtonSubmitDiv>
                            <div>
                                <input type="checkbox" id="accept" />
                                <label htmlFor="accept">li e concordo com os <Link to={''}>termos de uso.</Link></label>
                            </div>
                            <Button type='submit'>Concluir</Button>
                        </ButtonSubmitDiv>
                    </Form>
                    
                </FormSection>
            </Main>
        </>
    );
}