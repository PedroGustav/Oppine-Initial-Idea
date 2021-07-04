import AppError from "@shared/errors/AppError";
import IUsersRepository from "../repositories/IUsersRepository";

export default class FindUserByUsernameService{
    constructor(private usersRepository: IUsersRepository){}

    async execute(username: string){

        const user  = await this.usersRepository.findByUsername(username);

        if(!user){
            
            throw new AppError('Não existe nenhum usuário com este username.', 404);
        }

        return user;
    }
}