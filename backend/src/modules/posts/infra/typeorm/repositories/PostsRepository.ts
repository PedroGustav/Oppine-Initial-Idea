import ICreatePostDTO from "@modules/posts/dtos/ICreatePostDTO";
import IPostsRepository from "@modules/posts/repositories/IPostsRepository";
import { getRepository, Repository } from "typeorm";
import Post from "../entities/Post";

export default class PostsRepository implements IPostsRepository{
    private ormRepository: Repository<Post>;

    constructor(){
        this.ormRepository = getRepository(Post);
    }

    public async create({id_user, description, image}: ICreatePostDTO): Promise<Post>{

        const post = this.ormRepository.create({
            description,
            id_user,
            image
        })

        await this.ormRepository.save(post);

        return post;
    }

    public async save(post: Post){

        return await this.ormRepository.save(post);
    }

    public async listByUserId(id_user: string): Promise<Post[]>{

        const posts = await this.ormRepository.find({where: { id_user}, select: ['id','id_user','description', 'image', 'created_at', 'updated_at']});

        return posts;
    }

    public async findById(id: string): Promise<Post | undefined>{

        const post = await this.ormRepository.findOne(id);

        return post;
    }
}