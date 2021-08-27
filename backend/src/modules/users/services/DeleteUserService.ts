import AppError from "@shared/errors/AppError";
import IUsersRepository from "../repositories/IUsersRepository";

interface RequestData{
    id_user: string;
}

//Resolver
export default class DeleteUserService{

    constructor(private usersRepository: IUsersRepository){}
    async execute({id_user}: RequestData){

        const checkUserExists = await this.usersRepository.findById(id_user);

        if(!checkUserExists){
            throw new AppError('Este Id não pertence a nenhum usuário', 404);

        }

        const response = await this.usersRepository.delete(id_user);

    }
}

