import * as Yup from 'yup';
import { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
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

export function RegisterPage(){
    const formRef = useRef<FormHandles>(null);

    
     const handleSubmit = useCallback( async(data: object) => {
        
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


        }catch(err){

            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
    }, []);


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
                                <label htmlFor="accept">li e concordo com os <a>termos de uso.</a></label>
                            </div>
                            <Button type='submit'>Concluir</Button>
                        </ButtonSubmitDiv>
                    </Form>
                    
                </FormSection>
            </Main>
        </>
    );
}