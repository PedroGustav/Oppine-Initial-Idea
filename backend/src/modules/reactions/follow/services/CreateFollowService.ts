import UsersRepository from "@modules/users/infra/typeorm/repositories/UsersRepository";
import AppError from "@shared/errors/AppError";
import IFollowsRepository from "../repositories/IFollowsRepository";

interface Request{
    id_user_send: string;
    username: string;
}

export default class CreateFollowService{
    private usersRepository = new UsersRepository();
    constructor(private followsRepository: IFollowsRepository){}

    async execute({id_user_send, username}: Request){
        
        //Verificar se os id's são válidos [x]
        //Verificar se essa conexão já existe [x]
        //Criar a conexão entre os usuários [x]

        const checkUserSendExists = await this.usersRepository.findById(id_user_send);

        if(!checkUserSendExists){

            throw new AppError('O Id do usuário que está enviando a solicitação de amizade é inválido', 404);
        }

        const user = await this.usersRepository.findByUsername(username);

        if(!user){

            throw new AppError('O Id do usuário que está recebendo a solicitação de amizade é inválido', 404);
        }

        

        const followsSend = await this.followsRepository.listByUserIdSend(id_user_send);

        for(var i = 0; i < followsSend.length; i ++){
            if (followsSend[i].id_user_receive == user.id){
                throw new AppError('Essa Amizade já existe!')
            } 
        }

        const followsReceive = await this.followsRepository.listByUserIdReceive(id_user_send);

        for(var i = 0; i < followsReceive.length; i ++){
            if (followsReceive[i].id_user_send == user.id){
                throw new AppError('Essa Amizade já existe!')
            } 
        }

        const follow = await this.followsRepository.create({
            id_user_send,
            id_user_receive: user.id
        });

        return follow;
    }
}