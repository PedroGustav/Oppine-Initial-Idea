import AppError from "@shared/errors/AppError";
import IUsersRepository from "../repositories/IUsersRepository";


interface Request{
    username: string;
    id_user: string;
}

export default class UpdateUsernameService{

    constructor(private usersRepository: IUsersRepository){}

    async execute({username, id_user}: Request){

        const user = await this.usersRepository.findById(id_user);

        if(!user){
            
            throw new AppError('Não existe nenhum usuário com este ID', 404);

        }

        if(username.length == 0){

            throw new AppError('Insira um username válido.', 400);
        } 

        const regex = /\.$|\s|\W/g;
        const testUsernameIsValid = regex.test(username);
        
        if(testUsernameIsValid){
            throw new AppError("Seu username não pode conter espaços em branco, nem '.' no final.", 400);
        }

        const testUserNameIsUnique = await this.usersRepository.findByUsername(username);

        if(testUserNameIsUnique){

            throw new AppError("Esse username já está sendo utilizado por outro usuário.", 400);
        }

        user.username = username.toLowerCase();

        await this.usersRepository.save(user);

        return user;
    }
}