import AppError from "@shared/errors/AppError";
import IUsersRepository from "../repositories/IUsersRepository";

interface Request{
    id_user: string;

    name: string;
}

export default class UpdateNameService{
    constructor(private usersRepository: IUsersRepository){}

    async execute({id_user, name}: Request){

        const user = await this.usersRepository.findById(id_user);
        const names = name.split(' ');
        if(!user){
            throw new AppError('Não existe nenhum usuário com este Id!', 404);
        }
        
        const regex = /[0-9]/;
        const testNameIsInvalid = regex.test(name);

        if(testNameIsInvalid){

            throw new AppError('Insira um nome válido', 400);
        }
        
        if(name.length == 0){
            throw new AppError('Insira um nome!');
        }

        if(names.length < 2){
            throw new AppError('Insira mais de um nome!');
        }

        user.name = name;

        await this.usersRepository.save(user);

        return user;



    }
}