import UsersRepository from "@modules/users/infra/typeorm/repositories/UsersRepository";
import AppError from "@shared/errors/AppError";
import IFollowsRepository from "../repositories/IFollowsRepository";

interface Request{
    id_user: string;
    id_user_delete: string;
}

export default class DeleteFollowService{
    private usersRepository = new UsersRepository();
    constructor(private followsRepository: IFollowsRepository){}

    async execute( {id_user, id_user_delete}: Request ){
        

        const checkUserExists = await this.usersRepository.findById(id_user_delete);

        if(!checkUserExists){
            throw new AppError('não existe nenhum usuário com este Id.', 404);
        }

        const followsSended = await this.followsRepository.listByUserIdSend(id_user);

        const followsReceived = await this.followsRepository.listByUserIdReceive(id_user);

        for(var i = 0; i < followsSended.length; i++){
            if(followsSended[i].id_user_receive == id_user_delete){
                console.log(followsSended[i]);
                const response = await this.followsRepository.delete(followsSended[i].id);
                
                return response;
            }
        }

        for(var i = 0; i < followsReceived.length; i++){
            if(followsReceived[i].id_user_send == id_user_delete){
                const response = await this.followsRepository.delete(followsReceived[i].id);

                return response;
            }
        }

        throw new AppError('Essa amizade não existe!', 404);
        
    }
}