import AppError from "@shared/errors/AppError";
import IUsersRepository from "../repositories/IUsersRepository";

interface RequestData{
    id: string;
}

//Resolver
export default class DeleteUserService{

    constructor(private usersRepository: IUsersRepository){}
    async execute({id}: RequestData){


        const checkUserExists = await this.usersRepository.findById(id);

        if(!checkUserExists){
            throw new AppError('Este Id não pertence a nenhum usuário', 404);

        }

    }
}

