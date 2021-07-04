import { hash } from 'bcryptjs';
import AppError from "@shared/errors/AppError";
import IUsersRepository from '../repositories/IUsersRepository';
import ICreateUserDTO from '../dtos/ICreateUserDTO';


export default class CreateUserService{
    constructor( private usersRepository: IUsersRepository){
         
    }

    async execute({ name, email, password }: ICreateUserDTO){
        
        const regex = /[0-9]/;
        const testNameIsInvalid = regex.test(name);


        if(name.length == 0){

            throw new AppError('Insira um nome');
        }
        
        if(testNameIsInvalid){
            
            throw new AppError('Insira um nome válido, com apenas letras.', 400);

        }
        
        const checkEmailIsValid = await this.usersRepository.findByEmail(email);

        if(checkEmailIsValid){
            throw new AppError('Este Email já está sendo utilizado por outro usuário', 400);
        }

        if(password.length < 8){
            throw  new AppError('Insira uma senha com pelo menos 8 caracteres', 400);
        }

        const hashedPassword = await hash(password, 8);
;
        const newUser = await this.usersRepository.create({
            name,
            email,
            password: hashedPassword,
        });

        return newUser;
    }
}