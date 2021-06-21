import { getRepository } from "typeorm";
import { hash } from 'bcryptjs';
import AppError from "../../errors/AppError";
import User from "../../models/User";

interface RequestData{
    name: string;
    username: string;
    email: string;
    password: string;
}

export default class CreateUserService{

    async execute({ name, username, email, password }: RequestData){
        
        const usersRepository = getRepository(User);
        const regex = /[0-9]/;
        const testNameIsInvalid = regex.test(name);

        if(testNameIsInvalid){
            
            throw new AppError('Insira um nome válido, com apenas letras.', 400);

        }

        const checkUsernameIsValid = await usersRepository.findOne({
            where: {
                username,
            }
        })

        if(checkUsernameIsValid){
             throw new AppError('Este Username já está sendo utilizado por outro usuário.', 400);
        }
        
        const checkEmailIsValid = await usersRepository.findOne({
            where: {
                email,
            }
        })

        if(checkEmailIsValid){
            throw new AppError('Este Email já está sendo utilizado por outro usuário', 400);
        }

        if(password.length < 8){
            throw  new AppError('Insira uma senha com pelo menos 8 caracteres', 400);
        }

        const hashedPassword = await hash(password, 8);
;
        const newUser = usersRepository.create({
            name,
            username,
            email,
            password: hashedPassword,
        });

        await usersRepository.save(newUser);

        return newUser;
    }
}