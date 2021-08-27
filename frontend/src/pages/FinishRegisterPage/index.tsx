import * as Yup from 'yup';
import { ChangeEvent, useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { FiArrowLeft } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import getValidationErrors from '../../utils/getValidationErrors';
import { FormSection, Header, Main, UpdateUserNameAndAvatarDiv } from './styles';

import LogoImg from '../../assets/Logo.svg';
import People2Img from '../../assets/People2.svg';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';

interface RegisterData{
    username: string;
    
}

export function FinishRegisterPage(){
    const formRef = useRef<FormHandles>(null);
    const { addToast } = useToast();
    const history = useHistory();
    const { user, updateUser } = useAuth();
    const hasAvatar = user.avatar;

    const handleUpdateAvatar = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        
        if(e.target.files){
            console.log(e.target.files[0]);

            const data = new FormData();
            data.append('avatar', e.target.files[0]);

            api.patch('/user/avatar', data).then((response) => {

                updateUser(response.data);

                
            })
        }
        

    }, [updateUser]);

    const handleSubmit = useCallback( async(data: RegisterData) => {
        
        formRef.current?.setErrors({});
        //Processo de validação de dados, utilizando yup.
        try{

            const schema = Yup.object().shape({
                username: Yup.string()
                .required('Digite um username válido'),
            })

            await schema.validate(data, {
                abortEarly: false
            });

            await api.patch('/user/username', {
                username: data.username
            }).then(response => updateUser(response.data));
            
            

            addToast({
                type: 'success',
                title: 'Cadastro concluído com sucesso.',
                description: 'Agora é só usar!'
            });

            history.push('/dashboard');



        }catch(err){
            if(err instanceof Yup.ValidationError){
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
            }
            
            else{
                console.log(err);
                addToast({
                    type: 'error',
                    title: 'Problema no cadastro.',
                    description: 'Aconteceu um problema ao se cadastrar, tente novamente.'
                })
            }
            
        }
    }, [addToast, history]);


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
                    
                    <UpdateUserNameAndAvatarDiv>
                        <label htmlFor="avatar">{ hasAvatar ?
                        <img src={`http://localhost:3333/files/${hasAvatar}`} alt={user.name} />  : <FaUserCircle size={225} color={'#E6E6E6'}/>}</label>
                        <input type="file" id="avatar" onChange={handleUpdateAvatar}/>
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <label htmlFor="username">Defina um username:</label>
                            <Input
                                name='username'
                                type='string'
                                placeholder='Ex: joao_12'
                            />
                            <Button type='submit'>Concluir</Button>
                        </Form>
                        
                    </UpdateUserNameAndAvatarDiv>
                </FormSection>

            </Main>
        </>
    );
}