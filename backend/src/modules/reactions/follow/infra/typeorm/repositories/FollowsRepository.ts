import IFollowsRepository from "@modules/reactions/follow/repositories/IFollowsRepository";
import { getRepository, Repository } from "typeorm";
import Follow from "../entities/Follow";

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

        const follows = await this.ormRepository.find({ where: { id_user_send }});

        return follows;

    }

    public async listByUserIdReceive(id_user_receive: string): Promise<Follow[]>{

        const follows = await this.ormRepository.find({ where: { id_user_receive }});

        return follows;

    }
}