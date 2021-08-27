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

            throw new AppError('Não existe nenhum usuário com este username.', 404);
        }

        if(checkUserSendExists.username === username){

            throw new AppError('O usuário não pode fazer amizade com ele mesmo!', 401);

        }
        
        const followsSended = await this.followsRepository.listByUserIdSend(id_user_send);

        for(var i = 0; i < followsSended.length; i++){
            if(followsSended[i].user_receive.id === user.id){
                throw new AppError('Esta amizade já existe!', 401);
            }
        }

        const followsReceived = await this.followsRepository.listByUserIdSend(user.id);

        for(var i = 0; i < followsReceived.length; i++){

            if(followsReceived[i].user_receive.id === id_user_send){
                throw new AppError('Esta amizade já existe!', 401);
            }
        }
        const follow = await this.followsRepository.create({
            id_user_send,
            id_user_receive: user.id
        });

        return follow;
    }
}