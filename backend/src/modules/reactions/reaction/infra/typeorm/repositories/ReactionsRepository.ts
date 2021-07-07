import ICreateReactionDTO from "@modules/reactions/reaction/dtos/ICreateReactionDTO";
import IReactionsRepoository from "@modules/reactions/reaction/repositories/IReactionsRepository";
import { getRepository, Repository } from "typeorm";
import Reaction from "../entities/Reaction";

interface countReactionsData{
    id_post: string;
    type: string;
} 
export default class ReactionsRepository implements IReactionsRepoository{
    private ormRepository: Repository<Reaction>
    constructor(){
        this.ormRepository = getRepository(Reaction);
    }

    public async create({id_post, id_user, type}: ICreateReactionDTO): Promise<Reaction>{

        const reaction = this.ormRepository.create({
            id_post,
            id_user,
            type
        });

        await this.ormRepository.save(reaction);

        return reaction;

    }

    public async count({id_post, type}: countReactionsData): Promise<number>{

        const [, reactions] = await this.ormRepository.findAndCount({where:{ type, id_post}});

        return reactions;
    }

    public async delete(id: string): Promise<string>{

        await this.ormRepository.delete(id);

        return "ok";
    }
}