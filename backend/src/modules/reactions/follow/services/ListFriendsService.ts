import IFollowsRepository from "../repositories/IFollowsRepository";

export default class ListFriendsService{
    constructor(private followsRepository: IFollowsRepository){}
    
    async execute(id: string){

        const friends = await this.followsRepository.listFriendsByUser(id);

        return friends;
    }
}