import IFollowsRepository from "@modules/reactions/follow/repositories/IFollowsRepository";
import { getRepository, Repository } from "typeorm";
import Follow from "../entities/Follow";
import { Friend } from '../../../dtos/IFriendDTO';

interface Request{
    id_user_send: string;
    id_user_receive: string;
}


export default class FollowsRepository implements IFollowsRepository{
    private ormRepository: Repository<Follow>;

    constructor(){
        this.ormRepository = getRepository(Follow);
    }

    public async create({ id_user_receive, id_user_send }: Request): Promise<Follow> {
        
        const follow = this.ormRepository.create({
            id_user_send,
            id_user_receive,
        });

        return await this.ormRepository.save(follow);
    }

    public async findById(id: string): Promise<Follow | undefined>{

        const follow = await this.ormRepository.findOne(id);
        
        return follow;
    }

    public async listByUserIdSend(id_user_send: string): Promise<Follow[]>{

        const follows = await this.ormRepository.find({ where: { id_user_send }, relations: ['user_receive'], select: ['id', 'created_at', 'state']});

        return follows;

    }

    public async listByUserIdReceive(id_user_receive: string): Promise<Follow[]>{

        const follows = await this.ormRepository.find({ where: { id_user_receive }, relations: ['user_send'], select: ['id', 'created_at', 'state']});

        return follows;

    }

    public async delete(id: string): Promise<object>{

        const response = this.ormRepository.delete(id);
        
        return { message: response};
    }

    public async listFriendsByUser(id: string): Promise<Friend[]>{
        const friends: Friend[] = [];
        const followsSended = await this.ormRepository.find({where: { id_user_send: id}, relations: ['user_receive'], select: [ 'id','user_receive',]})

        for(var i = 0; i < followsSended.length; i++){
            friends.push(
                {
                    name: followsSended[i].user_receive.name,
                    id_user: followsSended[i].user_receive.id,
                    avatar: followsSended[i].user_receive.avatar,
                    username: followsSended[i].user_receive.username,
                }
            )
        }
        
        const followsReceived = await this.ormRepository.find({where: { id_user_receive: id}, relations: ['user_send'], select: ['id', 'user_send']})

        for(var i = 0; i < followsReceived.length; i++){
            friends.push(
                {
                    name: followsReceived[i].user_send.name,
                    id_user: followsReceived[i].user_send.id,
                    avatar: followsReceived[i].user_send.avatar,
                    username: followsReceived[i].user_send.username
                }
            )
        }
        return friends;
    }
}