import AppError from "@shared/errors/AppError";
import IFollowsRepository from "../repositories/IFollowsRepository";

export default class ListUserFollowsService{
    constructor(private followsRepository: IFollowsRepository){}

    async execute(id_user: string){

        const followsSended = await this.followsRepository.listByUserIdSend(id_user);
        const followsReceived = await this.followsRepository.listByUserIdReceive(id_user); 

        const follows = {
            sended: followsSended,
            received: followsReceived
        }

        return follows;

    }
}