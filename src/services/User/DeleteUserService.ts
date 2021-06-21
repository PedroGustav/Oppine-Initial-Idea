import { getRepository } from "typeorm";
import AppError from "../../errors/AppError";
import User from "../../models/User";

interface RequestData{
    id: string;
}
export default class DeleteUserService{

    async execute({id}: RequestData){

        const usersRepository = getRepository(User);

        const checkUserExists = await usersRepository.findOne({
            where: {
                id,
            }
        });

        if(!checkUserExists){
            throw new AppError('Este Id não pertence a nenhum usuário', 404);

        }

        await usersRepository.delete( id );

        return "ok";
    }
}